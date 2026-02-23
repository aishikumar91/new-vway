import { motion } from "framer-motion";
import { Flag, Handshake, Rocket, Globe, Trophy, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";

const milestones = [
  { icon: Flag, title: "Founded as a Youth-Led Movement", description: "VHAY was established as a youth-driven advocacy and empowerment movement with a bold pan-African vision." },
  { icon: Handshake, title: "Institutional Partnerships", description: "Established partnerships with educational institutions to expand access to learning and vocational training." },
  { icon: Rocket, title: "Skills Development Programs", description: "Launched free digital and vocational skills development programs reaching hundreds of young Africans." },
  { icon: Globe, title: "Pan-African Reach", description: "Reached communities across 14 African countries and 28 Nigerian states through outreach and intervention." },
  { icon: Star, title: "Online Youth Network", description: "Built a growing online youth network connecting young Africans across borders for collaboration and advocacy." },
];

const achievements = [
  { icon: Trophy, title: "Leadership Workshops", description: "Successful leadership and capacity-building workshops empowering the next generation of African leaders." },
  { icon: Handshake, title: "Institutional Collaborations", description: "Strategic partnerships with schools, universities, and training institutions for sustainable impact." },
  { icon: Flag, title: "Youth Policy Forums", description: "Youth-led policy forums addressing structural challenges in education, health, and governance." },
  { icon: Rocket, title: "Digital Empowerment", description: "Digital literacy and empowerment campaigns equipping youth with 21st-century skills." },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const item = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };

const Milestones = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-background">
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
              Our Journey
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-display text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] font-bold leading-[0.85] sm:leading-[0.88] mb-6 sm:mb-8 text-image-clip"
            style={{ backgroundImage: `url(${heroBg})` }}
          >
            KEY
            <br />
            MILESTONES
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
            Marking the moments that define our mission and measure our progress.
          </motion.p>
        </div>
      </section>

      {/* Timeline */}
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
              <Flag size={12} className="text-primary" />
              Timeline
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Our Journey So Far
            </h2>
            <div className="line-glow h-px w-24 mx-auto" />
          </motion.div>

          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-primary/10" />

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="space-y-8"
            >
              {milestones.map((milestone, i) => (
                <motion.div
                  key={milestone.title}
                  variants={item}
                  className="relative pl-16 md:pl-20 group"
                >
                  <div className="absolute left-0 top-1 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/15 transition-all duration-500 z-10">
                    <milestone.icon size={24} className="text-primary" />
                  </div>
                  <div className="glass-card p-6 md:p-8 group-hover:border-primary/20 transition-all duration-500">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-primary/60 text-xs font-semibold uppercase tracking-widest">
                        Milestone {i + 1}
                      </span>
                    </div>
                    <h3 className="font-display text-lg md:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground text-sm font-light leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
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
              <Trophy size={12} className="text-primary" />
              Impact
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Achievements
            </h2>
            <div className="line-glow h-px w-24 mx-auto" />
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {achievements.map((achievement) => (
              <motion.div
                key={achievement.title}
                variants={item}
                className="glass-card p-8 group hover:border-primary/20 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-primary/15 transition-all duration-500">
                  <achievement.icon size={26} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {achievement.title}
                </h3>
                <div className="line-glow h-px w-10 mb-3" />
                <p className="text-muted-foreground text-sm font-light leading-relaxed">{achievement.description}</p>
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
              The Best Milestones Are Still Ahead
            </h2>
            <p className="text-muted-foreground text-base md:text-lg font-light mb-10 max-w-xl mx-auto">
              Join us in writing the next chapter of African empowerment.
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

export default Milestones;
