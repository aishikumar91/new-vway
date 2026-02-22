import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import Layout from "@/components/Layout";


const PrivacyPolicy = () => (
  <Layout>
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="container mx-auto max-w-3xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5">
            <Shield size={12} />
            Legal
          </span>
          <h1
            className="font-display text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem] font-bold leading-[0.85] sm:leading-[0.88] mb-6 sm:mb-8 text-gradient-orange"
          >
            PRIVACY
            <br />
            POLICY
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
            <h2 className="font-display text-lg font-bold text-foreground mb-3">1. INFORMATION WE COLLECT</h2>
            <p>We collect personal information you voluntarily provide when donating, subscribing to our newsletter, submitting contact forms, or registering for events. This may include your name, email address, phone number, and payment information.</p>
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-foreground mb-3">2. HOW WE USE YOUR INFORMATION</h2>
            <p>Your information is used to process donations, send newsletters and updates, respond to inquiries, manage events, and improve our services. We do not sell or rent your personal information to third parties.</p>
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-foreground mb-3">3. DATA SECURITY</h2>
            <p>We implement appropriate security measures to protect your personal information. Payment processing is handled through secure third-party providers (Paystack) and we do not store payment card details on our servers.</p>
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-foreground mb-3">4. COOKIES</h2>
            <p>We use essential cookies to ensure our website functions properly. Analytics cookies help us understand how visitors use our site so we can improve the experience.</p>
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-foreground mb-3">5. YOUR RIGHTS</h2>
            <p>You have the right to access, correct, or delete your personal data. You may unsubscribe from our newsletter at any time. Contact us at info@vhay.org for any privacy-related requests.</p>
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-foreground mb-3">6. CONTACT</h2>
            <p>For questions about this privacy policy, contact Valorous Hope for African Youths (VHAY) at info@vhay.org.</p>
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default PrivacyPolicy;
