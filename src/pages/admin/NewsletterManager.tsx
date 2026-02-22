import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { toast } from "sonner";
import { format } from "date-fns";
import { Copy } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function NewsletterManager() {
  const qc = useQueryClient();

  const { data: subscribers, isLoading } = useQuery({
    queryKey: ["admin-newsletter"],
    queryFn: async () => {
      const { data, error } = await supabase.from("newsletter_subscribers").select("*").order("subscribed_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const toggleActive = useMutation({
    mutationFn: async ({ id, is_active }: { id: string; is_active: boolean }) => {
      const { error } = await supabase.from("newsletter_subscribers").update({ is_active }).eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => { qc.invalidateQueries({ queryKey: ["admin-newsletter"] }); toast.success("Updated"); },
    onError: (e: any) => toast.error(e.message),
  });

  const copyEmails = () => {
    const emails = subscribers?.filter(s => s.is_active).map(s => s.email).join(", ") || "";
    navigator.clipboard.writeText(emails);
    toast.success(`${subscribers?.filter(s => s.is_active).length} emails copied`);
  };

  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display text-2xl font-bold text-foreground">Newsletter Subscribers</h1>
        <button onClick={copyEmails} className="glow-button px-4 py-2 rounded-lg text-sm flex items-center gap-2"><Copy className="w-4 h-4" /> Copy Active Emails</button>
      </div>
      {isLoading ? <p className="text-muted-foreground text-sm">Loading...</p> : (
        <div className="glass-card overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Email</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Subscribed</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {subscribers?.map((s) => (
                <TableRow key={s.id}>
                  <TableCell className="font-medium">{s.email}</TableCell>
                  <TableCell>{s.name || "—"}</TableCell>
                  <TableCell className="text-xs text-muted-foreground">{format(new Date(s.subscribed_at), "MMM d, yyyy")}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${s.is_active ? "bg-green-500/10 text-green-600 dark:text-green-400" : "bg-red-500/10 text-red-600 dark:text-red-400"}`}>{s.is_active ? "Active" : "Inactive"}</span>
                  </TableCell>
                  <TableCell>
                    <button onClick={() => toggleActive.mutate({ id: s.id, is_active: !s.is_active })} className="text-xs px-2 py-1 rounded bg-muted hover:bg-muted/80">{s.is_active ? "Deactivate" : "Activate"}</button>
                  </TableCell>
                </TableRow>
              ))}
              {(!subscribers || subscribers.length === 0) && (
                <TableRow><TableCell colSpan={5} className="text-center text-muted-foreground py-8">No subscribers yet</TableCell></TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      )}
    </AdminLayout>
  );
}
