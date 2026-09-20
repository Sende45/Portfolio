import { motion } from 'framer-motion';

const services = [
  {
    id: 'SERVICE_01',
    price: '4 500 €',
    title: 'SaaS de A à Z',
    description: "Authentification, abonnements, dashboard admin, paiements Stripe. Idéal pour lancer votre produit rapidement.",
    features: ['Auth & rôles utilisateurs', 'Gestion des abonnements', 'Dashboard admin', 'Intégration paiement Stripe'],
  },
  {
    id: 'SERVICE_02',
    price: '8 000 €',
    title: 'Marketplace',
    description: 'Mise en relation entre prestataires et clients. Gestion multi-rôles, backoffice, système de commissions.',
    features: ['Espace prestataire', 'Espace client', 'Backoffice admin', 'Système de commissions'],
  },
  {
    id: 'SERVICE_03',
    price: '5 000 €',
    title: 'E-commerce',
    description: "Boutique en ligne moderne avec catalogue, panier, tunnel d'achat optimisé et gestion des stocks.",
    features: ['Catalogue produits', "Panier & tunnel d'achat", 'Gestion de stock', 'Upload images Cloudinary'],
  },
  {
    id: 'SERVICE_04',
    price: '2 500 €',
    title: 'Refonte & Audit',
    description: 'Reprise, optimisation ou audit technique de votre application existante. Performance, SEO, sécurité.',
    features: ['Audit performance', 'Optimisation SEO', 'Mise à jour dépendances', 'Refonte UI/UX'],
  },
];

const Services = () => {
  const revealText = {
    initial: { y: 40, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <>
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
        <motion.div {...revealText} className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
            <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">// Services</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic text-zinc-900 dark:text-white leading-none">
            Ce que<br />je construis<span className="text-blue-600 not-italic">.</span>
          </h2>
        </motion.div>
        <motion.p {...revealText} className="max-w-sm text-zinc-500 dark:text-zinc-400 text-lg font-medium leading-tight">
          Tarifs indicatifs pour cadrer votre budget. Chaque projet fait l'objet d'un devis précis après échange.
        </motion.p>
      </div>

      {/* GRILLE SERVICES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative border border-zinc-200 dark:border-white/5 rounded-3xl p-8 md:p-10 hover:border-blue-600 dark:hover:border-blue-600 transition-colors duration-300 bg-white dark:bg-white/[0.02]"
          >
            <div className="flex justify-between items-start mb-8">
              <span className="text-[10px] font-mono font-black uppercase tracking-widest text-zinc-400">
                {service.id}
              </span>
              <span className="text-[10px] font-mono font-black uppercase tracking-widest text-blue-600">
                → à partir de {service.price}
              </span>
            </div>

            <h3 className="text-3xl font-black italic uppercase tracking-tighter mb-4 text-zinc-900 dark:text-white">
              {service.title}
            </h3>

            <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-8">
              {service.description}
            </p>

            <ul className="space-y-2 border-t border-zinc-200 dark:border-white/5 pt-6">
              {service.features.map((feature) => (
                <li key={feature} className="text-sm text-zinc-600 dark:text-zinc-400 flex items-start gap-3">
                  <span className="text-blue-600 mt-0.5">▸</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* TJM */}
      <motion.div
        {...revealText}
        className="mt-16 border-t border-zinc-200 dark:border-white/5 pt-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
      >
        <div>
          <span className="text-[10px] font-mono font-black uppercase tracking-widest text-zinc-400">
            // Tarif journalier
          </span>
          <p className="text-xl md:text-2xl font-bold mt-2 text-zinc-900 dark:text-white">
            Pour missions longues ou renfort d'équipe
          </p>
        </div>
        <span className="text-4xl md:text-5xl font-black italic text-blue-600">
          350 € / jour
        </span>
      </motion.div>

      {/* NOTE */}
      <p className="text-[11px] text-zinc-400 dark:text-zinc-600 mt-12 max-w-3xl leading-relaxed">
        * Fourchettes indicatives. Tarifs adaptés pour l'Afrique et l'international (devis en FCFA, USD possibles).
        Chaque projet fait l'objet d'un devis précis après échange.
      </p>
    </>
  );
};

export default Services;