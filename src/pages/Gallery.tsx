import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

import skillsFashionClass from "@/assets/skills-fashion-class.jpg";
import eventEquipmentDistribution from "@/assets/event-equipment-distribution.jpg";
import healthMaternal from "@/assets/health-maternal.jpg";
import communityAgriculture from "@/assets/community-agriculture.jpg";
import skillsInclusion from "@/assets/skills-inclusion.jpg";
import communityEngagement from "@/assets/community-engagement.jpg";
import communityElderly from "@/assets/community-elderly.jpg";
import healthOutreach from "@/assets/health-outreach.jpg";
import eventCertificates from "@/assets/event-certificates.jpg";
import eventBannerStage from "@/assets/event-banner-stage.jpg";
import skillsSewing from "@/assets/skills-sewing.jpg";
import skillsSewingMachines from "@/assets/skills-sewing-machines.jpg";
import skillsBeauty from "@/assets/skills-beauty.jpg";
import teamOutreach from "@/assets/team-outreach.jpg";
import teamRoad from "@/assets/team-road.jpg";
import eventGathering from "@/assets/event-gathering.jpg";
import eventSpeakerPodium from "@/assets/event-speaker-podium.jpg";
import eventStageYouth from "@/assets/event-stage-youth.jpg";
import eventAudienceWide from "@/assets/event-audience-wide.jpg";
import healthScreening from "@/assets/health-screening.jpg";
import healthPharmacy from "@/assets/health-pharmacy.jpg";
import eventTestimonial from "@/assets/event-testimonial.jpg";
import eventGroupBackdrop from "@/assets/event-group-backdrop.jpg";
import communityGroup from "@/assets/community-group.jpg";
import founderSpeaking from "@/assets/founder-speaking.jpg";
import eventWideStage from "@/assets/event-wide-stage.jpg";
import communityRuralVisit from "@/assets/community-rural-visit.jpg";
import outreachYouth from "@/assets/outreach-youth.jpg";
import eventIndoorAudience from "@/assets/event-indoor-audience.jpg";
import founderHeadshot from "@/assets/founder-headshot.jpg";
import founderCasual from "@/assets/founder-casual.jpg";
import eventCommunityField from "@/assets/event-community-field.jpg";
import eventEmpowerment from "@/assets/event-empowerment.jpg";
import eventOutreachField from "@/assets/event-outreach-field.jpg";
import eventRuralOutreach from "@/assets/event-rural-outreach.jpg";
import eventYouthLeaders from "@/assets/event-youth-leaders.jpg";
import eventCelebration from "@/assets/event-celebration.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const images = [
  { title: "Skill Acquisition Training", category: "Skills", src: skillsFashionClass, aspectClass: "aspect-square" },
  { title: "Equipment Distribution Day", category: "Empowerment", src: eventEquipmentDistribution, aspectClass: "aspect-[4/5]" },
  { title: "Maternal Health Outreach", category: "Health", src: healthMaternal, aspectClass: "aspect-square" },
  { title: "Community Agriculture", category: "Agriculture", src: communityAgriculture, aspectClass: "aspect-[4/5]" },
  { title: "Sickle Cell Awareness Day", category: "Health", src: skillsInclusion, aspectClass: "aspect-square" },
  { title: "Community Engagement", category: "Education", src: communityEngagement, aspectClass: "aspect-[4/5]" },
  { title: "Elderly Healthcare Drive", category: "Health", src: communityElderly, aspectClass: "aspect-[4/5]" },
  { title: "Medical Outreach", category: "Health", src: healthOutreach, aspectClass: "aspect-square" },
  { title: "Certificate Ceremony", category: "Empowerment", src: eventCertificates, aspectClass: "aspect-[4/5]" },
  { title: "Youth Summit", category: "Leadership", src: eventBannerStage, aspectClass: "aspect-square" },
  { title: "Fashion Design Training", category: "Skills", src: skillsSewing, aspectClass: "aspect-[4/5]" },
  { title: "Sewing Machine Practice", category: "Skills", src: skillsSewingMachines, aspectClass: "aspect-square" },
  { title: "Beauty & Cosmetology", category: "Skills", src: skillsBeauty, aspectClass: "aspect-[4/5]" },
  { title: "Team on Outreach", category: "Empowerment", src: teamOutreach, aspectClass: "aspect-square" },
  { title: "VHAY Volunteers", category: "Empowerment", src: teamRoad, aspectClass: "aspect-[4/5]" },
  { title: "Youth Gathering", category: "Education", src: eventGathering, aspectClass: "aspect-square" },
  { title: "Speaker at Podium", category: "Leadership", src: eventSpeakerPodium, aspectClass: "aspect-[4/5]" },
  { title: "Youth on Stage", category: "Empowerment", src: eventStageYouth, aspectClass: "aspect-square" },
  { title: "VHAY Conference", category: "Leadership", src: eventAudienceWide, aspectClass: "aspect-[4/5]" },
  { title: "Health Screening Camp", category: "Health", src: healthScreening, aspectClass: "aspect-square" },
  { title: "Pharmacy Outreach", category: "Health", src: healthPharmacy, aspectClass: "aspect-[4/5]" },
  { title: "Testimonials on Stage", category: "Empowerment", src: eventTestimonial, aspectClass: "aspect-square" },
  { title: "Group Photo", category: "Empowerment", src: eventGroupBackdrop, aspectClass: "aspect-[4/5]" },
  { title: "Community Group", category: "Education", src: communityGroup, aspectClass: "aspect-square" },
  { title: "Founder Speaking", category: "Leadership", src: founderSpeaking, aspectClass: "aspect-[4/5]" },
  { title: "Main Stage Event", category: "Leadership", src: eventWideStage, aspectClass: "aspect-square" },
  { title: "Rural Community Visit", category: "Education", src: communityRuralVisit, aspectClass: "aspect-[4/5]" },
  { title: "Youth Outreach", category: "Education", src: outreachYouth, aspectClass: "aspect-square" },
  { title: "Indoor Audience", category: "Leadership", src: eventIndoorAudience, aspectClass: "aspect-[4/5]" },
  { title: "VHAY Leadership", category: "Leadership", src: founderHeadshot, aspectClass: "aspect-square" },
  { title: "Community Field Outreach", category: "Health", src: eventCommunityField, aspectClass: "aspect-[4/5]" },
  { title: "Youth Empowerment Program", category: "Empowerment", src: eventEmpowerment, aspectClass: "aspect-square" },
  { title: "Field Outreach Mission", category: "Education", src: eventOutreachField, aspectClass: "aspect-[4/5]" },
  { title: "Rural Outreach Drive", category: "Health", src: eventRuralOutreach, aspectClass: "aspect-square" },
  { title: "Youth Leadership Program", category: "Leadership", src: eventYouthLeaders, aspectClass: "aspect-[4/5]" },
  { title: "Celebration Event", category: "Empowerment", src: eventCelebration, aspectClass: "aspect-square" },
  { title: "VHAY Founder", category: "Leadership", src: founderCasual, aspectClass: "aspect-[4/5]" },
];

