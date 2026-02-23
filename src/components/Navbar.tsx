import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import vhayLogo from "@/assets/vhay-logo.png";

const navLinks = [
  { label: "ABOUT", path: "/about" },
  { label: "PROGRAMS", path: "/programs" },
  { label: "TEAM", path: "/team" },
  { label: "EVENTS", path: "/events" },
  { label: "MEDIA", path: "/media" },
  { label: "BLOG", path: "/blog" },
  { label: "CONTACT", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { resolved, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const toggleTheme = () => setTheme(resolved === "dark" ? "light" : "dark");

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "nav-glass shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3 sm:py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src={vhayLogo}
            alt="VHAY Logo"
            className="h-12 sm:h-14 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className="relative px-4 py-2 text-[11px] font-semibold tracking-wider rounded-lg transition-colors duration-200"
              >
                <span
                  className={
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground transition-colors"
                  }
                >
                  {link.label}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0.5 left-3 right-3 h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop actions */}
        <div className="hidden lg:flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {resolved === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <Link
            to="/donate"
            className="group flex items-center gap-2 px-5 py-2 rounded-full text-[10px] font-bold tracking-wider glow-button"
          >
            DONATE
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </div>

        {/* Mobile actions */}
        <div className="flex lg:hidden items-center gap-1">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            aria-label="Toggle theme"
          >
            {resolved === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="w-10 h-10 flex items-center justify-center rounded-xl text-foreground hover:bg-muted transition-colors"
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:hidden bg-background/95 backdrop-blur-2xl border-b border-border/50 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 sm:py-6 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={`block px-4 py-3 text-sm font-semibold tracking-wider rounded-xl transition-all duration-200 ${
                      location.pathname === link.path
                        ? "text-primary bg-primary/5"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05, duration: 0.3 }}
                className="mt-3 px-4"
              >
                <Link
                  to="/donate"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full text-[10px] font-bold tracking-wider glow-button"
                >
                  DONATE <ArrowRight size={14} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
