import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, Heart, Users, Globe, Sparkles, BookOpen, Briefcase, Lightbulb, Stethoscope, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";

const impactStats = [
  { icon: Users, value: "1,000+", label: "Youth Empowered" },
  { icon: Globe, value: "14+", label: "Countries Reached" },
  { icon: Briefcase, value: "20+", label: "Skills Programs" },
  { icon: Sparkles, value: "50+", label: "Community Partners" },
];

const focusAreas = [
  { icon: BookOpen, title: "Education Access", desc: "Providing access to quality education and academic support programs for underserved youth across Africa." },
  { icon: Briefcase, title: "Skills Development", desc: "Free vocational and digital skills training to increase employability and entrepreneurship among young Africans." },
  { icon: Lightbulb, title: "Innovation & Leadership", desc: "Training young people in leadership, civic engagement, and policy awareness to drive continental change." },
  { icon: Stethoscope, title: "Healthcare Advocacy", desc: "Promoting youth health awareness and access to essential health services in communities across the continent." },
];

const bridgePoints = [
  "Connecting students with opportunities",
  "Acting as a liaison between students and institutions",
  "Advocating for youth-centered policy reform",
  "Building community-driven solutions",
];

const Index = () => {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 400], [1, 0.95]);
  const parallaxY = useTransform(scrollY, [0, 500], [0, 80]);

  return (
    <Layout>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background/85">
        <div className="absolute inset-0 dot-pattern opacity-30" />

        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale, y: parallaxY }}
          className="relative z-10 container mx-auto px-4 text-center"
        >
          <motion.div initial={{ opacity: 0, y: 20, filter: "blur(10px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 0.8, delay: 0.2 }}>
            <span className="inline-flex items-center gap-2 text-[9px] sm:text-[10px] md:text-xs font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-6 sm:mb-8 px-4 sm:px-5 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Empowering Africa's Next Generation
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-display text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[12rem] xl:text-[14rem] 2xl:text-[16rem] font-bold leading-[0.85] sm:leading-[0.88] mb-6 sm:mb-8 text-image-clip"
            style={{ backgroundImage: `url(${heroBg})` }}
          >
            VALOROUS
            <br />
            AFRICA
          </motion.h1>

          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.8 }} className="line-glow h-px w-28 sm:w-40 mx-auto mb-6 sm:mb-8" />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-md sm:max-w-lg md:max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed font-light"
          >
            A youth-led movement committed to inspiring, equipping, and empowering young Africans through{" "}
            <span className="text-foreground font-medium">education</span>,{" "}
            <span className="text-foreground font-medium">leadership development</span>,{" "}
            <span className="text-foreground font-medium">healthcare advocacy</span>, and{" "}
            <span className="text-foreground font-medium">innovation</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16"
          >
            <Link to="/about" className="group glow-button w-full sm:w-auto px-6 sm:px-7 py-2.5 sm:py-3 rounded-full text-[10px] sm:text-xs font-bold tracking-wider flex items-center justify-center gap-2">
              JOIN THE MOVEMENT
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link to="/donate" className="glow-button-outline w-full sm:w-auto px-6 sm:px-7 py-2.5 sm:py-3 rounded-full text-[10px] sm:text-xs font-bold tracking-wider text-center">
              DONATE
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-3xl mx-auto"
          >
            {impactStats.map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.5 + i * 0.1 }}
                className="flex flex-col items-center gap-1.5 sm:gap-2 p-3 sm:p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/40 hover:border-primary/20 hover:bg-card/80 transition-all duration-300 group">
                <stat.icon size={16} className="text-primary/70 group-hover:text-primary transition-colors duration-300 sm:w-[18px] sm:h-[18px]" />
                <span className="font-display text-xl sm:text-2xl font-bold text-foreground">{stat.value}</span>
                <span className="text-[9px] sm:text-[10px] font-medium uppercase tracking-wider text-muted-foreground">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }} className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-muted-foreground/60">Scroll</span>
          <ChevronDown size={16} className="text-muted-foreground/50 animate-scroll-hint" />
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-[5]" />
      </section>

      {/* ===== ABOUT PREVIEW ===== */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="container mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5">Who We Are</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 sm:mb-8 text-foreground">
              AFRICA'S GREATEST RESOURCE
              <br />
              <span className="text-primary">IS ITS YOUTH</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-4 font-light">
              Valorous Hope for African Youths (VHAY) exists to inspire and equip a new generation of policy-competent young leaders who will transform Africa's future.
            </p>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10 font-light">
              When empowered with education, leadership skills, and opportunity, Africa's youth become unstoppable forces for change.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link to="/about" className="group glow-button w-full sm:w-auto px-6 py-2.5 rounded-full text-[10px] sm:text-xs font-bold tracking-wider flex items-center justify-center gap-2">
                LEARN OUR STORY <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link to="/partners" className="glow-button-outline w-full sm:w-auto px-6 py-2.5 rounded-full text-[10px] sm:text-xs font-bold tracking-wider text-center">PARTNER WITH US</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== FOCUS AREAS ===== */}
      <section className="section-padding relative overflow-hidden bg-card/30">
        <div className="container mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5">What We Do</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">Our Focus Areas</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((area, i) => (
              <motion.div key={area.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-6 rounded-2xl text-center hover:border-primary/20 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <area.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{area.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{area.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY WE EXIST ===== */}
      <section className="section-padding relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10">
              <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5">Our Purpose</span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">Why We Exist</h2>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                Across Africa, millions of young people face barriers to quality education, skill acquisition, and leadership opportunities. VHAY bridges that gap.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {bridgePoints.map((point, i) => (
                <motion.div key={point} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-card/50 border border-border/40">
                  <CheckCircle size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm sm:text-base font-medium">{point}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== GET INVOLVED ===== */}
      <section className="section-padding relative overflow-hidden bg-card/30">
        <div className="container mx-auto relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5">Take Action</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">Get Involved</h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-10">
              Support the movement by volunteering your time, donating resources, partnering with us, or mentoring young leaders.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link to="/donate" className="group glow-button w-full sm:w-auto px-6 py-2.5 rounded-full text-[10px] sm:text-xs font-bold tracking-wider flex items-center justify-center gap-2">
                <Heart size={16} /> DONATE NOW
              </Link>
              <Link to="/contact" className="glow-button-outline w-full sm:w-auto px-6 py-2.5 rounded-full text-[10px] sm:text-xs font-bold tracking-wider text-center">BECOME A VOLUNTEER</Link>
              <Link to="/partners" className="glow-button-outline w-full sm:w-auto px-6 py-2.5 rounded-full text-[10px] sm:text-xs font-bold tracking-wider text-center">PARTNER WITH US</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
