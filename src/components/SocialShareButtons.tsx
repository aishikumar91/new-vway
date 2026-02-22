import { Facebook, Twitter, Linkedin, MessageCircle } from "lucide-react";

interface SocialShareButtonsProps {
  url: string;
  title: string;
  className?: string;
}

const SocialShareButtons = ({ url, title, className = "" }: SocialShareButtonsProps) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const share = (shareUrl: string) => {
    window.open(shareUrl, "_blank", "width=600,height=400");
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <button onClick={() => share(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`)} className="w-9 h-9 rounded-full bg-muted hover:bg-primary/10 hover:text-primary flex items-center justify-center transition-colors" aria-label="Share on Facebook">
        <Facebook size={16} />
      </button>
      <button onClick={() => share(`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`)} className="w-9 h-9 rounded-full bg-muted hover:bg-primary/10 hover:text-primary flex items-center justify-center transition-colors" aria-label="Share on X">
        <Twitter size={16} />
      </button>
      <button onClick={() => share(`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`)} className="w-9 h-9 rounded-full bg-muted hover:bg-primary/10 hover:text-primary flex items-center justify-center transition-colors" aria-label="Share on LinkedIn">
        <Linkedin size={16} />
      </button>
      <button onClick={() => share(`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`)} className="w-9 h-9 rounded-full bg-muted hover:bg-primary/10 hover:text-primary flex items-center justify-center transition-colors" aria-label="Share on WhatsApp">
        <MessageCircle size={16} />
      </button>
    </div>
  );
};

export default SocialShareButtons;
