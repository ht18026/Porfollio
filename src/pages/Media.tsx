import { motion } from 'motion/react';
import { useI18n } from '../lib/i18n';
import { Linkedin, Tv, Smartphone, Share2, ExternalLink, Instagram } from 'lucide-react';

export default function Media() {
  const { t, locale } = useI18n();

  const platforms = [
    { 
      name: locale === 'en' ? "Personal Xiaohongshu" : "个人小红书", 
      handle: "@流血的手肘", 
      link: "https://www.xiaohongshu.com/user/profile/65f6d84a000000000b00f2d3?xsec_token=YB5ZzC-yLo_eFAlviaog1ZINS-kUrYyH1SQCR_AKwbwsk=&xsec_source=app_share&xhsshare=CopyLink&shareRedId=ODtINkc9OEo2NzUyOTgwNjZFOTdKN0o8&apptime=1777347629&share_id=cb9ede0ecb404d7d8e256cea85d99c79", 
      color: "text-[#FF2442]",
      Icon: Instagram 
    },
    { 
      name: locale === 'en' ? "Studio Xiaohongshu" : "工作室小红书", 
      handle: "@MEMO Studio", 
      link: "https://xhslink.com/m/2LnUmcBHnxU", 
      color: "text-[#FF2442]",
      Icon: Smartphone 
    },
    { 
      name: "LinkedIn", 
      handle: "@Xijia Wang", 
      link: "https://www.linkedin.com/in/xijia-wang-423033211/", 
      color: "text-[#0077B5]",
      Icon: Linkedin 
    },
    { 
      name: "Bilibili", 
      handle: "@古井拔牙", 
      link: "https://b23.tv/2O0t7EM", 
      color: "text-[#FB7299]",
      Icon: Tv 
    },
  ];

  return (
    <div className="space-y-12">
      <section className="max-w-3xl">
        <h2 className="text-4xl font-bold mb-4">{t('media_title')}</h2>
        <p className="text-brand-oak text-lg">
          {locale === 'en' 
            ? "Sharing insights on tech, game dev, and life in Melbourne."
            : "分享关于技术、游戏开发以及在墨尔本生活见闻。"}
        </p>
      </section>

      <div className="grid sm:grid-cols-2 gap-6">
        {platforms.map((p, index) => (
          <a
            key={index}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-brand-copper/30 transition-all font-sans"
          >
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <p.Icon className={p.color} size={32} />
              </div>
              <div>
                <h3 className="font-bold text-xl">{p.name}</h3>
                <p className="text-brand-oak/60 text-sm font-mono">{p.handle}</p>
              </div>
            </div>
            <ExternalLink size={20} className="text-brand-oak/20 group-hover:text-brand-copper group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </a>
        ))}
      </div>

      <section className="pt-12 text-center opacity-30">
        <p className="text-sm font-mono tracking-widest uppercase">Content Embedding Coming Soon</p>
      </section>
    </div>
  );
}
