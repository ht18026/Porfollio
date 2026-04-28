import { motion } from 'motion/react';
import { useI18n } from '../lib/i18n';
import { Mail, Github, MapPin, Send, MessageSquare, Gamepad2, MessageCircle, BookOpen } from 'lucide-react';

export default function Contact() {
  const { t, locale } = useI18n();

  return (
    <div className="space-y-16">
      <section className="max-w-3xl">
        <h2 className="text-4xl font-bold mb-4">{t('nav_contact')}</h2>
        <p className="text-brand-oak text-lg">
          {locale === 'en' 
            ? "Looking for a full-stack developer, game dev collaborator, or just want to talk? My inbox is always open."
            : "正在寻找全栈开发人员、游戏开发合作伙伴，或者只是想聊聊？我的收件箱时刻为您敞开。"}
        </p>
      </section>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Contact info list */}
        <div className="space-y-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-6 group">
              <div className="w-12 h-12 bg-word-bg/5 dark:bg-white/5 rounded-xl flex items-center justify-center text-brand-copper group-hover:bg-brand-copper group-hover:text-white transition-all border border-brand-copper/10">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-brand-oak mb-1">Email</p>
                <a href="mailto:info@memostudio.net" className="text-xl font-medium hover:text-brand-copper transition-colors">
                  info@memostudio.net
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-6 group">
              <div className="w-12 h-12 bg-word-bg/5 dark:bg-white/5 rounded-xl flex items-center justify-center text-brand-copper group-hover:bg-brand-copper group-hover:text-white transition-all border border-brand-copper/10">
                <Github size={24} />
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-brand-oak mb-1">Github</p>
                <a href="https://github.com/ht18026" className="text-xl font-medium hover:text-brand-copper transition-colors">
                  github.com/ht18026
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-6 group">
              <div className="w-12 h-12 bg-word-bg/5 dark:bg-white/5 rounded-xl flex items-center justify-center text-brand-copper group-hover:bg-brand-copper group-hover:text-white transition-all border border-brand-copper/10">
                <Gamepad2 size={24} />
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-brand-oak mb-1">itch.io</p>
                <a href="https://memostudio.net/itchio" target="_blank" rel="noopener noreferrer" className="text-xl font-medium hover:text-brand-copper transition-colors">
                  memostudio.itch.io
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-6 group">
              <div className="w-12 h-12 bg-word-bg/5 dark:bg-white/5 rounded-xl flex items-center justify-center text-brand-copper group-hover:bg-brand-copper group-hover:text-white transition-all border border-brand-copper/10">
                <BookOpen size={24} />
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-brand-oak mb-1">{locale === 'en' ? 'Xiaohongshu' : '小红书'}</p>
                <a href="https://memostudio.net/red" target="_blank" rel="noopener noreferrer" className="text-xl font-medium hover:text-brand-copper transition-colors">
                  @MEMO Studio
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-6 group">
              <div className="w-12 h-12 bg-word-bg/5 dark:bg-white/5 rounded-xl flex items-center justify-center text-brand-copper group-hover:bg-brand-copper group-hover:text-white transition-all border border-brand-copper/10">
                <MessageCircle size={24} />
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-brand-oak mb-1">Discord</p>
                <a href="https://memostudio.net/discord" target="_blank" rel="noopener noreferrer" className="text-xl font-medium hover:text-brand-copper transition-colors">
                  Memo Studio
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-6 group">
              <div className="w-12 h-12 bg-word-bg/5 dark:bg-white/5 rounded-xl flex items-center justify-center text-brand-copper group-hover:bg-brand-copper group-hover:text-white transition-all border border-brand-copper/10">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-brand-oak mb-1">Location</p>
                <div className="space-y-1">
                  <p className="text-xl font-medium">Melbourne, VIC, Australia</p>
                  <p className="text-xl font-medium">Shanghai, China</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-brand-copper/5 border border-brand-copper/20">
            <h4 className="font-bold text-lg mb-2 flex items-center space-x-2">
              <MessageSquare size={20} className="text-brand-copper" />
              <span>{locale === 'en' ? "Availability" : "当前意向"}</span>
            </h4>
            <p className="text-brand-oak text-sm leading-relaxed">
              {locale === 'en' 
                ? "Open to Full-time roles (post June 2026, 485 visa eligible), collaborations, and game playtesting."
                : "开放正式职位机会（2026年6月后，具备485签证资格）、项目合作以及游戏测试邀请。"}
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="glass-card p-10 rounded-[2rem] border shadow-xl">
          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-brand-oak">Name</label>
                <input type="text" className="w-full rounded-xl p-4 outline-none border focus:border-brand-copper transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-brand-oak">Email</label>
                <input type="email" className="w-full rounded-xl p-4 outline-none border focus:border-brand-copper transition-all" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-widest text-brand-oak">Message</label>
              <textarea rows={5} className="w-full rounded-xl p-4 outline-none border focus:border-brand-copper transition-all resize-none"></textarea>
            </div>
            <button
              type="button"
              onClick={() => window.location.href = 'mailto:info@memostudio.net'}
              className="group w-full flex items-center justify-center space-x-3 bg-brand-copper text-brand-parchment font-bold py-5 rounded-xl hover:bg-brand-bg transition-all shadow-lg hover:shadow-brand-copper/20"
            >
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              <span className="tracking-[0.2em]">SEND MESSAGE</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
