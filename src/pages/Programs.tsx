import { motion } from "framer-motion";
import {
  BookOpen, GraduationCap, Briefcase, HeartPulse, Scale, Users,
  Lightbulb, Megaphone, CheckCircle, ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import skillsSewingMachines from "@/assets/skills-sewing-machines.jpg";
import communityEngagement from "@/assets/community-engagement.jpg";
import healthMaternal from "@/assets/health-maternal.jpg";
import eventCertificates from "@/assets/event-certificates.jpg";
import skillsInclusion from "@/assets/skills-inclusion.jpg";
import communityAgriculture from "@/assets/community-agriculture.jpg";
import healthOutreach from "@/assets/health-outreach.jpg";
import eventEquipmentDistribution from "@/assets/event-equipment-distribution.jpg";
import skillsFashionClass from "@/assets/skills-fashion-class.jpg";
import healthScreening from "@/assets/health-screening.jpg";
import communityElderly from "@/assets/community-elderly.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const programs = [
  {
    icon: BookOpen,
    accentIcon: GraduationCap,
    number: "01",
    title: "Education Access Program",
    description:
      "We act as a liaison between students and school management, ensuring that African youth have every opportunity to succeed academically.",
    points: [
      "Academic mentorship",
      "Scholarship awareness",
      "Student advocacy",
      "Institutional engagement",
    ],
    image: communityEngagement,
  },
  {
    icon: Briefcase,
    accentIcon: Lightbulb,
    number: "02",
    title: "Skills Training Initiative",
    description:
      "Providing free training to equip young Africans with market-ready skills that open doors to employment and entrepreneurship.",
    points: [
      "Digital skills",
      "Entrepreneurship",
      "Leadership development",
      "Vocational programs",
    ],
    image: skillsSewingMachines,
  },
  {
    icon: Scale,
    accentIcon: Megaphone,
    number: "03",
    title: "Leadership & Policy Development",
    description:
      "Building the next generation of African leaders who understand civic structures and can advocate for meaningful change.",
    points: [
      "Civic engagement",
      "Policy understanding",
      "Community leadership",
      "Public speaking & advocacy",
    ],
    image: eventCertificates,
  },
  {
    icon: HeartPulse,
    accentIcon: Users,
    number: "04",
    title: "Healthcare & Well-being",
    description:
      "Promoting physical and mental wellness among African youth through awareness campaigns and accessible health resources.",
    points: [
      "Mental health awareness",
      "Preventive healthcare education",
      "Youth health access campaigns",
    ],
    image: healthMaternal,
  },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Programs = () => {
  return (
    <Layout>
      {/* ── Hero ── */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-background">
        <div className="absolute inset-0 dot-pattern opacity-40" />

        <div className="absolute inset-0 opacity-[0.07]">
          <img src={eventEquipmentDistribution} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />

        <motion.div
          className="hero-gradient-orb"
          style={{ width: 400, height: 400, left: "20%", top: "15%", background: "hsl(24 90% 54% / 0.10)" }}
          animate={{ y: [0, -20, 0], scale: [1, 1.06, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="hero-gradient-orb"
          style={{ width: 300, height: 300, right: "12%", bottom: "18%", background: "hsl(220 60% 60% / 0.06)" }}
          animate={{ y: [0, 15, 0], scale: [1, 0.95, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        <div className="relative z-10 container mx-auto px-4 text-center py-32 md:py-40">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-8 px-5 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              What We Do
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="font-display text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] font-bold leading-[0.85] sm:leading-[0.88] mb-6 sm:mb-8 text-image-clip"
              style={{ backgroundImage: `url(${heroBg})` }}
            >
              OUR
              <br />
              PROGRAMS
            </motion.h1>

            <motion.div variants={fadeUp} className="line-glow h-px w-28 sm:w-40 mx-auto mb-6 sm:mb-8" />

            <motion.p
              variants={fadeUp}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed"
            >
              Four strategic programs designed to educate, equip, lead, and heal Africa's most valuable asset — its youth.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Program Cards ── */}
      <section className="section-padding">
        <div className="container mx-auto space-y-28 md:space-y-36">
          {programs.map((program, idx) => {
            const isReversed = idx % 2 !== 0;

            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center`}
              >
                {/* Text column */}
                <div className={isReversed ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      whileHover={{ rotate: -6, scale: 1.08 }}
                      className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center"
                    >
                      <program.icon size={28} className="text-primary" />
                    </motion.div>
                    <div className="w-10 h-10 rounded-full bg-primary/5 border border-primary/20 flex items-center justify-center">
                      <span className="font-display font-bold text-primary text-sm">{program.number}</span>
                    </div>
                    <div className="line-glow h-px flex-1" />
                  </div>

                  <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-5 leading-tight">
                    {program.title}
                  </h2>

                  <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-8">
                    {program.description}
                  </p>

                  <div className="glass-card p-6 md:p-8 mb-8">
                    <h4 className="font-display font-semibold text-foreground mb-5 flex items-center gap-2">
                      <span className="w-1.5 h-5 rounded-full bg-primary inline-block" />
                      Key Focus Areas
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                      {program.points.map((point) => (
                        <div key={point} className="flex items-start gap-3">
                          <CheckCircle size={16} className="text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground text-sm leading-snug">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/donate"
                    className="glow-button px-5 py-2 rounded-full text-[10px] font-semibold tracking-wider inline-flex items-center gap-2"
                  >
                    Support This Program <ArrowRight size={16} />
                  </Link>
                </div>

                {/* Visual column */}
                <div className={`${isReversed ? "lg:order-1" : ""}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                    className="rounded-2xl overflow-hidden h-72 md:h-96 shadow-lg shadow-black/5 relative group"
                  >
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                    <div className="absolute bottom-5 left-5 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                        <program.accentIcon size={20} className="text-primary" />
                      </div>
                      <span className="text-foreground font-display font-semibold text-sm drop-shadow-md">
                        {program.title}
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding bg-card/20 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-25 pointer-events-none" />
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-12 md:p-16 glow-border relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10">
              <img src={skillsFashionClass} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 dot-pattern opacity-40" />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5">
                Get Involved
              </span>

              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Support Our Programs
              </h2>

              <div className="line-glow h-px w-24 mx-auto mb-6" />

              <p className="text-muted-foreground mb-10 max-w-xl mx-auto text-lg leading-relaxed">
                Every contribution empowers African youth with education, skills, leadership, and better health outcomes.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/donate"
                  className="glow-button px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider flex items-center gap-2"
                >
                  Donate Now <ArrowRight size={18} />
                </Link>
                <Link
                  to="/contact"
                  className="glow-button-outline px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider"
                >
                  Volunteer
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Programs;
