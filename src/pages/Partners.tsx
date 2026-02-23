import { motion } from "framer-motion";
import { Building2, Users, Briefcase, GraduationCap, Scale, ArrowRight, Handshake } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";

const partnerTypes = [
  { icon: GraduationCap, title: "Educational Institutions", description: "Schools, universities, and training centers committed to expanding access to quality education across Africa." },
  { icon: Users, title: "NGOs", description: "Non-governmental organizations working in youth development, health, and community empowerment." },
  { icon: Briefcase, title: "Corporate Organizations", description: "Businesses and enterprises investing in CSR, skills development, and sustainable African growth." },
  { icon: Building2, title: "Youth Groups", description: "Youth-led organizations, student unions, and community collectives driving change from the grassroots." },
  { icon: Scale, title: "Policy Bodies", description: "Government agencies, legislative bodies, and policy think tanks shaping frameworks that serve African youth." },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };

const Partners = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-background/85">
        <div className="absolute inset-0 dot-pattern opacity-40" />
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

        <div className="relative z-10 container mx-auto px-4 text-center py-32 md:py-40">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-8 px-5 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Collaborate With Us
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-display text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] font-bold leading-[0.85] sm:leading-[0.88] mb-6 sm:mb-8 text-image-clip"
            style={{ backgroundImage: `url(${heroBg})` }}
          >
            PARTNER
            <br />
            WITH US
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
            className="text-sm sm:text-base md:text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed"
          >
            If you're passionate about transforming Africa's future, we'd love to partner with you.
          </motion.p>
        </div>
      </section>

      {/* Partner Types */}
      <section className="section-padding relative">
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
              <Handshake size={12} className="text-primary" />
              Partnerships
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              We Collaborate With
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
            {partnerTypes.map((partner) => (
              <motion.div
                key={partner.title}
                variants={item}
                className="glass-card p-8 group hover:border-primary/20 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/15 transition-all duration-500">
                  <partner.icon size={26} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {partner.title}
                </h3>
                <div className="line-glow h-px w-10 mb-3" />
                <p className="text-muted-foreground text-sm font-light leading-relaxed">{partner.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Partner */}
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
              Why Partner
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              The Impact of Partnership
            </h2>
            <div className="line-glow h-px w-24 mx-auto mb-4" />
            <p className="text-muted-foreground text-base font-light max-w-2xl mx-auto">
              Together, we can scale impact, share resources, and create lasting change for millions of young Africans.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {[
              { title: "Amplified Reach", description: "Leverage our network spanning 14 countries and 28 Nigerian states to deliver programs at scale." },
              { title: "Shared Resources", description: "Pool expertise, infrastructure, and funding to maximize the efficiency of every initiative." },
              { title: "Measurable Impact", description: "Transparent reporting and community-driven outcomes that demonstrate real transformation." },
            ].map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={item}
                className="glass-card p-8 text-center group hover:border-primary/20 transition-all duration-500"
              >
                <div className="w-2 h-2 rounded-full bg-primary/40 mx-auto mb-4 group-hover:bg-primary group-hover:scale-150 transition-all duration-500" />
                <h3 className="font-display text-lg font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
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
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-5 max-w-3xl mx-auto leading-tight">
              Ready to Transform Africa Together?
            </h2>
            <p className="text-muted-foreground text-base md:text-lg font-light mb-10 max-w-xl mx-auto">
              Let's build something that outlasts us both.
            </p>
            <div className="line-glow h-px w-24 mx-auto mb-10" />
            <Link
              to="/contact"
              className="glow-button px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider inline-flex items-center gap-2.5"
            >
              Become a Partner <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Partners;
