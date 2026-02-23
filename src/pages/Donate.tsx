import { useState } from "react";
import { motion } from "framer-motion";
import {
  CreditCard,
  Building2,
  Check,
  Loader2,
  Heart,
  ArrowRight,
  Shield,
  GraduationCap,
  Users,
  Globe,
  Megaphone,
} from "lucide-react";
import { toast } from "sonner";
import Layout from "@/components/Layout";
import { supabase } from "@/integrations/supabase/client";
import heroBg from "@/assets/hero-bg.jpg";

const donationAmounts = [5000, 10000, 25000, 50000, 100000, 500000];

const heroStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const heroChild = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6 },
  },
};

const supportCategories = [
  {
    icon: GraduationCap,
    title: "Youth Scholarships",
    description: "Fund education for promising young leaders across Africa.",
  },
  {
    icon: Users,
    title: "Training Programs",
    description: "Equip youth with skills for leadership and entrepreneurship.",
  },
  {
    icon: Globe,
    title: "Community Outreach",
    description: "Bring hope and resources to underserved communities.",
  },
  {
    icon: Megaphone,
    title: "Advocacy Campaigns",
    description: "Amplify voices and drive systemic change for African youth.",
  },
];

const inputClasses =
  "w-full px-4 py-3.5 text-sm bg-background/50 border border-border/60 rounded-xl outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 text-foreground transition-all duration-200";

