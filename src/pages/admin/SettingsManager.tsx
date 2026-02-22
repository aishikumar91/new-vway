import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { toast } from "sonner";
import { Save } from "lucide-react";
import { logAuditEvent } from "@/hooks/useActivityTracker";
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const generalSettings = [
  { key: "site_name", label: "Site Name" },
  { key: "site_description", label: "Site Description" },
  { key: "contact_email", label: "Contact Email" },
  { key: "contact_phone", label: "Contact Phone" },
  { key: "address", label: "Address" },
  { key: "hero_title", label: "Hero Title" },
  { key: "hero_subtitle", label: "Hero Subtitle" },
  { key: "countries_count", label: "Countries Count" },
  { key: "states_count", label: "States Count" },
  { key: "youths_empowered", label: "Youths Empowered" },
];

const socialSettings = [
  { key: "facebook_url", label: "Facebook URL" },
  { key: "twitter_url", label: "Twitter URL" },
  { key: "instagram_url", label: "Instagram URL" },
  { key: "youtube_url", label: "YouTube URL" },
];

const brandSettings = [
  { key: "brand_primary_color", label: "Brand Primary Color" },
  { key: "brand_font_heading", label: "Heading Font" },
  { key: "brand_font_body", label: "Body Font" },
];

const fontOptions = ["Roboto Condensed", "Inter", "Poppins", "Open Sans", "Montserrat", "Lato", "Playfair Display"];

export default function SettingsManager() {
  const qc = useQueryClient();
  const [values, setValues] = useState<Record<string, string>>({});

  const { data: settings, isLoading } = useQuery({
    queryKey: ["admin-settings"],
    queryFn: async () => { const { data } = await supabase.from("global_settings").select("*"); return data ?? []; },
  });

  useEffect(() => {
    if (settings) {
      const map: Record<string, string> = {};
      settings.forEach(s => { map[s.key] = s.value ?? ""; });
      setValues(map);
    }
  }, [settings]);

  const save = useMutation({
    mutationFn: async () => {
      const updates = Object.entries(values).map(([key, value]) =>
        supabase.from("global_settings").update({ value }).eq("key", key)
      );
      await Promise.all(updates);
    },
    onSuccess: () => { logAuditEvent("update", "global_settings", null, { keys: Object.keys(values) }); qc.invalidateQueries({ queryKey: ["admin-settings"] }); toast.success("Settings saved"); },
    onError: (e: any) => toast.error(e.message),
  });

  const renderField = (key: string, label: string) => {
    if (key === "brand_primary_color") {
      return (
        <div key={key}>
          <label className="text-sm text-muted-foreground mb-1 block">{label}</label>
          <div className="flex items-center gap-3">
            <input type="color" value={values[key] || "#E8752A"} onChange={e => setValues(prev => ({ ...prev, [key]: e.target.value }))} className="w-10 h-10 rounded border border-border cursor-pointer" />
            <input value={values[key] ?? ""} onChange={e => setValues(prev => ({ ...prev, [key]: e.target.value }))} className="flex-1 px-3 py-2 bg-muted/50 border border-border rounded-lg text-sm text-foreground" />
          </div>
        </div>
      );
    }
    if (key === "brand_font_heading" || key === "brand_font_body") {
      return (
        <div key={key}>
          <label className="text-sm text-muted-foreground mb-1 block">{label}</label>
          <select value={values[key] ?? ""} onChange={e => setValues(prev => ({ ...prev, [key]: e.target.value }))} className="w-full px-3 py-2 bg-muted/50 border border-border rounded-lg text-sm text-foreground">
            {fontOptions.map(f => <option key={f} value={f}>{f}</option>)}
          </select>
        </div>
      );
    }
    return (
      <div key={key}>
        <label className="text-sm text-muted-foreground mb-1 block">{label}</label>
        <input value={values[key] ?? ""} onChange={e => setValues(prev => ({ ...prev, [key]: e.target.value }))} className="w-full px-3 py-2 bg-muted/50 border border-border rounded-lg text-sm text-foreground" />
      </div>
    );
  };

  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display text-2xl font-bold text-foreground">Global Settings</h1>
        <button onClick={() => save.mutate()} className="glow-button px-4 py-2 rounded-lg text-sm flex items-center gap-2"><Save className="w-4 h-4" /> Save All</button>
      </div>

      {isLoading ? <p className="text-muted-foreground text-sm">Loading...</p> : (
        <Tabs defaultValue="general">
          <TabsList>
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="social">Social Media</TabsTrigger>
            <TabsTrigger value="brand">Brand</TabsTrigger>
          </TabsList>
          <TabsContent value="general">
            <div className="glass-card p-6 space-y-4">
              {generalSettings.map(s => renderField(s.key, s.label))}
            </div>
          </TabsContent>
          <TabsContent value="social">
            <div className="glass-card p-6 space-y-4">
              {socialSettings.map(s => renderField(s.key, s.label))}
            </div>
          </TabsContent>
          <TabsContent value="brand">
            <div className="glass-card p-6 space-y-4">
              {brandSettings.map(s => renderField(s.key, s.label))}
            </div>
          </TabsContent>
        </Tabs>
      )}
    </AdminLayout>
  );
}
