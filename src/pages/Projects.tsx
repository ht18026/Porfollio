import { motion } from 'motion/react';
import { useI18n } from '../lib/i18n';
import { projects } from '../data';
import { Github, ExternalLink, Award } from 'lucide-react';

export default function Projects() {
  const { t, locale } = useI18n();

  return (
    <div className="space-y-12">
      <section className="max-w-3xl">
        <h2 className="text-4xl font-bold mb-4">{t('projects_title')}</h2>
        <p className="text-brand-oak text-lg">
          {locale === 'en' 
            ? "From full-stack web applications to cloud-native serverless systems."
            : "从全栈Web应用到云原生无服务器系统。"}
        </p>
      </section>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="group relative flex flex-col bg-white/[0.02] border border-white/5 rounded-[2rem] overflow-hidden hover:bg-white/[0.04] hover:border-brand-copper/50 transition-all duration-500"
          >
            <div className="p-10 flex-grow">
              <div className="flex justify-between items-start mb-6">
                <span className="text-[9px] font-mono text-brand-copper uppercase tracking-[0.3em] bg-brand-copper/10 px-2 py-1 rounded">
                  {project.type}
                </span>
                {project.grade && (
                  <div className="flex items-center space-x-1.5 text-brand-steel text-[10px] font-bold tracking-widest">
                    <Award size={12} className="text-brand-copper" />
                    <span>{project.grade}</span>
                  </div>
                )}
              </div>
              
              <h3 className="text-3xl font-bold mb-6 group-hover:text-brand-copper transition-colors leading-tight">
                {project.title}
              </h3>
              
              <p className="text-brand-oak/70 text-sm leading-relaxed mb-10 min-h-[4rem]">
                {project.description[locale]}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tag) => (
                  <span key={tag} className="text-[10px] px-3 py-1 rounded-full bg-white/5 text-brand-oak/50 border border-white/5 font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="px-10 pb-10 flex items-center space-x-6">
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex items-center space-x-2 text-[10px] font-bold text-brand-parchment/80 hover:text-brand-copper transition-colors tracking-widest"
                >
                  <ExternalLink size={14} className="group-hover/link:-translate-y-0.5 transition-transform" />
                  <span>PREVIEW</span>
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex items-center space-x-2 text-[10px] font-bold text-brand-parchment/80 hover:text-brand-copper transition-colors tracking-widest"
                >
                  <Github size={14} className="group-hover/link:-translate-y-0.5 transition-transform" />
                  <span>SOURCE</span>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
