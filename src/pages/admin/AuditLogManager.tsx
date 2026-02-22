import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { format } from "date-fns";
import { Shield, AlertTriangle, Info, CheckCircle, Trash2, Edit, Plus, LogIn } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const actionIcons: Record<string, any> = {
  create: Plus,
  update: Edit,
  delete: Trash2,
  login: LogIn,
};

const actionColors: Record<string, string> = {
  create: "bg-green-500/10 text-green-600 dark:text-green-400",
  update: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  delete: "bg-red-500/10 text-red-600 dark:text-red-400",
  login: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
};

export default function AuditLogManager() {
  const [filterAction, setFilterAction] = useState<string>("all");

  const { data: logs, isLoading } = useQuery({
    queryKey: ["admin-audit-logs", filterAction],
    queryFn: async () => {
      let query = supabase
        .from("audit_logs")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(200);
      if (filterAction !== "all") query = query.eq("action", filterAction);
      const { data, error } = await query;
      if (error) throw error;
      return data ?? [];
    },
  });

  const actionCounts = logs?.reduce<Record<string, number>>((acc, l) => {
    acc[l.action] = (acc[l.action] || 0) + 1;
    return acc;
  }, {}) ?? {};

  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground flex items-center gap-2">
            <Shield size={22} className="text-primary" /> Audit & Security Log
          </h1>
          <p className="text-sm text-muted-foreground mt-1">Track all administrative actions and security events</p>
        </div>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Total Actions", count: logs?.length ?? 0, icon: Info, color: "text-blue-500" },
          { label: "Creates", count: actionCounts["create"] ?? 0, icon: CheckCircle, color: "text-green-500" },
          { label: "Updates", count: actionCounts["update"] ?? 0, icon: Edit, color: "text-orange-500" },
          { label: "Deletes", count: actionCounts["delete"] ?? 0, icon: AlertTriangle, color: "text-red-500" },
        ].map(s => (
          <div key={s.label} className="glass-card p-4">
            <div className="flex items-center gap-2 mb-1">
              <s.icon size={14} className={s.color} />
              <span className="text-xs text-muted-foreground">{s.label}</span>
            </div>
            <p className="text-xl font-display font-bold text-foreground">{s.count}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex gap-1 mb-4 bg-muted/50 rounded-lg p-1 w-fit">
        {["all", "create", "update", "delete", "login"].map(a => (
          <button key={a} onClick={() => setFilterAction(a)} className={`px-3 py-1.5 text-xs font-semibold rounded-md capitalize transition-all ${filterAction === a ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}>
            {a}
          </button>
        ))}
      </div>

      {/* Log table */}
      <div className="glass-card overflow-hidden">
        {isLoading ? <p className="text-muted-foreground text-sm p-4">Loading...</p> : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Action</TableHead>
                <TableHead>Resource</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Details</TableHead>
                <TableHead>Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {logs?.map((l) => {
                const Icon = actionIcons[l.action] || Info;
                const colorClass = actionColors[l.action] || "bg-muted text-muted-foreground";
                return (
                  <TableRow key={l.id}>
                    <TableCell>
                      <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-semibold ${colorClass}`}>
                        <Icon size={10} /> {l.action}
                      </span>
                    </TableCell>
                    <TableCell className="text-xs">
                      <span className="font-medium text-foreground">{l.resource_type}</span>
                      {l.resource_id && <span className="text-muted-foreground ml-1">#{l.resource_id.slice(0, 8)}</span>}
                    </TableCell>
                    <TableCell className="text-xs text-muted-foreground">{l.user_email || "System"}</TableCell>
                    <TableCell className="text-xs text-muted-foreground max-w-[200px] truncate">
                      {l.details && Object.keys(l.details).length > 0 ? JSON.stringify(l.details) : "—"}
                    </TableCell>
                    <TableCell className="text-xs text-muted-foreground">{format(new Date(l.created_at), "MMM d, HH:mm:ss")}</TableCell>
                  </TableRow>
                );
              })}
              {(!logs || logs.length === 0) && (
                <TableRow><TableCell colSpan={5} className="text-center text-muted-foreground py-8">No audit events logged yet</TableCell></TableRow>
              )}
            </TableBody>
          </Table>
        )}
      </div>
    </AdminLayout>
  );
}
