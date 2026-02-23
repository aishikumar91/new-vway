import { motion } from "framer-motion";
import { Youtube, Camera, Play, ArrowUpRight } from "lucide-react";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";

const youtubeHighlights = [
  "Leadership talks and motivational sessions",
  "Youth empowerment workshops and skill-building",
  "Program highlights and impact stories",
  "Community outreach and engagement videos",
];

const instagramHighlights = [
  "Behind-the-scenes of our programs",
  "Youth spotlight stories and testimonials",
  "Event photography and live updates",
  "Inspirational quotes and community voices",
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };

const Media = () => {
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
              Watch &amp; Follow
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-display text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] font-bold leading-[0.85] sm:leading-[0.88] mb-6 sm:mb-8 text-image-clip"
            style={{ backgroundImage: `url(${heroBg})` }}
          >
            MEDIA
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
            Stay connected with the Valorous movement through our digital channels.
          </motion.p>
        </div>
      </section>

      {/* YouTube Section */}
      <section className="section-padding relative">
        <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="glass-card p-10 md:p-14 flex flex-col items-center justify-center text-center group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-24 h-24 rounded-3xl bg-red-500/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-red-500/15 transition-all duration-500">
                  <Youtube size={48} className="text-red-500" />
                </div>
                <Play size={32} className="text-red-500/60 mb-4" />
                <p className="text-muted-foreground text-sm font-light">Subscribe & Watch</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5">
                <Youtube size={12} className="text-primary" />
                YouTube
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                Valorous Hope for African Youths (VHAY)
              </h2>
              <div className="line-glow h-px w-16 mb-6" />
              <p className="text-muted-foreground leading-relaxed mb-6 font-light">
                Our YouTube channel is a hub of inspiring content — from leadership talks and youth empowerment sessions to program highlights and community outreach videos. Watch, learn, and be inspired.
              </p>
              <motion.ul
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-3 mb-8"
              >
                {youtubeHighlights.map((h) => (
                  <motion.li key={h} variants={item} className="flex items-center gap-3 text-muted-foreground text-sm font-light">
                    <Play size={14} className="text-red-500 flex-shrink-0" />
                    <span>{h}</span>
                  </motion.li>
                ))}
              </motion.ul>
              <a
                href="https://www.youtube.com/@valorousafrica"
                target="_blank"
                rel="noopener noreferrer"
                className="glow-button px-5 py-2 rounded-full text-[10px] font-semibold tracking-wider inline-flex items-center gap-2"
              >
                Visit Our Channel <ArrowUpRight size={16} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="section-padding bg-card/30 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-15 pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="order-2 lg:order-1"
            >
              <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5">
                <Camera size={12} className="text-primary" />
                Instagram
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                @valorousafrica
              </h2>
              <div className="line-glow h-px w-16 mb-6" />
              <p className="text-muted-foreground leading-relaxed mb-6 font-light">
                Follow our Instagram for real-time updates, powerful visuals from the ground, community spotlights, and stories of transformation happening across Africa every day.
              </p>
              <motion.ul
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-3 mb-8"
              >
                {instagramHighlights.map((h) => (
                  <motion.li key={h} variants={item} className="flex items-center gap-3 text-muted-foreground text-sm font-light">
                    <Camera size={14} className="text-pink-500 flex-shrink-0" />
                    <span>{h}</span>
                  </motion.li>
                ))}
              </motion.ul>
              <a
                href="https://www.instagram.com/valorousafrica"
                target="_blank"
                rel="noopener noreferrer"
                className="glow-button px-5 py-2 rounded-full text-[10px] font-semibold tracking-wider inline-flex items-center gap-2"
              >
                Follow on Instagram <ArrowUpRight size={16} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="order-1 lg:order-2"
            >
              <div className="glass-card p-10 md:p-14 flex flex-col items-center justify-center text-center group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-orange-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500">
                  <Camera size={48} className="text-pink-500" />
                </div>
                <p className="text-foreground font-display font-bold text-lg mb-1">@valorousafrica</p>
                <p className="text-muted-foreground text-sm font-light">Follow for updates</p>
              </div>
            </motion.div>
          </div>
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
              Share the Story of African Empowerment
            </h2>
            <p className="text-muted-foreground text-base md:text-lg font-light mb-10 max-w-xl mx-auto">
              Every view, every share, every follow amplifies the movement.
            </p>
            <div className="line-glow h-px w-24 mx-auto mb-10" />
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://www.youtube.com/@valorousafrica"
                target="_blank"
                rel="noopener noreferrer"
                className="glow-button px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider inline-flex items-center gap-2.5"
              >
                <Youtube size={18} /> YouTube
              </a>
              <a
                href="https://www.instagram.com/valorousafrica"
                target="_blank"
                rel="noopener noreferrer"
                className="glow-button-outline px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider inline-flex items-center gap-2.5"
              >
                <Camera size={18} /> Instagram
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Media;
