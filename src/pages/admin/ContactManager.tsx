import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { toast } from "sonner";
import { format } from "date-fns";
import { Trash2 } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function ContactManager() {
  const qc = useQueryClient();

  const { data: submissions, isLoading } = useQuery({
    queryKey: ["admin-contact"],
    queryFn: async () => {
      const { data, error } = await supabase.from("contact_submissions").select("*").order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const toggleRead = useMutation({
    mutationFn: async ({ id, is_read }: { id: string; is_read: boolean }) => {
      const { error } = await supabase.from("contact_submissions").update({ is_read }).eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => { qc.invalidateQueries({ queryKey: ["admin-contact"] }); },
    onError: (e: any) => toast.error(e.message),
  });

  const deleteSubmission = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("contact_submissions").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => { qc.invalidateQueries({ queryKey: ["admin-contact"] }); toast.success("Deleted"); },
    onError: (e: any) => toast.error(e.message),
  });

  return (
    <AdminLayout>
      <h1 className="font-display text-2xl font-bold text-foreground mb-6">Contact Submissions</h1>
      {isLoading ? <p className="text-muted-foreground text-sm">Loading...</p> : (
        <div className="glass-card overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Message</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {submissions?.map((s) => (
                <TableRow key={s.id} className={!s.is_read ? "bg-primary/5" : ""}>
                  <TableCell className="font-medium">{s.name}</TableCell>
                  <TableCell className="text-sm">{s.email}</TableCell>
                  <TableCell className="text-sm">{s.subject || "—"}</TableCell>
                  <TableCell className="text-sm max-w-xs truncate">{s.message}</TableCell>
                  <TableCell className="text-xs text-muted-foreground">{format(new Date(s.created_at), "MMM d, yyyy")}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${s.is_read ? "bg-muted text-muted-foreground" : "bg-primary/10 text-primary"}`}>{s.is_read ? "Read" : "Unread"}</span>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <button onClick={() => toggleRead.mutate({ id: s.id, is_read: !s.is_read })} className="text-xs px-2 py-1 rounded bg-muted hover:bg-muted/80">{s.is_read ? "Mark Unread" : "Mark Read"}</button>
                      <button onClick={() => deleteSubmission.mutate(s.id)} className="text-xs px-2 py-1 rounded bg-red-500/10 text-red-600 dark:text-red-400 hover:bg-red-500/20"><Trash2 size={12} /></button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {(!submissions || submissions.length === 0) && (
                <TableRow><TableCell colSpan={7} className="text-center text-muted-foreground py-8">No submissions yet</TableCell></TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      )}
    </AdminLayout>
  );
}
