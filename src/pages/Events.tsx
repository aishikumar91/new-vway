import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

import eventBannerStage from "@/assets/event-banner-stage.jpg";
import eventWideStage from "@/assets/event-wide-stage.jpg";
import healthScreening from "@/assets/health-screening.jpg";
import communityAgriculture from "@/assets/community-agriculture.jpg";
import eventCertificates from "@/assets/event-certificates.jpg";
import eventGroupBackdrop from "@/assets/event-group-backdrop.jpg";
import healthOutreach from "@/assets/health-outreach.jpg";
import skillsSewingMachines from "@/assets/skills-sewing-machines.jpg";
import eventAudienceWide from "@/assets/event-audience-wide.jpg";

const upcoming = [
  { title: "Pan-African Youth Empowerment Summit", date: "March 15, 2026", location: "Lagos, Nigeria", description: "A 3-day summit bringing together youth leaders from 14 African countries.", image: eventBannerStage },
  { title: "Free Skill Acquisition Drive", date: "April 8-10, 2026", location: "Nairobi, Kenya", description: "Free vocational and digital skills training with equipment distribution.", image: skillsSewingMachines },
  { title: "Maternal Health Outreach", date: "May 22, 2026", location: "Accra, Ghana", description: "Prenatal care, skilled delivery services, and newborn care packages.", image: healthScreening },
  { title: "Climate Action & Blue Economy Workshop", date: "June 14, 2026", location: "Dar es Salaam, Tanzania", description: "Smart agriculture training, aquaculture, and environmental photography.", image: communityAgriculture },
];

const past = [
  { title: "1,000 Youths Empowered (2023)", location: "Across Nigeria", image: eventCertificates },
  { title: "Sickle Cell Awareness Day", location: "Lagos, Nigeria", image: eventGroupBackdrop },
  { title: "Elderly Healthcare Outreach", location: "Kigali, Rwanda", image: healthOutreach },
  { title: "Prison Rehabilitation Program", location: "Abuja, Nigeria", image: eventWideStage },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const Events = () => (
  <Layout>
    <section className="section-padding dot-pattern relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07]">
        <img src={eventAudienceWide} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      <div className="container mx-auto text-center pt-16 pb-4 relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5"
        >
          <Calendar size={12} />
          Events
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-display text-[3rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[7.5rem] xl:text-[9rem] font-bold leading-[0.85] sm:leading-[0.88] mb-6 sm:mb-8 text-gradient-orange"
        >
          UPCOMING
          <br />
          EVENTS
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="line-glow h-px w-28 sm:w-40 mx-auto mb-6 sm:mb-8"
        />
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Join VHAY's transformative events across the African continent.
        </motion.p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto">
        <SectionHeading tag="Upcoming" title="Register Now" />
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcoming.map((event) => (
            <motion.div key={event.title} variants={item} className="glass-card-hover overflow-hidden group">
              <div className="h-56 overflow-hidden relative">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg shadow-primary/30">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={11} />
                    {event.date}
                  </span>
                </div>
              </div>
              <div className="p-7">
                <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{event.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{event.description}</p>
                <div className="flex items-center gap-2 text-muted-foreground text-xs mb-5">
                  <MapPin size={13} className="text-primary/70" />
                  <span>{event.location}</span>
                </div>
                <button className="w-full glow-button py-2.5 rounded-full text-sm font-semibold tracking-wider flex items-center justify-center gap-2 group/btn">
                  Register
                  <ArrowRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    <section className="section-padding bg-card/30 relative">
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="container mx-auto relative z-10">
        <SectionHeading tag="Archive" title="Past Events" />
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {past.map((event) => (
            <motion.div key={event.title} variants={item} className="glass-card-hover overflow-hidden group">
              <div className="h-44 overflow-hidden relative">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-4">
                  <h4 className="font-display font-bold text-white text-sm leading-snug drop-shadow-lg">{event.title}</h4>
                </div>
              </div>
              <div className="p-4">
                <p className="text-muted-foreground text-xs flex items-center gap-1.5">
                  <MapPin size={11} className="text-primary/70" /> {event.location}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Events;
