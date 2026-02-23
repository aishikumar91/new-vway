import { motion } from "framer-motion";
import { Users, Award, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";

const leadershipTeam = [
  { initials: "AK", name: "Aishi Kumar", position: "Founder & CEO", bio: "Visionary leader driving youth empowerment across Africa through structured development programs." },
  { initials: "SO", name: "Sarah Okonkwo", position: "Programs Director", bio: "Oversees the design and execution of all VHAY empowerment and outreach initiatives." },
  { initials: "DF", name: "David Fashola", position: "Operations Lead", bio: "Manages day-to-day operations ensuring efficient delivery of services across regions." },
  { initials: "NM", name: "Nkechi Madu", position: "Communications Director", bio: "Shapes the narrative and amplifies the voice of African youth through strategic media." },
  { initials: "JA", name: "James Adeyemi", position: "Partnerships Manager", bio: "Builds and nurtures relationships with institutions, NGOs, and corporate partners." },
  { initials: "FA", name: "Fatima Aliyu", position: "Youth Engagement Lead", bio: "Connects directly with young people to design programs that reflect their needs and aspirations." },
];

const advisoryBoard = [
  { initials: "PO", name: "Prof. Olumide Ajayi", position: "Education Advisor", bio: "Former university dean with 25 years of experience in African educational reform." },
  { initials: "DA", name: "Dr. Amara Diallo", position: "Health & Wellbeing Advisor", bio: "Public health specialist focused on maternal and youth health across Sub-Saharan Africa." },
  { initials: "BE", name: "Barrister Emeka Nwosu", position: "Legal & Policy Advisor", bio: "Expert in youth policy advocacy and institutional governance frameworks." },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };

const Team = () => {
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

        <div className="relative z-10 container mx-auto px-4 text-center py-32 md:py-40">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-8 px-5 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              The People Behind VHAY
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-display text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] font-bold leading-[0.85] sm:leading-[0.88] mb-6 sm:mb-8 text-image-clip"
            style={{ backgroundImage: `url(${heroBg})` }}
          >
            OUR TEAM
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
            Meet the passionate young leaders driving the Valorous movement.
          </motion.p>
        </div>
      </section>

      {/* Leadership Team */}
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
              <Users size={12} className="text-primary" />
              Leadership
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Leadership Team
            </h2>
            <div className="line-glow h-px w-24 mx-auto" />
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {leadershipTeam.map((member) => (
              <motion.div
                key={member.name}
                variants={item}
                className="glass-card p-6 md:p-8 group hover:border-primary/20 transition-all duration-500"
              >
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:bg-primary/15 transition-all duration-500">
                  <span className="text-primary font-display font-bold text-xl">{member.initials}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-foreground text-center mb-1 group-hover:text-primary transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-primary/80 text-sm font-semibold text-center mb-3">{member.position}</p>
                <div className="line-glow h-px w-10 mx-auto mb-3" />
                <p className="text-muted-foreground text-sm font-light leading-relaxed text-center">{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Advisory Board */}
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
              <Award size={12} className="text-primary" />
              Advisors
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Advisory Board
            </h2>
            <div className="line-glow h-px w-24 mx-auto mb-4" />
            <p className="text-muted-foreground text-base font-light max-w-xl mx-auto">
              Experienced mentors and professionals supporting our mission.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {advisoryBoard.map((member) => (
              <motion.div
                key={member.name}
                variants={item}
                className="glass-card p-6 md:p-8 group hover:border-primary/20 transition-all duration-500"
              >
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:bg-primary/15 transition-all duration-500">
                  <span className="text-primary font-display font-bold text-xl">{member.initials}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-foreground text-center mb-1 group-hover:text-primary transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-primary/80 text-sm font-semibold text-center mb-3">{member.position}</p>
                <div className="line-glow h-px w-10 mx-auto mb-3" />
                <p className="text-muted-foreground text-sm font-light leading-relaxed text-center">{member.bio}</p>
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
            <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5">
              <Sparkles size={12} className="text-primary" />
              Join Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-5 max-w-3xl mx-auto leading-tight">
              Want to Be Part of the Team?
            </h2>
            <p className="text-muted-foreground text-base md:text-lg font-light mb-10 max-w-xl mx-auto">
              We're always looking for passionate individuals ready to make a difference.
            </p>
            <div className="line-glow h-px w-24 mx-auto mb-10" />
            <a
              href="/contact"
              className="glow-button px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider inline-flex items-center gap-2.5"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
