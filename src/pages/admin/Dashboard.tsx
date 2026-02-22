import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { FileText, BookOpen, Calendar, Image, DollarSign, Users, Eye, Globe, TrendingUp, Mail, MessageSquare } from "lucide-react";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const StatCard = ({ icon: Icon, label, count, color = "text-primary", href }: { icon: any; label: string; count: number | string; color?: string; href?: string }) => {
  const content = (
    <div className="glass-card p-5 hover:border-primary/20 transition-colors group">
      <div className="flex items-center gap-2.5 mb-2">
        <div className="w-8 h-8 rounded-lg bg-muted/50 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
          <Icon className={`w-4 h-4 ${color}`} />
        </div>
        <span className="text-xs text-muted-foreground">{label}</span>
      </div>
      <p className="text-2xl font-display font-bold text-foreground">{count}</p>
    </div>
  );
  return href ? <Link to={href}>{content}</Link> : content;
};

export default function AdminDashboard() {
  const { data: pages } = useQuery({ queryKey: ["admin-pages"], queryFn: async () => { const { count } = await supabase.from("pages").select("*", { count: "exact", head: true }); return count ?? 0; } });
  const { data: posts } = useQuery({ queryKey: ["admin-posts"], queryFn: async () => { const { count } = await supabase.from("blog_posts").select("*", { count: "exact", head: true }); return count ?? 0; } });
  const { data: events } = useQuery({ queryKey: ["admin-events"], queryFn: async () => { const { count } = await supabase.from("events").select("*", { count: "exact", head: true }); return count ?? 0; } });
  const { data: gallery } = useQuery({ queryKey: ["admin-gallery"], queryFn: async () => { const { count } = await supabase.from("gallery_images").select("*", { count: "exact", head: true }); return count ?? 0; } });
  const { data: subscribers } = useQuery({ queryKey: ["admin-subs-count"], queryFn: async () => { const { count } = await supabase.from("newsletter_subscribers").select("*", { count: "exact", head: true }); return count ?? 0; } });
  const { data: contacts } = useQuery({ queryKey: ["admin-contacts-count"], queryFn: async () => { const { count } = await supabase.from("contact_submissions").select("*", { count: "exact", head: true }).eq("is_read", false); return count ?? 0; } });

  const { data: donations } = useQuery({
    queryKey: ["admin-donations-summary"],
    queryFn: async () => {
      const { data } = await supabase.from("donations").select("amount, status, created_at").eq("status", "confirmed");
      const total = data?.reduce((sum, d) => sum + Number(d.amount), 0) ?? 0;
      return { total, count: data?.length ?? 0 };
    },
  });

  const { data: recentActivity } = useQuery({
    queryKey: ["admin-recent-activity"],
    queryFn: async () => {
      const { data } = await supabase.from("activity_logs").select("page_path, country, device_type, created_at").order("created_at", { ascending: false }).limit(8);
      return data ?? [];
    },
  });

  const { data: visitStats } = useQuery({
    queryKey: ["admin-visit-stats"],
    queryFn: async () => {
      const since = new Date(Date.now() - 86400000 * 7).toISOString();
      const { data } = await supabase.from("activity_logs").select("session_id").gte("created_at", since);
      const uniqueVisitors = new Set(data?.map(d => d.session_id)).size;
      return { pageViews: data?.length ?? 0, uniqueVisitors };
    },
  });

  const { data: recentAudit } = useQuery({
    queryKey: ["admin-recent-audit"],
    queryFn: async () => {
      const { data } = await supabase.from("audit_logs").select("action, resource_type, user_email, created_at").order("created_at", { ascending: false }).limit(5);
      return data ?? [];
    },
  });

  return (
    <AdminLayout>
      <div className="mb-6">
        <h1 className="font-display text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-sm text-muted-foreground mt-1">Overview of your site's content and activity</p>
      </div>

      {/* Content stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 mb-8">
        <StatCard icon={FileText} label="Pages" count={pages ?? 0} href="/admin/pages" />
        <StatCard icon={BookOpen} label="Blog Posts" count={posts ?? 0} color="text-blue-500" href="/admin/blog" />
        <StatCard icon={Calendar} label="Events" count={events ?? 0} color="text-purple-500" href="/admin/events" />
        <StatCard icon={Image} label="Gallery" count={gallery ?? 0} color="text-green-500" href="/admin/gallery" />
        <StatCard icon={Mail} label="Subscribers" count={subscribers ?? 0} color="text-orange-500" href="/admin/newsletter" />
        <StatCard icon={MessageSquare} label="Unread Messages" count={contacts ?? 0} color="text-red-500" href="/admin/contact-submissions" />
      </div>

      {/* Visitor + Donation stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        <StatCard icon={Eye} label="Page Views (7d)" count={visitStats?.pageViews ?? 0} color="text-indigo-500" href="/admin/activity" />
        <StatCard icon={Users} label="Unique Visitors (7d)" count={visitStats?.uniqueVisitors ?? 0} color="text-cyan-500" href="/admin/activity" />
        <StatCard icon={DollarSign} label="Total Donations" count={`₦${(donations?.total ?? 0).toLocaleString()}`} color="text-emerald-500" href="/admin/donations" />
        <StatCard icon={TrendingUp} label="Confirmed Donations" count={donations?.count ?? 0} color="text-amber-500" href="/admin/donations" />
      </div>

      {/* Recent activity panels */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Recent visitors */}
        <div className="glass-card p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display text-sm font-bold text-foreground flex items-center gap-2"><Globe size={14} className="text-primary" /> Recent Visitors</h3>
            <Link to="/admin/activity" className="text-xs text-primary hover:underline">View all</Link>
          </div>
          <div className="space-y-3">
            {recentActivity?.map((a, i) => (
              <div key={i} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-foreground truncate max-w-[180px]">{a.page_path}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <span>{a.country || "—"}</span>
                  <span>{format(new Date(a.created_at), "HH:mm")}</span>
                </div>
              </div>
            ))}
            {(!recentActivity || recentActivity.length === 0) && (
              <p className="text-xs text-muted-foreground">No visitor data yet. Activity will appear once the tracking tables are created in Supabase.</p>
            )}
          </div>
        </div>

        {/* Recent audit log */}
        <div className="glass-card p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display text-sm font-bold text-foreground flex items-center gap-2"><TrendingUp size={14} className="text-primary" /> Recent Admin Actions</h3>
            <Link to="/admin/audit" className="text-xs text-primary hover:underline">View all</Link>
          </div>
          <div className="space-y-3">
            {recentAudit?.map((a, i) => (
              <div key={i} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold uppercase ${a.action === "create" ? "bg-green-500/10 text-green-600 dark:text-green-400" : a.action === "delete" ? "bg-red-500/10 text-red-600 dark:text-red-400" : "bg-blue-500/10 text-blue-600 dark:text-blue-400"}`}>{a.action}</span>
                  <span className="font-medium text-foreground">{a.resource_type}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <span>{a.user_email?.split("@")[0] || "—"}</span>
                  <span>{format(new Date(a.created_at), "HH:mm")}</span>
                </div>
              </div>
            ))}
            {(!recentAudit || recentAudit.length === 0) && (
              <p className="text-xs text-muted-foreground">No audit events yet. Actions will be logged once the audit tables are created in Supabase.</p>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
