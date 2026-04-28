import { motion } from 'motion/react';
import { useI18n } from '../lib/i18n';
import { games } from '../data';
import { Gamepad2, Info } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Games() {
  const { t, locale } = useI18n();

  return (
    <div className="space-y-12">
      <section className="max-w-5xl space-y-20 mb-32">
        <div className="max-w-3xl">
          <h2 className="text-5xl font-bold mb-6 tracking-tighter uppercase">{t('games_title')}</h2>
          <p className="text-brand-oak text-xl leading-relaxed opacity-80">
            {locale === 'en' 
              ? "Explorations in narrative design, player psychology, and chaotic fun."
              : "在叙事设计、玩家心理和荒诞趣味中的探索。"}
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: [0.215, 0.61, 0.355, 1] }}
          className="relative py-12 px-12 border-l-4 border-brand-copper/30 bg-brand-parchment/[0.03] backdrop-blur-sm rounded-r-[3rem]"
        >
          <p className="text-5xl md:text-7xl font-serif italic text-brand-copper leading-[1.1] tracking-tight">
            {locale === 'en'
              ? "“I put into my quiet landscapes all the sadness of my soul.”"
              : "“我将灵魂的所有悲伤，揉进这宁静的风景。”"}
          </p>
          <div className="mt-8 flex items-center space-x-4">
            <span className="w-12 h-px bg-brand-copper/40" />
            <p className="text-sm font-mono uppercase tracking-[0.5em] text-brand-copper/60">Fernando Pessoa</p>
          </div>
        </motion.div>
      </section>

      <div className="space-y-32">
        {games.map((game, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1] }}
            className="group relative grid lg:grid-cols-2 gap-16 items-center"
          >
            {/* Ambient background light for game cards */}
            <div className={cn(
              "absolute -inset-20 ambient-light opacity-50",
              index % 2 === 0 ? "left-0" : "right-0"
            )} />

            {game.link ? (
              <a 
                href={game.link}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "aspect-video bg-neutral-900/50 rounded-[2.5rem] overflow-hidden relative border border-white/5 shadow-2xl transition-all duration-700 hover:scale-[1.02] hover:border-brand-copper/50 block group/link",
                  index % 2 !== 0 && "lg:order-2"
                )}
              >
                {game.image ? (
                  <img 
                    src={game.image} 
                    alt={game.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover/link:opacity-80 transition-opacity duration-700"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 opacity-40 group-hover/link:opacity-70 transition-opacity">
                    <Gamepad2 size={80} className="text-brand-copper/30 animate-pulse group-hover/link:text-brand-copper transition-colors" />
                    <span className="text-[10px] font-mono tracking-[0.5em] uppercase">{game.title} Visual Coming Soon</span>
                  </div>
                )}
                
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-copper bg-brand-bg/80 backdrop-blur-md px-6 py-2 rounded-full opacity-0 group-hover/link:opacity-100 transition-all transform translate-y-2 group-hover/link:translate-y-0 shadow-xl border border-brand-copper/20">
                    {locale === 'en' ? "Play Demo" : "试玩 Demo"}
                  </span>
                </div>
                
                <div className="absolute top-10 left-10 flex flex-col space-y-3 z-10">
                  <span className="bg-brand-copper text-brand-parchment text-[10px] px-4 py-1.5 rounded-full font-bold tracking-widest uppercase shadow-lg">
                    {game.status[locale]}
                  </span>
                  <span className="bg-[#1A191B]/80 !text-white text-[9px] px-4 py-1.5 rounded-full font-mono border border-white/10 backdrop-blur-md self-start">
                    {game.engine}
                  </span>
                </div>
              </a>
            ) : (
              <div className={cn(
                "aspect-video bg-neutral-900/50 rounded-[2.5rem] overflow-hidden relative border border-white/5 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]",
                index % 2 !== 0 && "lg:order-2"
              )}>
                <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 opacity-40">
                  <Gamepad2 size={80} className="text-brand-copper/30 animate-pulse" />
                  <span className="text-[10px] font-mono tracking-[0.5em] uppercase">{game.title} Visual Coming Soon</span>
                </div>
                
                <div className="absolute top-10 left-10 flex flex-col space-y-3">
                  <span className="bg-brand-copper text-brand-parchment text-[10px] px-4 py-1.5 rounded-full font-bold tracking-widest uppercase shadow-lg">
                    {game.status[locale]}
                  </span>
                  <span className="bg-[#1A191B]/80 !text-white text-[9px] px-4 py-1.5 rounded-full font-mono border border-white/10 backdrop-blur-md self-start">
                    {game.engine}
                  </span>
                </div>
              </div>
            )}

            <div className="space-y-8 z-10">
              <div className="space-y-2">
                <h3 className="text-5xl md:text-6xl font-bold tracking-tighter group-hover:text-brand-copper transition-colors duration-500">
                  {game.title}
                </h3>
                <p className="text-brand-copper font-mono text-xs uppercase tracking-[0.3em]">{game.genre}</p>
              </div>

              <p className="text-brand-parchment/80 text-xl leading-relaxed font-light">
                {game.description[locale]}
              </p>

              <div className="space-y-6">
                <h4 className="flex items-center space-x-3 text-brand-parchment font-bold text-xs uppercase tracking-[0.2em]">
                  <span className="w-8 h-px bg-brand-copper" />
                  <span>{locale === 'en' ? "Core Mechanics" : "核心设计"}</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {game.highlights[locale].map((h, i) => (
                    <div key={i} className="flex items-center space-x-4 text-brand-oak/80 text-sm group/item">
                      <span className="w-1 h-1 bg-brand-copper rounded-full transition-transform group-hover/item:scale-150" />
                      <span className="font-medium tracking-tight">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
