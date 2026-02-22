import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Upload, X } from "lucide-react";
import { toast } from "sonner";

interface ImageUploadProps {
  value?: string;
  onChange: (url: string) => void;
  folder?: string;
}

export function ImageUpload({ value, onChange, folder = "images" }: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const ext = file.name.split(".").pop();
    const path = `${folder}/${Date.now()}.${ext}`;

    const { error } = await supabase.storage.from("uploads").upload(path, file);
    if (error) {
      toast.error("Upload failed: " + error.message);
      setUploading(false);
      return;
    }

    const { data } = supabase.storage.from("uploads").getPublicUrl(path);
    onChange(data.publicUrl);
    toast.success("Image uploaded");
    setUploading(false);
  };

  return (
    <div className="space-y-2">
      {value && (
        <div className="relative w-full h-40 rounded-lg overflow-hidden border border-border">
          <img src={value} alt="" className="w-full h-full object-cover" />
          <button
            onClick={() => onChange("")}
            className="absolute top-2 right-2 w-6 h-6 bg-destructive rounded-full flex items-center justify-center"
          >
            <X className="w-3 h-3 text-destructive-foreground" />
          </button>
        </div>
      )}
      <label className="flex items-center gap-2 px-4 py-2 bg-muted/50 border border-border rounded-lg cursor-pointer hover:bg-muted transition-colors text-sm text-muted-foreground">
        <Upload className="w-4 h-4" />
        {uploading ? "Uploading..." : "Upload Image"}
        <input type="file" accept="image/*" onChange={handleUpload} className="hidden" disabled={uploading} />
      </label>
    </div>
  );
}
