import { motion } from "framer-motion";
import { Target, Eye, Shield, Zap, Heart, Users, Lightbulb, Award, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import founderHeadshot from "@/assets/founder-headshot.jpg";
import founderSpeaking from "@/assets/founder-speaking.jpg";
import teamOutreach from "@/assets/team-outreach.jpg";
import communityEngagement from "@/assets/community-engagement.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const coreValues = [
  { icon: Shield, title: "Integrity", description: "Transparency and honesty in everything we do." },
  { icon: Zap, title: "Empowerment", description: "Equipping young people with tools to shape their own futures." },
  { icon: Users, title: "Inclusion", description: "Creating spaces where every voice matters regardless of background." },
  { icon: Lightbulb, title: "Innovation", description: "Embracing creative, forward-thinking solutions for Africa's challenges." },
  { icon: Award, title: "Excellence", description: "Striving for the highest standards in all our programs." },
  { icon: Target, title: "Accountability", description: "Taking responsibility and delivering measurable impact." },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };

const About = () => {
  return (
    <Layout>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-background/85 pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="absolute inset-0 dot-pattern opacity-40" />

        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-6 px-5 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Who We Are
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-display text-[3.25rem] sm:text-[4.75rem] md:text-[6.5rem] lg:text-[8rem] xl:text-[9.5rem] font-bold leading-[0.85] sm:leading-[0.88] mb-6 sm:mb-8 text-image-clip text-left"
            style={{ backgroundImage: `url(${heroBg})` }}
          >
            ABOUT
            <br />
            VHAY
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="line-glow h-px w-28 sm:w-40 mr-auto mb-6 sm:mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="text-sm sm:text-base md:text-lg text-muted-foreground font-light max-w-2xl leading-relaxed text-left"
          >
            A youth-led initiative reshaping Africa's future by equipping young people with the tools they need to succeed.
          </motion.p>
        </div>
      </section>

      {/* ===== OUR STORY ===== */}
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
              Reshaping Africa's Future Through Youth Empowerment
            </h2>
            <div className="line-glow h-px w-16 mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-5 font-light">
              Valorous Hope for African Youths (VHAY) was founded as a youth-led initiative dedicated to reshaping Africa's future by equipping young people with the tools they need to succeed.
            </p>
            <p className="text-muted-foreground leading-relaxed font-light">
              Recognizing the disconnect between educational systems and youth needs, VHAY emerged as a voice for African students — advocating for improved access, quality, and opportunity.
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
              className="glass-card p-8 md:p-10 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/15 transition-all duration-500">
                <Target size={26} className="text-primary" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">Our Mission</h3>
              <div className="line-glow h-px w-12 mb-5" />
              <p className="text-muted-foreground leading-relaxed font-light">
                To inspire and equip a new generation of policy-competent young people who will lead Africa into a brighter future.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card p-8 md:p-10 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-secondary/15 transition-all duration-500">
                <Eye size={26} className="text-secondary" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">Our Vision</h3>
              <div className="line-glow h-px w-12 mb-5" />
              <p className="text-muted-foreground leading-relaxed font-light">
                An Africa where every young person has access to quality education, relevant skills, leadership opportunities, and the platform to shape their own destiny.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== TEAM PHOTOS ===== */}
      <section className="section-padding relative">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5">
              Our Team
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              On The Ground
            </h2>
            <div className="line-glow h-px w-24 mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { img: teamOutreach, caption: "VHAY team on community outreach" },
              { img: communityEngagement, caption: "Community engagement in action" },
              { img: founderSpeaking, caption: "Leadership and vision at events" },
            ].map((photo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="glass-card overflow-hidden group"
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

      {/* ===== CORE VALUES ===== */}
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
              What We Stand For
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <div className="line-glow h-px w-24 mx-auto" />
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {coreValues.map((value) => (
              <motion.div
                key={value.title}
                variants={item}
                className="glass-card p-7 group relative overflow-hidden text-center"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:bg-primary/15 transition-all duration-500">
                  <value.icon size={24} className="text-primary" />
                </div>
                <h4 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {value.title}
                </h4>
                <p className="text-muted-foreground text-sm font-light leading-relaxed">{value.description}</p>
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
              Help Shape Africa's Future
            </h2>
            <p className="text-muted-foreground text-base md:text-lg font-light mb-10 max-w-xl mx-auto">
              Every young person empowered is a step closer to the Africa we envision.
            </p>
            <div className="line-glow h-px w-24 mx-auto mb-10" />
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/donate"
                className="glow-button px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider inline-flex items-center gap-2.5"
              >
                Support The Cause <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="glow-button-outline px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider inline-flex items-center gap-2.5"
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
