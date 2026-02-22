import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import Layout from "@/components/Layout";


const TermsOfService = () => (
  <Layout>
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="container mx-auto max-w-3xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5">
            <FileText size={12} />
            Legal
          </span>
          <h1
            className="font-display text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem] font-bold leading-[0.85] sm:leading-[0.88] mb-6 sm:mb-8 text-gradient-orange"
          >
            TERMS OF
            <br />
            SERVICE
          </h1>
          <div className="line-glow h-px w-28 sm:w-40 mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-8 md:p-10 space-y-8 text-muted-foreground leading-relaxed"
        >
          <p className="text-sm">Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>
          <div>
            <h2 className="font-display text-lg font-bold text-foreground mb-3">1. ACCEPTANCE OF TERMS</h2>
            <p>By accessing the VHAY website, you agree to these terms of service. If you do not agree with any part of these terms, please do not use our website.</p>
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-foreground mb-3">2. DONATIONS</h2>
            <p>All donations are voluntary and non-refundable unless required by applicable law. VHAY reserves the right to allocate donated funds to the programs and agendas where they are most needed. Donors will receive confirmation of their contributions via email.</p>
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-foreground mb-3">3. INTELLECTUAL PROPERTY</h2>
            <p>All content on this website, including text, images, logos, and designs, is the property of Valorous Hope for African Youths (VHAY) and is protected by intellectual property laws.</p>
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-foreground mb-3">4. USER CONDUCT</h2>
            <p>Users agree not to misuse the website, submit false information, or engage in activities that could harm VHAY's operations or reputation.</p>
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-foreground mb-3">5. LIMITATION OF LIABILITY</h2>
            <p>VHAY shall not be liable for any indirect, incidental, or consequential damages arising from the use of this website or our services.</p>
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-foreground mb-3">6. CHANGES TO TERMS</h2>
            <p>We reserve the right to modify these terms at any time. Continued use of the website constitutes acceptance of updated terms.</p>
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default TermsOfService;
