import { motion } from "framer-motion";
import { Target, Eye, Heart, Zap, Shield, Globe, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";
import founderHeadshot from "@/assets/founder-headshot.jpg";
import founderSpeaking from "@/assets/founder-speaking.jpg";
import teamOutreach from "@/assets/team-outreach.jpg";
import communityEngagement from "@/assets/community-engagement.jpg";
import communityElderly from "@/assets/community-elderly.jpg";
import eventAudienceWide from "@/assets/event-audience-wide.jpg";
import eventGroupBackdrop from "@/assets/event-group-backdrop.jpg";
import communityGroup from "@/assets/community-group.jpg";

const values = [
  { icon: Zap, title: "Empowerment", description: "Production over dependency — capacity over charity.", image: communityEngagement },
  { icon: Heart, title: "Dignity", description: "Every African deserves respect, health, and opportunity.", image: communityElderly },
  { icon: Shield, title: "Courage", description: "Bold intervention in the face of Africa's structural gaps.", image: founderSpeaking },
  { icon: Globe, title: "Pan-Africanism", description: "A vision reaching all 54 African nations.", image: eventGroupBackdrop },
];

const missionPoints = [
  "Deliver free digital and vocational skills training",
  "Distribute production equipment to promote entrepreneurship",
  "Expand access to education for out-of-school children",
  "Reduce maternal and newborn mortality",
  "Provide prison bailout and rehabilitation systems",
  "Lead youth-driven climate action, smart agriculture, and blue economy initiatives",
  "Deliver free healthcare services for the elderly",
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const item = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };

const About = () => {
  return (
    <Layout>
      {/* ===== HERO ===== */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-background">
        <div className="absolute inset-0 dot-pattern opacity-40" />

        <div className="absolute inset-0 opacity-[0.07]">
          <img src={eventAudienceWide} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />

        <motion.div
          className="hero-gradient-orb"
          style={{ width: 400, height: 400, left: "15%", top: "20%", background: "hsl(24 90% 54% / 0.10)" }}
          animate={{ y: [0, -20, 0], scale: [1, 1.06, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="hero-gradient-orb"
          style={{ width: 300, height: 300, right: "10%", bottom: "15%", background: "hsl(220 60% 60% / 0.06)" }}
          animate={{ y: [0, 15, 0], scale: [1, 0.95, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full border border-primary/[0.04] pointer-events-none" />

        <div className="relative z-10 container mx-auto px-4 text-center py-32 md:py-40">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-8 px-5 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              About VHAY
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-display text-[3rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[7.5rem] xl:text-[9rem] font-bold leading-[0.85] sm:leading-[0.88] mb-6 sm:mb-8 text-gradient-orange"
          >
            EMPOWERMENT
            <br />
            & DIGNITY
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="line-glow h-px w-28 sm:w-40 mx-auto mb-6 sm:mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="text-sm sm:text-base md:text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed mb-10"
          >
            A pan-African empowerment movement across 14 countries and 28 Nigerian states, with a vision to reach all 54 African nations.
          </motion.p>
        </div>
      </section>

      {/* ===== FOUNDER + INTRO ===== */}
      <section className="section-padding relative">
        <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="relative group">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="rounded-2xl overflow-hidden glow-border relative">
                <img src={founderHeadshot} alt="VHAY Founder" className="w-full h-auto object-cover" />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute -bottom-5 -right-3 md:-right-6 glass-card px-5 py-3.5 rounded-xl shadow-lg"
              >
                <p className="text-primary font-display font-bold text-sm">Founder & Visionary</p>
                <p className="text-muted-foreground text-xs font-light">Valorous Hope for African Youths</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5">
              <Sparkles size={12} className="text-primary" />
              Our Story
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Building Africa's Future Through Structured Empowerment
            </h2>
            <div className="line-glow h-px w-16 mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-5 font-light">
              VHAY was born from a deep conviction that Africa's youth are not a burden — they are the continent's greatest asset. Through seven transformative agendas, we equip, educate, heal, restore, and elevate communities across the continent.
            </p>
            <p className="text-muted-foreground leading-relaxed font-light">
              From providing free vocational skills and production equipment to over 1,000 youths, to delivering maternal healthcare in rural communities, VHAY's model promotes production over dependency and capacity over charity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section className="section-padding bg-card/30 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-15 pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5">
              Our Purpose
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Mission & Vision
            </h2>
            <div className="line-glow h-px w-24 mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card-hover p-8 md:p-10 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-secondary/15 transition-all duration-500">
                <Eye size={26} className="text-secondary" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">Our Vision</h3>
              <div className="line-glow h-px w-12 mb-5" />
              <p className="text-muted-foreground leading-relaxed font-light">
                To build a self-reliant, skilled, healthy, educated, climate-conscious, and value-driven African generation that preserves African pride, strengthens African economies, and contributes meaningfully to global development.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card-hover p-8 md:p-10 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/15 transition-all duration-500">
                <Target size={26} className="text-primary" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">Our Mission</h3>
              <div className="line-glow h-px w-12 mb-5" />
              <ul className="space-y-3">
                {missionPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm font-light">
                    <span className="text-primary font-bold mt-0.5 text-xs w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== TEAM PHOTOS ===== */}
      <section className="section-padding relative">
        <div className="container mx-auto">
          <SectionHeading tag="Our Team" title="On the Ground, Making Impact" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { img: teamOutreach, caption: "VHAY team on community outreach" },
              { img: communityGroup, caption: "Community engagement in rural areas" },
              { img: founderSpeaking, caption: "Leadership and vision at events" },
            ].map((photo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="glass-card-hover overflow-hidden group"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={photo.img}
                    alt={photo.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  <p className="absolute bottom-4 left-5 right-5 text-foreground text-sm font-semibold">
                    {photo.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY AFRICA NEEDS VHAY ===== */}
      <section className="section-padding bg-card/30 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-15 pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <SectionHeading
            tag="Our Context"
            title="Why Africa Needs VHAY"
            description="These realities are not isolated problems — they are interconnected structural gaps. VHAY exists as a strategic intervention framework to close those gaps."
          />
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto"
          >
            {[
              "Youth unemployment rates in Sub-Saharan Africa remain among the highest globally (ILO)",
              "Nigeria alone has over 10 million out-of-school children (UNICEF)",
              "Africa accounts for approximately 70% of global maternal deaths (WHO)",
              "150,000 babies born annually with sickle cell in Nigeria (WHO)",
              "Climate change intensifies floods, droughts, desertification, and food insecurity",
              "Many elderly Africans lack pension access or structured healthcare support",
            ].map((challenge, i) => (
              <motion.div
                key={i}
                variants={item}
                className="glass-card-hover p-6 flex items-start gap-4 group"
              >
                <div className="w-9 h-9 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 group-hover:bg-destructive/15 transition-all duration-500">
                  <span className="text-destructive text-xs font-bold">{i + 1}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">{challenge}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== IMPACT STATS ===== */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5">
              Our Reach
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Impact In Numbers
            </h2>
            <div className="line-glow h-px w-24 mx-auto" />
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCounter end={14} label="African Countries" />
            <AnimatedCounter end={28} label="Nigerian States" />
            <AnimatedCounter end={1000} suffix="+" label="Youths Empowered (2023)" />
            <AnimatedCounter end={54} label="Target Nations" />
          </div>
        </div>
      </section>

      {/* ===== VALUES ===== */}
      <section className="section-padding bg-card/30 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-15 pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <SectionHeading tag="Our Values" title="What Drives Us" />
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((v) => (
              <motion.div
                key={v.title}
                variants={item}
                className="glass-card-hover overflow-hidden group relative"
              >
                <div className="h-44 overflow-hidden relative">
                  <img
                    src={v.image}
                    alt={v.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/95 via-card/30 to-transparent" />
                </div>
                <div className="p-6 pt-0 text-center relative">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 -mt-7 relative z-10 border-2 border-background group-hover:scale-110 group-hover:bg-primary/20 group-hover:shadow-lg group-hover:shadow-primary/10 transition-all duration-500">
                    <v.icon size={24} className="text-primary" />
                  </div>
                  <h4 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {v.title}
                  </h4>
                  <p className="text-muted-foreground text-sm font-light leading-relaxed">{v.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== BROADER IMPACT ===== */}
      <section className="section-padding relative">
        <div className="container mx-auto">
          <SectionHeading
            tag="Broader Impact"
            title="Our Model"
            description="Our model promotes production over dependency and capacity over charity."
          />
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4"
          >
            {[
              "Economic Empowerment",
              "Health Intervention",
              "Education Access",
              "Environmental Sustainability",
              "Justice Reform",
              "Cultural Preservation",
              "Leadership Transformation",
            ].map((impact) => (
              <motion.div
                key={impact}
                variants={item}
                className="glass-card-hover p-5 text-center group"
              >
                <div className="w-2 h-2 rounded-full bg-primary/40 mx-auto mb-3 group-hover:bg-primary group-hover:scale-150 transition-all duration-500" />
                <p className="text-foreground text-xs font-semibold tracking-wide">{impact}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-25 pointer-events-none" />
        <motion.div
          className="hero-gradient-orb"
          style={{ width: 500, height: 500, left: "50%", top: "50%", transform: "translate(-50%, -50%)", background: "hsl(24 90% 54% / 0.06)" }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5">
              Join The Movement
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-5 max-w-3xl mx-auto leading-tight">
              Africa's Future Depends on Structured Empowerment
            </h2>
            <p className="text-muted-foreground text-base md:text-lg font-light mb-10 max-w-xl mx-auto">
              Not temporary aid. Join the movement.
            </p>
            <div className="line-glow h-px w-24 mx-auto mb-10" />
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/donate"
                className="glow-button px-10 py-4 rounded-full text-base font-semibold tracking-wider inline-flex items-center gap-2.5"
              >
                Support The Cause <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="glow-button-outline px-10 py-4 rounded-full text-base font-semibold tracking-wider inline-flex items-center gap-2.5"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
