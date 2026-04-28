import { motion } from 'motion/react';
import { useI18n } from '../lib/i18n';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const { t, locale } = useI18n();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] as const } }
  };

  return (
    <div className="relative flex flex-col items-start justify-center min-h-[70vh] overflow-hidden">
      <div className="ambient-light -top-20 -left-20" />
      
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-8 max-w-4xl z-10"
      >
        <motion.div variants={item} className="space-y-12">
          <div className="flex items-center space-x-4">
            <span className="h-px w-8 bg-brand-copper" />
            <span className="text-brand-copper font-mono text-xs tracking-[0.3em] uppercase">
              {locale === 'en' ? 'Digital Portfolio' : '数字作品集'}
            </span>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="max-w-4xl border-l-2 border-brand-copper/30 pl-10 py-4"
          >
            <p className="text-4xl md:text-6xl font-serif italic text-brand-copper leading-[1.1] tracking-tight">
              {locale === 'en' 
                ? "“We live in the flickering spaces between the streetlights.”"
                : "“我们栖身于路灯交替的明暗夹缝中。”"}
            </p>
          </motion.div>
        </motion.div>

        <motion.h1 variants={item} className="text-7xl md:text-9xl font-bold tracking-tighter leading-[0.85] text-brand-parchment">
          {["X.Wang", "Page"].map((word, i) => (
            <span key={i} className="block">{word}</span>
          ))}
        </motion.h1>

        <motion.p variants={item} className="text-2xl md:text-3xl text-brand-parchment font-light leading-snug max-w-2xl">
          {t('hero_subtitle')}
        </motion.p>

        <motion.p variants={item} className="text-lg text-brand-oak leading-relaxed max-w-xl opacity-80">
          {locale === 'en' 
            ? "Results-driven Software Engineer blending 3+ years of fintech experience with cutting-edge LLM research and creative game production."
            : "专注于结果的软件工程师，将3年以上的金融科技经验与前沿大模型研究及创意游戏制作相结合。"}
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap gap-6 pt-4">
          <Link
            to="/projects"
            className="group relative flex items-center space-x-3 bg-brand-parchment text-brand-bg px-10 py-5 rounded-full font-bold transition-all hover:pr-12"
          >
            <span>{t('cta_projects')}</span>
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="/Page_Xijia_Wang_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-3 border border-white/10 text-brand-parchment px-10 py-5 rounded-full font-bold transition-all hover:bg-white/5 hover:border-white/20"
          >
            <Download size={20} className="group-hover:animate-bounce" />
            <span>{t('cta_cv')}</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Subtle background text */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ delay: 1, duration: 2 }}
        className="absolute right-0 bottom-0 text-[15vw] font-bold text-white select-none pointer-events-none tracking-tighter leading-none translate-y-1/4 translate-x-1/4 whitespace-nowrap"
      >
        X.Wang Page
      </motion.div>
    </div>
  );
}
