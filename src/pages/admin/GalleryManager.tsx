import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { ImageUpload } from "@/components/admin/ImageUpload";
import { toast } from "sonner";
import { Plus, Save, Trash2 } from "lucide-react";
import { logAuditEvent } from "@/hooks/useActivityTracker";

const empty = { title: "", description: "", image_url: "", category: "", is_published: true, sort_order: 0 };

export default function GalleryManager() {
  const qc = useQueryClient();
  const [editing, setEditing] = useState<any>(null);

  const { data: images, isLoading } = useQuery({
    queryKey: ["admin-gallery-list"],
    queryFn: async () => { const { data } = await supabase.from("gallery_images").select("*").order("sort_order"); return data ?? []; },
  });

  const save = useMutation({
    mutationFn: async (img: any) => {
      const payload = { title: img.title, description: img.description, image_url: img.image_url, category: img.category, is_published: img.is_published, sort_order: img.sort_order };
      if (img.id) {
        const { error } = await supabase.from("gallery_images").update(payload).eq("id", img.id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from("gallery_images").insert(payload);
        if (error) throw error;
      }
    },
    onSuccess: (_: any, vars: any) => { logAuditEvent(vars.id ? "update" : "create", "gallery_image", vars.id || null, { title: vars.title }); qc.invalidateQueries({ queryKey: ["admin-gallery-list"] }); setEditing(null); toast.success("Image saved"); },
    onError: (e: any) => toast.error(e.message),
  });

  const del = useMutation({
    mutationFn: async (id: string) => { const { error } = await supabase.from("gallery_images").delete().eq("id", id); if (error) throw error; },
    onSuccess: (_: any, id: string) => { logAuditEvent("delete", "gallery_image", id); qc.invalidateQueries({ queryKey: ["admin-gallery-list"] }); toast.success("Image deleted"); },
  });

  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display text-2xl font-bold text-foreground">Gallery</h1>
        <button onClick={() => setEditing({ ...empty })} className="glow-button px-4 py-2 rounded-lg text-sm flex items-center gap-2"><Plus className="w-4 h-4" /> Add Image</button>
      </div>

      {editing && (
        <div className="glass-card p-6 mb-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input placeholder="Title" value={editing.title ?? ""} onChange={e => setEditing({ ...editing, title: e.target.value })} className="px-3 py-2 bg-muted/50 border border-border rounded-lg text-sm text-foreground" />
            <input placeholder="Category" value={editing.category ?? ""} onChange={e => setEditing({ ...editing, category: e.target.value })} className="px-3 py-2 bg-muted/50 border border-border rounded-lg text-sm text-foreground" />
          </div>
          <textarea placeholder="Description" value={editing.description ?? ""} onChange={e => setEditing({ ...editing, description: e.target.value })} rows={3} className="w-full px-3 py-2 bg-muted/50 border border-border rounded-lg text-sm text-foreground resize-y" />
          <ImageUpload value={editing.image_url} onChange={url => setEditing({ ...editing, image_url: url })} folder="gallery" />
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 text-sm text-muted-foreground"><input type="checkbox" checked={editing.is_published} onChange={e => setEditing({ ...editing, is_published: e.target.checked })} className="accent-primary" /> Published</label>
            <input type="number" placeholder="Sort order" value={editing.sort_order} onChange={e => setEditing({ ...editing, sort_order: parseInt(e.target.value) || 0 })} className="w-24 px-3 py-2 bg-muted/50 border border-border rounded-lg text-sm text-foreground" />
            <button onClick={() => save.mutate(editing)} className="glow-button px-4 py-2 rounded-lg text-sm flex items-center gap-2"><Save className="w-4 h-4" /> Save</button>
            <button onClick={() => setEditing(null)} className="text-sm text-muted-foreground hover:text-foreground">Cancel</button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {isLoading ? <p className="text-muted-foreground text-sm">Loading...</p> :
          images?.map(img => (
            <div key={img.id} className="glass-card overflow-hidden group">
              <div className="aspect-square">
                <img src={img.image_url} alt={img.title ?? ""} className="w-full h-full object-cover" />
              </div>
              <div className="p-3">
                <p className="text-sm font-medium text-foreground truncate">{img.title || "Untitled"}</p>
                <p className="text-xs text-muted-foreground">{img.category}</p>
                <div className="flex gap-2 mt-2">
                  <button onClick={() => setEditing(img)} className="text-xs text-primary hover:underline">Edit</button>
                  <button onClick={() => del.mutate(img.id)} className="text-xs text-destructive hover:underline">Delete</button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </AdminLayout>
  );
}
