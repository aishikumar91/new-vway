import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import { agendas } from "@/data/agendas";


const Agenda = () => {
  const { id } = useParams<{ id: string }>();
  const index = Number(id) - 1;
  const agenda = agendas[index];

  if (!agenda) {
    return (
      <Layout>
        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 dot-pattern opacity-30" />
          <div className="container mx-auto text-center relative z-10">
            <h1 className="font-display text-3xl font-bold text-foreground mb-6">AGENDA NOT FOUND</h1>
            <Link to="/programs" className="glow-button px-8 py-3 rounded-full text-sm font-bold tracking-wider inline-flex items-center gap-2">
              <ArrowLeft size={16} /> VIEW ALL AGENDAS
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  const prevAgenda = index > 0 ? agendas[index - 1] : null;
  const nextAgenda = index < agendas.length - 1 ? agendas[index + 1] : null;

  return (
    <Layout>
      {/* Hero with image */}
      <section className="relative min-h-[50vh] md:min-h-[55vh] flex items-end overflow-hidden">
        <img src={agenda.image} alt={agenda.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 pb-10 sm:pb-14 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary mb-4 sm:mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
              Agenda {agenda.number} of 7
            </span>
            <h1
              className="font-display text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem] font-bold leading-[0.85] sm:leading-[0.88] mb-4 text-gradient-orange"
            >
              {agenda.title.toUpperCase()}
            </h1>
            <div className="line-glow h-px w-28 sm:w-40 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            {/* Highlight quote */}
            <div className="border-l-2 border-primary/40 pl-6 mb-10">
              <p className="text-primary font-semibold italic text-lg">"{agenda.highlight}"</p>
            </div>

            {/* Full content */}
            <div className="space-y-4 mb-12">
              {agenda.fullContent.split("\n\n").map((p, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed text-base">{p}</p>
              ))}
            </div>

            {/* Key Interventions */}
            <div className="glass-card p-8 md:p-10 mb-12">
              <h3 className="font-display text-xl font-bold text-foreground mb-2">KEY INTERVENTIONS & OUTCOMES</h3>
              <div className="line-glow h-px w-16 mb-8" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {agenda.outcomes.map((outcome) => (
                  <div key={outcome} className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/5 transition-colors duration-200">
                    <CheckCircle size={18} className="text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mb-12">
              {prevAgenda ? (
                <Link to={`/agenda/${index}`} className="glow-button-outline px-6 py-3 rounded-full text-xs font-bold tracking-wider inline-flex items-center gap-2">
                  <ArrowLeft size={14} /> {prevAgenda.shortTitle}
                </Link>
              ) : <div />}
              {nextAgenda ? (
                <Link to={`/agenda/${index + 2}`} className="glow-button px-6 py-3 rounded-full text-xs font-bold tracking-wider inline-flex items-center gap-2">
                  {nextAgenda.shortTitle} <ArrowRight size={14} />
                </Link>
              ) : <div />}
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link to="/donate" className="glow-button px-8 py-3.5 rounded-full text-sm font-bold tracking-wider inline-flex items-center gap-2">
                SUPPORT THIS AGENDA <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Agenda;
