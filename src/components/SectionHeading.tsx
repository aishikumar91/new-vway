import { motion } from "framer-motion";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  description?: string;
}

const SectionHeading = ({ tag, title, description }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6 }}
    className="text-center mb-14"
  >
    {tag && (
      <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3 px-3 py-1 rounded-full border border-primary/20 bg-primary/5">
        {tag}
      </span>
    )}
    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
      {title}
    </h2>
    {description && (
      <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
        {description}
      </p>
    )}
  </motion.div>
);

export default SectionHeading;
