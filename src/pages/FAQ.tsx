import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import Layout from "@/components/Layout";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroBg from "@/assets/hero-bg.jpg";

const faqs = [
  { q: "What is VHAY?", a: "Valorous Hope for African Youths (VHAY) is a pan-African empowerment movement operating across 14 African countries and 28 Nigerian states. We focus on seven strategic agendas covering skill acquisition, education, health, justice, climate action, and elderly care." },
  { q: "How can I donate?", a: "You can donate through our website using Paystack (card/bank payment) or via direct bank transfer. Visit our Donate page or the donation section on our homepage to get started." },
  { q: "Are donations tax-deductible?", a: "VHAY is a registered non-profit organization. Please contact us at info@vhay.org for documentation related to tax deductions in your jurisdiction." },
  { q: "How can I volunteer?", a: "We welcome volunteers across all 14 countries where we operate. Visit our Contact page to express your interest, and our team will connect you with opportunities in your area." },
  { q: "What are the 7 Agendas?", a: "Our seven agendas are: (1) Free Skill Acquisition & Agricultural Innovation, (2) Education for Out-of-School Children, (3) Maternal & Newborn Health, (4) Prison Bailout & Rehabilitation, (5) Sickle Cell Empowerment, (6) Climate Change & Blue Economy, (7) Free Healthcare for the Elderly." },
  { q: "Where does VHAY operate?", a: "VHAY currently operates in 14 African countries and 28 Nigerian states, with a vision to expand to all 54 African nations." },
  { q: "How is my donation used?", a: "Donations are allocated across our seven agendas based on need. This includes purchasing training equipment, funding scholarships, supporting maternal health programs, legal assistance for inmates, and medical outreach for the elderly." },
  { q: "Can organizations partner with VHAY?", a: "Yes! We actively seek partnerships with corporations, NGOs, government agencies, and international organizations. Contact us to discuss partnership opportunities." },
];

const heroStagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const heroChild = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6 } },
};

const FAQ = () => (
  <Layout>
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="container mx-auto max-w-3xl relative z-10">
        <motion.div variants={heroStagger} initial="hidden" animate="show" className="text-left mb-14">
          <motion.div variants={heroChild}>
            <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5">
              <HelpCircle size={12} />
              Help Center
            </span>
          </motion.div>
          <motion.h1
            variants={heroChild}
            className="font-display text-[2.75rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[6.5rem] xl:text-[8rem] font-bold leading-[0.85] sm:leading-[0.88] mb-6 sm:mb-8 text-image-clip text-left"
            style={{ backgroundImage: `url(${heroBg})` }}
          >
            FREQUENTLY
            <br />
            ASKED
            <br />
            QUESTIONS
          </motion.h1>
          <motion.div variants={heroChild} className="line-glow h-px w-28 sm:w-40 mr-auto mb-6" />
          <motion.p variants={heroChild} className="text-muted-foreground font-light text-left">
            Everything you need to know about VHAY and our mission.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="glass-card px-6 border-border/60">
                <AccordionTrigger className="font-display font-semibold text-foreground text-left hover:text-primary transition-colors">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default FAQ;
