import { Link } from "react-router-dom";
import { Heart, ArrowUpRight, Mail } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  { label: "Facebook", href: "#" },
  { label: "Twitter / X", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "YouTube", href: "#" },
];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-border/60 bg-card/50 backdrop-blur-sm">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="py-10 sm:py-12 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 text-center md:text-left">
          {/* Brand + newsletter */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="inline-flex items-center gap-3 mb-4 group">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-lg shadow-primary/15">
                <span className="text-primary-foreground font-display font-bold text-xs">V</span>
              </div>
              <span className="font-display font-bold text-lg text-foreground tracking-tight">
                VALOROUS <span className="text-primary">AFRICA</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5 max-w-sm">
              A pan-African empowerment movement across 14 countries, with a vision to reach all 54 nations.
            </p>
            <div className="flex items-center gap-2 p-1 rounded-full border border-border/60 bg-background/50 w-full max-w-xs">
              <Mail size={16} className="text-muted-foreground ml-3 flex-shrink-0" />
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-transparent text-sm outline-none py-2 text-foreground placeholder:text-muted-foreground/60 min-w-0"
              />
              <button className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-[10px] font-bold tracking-wider hover:opacity-90 transition-opacity flex-shrink-0">
                JOIN
              </button>
            </div>
          </div>

          {/* Navigate */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-display text-xs font-bold tracking-wider text-foreground mb-4">NAVIGATE</h4>
            <div className="flex flex-col gap-2 items-center md:items-start">
              {[
                { label: "About", path: "/about" },
                { label: "Agendas", path: "/programs" },
                { label: "Events", path: "/events" },
                { label: "Blog", path: "/blog" },
                { label: "Gallery", path: "/gallery" },
                { label: "Contact", path: "/contact" },
                { label: "Donate", path: "/donate" },
              ].map((i) => (
                <Link
                  key={i.path}
                  to={i.path}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {i.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-display text-xs font-bold tracking-wider text-foreground mb-4">CONNECT</h4>
            <div className="flex flex-col gap-2 mb-5 items-center md:items-start">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {s.label}
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </a>
              ))}
            </div>
            <div className="text-xs text-muted-foreground">
              <p className="font-semibold text-foreground">14 African Countries &middot; 28 Nigerian States</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/50 py-4 sm:py-5 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} VHAY. All rights reserved.</p>
          <div className="flex items-center gap-4 sm:gap-5 flex-wrap justify-center">
            <Link to="/privacy" className="text-xs text-muted-foreground hover:text-primary transition-colors">Privacy</Link>
            <Link to="/terms" className="text-xs text-muted-foreground hover:text-primary transition-colors">Terms</Link>
            <Link to="/faq" className="text-xs text-muted-foreground hover:text-primary transition-colors">FAQ</Link>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              <Heart size={12} className="text-primary" /> Top
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
