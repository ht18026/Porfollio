import { motion } from 'motion/react';
import { useI18n } from '../lib/i18n';
import { experiences } from '../data';
import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const { t, locale } = useI18n();

  return (
    <div className="space-y-16">
      <section className="max-w-3xl">
        <h2 className="text-4xl font-bold mb-4">{t('exp_title')}</h2>
        <p className="text-brand-oak text-lg">
          {locale === 'en' 
            ? "A journey through corporate finance, indie game development, and academic mentorship."
            : "穿梭于金融企业、独立游戏开发和学术辅导的职业历程。"}
        </p>
      </section>

      <div className="space-y-12 relative before:absolute before:left-0 before:top-0 before:w-px before:h-full before:bg-white/10 ml-4 pl-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[53px] top-2 w-2 h-2 rounded-full bg-brand-copper shadow-[0_0_10px_rgba(181,132,90,0.5)]" />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-brand-parchment">{exp.company}</h3>
                <p className="text-brand-copper font-medium">{exp.role[locale]}</p>
              </div>
              <div className="flex items-center space-x-2 text-brand-oak/60 text-sm mt-2 md:mt-0">
                <Calendar size={14} />
                <span>{exp.period}</span>
              </div>
            </div>

            <ul className="space-y-3 mb-6">
              {exp.points[locale].map((point, i) => (
                <li key={i} className="text-brand-oak/90 flex items-start space-x-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-brand-oak/20 rounded-full flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {exp.tech && (
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tag) => (
                  <span key={tag} className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-brand-steel">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Volunteer/Peer Mentor Section */}
      <section className="pt-12">
        <h3 className="text-2xl font-bold mb-8 flex items-center space-x-3">
          <Briefcase className="text-brand-copper" />
          <span>{locale === 'en' ? "Volunteer & Social Impact" : "志愿服务与社会影响力"}</span>
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5">
            <h4 className="font-bold text-lg mb-1">Victoria Heart Hospital</h4>
            <p className="text-brand-copper text-sm mb-4">Ward Ambassador</p>
            <p className="text-brand-oak text-sm">Dec 2024 – Jul 2025 · Guiding patients and managing front-desk reception in a high-stakes clinical environment.</p>
          </div>
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5">
            <h4 className="font-bold text-lg mb-1">Monash University</h4>
            <p className="text-brand-copper text-sm mb-4">Peer Mentor</p>
            <p className="text-brand-oak text-sm">Jan 2025 – Jun 2025 · Academic guidance for new students and inclusive support for students with disabilities.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
