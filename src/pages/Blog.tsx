import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

import SocialShareButtons from "@/components/SocialShareButtons";
import eventCertificates from "@/assets/event-certificates.jpg";
import communityGroup from "@/assets/community-group.jpg";
import skillsInclusion from "@/assets/skills-inclusion.jpg";
import healthMaternal from "@/assets/health-maternal.jpg";
import communityAgriculture from "@/assets/community-agriculture.jpg";
import eventCelebration from "@/assets/event-celebration.jpg";
import eventSpeakerPodium from "@/assets/event-speaker-podium.jpg";

const posts = [
  { title: "1,000 Youths Empowered with Free Skills & Equipment in 2023", slug: "1000-youths-empowered-2023", category: "Impact", date: "Feb 10, 2026", excerpt: "VHAY's free skill acquisition program distributed laptops, sewing machines, baking equipment, and more to youth across Nigeria.", featured: true, image: eventCertificates },
  { title: "VHAY Expands Presence to 14 African Countries", slug: "vhay-expands-14-countries", category: "Growth", date: "Feb 05, 2026", excerpt: "Strategic expansion brings VHAY's seven-agenda framework to new African communities.", image: communityGroup },
  { title: "Power Blood Cell Warriors: Sickle Cell Empowerment Stories", slug: "sickle-cell-empowerment", category: "Health", date: "Jan 28, 2026", excerpt: "Home-based entrepreneurship training transforms lives of those living with sickle cell disorder.", image: skillsInclusion },
  { title: "Free Maternal Healthcare Outreach Reaches Rural Communities", slug: "maternal-healthcare-outreach", category: "Health", date: "Jan 20, 2026", excerpt: "VHAY partners with healthcare providers to deliver prenatal and postnatal care in underserved areas.", image: healthMaternal },
  { title: "Youth-Led Climate Action: Smart Agriculture in Action", slug: "youth-climate-action", category: "Climate", date: "Jan 15, 2026", excerpt: "Young Africans champion climate-resilient farming and agribusiness value-chain development.", image: communityAgriculture },
  { title: "From Prison to Productivity: Rehabilitation Success Stories", slug: "prison-rehabilitation", category: "Justice", date: "Jan 08, 2026", excerpt: "Former inmates transformed into entrepreneurs through VHAY's 3-month skill acquisition program.", image: eventCelebration },
];
const categories = ["All", "Impact", "Growth", "Health", "Climate", "Justice"];
const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const Blog = () => {
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <Layout>
      <section className="section-padding dot-pattern relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07]">
          <img src={eventSpeakerPodium} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="container mx-auto text-center pt-16 pb-4 relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5"
          >
            <BookOpen size={12} />
            Blog
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-display text-[3rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[7.5rem] xl:text-[9rem] font-bold leading-[0.85] sm:leading-[0.88] mb-6 sm:mb-8 text-gradient-orange"
          >
            STORIES OF
            <br />
            IMPACT
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
            Insights, updates, and stories from across the VHAY community.
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-2.5 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-5 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                  cat === "All"
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/25 scale-[1.02]"
                    : "bg-card/80 text-muted-foreground border border-border/60 hover:border-primary/30 hover:text-primary hover:bg-primary/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {featured && (
            <Link to={`/blog/${featured.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-card-hover overflow-hidden mb-14 cursor-pointer group"
              >
                <div className="grid grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-3 h-72 md:h-[420px] overflow-hidden relative">
                    <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10 group-hover:to-black/5 transition-colors duration-500" />
                    <span className="absolute top-5 left-5 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg shadow-primary/30">
                      Featured
                    </span>
                  </div>
                  <div className="md:col-span-2 p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-primary px-3 py-1 rounded-full border border-primary/20 bg-primary/5">
                        <BookOpen size={11} />
                        {featured.category}
                      </span>
                    </div>
                    <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight group-hover:text-primary transition-colors duration-300">{featured.title}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">{featured.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-border/40">
                      <p className="text-muted-foreground text-xs tracking-wide">{featured.date}</p>
                      <SocialShareButtons url={`${window.location.origin}/blog/${featured.slug}`} title={featured.title} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          )}

          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {rest.map((post) => (
              <motion.div key={post.title} variants={item}>
                <Link to={`/blog/${post.slug}`} className="glass-card-hover overflow-hidden cursor-pointer group block h-full">
                  <div className="h-48 overflow-hidden relative">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-snug mb-3 text-lg">{post.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-3 border-t border-border/30">
                      <p className="text-muted-foreground text-xs tracking-wide">{post.date}</p>
                      <SocialShareButtons url={`${window.location.origin}/blog/${post.slug}`} title={post.title} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
