import { Link } from "react-router-dom";
import { Heart, ArrowUpRight, Mail } from "lucide-react";
import { motion } from "framer-motion";
import vhayLogo from "@/assets/vhay-logo.png";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-border/60 bg-card/50 backdrop-blur-sm">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="py-8 sm:py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start">
            <Link to="/" className="mb-3">
              <img src={vhayLogo} alt="VHAY" className="h-14 w-auto" />
            </Link>
            <p className="text-muted-foreground text-xs leading-relaxed max-w-[220px] text-center sm:text-left">
              Empowering Africa's next generation of leaders through education, skills & advocacy.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="font-display text-[10px] font-bold tracking-widest text-foreground mb-3">QUICK LINKS</h4>
            <div className="flex flex-col gap-1.5 items-center sm:items-start">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "Programs", path: "/programs" },
                { label: "Team", path: "/team" },
                { label: "Events", path: "/events" },
                { label: "Contact", path: "/contact" },
              ].map((i) => (
                <Link key={i.path} to={i.path} className="text-xs text-muted-foreground hover:text-primary transition-colors">
                  {i.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="font-display text-[10px] font-bold tracking-widest text-foreground mb-3">CONNECT</h4>
            <div className="flex flex-col gap-1.5 items-center sm:items-start">
              {[
                { label: "YouTube", href: "https://youtube.com/@valorousafrica" },
                { label: "Instagram", href: "https://instagram.com/valorousafrica" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
                  {s.label}
                  <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
            <p className="text-[10px] text-muted-foreground mt-3">info@valoroushopeforafrica.org</p>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="font-display text-[10px] font-bold tracking-widest text-foreground mb-3">NEWSLETTER</h4>
            <p className="text-xs text-muted-foreground mb-3 text-center sm:text-left">Stay updated with our programs and impact stories.</p>
            <div className="flex items-center gap-1.5 p-1 rounded-full border border-border/60 bg-background/50 w-full max-w-[240px]">
              <Mail size={14} className="text-muted-foreground ml-2.5 flex-shrink-0" />
              <input type="email" placeholder="Your email" className="flex-1 bg-transparent text-xs outline-none py-1.5 text-foreground placeholder:text-muted-foreground/60 min-w-0" />
              <button className="px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-[9px] font-bold tracking-wider hover:opacity-90 transition-opacity flex-shrink-0">JOIN</button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/50 py-3 flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
          <p className="text-[10px] text-muted-foreground">&copy; {new Date().getFullYear()} Valorous Hope for African Youths. All rights reserved.</p>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <Link to="/privacy" className="text-[10px] text-muted-foreground hover:text-primary transition-colors">Privacy</Link>
            <Link to="/terms" className="text-[10px] text-muted-foreground hover:text-primary transition-colors">Terms</Link>
            <Link to="/faq" className="text-[10px] text-muted-foreground hover:text-primary transition-colors">FAQ</Link>
            <motion.button onClick={scrollToTop} whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-1 text-[10px] text-muted-foreground hover:text-primary transition-colors">
              <Heart size={10} className="text-primary" /> Top
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
