import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { toast } from "sonner";
import { Plus, Save, Trash2 } from "lucide-react";
import { logAuditEvent } from "@/hooks/useActivityTracker";

export default function PagesManager() {
  const qc = useQueryClient();
  const [editing, setEditing] = useState<any>(null);

  const { data: pages, isLoading } = useQuery({
    queryKey: ["admin-pages-list"],
    queryFn: async () => {
      const { data } = await supabase.from("pages").select("*").order("created_at");
      return data ?? [];
    },
  });

  const save = useMutation({
    mutationFn: async (page: any) => {
      if (page.id) {
        const { error } = await supabase.from("pages").update({ title: page.title, slug: page.slug, content: page.content, meta_description: page.meta_description, is_published: page.is_published }).eq("id", page.id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from("pages").insert({ title: page.title, slug: page.slug, content: page.content, meta_description: page.meta_description });
        if (error) throw error;
      }
    },
    onSuccess: (_: any, vars: any) => { logAuditEvent(vars.id ? "update" : "create", "page", vars.id || null, { title: vars.title }); qc.invalidateQueries({ queryKey: ["admin-pages-list"] }); setEditing(null); toast.success("Page saved"); },
    onError: (e: any) => toast.error(e.message),
  });

  const del = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("pages").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: (_: any, id: string) => { logAuditEvent("delete", "page", id); qc.invalidateQueries({ queryKey: ["admin-pages-list"] }); toast.success("Page deleted"); },
  });

  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display text-2xl font-bold text-foreground">Pages</h1>
        <button onClick={() => setEditing({ title: "", slug: "", content: "", meta_description: "", is_published: true })} className="glow-button px-4 py-2 rounded-lg text-sm flex items-center gap-2">
          <Plus className="w-4 h-4" /> New Page
        </button>
      </div>

      {editing && (
        <div className="glass-card p-6 mb-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input placeholder="Title" value={editing.title} onChange={e => setEditing({ ...editing, title: e.target.value })} className="px-3 py-2 bg-muted/50 border border-border rounded-lg text-sm text-foreground" />
            <input placeholder="Slug" value={editing.slug} onChange={e => setEditing({ ...editing, slug: e.target.value })} className="px-3 py-2 bg-muted/50 border border-border rounded-lg text-sm text-foreground" />
          </div>
          <input placeholder="Meta description" value={editing.meta_description ?? ""} onChange={e => setEditing({ ...editing, meta_description: e.target.value })} className="w-full px-3 py-2 bg-muted/50 border border-border rounded-lg text-sm text-foreground" />
          <textarea placeholder="Content" value={editing.content} onChange={e => setEditing({ ...editing, content: e.target.value })} rows={8} className="w-full px-3 py-2 bg-muted/50 border border-border rounded-lg text-sm text-foreground resize-y" />
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 text-sm text-muted-foreground">
              <input type="checkbox" checked={editing.is_published} onChange={e => setEditing({ ...editing, is_published: e.target.checked })} className="accent-primary" /> Published
            </label>
            <button onClick={() => save.mutate(editing)} className="glow-button px-4 py-2 rounded-lg text-sm flex items-center gap-2"><Save className="w-4 h-4" /> Save</button>
            <button onClick={() => setEditing(null)} className="text-sm text-muted-foreground hover:text-foreground">Cancel</button>
          </div>
        </div>
      )}

      <div className="space-y-2">
        {isLoading ? <p className="text-muted-foreground text-sm">Loading...</p> :
          pages?.map(p => (
            <div key={p.id} className="glass-card p-4 flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">{p.title}</p>
                <p className="text-xs text-muted-foreground">/{p.slug}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-xs px-2 py-0.5 rounded-full ${p.is_published ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"}`}>{p.is_published ? "Published" : "Draft"}</span>
                <button onClick={() => setEditing(p)} className="text-xs text-primary hover:underline">Edit</button>
                <button onClick={() => del.mutate(p.id)} className="text-xs text-destructive hover:underline"><Trash2 className="w-3 h-3" /></button>
              </div>
            </div>
          ))}
      </div>
    </AdminLayout>
  );
}
