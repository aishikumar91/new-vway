import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { ImageUpload } from "@/components/admin/ImageUpload";
import { toast } from "sonner";
import { Plus, Save, Trash2 } from "lucide-react";
import { logAuditEvent } from "@/hooks/useActivityTracker";

const empty = { title: "", description: "", location: "", event_date: "", end_date: "", cover_image: "", is_published: false };

export default function EventsManager() {
  const qc = useQueryClient();
  const [editing, setEditing] = useState<any>(null);

  const { data: events, isLoading } = useQuery({
    queryKey: ["admin-events-list"],
    queryFn: async () => { const { data } = await supabase.from("events").select("*").order("event_date", { ascending: false }); return data ?? []; },
  });

  const save = useMutation({
    mutationFn: async (ev: any) => {
      const payload = { title: ev.title, description: ev.description, location: ev.location, event_date: ev.event_date || null, end_date: ev.end_date || null, cover_image: ev.cover_image, is_published: ev.is_published };
      if (ev.id) {
        const { error } = await supabase.from("events").update(payload).eq("id", ev.id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from("events").insert(payload);
        if (error) throw error;
      }
    },
    onSuccess: (_: any, vars: any) => { logAuditEvent(vars.id ? "update" : "create", "event", vars.id || null, { title: vars.title }); qc.invalidateQueries({ queryKey: ["admin-events-list"] }); setEditing(null); toast.success("Event saved"); },
    onError: (e: any) => toast.error(e.message),
  });

  const del = useMutation({
    mutationFn: async (id: string) => { const { error } = await supabase.from("events").delete().eq("id", id); if (error) throw error; },
    onSuccess: (_: any, id: string) => { logAuditEvent("delete", "event", id); qc.invalidateQueries({ queryKey: ["admin-events-list"] }); toast.success("Event deleted"); },
  });

  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display text-2xl font-bold text-foreground">Events</h1>
        <button onClick={() => setEditing({ ...empty })} className="glow-button px-4 py-2 rounded-lg text-sm flex items-center gap-2"><Plus className="w-4 h-4" /> New Event</button>
      </div>

      {editing && (
        <div className="glass-card p-6 mb-6 space-y-4">
          <input placeholder="Title" value={editing.title} onChange={e => setEditing({ ...editing, title: e.target.value })} className="w-full px-3 py-2 bg-muted/50 border border-border rounded-lg text-sm text-foreground" />
          <textarea placeholder="Description" value={editing.description ?? ""} onChange={e => setEditing({ ...editing, description: e.target.value })} rows={4} className="w-full px-3 py-2 bg-muted/50 border border-border rounded-lg text-sm text-foreground resize-y" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input placeholder="Location" value={editing.location ?? ""} onChange={e => setEditing({ ...editing, location: e.target.value })} className="px-3 py-2 bg-muted/50 border border-border rounded-lg text-sm text-foreground" />
            <input type="datetime-local" value={editing.event_date?.slice(0, 16) ?? ""} onChange={e => setEditing({ ...editing, event_date: e.target.value })} className="px-3 py-2 bg-muted/50 border border-border rounded-lg text-sm text-foreground" />
            <input type="datetime-local" value={editing.end_date?.slice(0, 16) ?? ""} onChange={e => setEditing({ ...editing, end_date: e.target.value })} className="px-3 py-2 bg-muted/50 border border-border rounded-lg text-sm text-foreground" />
          </div>
          <ImageUpload value={editing.cover_image} onChange={url => setEditing({ ...editing, cover_image: url })} folder="events" />
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 text-sm text-muted-foreground"><input type="checkbox" checked={editing.is_published} onChange={e => setEditing({ ...editing, is_published: e.target.checked })} className="accent-primary" /> Published</label>
            <button onClick={() => save.mutate(editing)} className="glow-button px-4 py-2 rounded-lg text-sm flex items-center gap-2"><Save className="w-4 h-4" /> Save</button>
            <button onClick={() => setEditing(null)} className="text-sm text-muted-foreground hover:text-foreground">Cancel</button>
          </div>
        </div>
      )}

      <div className="space-y-2">
        {isLoading ? <p className="text-muted-foreground text-sm">Loading...</p> :
          events?.map(ev => (
            <div key={ev.id} className="glass-card p-4 flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">{ev.title}</p>
                <p className="text-xs text-muted-foreground">{ev.location} • {ev.event_date ? new Date(ev.event_date).toLocaleDateString() : "No date"}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-xs px-2 py-0.5 rounded-full ${ev.is_published ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"}`}>{ev.is_published ? "Published" : "Draft"}</span>
                <button onClick={() => setEditing(ev)} className="text-xs text-primary hover:underline">Edit</button>
                <button onClick={() => del.mutate(ev.id)} className="text-xs text-destructive hover:underline"><Trash2 className="w-3 h-3" /></button>
              </div>
            </div>
          ))}
      </div>
    </AdminLayout>
  );
}
