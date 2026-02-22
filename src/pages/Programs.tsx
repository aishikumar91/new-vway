import { motion } from "framer-motion";
import {
  Wrench, GraduationCap, HeartPulse, Scale, Droplets, Leaf, Stethoscope,
  ArrowRight, CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

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

const agendas = [
  {
    icon: Wrench,
    number: "1",
    title: "Free Skill Acquisition & Agricultural Innovation",
    description: "Youth unemployment fuels poverty, insecurity, and migration pressures. VHAY provides 15 digital and vocational skills completely free of charge. In 2023 alone, about 1,000 youths were empowered through free skill acquisition, production equipment distribution, and agricultural innovation support.",
    outcomes: [
      "Laptops for tech graduates",
      "Sewing machines for fashion designers",
      "Baking equipment for pastry entrepreneurs",
      "Climate-resilient farming training",
      "Agribusiness value-chain development",
      "Youth-led agricultural enterprises",
    ],
    highlight: "Agriculture becomes enterprise — not subsistence.",
    image: skillsSewingMachines,
  },
  {
    icon: GraduationCap,
    number: "2",
    title: "Education for Out-of-School Children",
    description: "Nigeria has one of the highest out-of-school child populations globally — estimated at over 10 million children (UNICEF). The consequences include poverty cycles, child labor, increased vulnerability to extremism, and reduced national productivity.",
    outcomes: [
      "Scholarship programs",
      "Reintegration into formal education",
      "Learning materials support",
      "Community-based educational advocacy",
    ],
    highlight: "Education is economic infrastructure. Every child restored to school increases Africa's long-term GDP potential.",
    image: communityEngagement,
  },
  {
    icon: HeartPulse,
    number: "3",
    title: "Maternal & Newborn Health Program",
    description: "Africa accounts for roughly 70% of global maternal deaths (WHO). Many result from lack of prenatal care, inadequate skilled birth attendance, financial barriers, and limited rural health access.",
    outcomes: [
      "Financial support for prenatal and postnatal care",
      "Access to skilled delivery services",
      "Essential newborn care packages",
      "Community maternal health awareness",
      "Partnerships with healthcare providers",
    ],
    highlight: "Healthy mothers produce healthy generations.",
    image: healthMaternal,
  },
  {
    icon: Scale,
    number: "4",
    title: "Prison Bailout & Rehabilitation",
    description: "Across Nigeria and parts of Africa, a significant proportion of inmates are awaiting trial. Many remain incarcerated due to inability to meet bail conditions — overcrowded facilities, financial incapacity, and legal ignorance.",
    outcomes: [
      "Legal support assistance",
      "Bail payment for indigent inmates",
      "3-month intensive skill acquisition program",
      "Equipment distribution upon completion",
      "Leadership & character transformation training",
    ],
    highlight: "Rehabilitation transforms former inmates into entrepreneurs — not returnees to crime.",
    image: eventCertificates,
  },
  {
    icon: Droplets,
    number: "5",
    title: "Sickle Cell Empowerment Program",
    description: "Nigeria bears one of the highest global burdens of sickle cell disorder, with approximately 150,000 affected births annually (WHO). Many face physical limitations, employment barriers, and financial instability.",
    outcomes: [
      "Flexible skill acquisition programs",
      "Home-based entrepreneurship training",
      "Equipment provision",
      "Support for caregivers and families",
    ],
    highlight: "We call them 'Power Blood Cell Warriors.' Empowerment restores dignity.",
    image: skillsInclusion,
  },
  {
    icon: Leaf,
    number: "6",
    title: "Climate Change, Smart Agriculture & Blue Economy",
    description: "Although Africa contributes less than 4% of global carbon emissions, it is among the most climate-vulnerable regions. VHAY trains youth in smart agriculture, sustainable fisheries, aquaculture, and environmental photography.",
    outcomes: [
      "Climate-resilient crop education",
      "Sustainable fisheries & aquaculture",
      "Marine transport & coastal tourism",
      "Agritech digital literacy",
      "Environmental advocacy & photography",
      "Youth agribusiness incubation",
    ],
    highlight: "Climate resilience becomes youth opportunity.",
    image: communityAgriculture,
  },
  {
    icon: Stethoscope,
    number: "7",
    title: "Free Healthcare Services for the Elderly",
    description: "Africa's traditional culture honors elders, yet economic realities have weakened structured elderly support systems. Non-communicable diseases disproportionately affect older adults.",
    outcomes: [
      "Free medical outreach programs",
      "Chronic disease screening",
      "Medication assistance",
      "Vision and hearing support",
      "Intergenerational community engagement",
    ],
    highlight: "No elder who built society should suffer neglect in old age.",
    image: communityElderly,
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
      <section className="section-padding dot-pattern relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={eventEquipmentDistribution} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />

        <div className="container mx-auto text-center pt-16 pb-4 relative z-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5"
            >
              Strategic Framework
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="font-display text-[3rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[7.5rem] xl:text-[9rem] font-bold leading-[0.85] sm:leading-[0.88] mb-6 sm:mb-8 text-gradient-orange"
            >
              SEVEN
              <br />
              AGENDAS
            </motion.h1>

            <motion.div variants={fadeUp} className="line-glow h-px w-28 sm:w-40 mx-auto mb-6 sm:mb-8" />

            <motion.p
              variants={fadeUp}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed"
            >
              Seven transformative agendas to equip, educate, heal, restore, and elevate Africa's most valuable asset — its people.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Agendas ── */}
      <section className="section-padding">
        <div className="container mx-auto space-y-28 md:space-y-36">
          {agendas.map((agenda, idx) => {
            const isReversed = idx % 2 !== 0;

            return (
              <motion.div
                key={agenda.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center ${
                  isReversed ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Text column */}
                <div className={isReversed ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      whileHover={{ rotate: -6, scale: 1.08 }}
                      className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center"
                    >
                      <agenda.icon size={28} className="text-primary" />
                    </motion.div>
                    <div className="w-10 h-10 rounded-full bg-primary/5 border border-primary/20 flex items-center justify-center">
                      <span className="font-display font-bold text-primary text-sm">{agenda.number}</span>
                    </div>
                    <div className="line-glow h-px flex-1" />
                  </div>

                  <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-5 leading-tight">
                    {agenda.title}
                  </h2>

                  <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-5">
                    {agenda.description}
                  </p>

                  <p className="text-primary font-semibold text-sm italic mb-8 pl-4 border-l-2 border-primary/30">
                    "{agenda.highlight}"
                  </p>

                  <Link
                    to="/donate"
                    className="glow-button px-7 py-3 rounded-full text-sm font-semibold tracking-wider inline-flex items-center gap-2"
                  >
                    Support This Agenda <ArrowRight size={16} />
                  </Link>
                </div>

                {/* Visual column */}
                <div className={`space-y-5 ${isReversed ? "lg:order-1" : ""}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                    className="rounded-2xl overflow-hidden h-64 md:h-72 shadow-lg shadow-black/5"
                  >
                    <img
                      src={agenda.image}
                      alt={agenda.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </motion.div>

                  <div className="glass-card-hover p-6 md:p-8">
                    <h4 className="font-display font-semibold text-foreground mb-5 flex items-center gap-2">
                      <span className="w-1.5 h-5 rounded-full bg-primary inline-block" />
                      Key Interventions
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                      {agenda.outcomes.map((outcome) => (
                        <div key={outcome} className="flex items-start gap-3">
                          <CheckCircle size={16} className="text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground text-sm leading-snug">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding bg-card/20">
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
                Support All 7 Agendas
              </h2>

              <div className="line-glow h-px w-24 mx-auto mb-6" />

              <p className="text-muted-foreground mb-10 max-w-xl mx-auto text-lg leading-relaxed">
                Every contribution helps equip, educate, heal, restore, and elevate African communities.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/donate"
                  className="glow-button px-10 py-4 rounded-full text-base font-semibold tracking-wider flex items-center gap-2"
                >
                  Donate Now <ArrowRight size={18} />
                </Link>
                <Link
                  to="/contact"
                  className="glow-button-outline px-10 py-4 rounded-full text-base font-semibold tracking-wider"
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
