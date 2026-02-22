import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { toast } from "sonner";
import { format } from "date-fns";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { logAuditEvent } from "@/hooks/useActivityTracker";

export default function DonationsManager() {
  const qc = useQueryClient();

  const { data: donations, isLoading } = useQuery({
    queryKey: ["admin-donations"],
    queryFn: async () => {
      const { data, error } = await supabase.from("donations").select("*").order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const updateStatus = useMutation({
    mutationFn: async ({ id, status }: { id: string; status: string }) => {
      const { error } = await supabase.from("donations").update({ status }).eq("id", id);
      if (error) throw error;
    },
    onSuccess: (_: any, vars: { id: string; status: string }) => { logAuditEvent("update", "donation", vars.id, { status: vars.status }); qc.invalidateQueries({ queryKey: ["admin-donations"] }); toast.success("Status updated"); },
    onError: (e: any) => toast.error(e.message),
  });

  return (
    <AdminLayout>
      <h1 className="font-display text-2xl font-bold text-foreground mb-6">Donations</h1>
      {isLoading ? <p className="text-muted-foreground text-sm">Loading...</p> : (
        <div className="glass-card overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Donor</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {donations?.map((d) => (
                <TableRow key={d.id}>
                  <TableCell className="font-medium">{d.donor_name || "—"}</TableCell>
                  <TableCell className="text-sm">{d.donor_email || "—"}</TableCell>
                  <TableCell className="font-semibold">₦{Number(d.amount).toLocaleString()}</TableCell>
                  <TableCell className="text-xs uppercase">{d.payment_method}</TableCell>
                  <TableCell className="text-xs uppercase">{d.donation_type}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${d.status === "confirmed" ? "bg-green-500/10 text-green-600 dark:text-green-400" : d.status === "rejected" ? "bg-red-500/10 text-red-600 dark:text-red-400" : "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400"}`}>{d.status}</span>
                  </TableCell>
                  <TableCell className="text-xs text-muted-foreground">{format(new Date(d.created_at), "MMM d, yyyy")}</TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      {d.status !== "confirmed" && <button onClick={() => updateStatus.mutate({ id: d.id, status: "confirmed" })} className="text-xs px-2 py-1 rounded bg-green-500/10 text-green-600 dark:text-green-400 hover:bg-green-500/20">Confirm</button>}
                      {d.status !== "rejected" && <button onClick={() => updateStatus.mutate({ id: d.id, status: "rejected" })} className="text-xs px-2 py-1 rounded bg-red-500/10 text-red-600 dark:text-red-400 hover:bg-red-500/20">Reject</button>}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {(!donations || donations.length === 0) && (
                <TableRow><TableCell colSpan={8} className="text-center text-muted-foreground py-8">No donations yet</TableCell></TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      )}
    </AdminLayout>
  );
}
