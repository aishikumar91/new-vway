import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Globe } from "lucide-react";
import Layout from "@/components/Layout";
import { useState } from "react";

import teamOutreach from "@/assets/team-outreach.jpg";

const heroStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const heroChild = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const contactInfo = [
  { icon: Mail, label: "Email Us", value: "info@vhay.org" },
  { icon: Phone, label: "Call Us", value: "+234 800 VHAY 001" },
  { icon: MapPin, label: "Headquarters", value: "Lagos, Nigeria" },
  { icon: Globe, label: "Reach", value: "14 African Countries, 28 Nigerian States" },
];

const inputClasses =
  "w-full rounded-xl bg-background/50 border border-border/60 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all duration-200";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for reaching out! VHAY will get back to you soon.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Layout>
      {/* ── Hero ── */}
      <section className="section-padding dot-pattern relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07]">
          <img src={teamOutreach} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />

        <div className="container mx-auto text-center pt-16 pb-4 relative z-10">
          <motion.div
            variants={heroStagger}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center"
          >
            <motion.span
              variants={heroChild}
              className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Contact
            </motion.span>

            <motion.h1
              variants={heroChild}
              className="font-display text-[3rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[7.5rem] xl:text-[9rem] font-bold leading-[0.85] sm:leading-[0.88] mb-6 sm:mb-8 text-gradient-orange"
            >
              LET'S
              <br />
              CONNECT
            </motion.h1>

            <motion.div variants={heroChild} className="line-glow h-px w-28 sm:w-40 mx-auto mb-6 sm:mb-8" />

            <motion.p
              variants={heroChild}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              Want to partner, volunteer, donate, or join VHAY? We'd love to hear from you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left column — info + newsletter */}
            <div className="space-y-5">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="glass-card-hover p-6 flex items-start gap-4 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <info.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{info.label}</p>
                    <p className="text-muted-foreground text-sm mt-1">{info.value}</p>
                  </div>
                </motion.div>
              ))}

              {/* Newsletter */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.32 }}
                className="glass-card-hover p-6 transition-all duration-300"
              >
                <h4 className="font-display font-semibold text-foreground mb-1">Newsletter</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Stay updated with VHAY's impact stories.
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="flex-1 rounded-xl bg-background/50 border border-border/60 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all duration-200"
                  />
                  <button className="glow-button px-4 py-2.5 rounded-full flex items-center justify-center">
                    <Send size={16} />
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Right column — form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 glass-card p-8 md:p-10"
            >
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                Send a Message
              </h3>
              <div className="line-glow h-px w-16 mb-8" />

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className={inputClasses}
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className={inputClasses}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  required
                  className={inputClasses}
                />
                <textarea
                  placeholder="Your Message"
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  className={`${inputClasses} resize-none`}
                />
                <button
                  type="submit"
                  className="glow-button px-8 py-3.5 rounded-full text-sm font-semibold uppercase tracking-wider flex items-center gap-2.5 transition-all duration-300"
                >
                  Send Message <Send size={16} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