const Donate = () => {
  const [donationType, setDonationType] = useState<"one-time" | "monthly">(
    "one-time",
  );
  const [selectedAmount, setSelectedAmount] = useState<number | null>(25000);
  const [customAmount, setCustomAmount] = useState("");
  const [coverFees, setCoverFees] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"paystack" | "bank">(
    "paystack",
  );
  const [donorEmail, setDonorEmail] = useState("");
  const [donorName, setDonorName] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [showBankDetails, setShowBankDetails] = useState(false);

  const finalAmount = selectedAmount || Number(customAmount) || 0;

  const handlePaystackDonate = async () => {
    if (!donorEmail || !finalAmount) {
      toast.error("Please enter your email and select an amount");
      return;
    }
    setIsProcessing(true);
    try {
      const { data, error } = await supabase.functions.invoke(
        "paystack-initialize",
        {
          body: {
            email: donorEmail,
            amount: finalAmount,
            currency: "NGN",
            donation_type: donationType,
            donor_name: donorName,
            callback_url: window.location.origin + "/donate?donation=success",
            metadata: { cover_fees: coverFees },
          },
        },
      );
      if (error) throw error;
      if (data?.authorization_url)
        window.location.href = data.authorization_url;
    } catch (err: any) {
      toast.error(err.message || "Payment failed");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleManualDonate = async () => {
    if (!donorEmail || !finalAmount) {
      toast.error("Please enter your email and select an amount");
      return;
    }
    setIsProcessing(true);
    try {
      const { error } = await supabase.from("donations").insert({
        donor_name: donorName,
        donor_email: donorEmail,
        amount: finalAmount,
        currency: "NGN",
        payment_method: "manual",
        donation_type: donationType,
        status: "pending",
        cover_fees: coverFees,
      });
      if (error) throw error;
      setShowBankDetails(true);
      toast.success(
        "Donation recorded! Please complete the bank transfer below.",
      );
    } catch (err: any) {
      toast.error(err.message || "Failed");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Layout>
      {/* ── Hero ── */}
      <section className="section-padding dot-pattern relative overflow-hidden">
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
              <Heart className="w-3.5 h-3.5" />
              Support The Mission
            </motion.span>

            <motion.h1
              variants={heroChild}
              className="font-display text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] font-bold leading-[0.85] sm:leading-[0.88] mb-6 sm:mb-8 text-image-clip"
              style={{ backgroundImage: `url(${heroBg})` }}
            >
              SUPPORT
              <br />
              OUR MISSION
            </motion.h1>

            <motion.div
              variants={heroChild}
              className="line-glow h-px w-28 sm:w-40 mx-auto mb-6 sm:mb-8"
            />

            <motion.p
              variants={heroChild}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              Every donation empowers a young African leader.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Support Categories ── */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Where Your Support Goes
            </h2>
            <div className="line-glow h-px w-20 mx-auto mb-4" />
            <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
              Your generosity fuels programs that transform lives across the
              continent.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {supportCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass-card p-6 text-center transition-all duration-300 hover:border-primary/30"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                  <cat.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2 text-sm">
                  {cat.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {cat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Donation Form ── */}
      <section className="section-padding">
        <div className="container mx-auto max-w-lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 md:p-10"
          >
            <h3 className="font-display text-xl font-semibold text-foreground text-center mb-2">
              Make a Donation
            </h3>
            <div className="line-glow h-px w-16 mx-auto mb-8" />

            {/* Donation Type Toggle */}
            <div className="flex rounded-full border border-border/60 overflow-hidden mb-6 bg-muted/30">
              <button
                onClick={() => setDonationType("one-time")}
                className={`flex-1 py-3 text-xs font-bold tracking-wider transition-all duration-300 ${donationType === "one-time" ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" : "text-foreground/60 hover:text-foreground"}`}
              >
                ONE-TIME
              </button>
              <button
                onClick={() => setDonationType("monthly")}
                className={`flex-1 py-3 text-xs font-bold tracking-wider transition-all duration-300 ${donationType === "monthly" ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" : "text-foreground/60 hover:text-foreground"}`}
              >
                MONTHLY
              </button>
            </div>

            {/* Payment Method Tabs */}
            <div className="flex gap-3 mb-6">
              <button
                onClick={() => {
                  setPaymentMethod("paystack");
                  setShowBankDetails(false);
                }}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold border transition-all duration-300 ${paymentMethod === "paystack" ? "border-primary bg-primary/10 text-primary shadow-sm" : "border-border/60 text-foreground/60 hover:border-primary/30"}`}
              >
                <CreditCard size={14} /> PAYSTACK
              </button>
              <button
                onClick={() => {
                  setPaymentMethod("bank");
                  setShowBankDetails(false);
                }}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold border transition-all duration-300 ${paymentMethod === "bank" ? "border-primary bg-primary/10 text-primary shadow-sm" : "border-border/60 text-foreground/60 hover:border-primary/30"}`}
              >
                <Building2 size={14} /> BANK TRANSFER
              </button>
            </div>

            {/* Donor Info */}
            <div className="space-y-3 mb-6">
              <input
                type="text"
                placeholder="Your name"
                value={donorName}
                onChange={(e) => setDonorName(e.target.value)}
                className={inputClasses}
              />
              <input
                type="email"
                placeholder="Your email *"
                value={donorEmail}
                onChange={(e) => setDonorEmail(e.target.value)}
                className={inputClasses}
              />
            </div>

            {/* Amount Grid */}
            <div className="grid grid-cols-3 gap-3 mb-5">
              {donationAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => {
                    setSelectedAmount(amount);
                    setCustomAmount("");
                  }}
                  className={`py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 ${selectedAmount === amount ? "border-primary bg-primary/10 text-primary shadow-sm shadow-primary/10" : "border-border/60 text-foreground/70 hover:border-primary/30"}`}
                >
                  ₦{amount.toLocaleString()}
                </button>
              ))}
            </div>

            <div className="flex items-center border border-border/60 rounded-xl overflow-hidden mb-5 bg-background/50 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/20 transition-all">
              <span className="px-4 py-3.5 text-sm text-muted-foreground bg-muted/30 border-r border-border/60">
                NGN
              </span>
              <input
                type="number"
                placeholder="Custom amount"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedAmount(null);
                }}
                className="flex-1 px-4 py-3.5 text-sm bg-transparent outline-none text-foreground"
              />
            </div>

            <label className="flex items-center gap-2.5 text-sm text-muted-foreground mb-8 cursor-pointer justify-center">
              <button
                onClick={() => setCoverFees(!coverFees)}
                className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-200 ${coverFees ? "bg-primary border-primary" : "border-border/60 hover:border-primary/40"}`}
              >
                {coverFees && (
                  <Check size={12} className="text-primary-foreground" />
                )}
              </button>
              Cover transaction fees
            </label>

            {paymentMethod === "paystack" ? (
              <button
                onClick={handlePaystackDonate}
                disabled={isProcessing}
                className="w-full glow-button py-2.5 rounded-full text-xs font-bold tracking-wider flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {isProcessing ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> PROCESSING...
                  </>
                ) : (
                  <>
                    PAY WITH PAYSTACK <ArrowRight size={16} />
                  </>
                )}
              </button>
            ) : (
              <button
                onClick={handleManualDonate}
                disabled={isProcessing}
                className="w-full glow-button py-2.5 rounded-full text-xs font-bold tracking-wider flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {isProcessing ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> RECORDING...
                  </>
                ) : (
                  <>
                    SUBMIT & VIEW BANK DETAILS <ArrowRight size={16} />
                  </>
                )}
              </button>
            )}

            {/* Security note */}
            <div className="flex items-center justify-center gap-2 mt-5 text-muted-foreground/60">
              <Shield size={12} />
              <span className="text-[10px] uppercase tracking-wider">
                Secured by Paystack &middot; 256-bit encryption
              </span>
            </div>

            {/* Bank Details */}
            {showBankDetails && paymentMethod === "bank" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 p-6 bg-muted/30 rounded-2xl border border-border/60 text-left"
              >
                <h4 className="font-display font-bold text-foreground mb-4 text-sm">
                  BANK TRANSFER DETAILS
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Bank:</span>
                    <span className="font-semibold text-foreground">
                      First Bank of Nigeria
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Account Name:
                    </span>
                    <span className="font-semibold text-foreground">
                      Valorous Hope for African Youths
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Account Number:
                    </span>
                    <span className="font-semibold text-foreground">
                      0123456789
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Amount:</span>
                    <span className="font-semibold text-primary">
                      ₦{finalAmount.toLocaleString()}
                    </span>
                  </div>
                </div>
                <div className="line-glow h-px w-full mt-4 mb-3" />
                <p className="text-xs text-muted-foreground">
                  Please use your email as the transfer reference. Your donation
                  will be confirmed within 24 hours.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Donate;
