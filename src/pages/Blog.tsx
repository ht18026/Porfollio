import { motion } from 'motion/react';
import { useI18n } from '../lib/i18n';
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export default function Blog() {
  const { t, locale } = useI18n();

  const posts = [
    {
      id: 3,
      title: { en: "Indie Game Studio Recruitment", zh: "独立游戏工作室招募" },
      date: "2026-04-28",
      readTime: "2 min",
      tags: ["Recruitment", "Memo Studio"],
      excerpt: {
        en: "We are looking for passionate developers and artists to join our team for exciting projects like 'The Island' and 'Insomnia Club'.",
        zh: "我们正在寻找充满激情的开发者和艺术家加入我们的团队，参与《岛》和《失眠俱乐部》等令人兴奋的项目。"
      },
      link: "http://xhslink.com/o/8bbCQ7lgUmW"
    },
    {
      id: 1,
      title: { en: "Multi-Agent Systems in Cloud-Edge Orchestration", zh: "云边缘编排中的多智能体系统" },
      date: "2026-03-15",
      readTime: "8 min",
      tags: ["Research", "LLM", "Cloud"],
      excerpt: {
        en: "Exploring the intersection of metaheuristic optimization and low-latency LLM serving...",
        zh: "探索元启发式优化与低延迟LLM服务的交汇点..."
      }
    },
    {
      id: 2,
      title: { en: "The Narrative Power of Silence in Visual Novels", zh: "视觉小说中「沉默」的叙事力量" },
      date: "2026-02-10",
      readTime: "5 min",
      tags: ["Gamedev", "Narrative"],
      excerpt: {
        en: "Why what remains unsaid is often more important than the dialogue itself...",
        zh: "为什么未竟之言通常比对话本身更重要..."
      }
    }
  ];

  return (
    <div className="space-y-12">
      <section className="max-w-3xl">
        <h2 className="text-4xl font-bold mb-4">{t('blog_title')}</h2>
        <p className="text-brand-oak text-lg">
          {locale === 'en' 
            ? "Thoughts on technology, creative production, and the future of AI."
            : "关于技术、创意生产和AI未来的深度思考。"}
        </p>
      </section>

      <div className="space-y-8">
        {posts.map((post, index) => {
          const ArticleWrapper = post.link ? 'a' : 'div';
          const wrapperProps = post.link ? { href: post.link, target: "_blank", rel: "noopener noreferrer" } : {};

          return (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <ArticleWrapper
                {...wrapperProps}
                className="block relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 group-hover:bg-white/[0.05] group-hover:border-brand-copper/30 transition-all cursor-pointer"
              >
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-brand-oak/40 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={12} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={12} />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag size={12} />
                    <div className="flex gap-2">
                      {post.tags.map(tag => (
                        <span key={tag} className="text-brand-copper/60 hover:text-brand-copper">#{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-copper transition-colors">
                  {post.title[locale]}
                </h3>
                
                <p className="text-brand-oak/80 mb-6 leading-relaxed">
                  {post.excerpt[locale]}
                </p>

                <div className="flex items-center space-x-2 text-sm font-bold text-brand-parchment group-hover:translate-x-2 transition-transform">
                  <span>{post.link ? (locale === 'en' ? "View on Red" : "在小红书查看") : (locale === 'en' ? "Read Full Article" : "阅读全文")}</span>
                  <ArrowRight size={16} />
                </div>
              </ArticleWrapper>
            </motion.article>
          );
        })}
      </div>

      <section className="pt-12 text-center opacity-30">
        <p className="text-sm font-mono tracking-widest uppercase">More articles coming soon</p>
      </section>
    </div>
  );
}
