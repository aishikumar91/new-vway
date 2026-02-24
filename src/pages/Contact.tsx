import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Globe } from "lucide-react";
import { toast } from "sonner";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";
import teamOutreach from "@/assets/team-outreach.jpg";

const heroStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const heroChild = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "info@valoroushopeforafrica.org",
    href: "mailto:info@valoroushopeforafrica.org",
  },
  {
    icon: Globe,
    label: "Website",
    value: "valoroushopeforafrica.org",
    href: "https://valoroushopeforafrica.org",
  },
];

const inputClasses =
  "w-full rounded-xl bg-background/50 border border-border/60 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all duration-200";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(
      "Thank you for reaching out! We will get back to you shortly.",
    );
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <Layout>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-background/85 pt-32 pb-20 md:pt-40 md:pb-24 dot-pattern">
        <div className="absolute inset-0 opacity-[0.07]">
          <img
            src={teamOutreach}
            alt=""
            className="w-full h-full object-cover"
          />
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
              Contact
            </motion.span>

            <motion.h1
              variants={heroChild}
              className="font-display text-[3.25rem] sm:text-[4.75rem] md:text-[6.5rem] lg:text-[8rem] xl:text-[9.5rem] font-bold leading-[0.85] sm:leading-[0.88] mb-6 sm:mb-8 text-image-clip text-left"
              style={{ backgroundImage: `url(${heroBg})` }}
            >
              GET IN
              <br />
              TOUCH
            </motion.h1>

            <motion.div
              variants={heroChild}
              className="line-glow h-px w-28 sm:w-40 mr-auto mb-6 sm:mb-8"
            />

            <motion.p
              variants={heroChild}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed text-left"
            >
              We would love to hear from you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Contact Info + Form ── */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left column — contact info */}
            <div className="space-y-5">
              {contactDetails.map((info, i) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-6 flex items-start gap-4 transition-all duration-300 hover:border-primary/30 block"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <info.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {info.label}
                    </p>
                    <p className="text-muted-foreground text-sm mt-1 break-all">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}

              {/* Decorative image card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="glass-card overflow-hidden"
              >
                <img
                  src={teamOutreach}
                  alt="Community outreach"
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h4 className="font-display font-semibold text-foreground mb-1">
                    Community Outreach
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Reaching communities across Africa with hope and
                    empowerment.
                  </p>
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
                Send Us a Message
              </h3>
              <div className="line-glow h-px w-16 mb-8" />

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                  />
                </div>

                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  required
                  className={`${inputClasses} resize-none`}
                />

                <button
                  type="submit"
                  className="glow-button px-5 py-2 rounded-full text-[10px] font-semibold uppercase tracking-wider flex items-center gap-2.5 transition-all duration-300"
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
