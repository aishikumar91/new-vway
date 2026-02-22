import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, Heart, Users, Globe, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";


const floatingShapes = [
  { size: 320, x: "10%", y: "15%", color: "hsl(24 90% 54% / 0.12)", delay: 0 },
  { size: 220, x: "75%", y: "20%", color: "hsl(24 70% 60% / 0.08)", delay: 2 },
  { size: 160, x: "85%", y: "65%", color: "hsl(220 60% 60% / 0.06)", delay: 4 },
  { size: 280, x: "5%", y: "70%", color: "hsl(24 80% 50% / 0.07)", delay: 1 },
  { size: 120, x: "50%", y: "80%", color: "hsl(340 60% 55% / 0.05)", delay: 3 },
];

const impactStats = [
  { icon: Users, value: "1,000+", label: "Youths Empowered" },
  { icon: Globe, value: "14", label: "African Countries" },
  { icon: Heart, value: "15+", label: "Free Skills Offered" },
  { icon: Sparkles, value: "7", label: "Core Agendas" },
];

const Index = () => {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 400], [1, 0.95]);
  const parallaxY = useTransform(scrollY, [0, 500], [0, 80]);

  return (
    <Layout>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
        <div className="absolute inset-0 dot-pattern opacity-40" />

        {floatingShapes.map((shape, i) => (
          <motion.div
            key={i}
            className="hero-gradient-orb"
            style={{
              width: shape.size,
              height: shape.size,
              left: shape.x,
              top: shape.y,
              background: shape.color,
            }}
            animate={{
              y: [0, -20, 0, 15, 0],
              x: [0, 10, 0, -10, 0],
              scale: [1, 1.08, 1, 0.95, 1],
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: shape.delay,
            }}
          />
        ))}

        {/* Ring decorations — hidden on small screens for cleanliness */}
        <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[650px] md:h-[650px] lg:w-[800px] lg:h-[800px] rounded-full border border-primary/[0.04] pointer-events-none" />
        <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] rounded-full border border-primary/[0.06] pointer-events-none animate-spin-slow" />

        {/* Main content */}
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale, y: parallaxY }}
          className="relative z-10 container mx-auto px-4 text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 text-[9px] sm:text-[10px] md:text-xs font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-6 sm:mb-8 px-4 sm:px-5 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Pan-African Empowerment Movement
            </span>
          </motion.div>

          {/* Main heading — mobile-first with progressive scaling */}
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-display text-[4rem] sm:text-[5.5rem] md:text-[7rem] lg:text-[9rem] xl:text-[11rem] 2xl:text-[13rem] font-bold leading-[0.85] sm:leading-[0.88] mb-6 sm:mb-8 text-gradient-orange"
          >
            VALOROUS
            <br />
            AFRICA
          </motion.h1>

          {/* Accent line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="line-glow h-px w-28 sm:w-40 mx-auto mb-6 sm:mb-8"
          />

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-md sm:max-w-lg md:max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed font-light"
          >
            A Continental Movement for <span className="text-foreground font-medium">Empowerment</span>,{" "}
            <span className="text-foreground font-medium">Dignity</span>, and{" "}
            <span className="text-foreground font-medium">Sustainable Development</span> across 14 African nations.
          </motion.p>

          {/* CTAs — stacked on mobile, row on sm+ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16"
          >
            <Link
              to="/donate"
              className="group glow-button w-full sm:w-auto px-8 sm:px-9 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-bold tracking-wider flex items-center justify-center gap-3"
            >
              SUPPORT THE MISSION
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>
            <Link
              to="/programs"
              className="glow-button-outline w-full sm:w-auto px-8 sm:px-9 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-bold tracking-wider text-center"
            >
              EXPLORE AGENDAS
            </Link>
          </motion.div>

          {/* Impact stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-3xl mx-auto"
          >
            {impactStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 + i * 0.1 }}
                className="flex flex-col items-center gap-1.5 sm:gap-2 p-3 sm:p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/40 hover:border-primary/20 hover:bg-card/80 transition-all duration-300 group"
              >
                <stat.icon
                  size={16}
                  className="text-primary/70 group-hover:text-primary transition-colors duration-300 sm:w-[18px] sm:h-[18px]"
                />
                <span className="font-display text-xl sm:text-2xl font-bold text-foreground">
                  {stat.value}
                </span>
                <span className="text-[9px] sm:text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        >
          <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-muted-foreground/60">
            Scroll
          </span>
          <ChevronDown size={16} className="text-muted-foreground/50 animate-scroll-hint" />
        </motion.div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-[5]" />
      </section>

      {/* ===== MISSION STATEMENT ===== */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5">
              Our Purpose
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 sm:mb-8">
              AFRICA'S YOUTH ARE NOT
              <br />
              A BURDEN.{" "}
              <span className="text-primary">THEY ARE THE</span>
              <br />
              <span className="text-primary">GREATEST ASSET.</span>
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="line-glow h-px w-24 mx-auto mb-6 sm:mb-8"
            />
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10 font-light">
              VHAY exists to unlock that asset — sustainably, strategically, and continentally.
              From free skill acquisition to healthcare, from education to climate action,
              we are building the infrastructure of African possibility.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link
                to="/about"
                className="group glow-button w-full sm:w-auto px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold tracking-wider flex items-center justify-center gap-2"
              >
                LEARN OUR STORY
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="glow-button-outline w-full sm:w-auto px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold tracking-wider text-center"
              >
                PARTNER WITH US
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
