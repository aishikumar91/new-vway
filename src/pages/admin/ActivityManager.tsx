import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { format } from "date-fns";
import { Monitor, Smartphone, Tablet, Globe, MapPin, Clock, Eye, Users, TrendingUp, BarChart3 } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const DeviceIcon = ({ type }: { type: string }) => {
  if (type === "mobile") return <Smartphone size={14} className="text-blue-500" />;
  if (type === "tablet") return <Tablet size={14} className="text-purple-500" />;
  return <Monitor size={14} className="text-green-500" />;
};

export default function ActivityManager() {
  const [timeRange, setTimeRange] = useState<"24h" | "7d" | "30d" | "all">("7d");

  const getDateFilter = () => {
    const now = new Date();
    if (timeRange === "24h") return new Date(now.getTime() - 86400000).toISOString();
    if (timeRange === "7d") return new Date(now.getTime() - 604800000).toISOString();
    if (timeRange === "30d") return new Date(now.getTime() - 2592000000).toISOString();
    return null;
  };

  const { data: logs, isLoading } = useQuery({
    queryKey: ["admin-activity", timeRange],
    queryFn: async () => {
      let query = supabase
        .from("activity_logs")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(200);
      const dateFilter = getDateFilter();
      if (dateFilter) query = query.gte("created_at", dateFilter);
      const { data, error } = await query;
      if (error) throw error;
      return data ?? [];
    },
  });

  const uniqueVisitors = new Set(logs?.map(l => l.session_id)).size;
  const uniqueCountries = new Set(logs?.filter(l => l.country).map(l => l.country)).size;
  const totalPageViews = logs?.length ?? 0;

  const topPages = logs?.reduce<Record<string, number>>((acc, l) => {
    acc[l.page_path] = (acc[l.page_path] || 0) + 1;
    return acc;
  }, {}) ?? {};

  const sortedPages = Object.entries(topPages).sort((a, b) => b[1] - a[1]).slice(0, 8);

  const deviceBreakdown = logs?.reduce<Record<string, number>>((acc, l) => {
    const d = l.device_type || "unknown";
    acc[d] = (acc[d] || 0) + 1;
    return acc;
  }, {}) ?? {};

  const topCountries = logs?.reduce<Record<string, number>>((acc, l) => {
    const c = l.country || "Unknown";
    acc[c] = (acc[c] || 0) + 1;
    return acc;
  }, {}) ?? {};

  const sortedCountries = Object.entries(topCountries).sort((a, b) => b[1] - a[1]).slice(0, 6);

  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display text-2xl font-bold text-foreground">Visitor Activity</h1>
        <div className="flex gap-1 bg-muted/50 rounded-lg p-1">
          {(["24h", "7d", "30d", "all"] as const).map(r => (
            <button key={r} onClick={() => setTimeRange(r)} className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${timeRange === r ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}>
              {r === "all" ? "All" : r}
            </button>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="glass-card p-5">
          <div className="flex items-center gap-2 mb-1"><Eye size={16} className="text-primary" /><span className="text-xs text-muted-foreground">Page Views</span></div>
          <p className="text-2xl font-display font-bold text-foreground">{totalPageViews}</p>
        </div>
        <div className="glass-card p-5">
          <div className="flex items-center gap-2 mb-1"><Users size={16} className="text-blue-500" /><span className="text-xs text-muted-foreground">Unique Visitors</span></div>
          <p className="text-2xl font-display font-bold text-foreground">{uniqueVisitors}</p>
        </div>
        <div className="glass-card p-5">
          <div className="flex items-center gap-2 mb-1"><Globe size={16} className="text-green-500" /><span className="text-xs text-muted-foreground">Countries</span></div>
          <p className="text-2xl font-display font-bold text-foreground">{uniqueCountries}</p>
        </div>
        <div className="glass-card p-5">
          <div className="flex items-center gap-2 mb-1"><TrendingUp size={16} className="text-orange-500" /><span className="text-xs text-muted-foreground">Avg Views/Visitor</span></div>
          <p className="text-2xl font-display font-bold text-foreground">{uniqueVisitors ? (totalPageViews / uniqueVisitors).toFixed(1) : "0"}</p>
        </div>
      </div>

      {/* Insights row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Top Pages */}
        <div className="glass-card p-5">
          <h3 className="font-display text-sm font-bold text-foreground mb-3 flex items-center gap-2"><BarChart3 size={14} className="text-primary" /> Top Pages</h3>
          <div className="space-y-2">
            {sortedPages.map(([path, count]) => (
              <div key={path} className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground truncate max-w-[160px]">{path}</span>
                <span className="text-xs font-semibold text-foreground">{count}</span>
              </div>
            ))}
            {sortedPages.length === 0 && <p className="text-xs text-muted-foreground">No data yet</p>}
          </div>
        </div>

        {/* Devices */}
        <div className="glass-card p-5">
          <h3 className="font-display text-sm font-bold text-foreground mb-3 flex items-center gap-2"><Monitor size={14} className="text-primary" /> Devices</h3>
          <div className="space-y-2">
            {Object.entries(deviceBreakdown).map(([device, count]) => (
              <div key={device} className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground capitalize flex items-center gap-1.5"><DeviceIcon type={device} /> {device}</span>
                <span className="text-xs font-semibold text-foreground">{count} ({totalPageViews ? ((count / totalPageViews) * 100).toFixed(0) : 0}%)</span>
              </div>
            ))}
            {Object.keys(deviceBreakdown).length === 0 && <p className="text-xs text-muted-foreground">No data yet</p>}
          </div>
        </div>

        {/* Countries */}
        <div className="glass-card p-5">
          <h3 className="font-display text-sm font-bold text-foreground mb-3 flex items-center gap-2"><MapPin size={14} className="text-primary" /> Top Countries</h3>
          <div className="space-y-2">
            {sortedCountries.map(([country, count]) => (
              <div key={country} className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{country}</span>
                <span className="text-xs font-semibold text-foreground">{count}</span>
              </div>
            ))}
            {sortedCountries.length === 0 && <p className="text-xs text-muted-foreground">No data yet</p>}
          </div>
        </div>
      </div>

      {/* Recent visits table */}
      <div className="glass-card overflow-hidden">
        <div className="p-4 border-b border-border/50">
          <h3 className="font-display text-sm font-bold text-foreground">Recent Visits</h3>
        </div>
        {isLoading ? <p className="text-muted-foreground text-sm p-4">Loading...</p> : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Page</TableHead>
                <TableHead>Device</TableHead>
                <TableHead>Browser</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {logs?.slice(0, 50).map((l) => (
                <TableRow key={l.id}>
                  <TableCell className="font-medium text-xs max-w-[200px] truncate">{l.page_path}</TableCell>
                  <TableCell><span className="flex items-center gap-1.5 text-xs"><DeviceIcon type={l.device_type || ""} /> {l.device_type}</span></TableCell>
                  <TableCell className="text-xs text-muted-foreground">{l.browser} / {l.os}</TableCell>
                  <TableCell className="text-xs text-muted-foreground">{l.city ? `${l.city}, ` : ""}{l.country || "—"}</TableCell>
                  <TableCell className="text-xs text-muted-foreground flex items-center gap-1"><Clock size={10} /> {format(new Date(l.created_at), "MMM d, HH:mm")}</TableCell>
                </TableRow>
              ))}
              {(!logs || logs.length === 0) && (
                <TableRow><TableCell colSpan={5} className="text-center text-muted-foreground py-8">No activity logged yet</TableCell></TableRow>
              )}
            </TableBody>
          </Table>
        )}
      </div>
    </AdminLayout>
  );
}