const categories = ["All", "Skills", "Empowerment", "Health", "Education", "Leadership", "Agriculture"];
const container = { hidden: {}, show: { transition: { staggerChildren: 0.04 } } };
const itemAnim = { hidden: { opacity: 0, scale: 0.95 }, show: { opacity: 1, scale: 1, transition: { duration: 0.4 } } };

const heroStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const heroChild = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Gallery = () => (
  <Layout>
    {/* ── Hero ── */}
    <section className="relative overflow-hidden bg-background/85 pt-32 pb-20 md:pt-40 md:pb-24 dot-pattern">
      <div className="absolute inset-0 opacity-[0.07]">
        <img src={eventGroupBackdrop} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />

      <div className="container mx-auto px-4 text-left relative z-10">
        <motion.div
          variants={heroStagger}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start"
        >
          <motion.span
            variants={heroChild}
            className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Gallery
          </motion.span>

          <motion.h1
            variants={heroChild}
            className="font-display text-[3.25rem] sm:text-[4.75rem] md:text-[6.5rem] lg:text-[8rem] xl:text-[9.5rem] font-bold leading-[0.85] sm:leading-[0.88] mb-6 sm:mb-8 text-image-clip text-left"
            style={{ backgroundImage: `url(${heroBg})` }}
          >
            MOMENTS OF
            <br />
            IMPACT
          </motion.h1>

          <motion.div variants={heroChild} className="line-glow h-px w-28 sm:w-40 mr-auto mb-6 sm:mb-8" />

          <motion.p
            variants={heroChild}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed text-left"
          >
            Real moments from VHAY's work across Africa — empowering, healing, and transforming communities.
          </motion.p>
        </motion.div>
      </div>
    </section>

    {/* ── Gallery Grid ── */}
    <section className="section-padding">
      <div className="container mx-auto">
        {/* Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-2.5 mb-14"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                cat === "All"
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "glass-card text-muted-foreground hover:text-foreground hover:border-primary/30 hover:shadow-md"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5"
        >
          {images.map((img, i) => (
            <motion.div
              key={i}
              variants={itemAnim}
              className="break-inside-avoid rounded-2xl overflow-hidden cursor-pointer group relative"
            >
              <div className={`${img.aspectClass} overflow-hidden relative`}>
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-5">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-primary mb-1.5">
                    {img.category}
                  </span>
                  <h4 className="font-display font-semibold text-white text-sm leading-snug">
                    {img.title}
                  </h4>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Gallery;
