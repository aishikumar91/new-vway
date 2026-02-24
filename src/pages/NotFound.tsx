import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";


const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center relative z-10 px-4"
      >
        <h1
          className="font-display text-[3.25rem] sm:text-[4.75rem] md:text-[6.5rem] lg:text-[8rem] font-bold leading-[0.85] mb-4 text-image-clip"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          404
        </h1>
        <p className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3">
          PAGE NOT FOUND
        </p>
        <div className="line-glow h-px w-24 mx-auto mb-6" />
        <p className="text-muted-foreground mb-8 font-light max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link to="/" className="glow-button px-5 py-2 rounded-full text-[10px] font-bold tracking-wider flex items-center gap-2">
            <Home size={14} /> GO HOME
          </Link>
          <button onClick={() => window.history.back()} className="glow-button-outline px-5 py-2 rounded-full text-[10px] font-bold tracking-wider flex items-center gap-2">
            <ArrowLeft size={14} /> GO BACK
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
