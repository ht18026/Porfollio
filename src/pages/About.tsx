import { motion } from 'motion/react';
import { useI18n } from '../lib/i18n';
import { BookOpen, Award, Code2, Languages, GraduationCap } from 'lucide-react';

export default function About() {
  const { t, locale } = useI18n();

  const skills = [
    { category: { en: "Languages", zh: "编程语言" }, items: "Java, Python, C/C++, SQL, TypeScript, Go, Bash, R" },
    { category: { en: "Frontend", zh: "前端" }, items: "Vue.js 3, Nuxt, HTML/CSS, Tailwind" },
    { category: { en: "Backend", zh: "后端" }, items: "Firebase, AWS Lambda, Node.js, REST API" },
    { category: { en: "Cloud", zh: "云平台" }, items: "AWS (EC2, Lambda, S3, DynamoDB, Cognito, SNS), Firebase" },
    { category: { en: "Tools", zh: "工具" }, items: "Git, Docker, Jenkins, JIRA, Selenium" },
    { category: { en: "ML/AI", zh: "机器学习/AI" }, items: "TFLite, Stable Diffusion, Gemini API, LLM integration" },
    { category: { en: "Game Dev", zh: "游戏开发" }, items: "Ren'Py, Godot 4" },
  ];

  return (
    <div className="space-y-24">
      <section className="max-w-3xl">
        <h2 className="text-4xl font-bold mb-8">{t('about_title')}</h2>
        <p className="text-brand-oak text-lg leading-relaxed">
          {locale === 'en' 
            ? "I bridge the gap between technical precision and creative expression. From optimizing LLM inference at the cloud-edge to crafting interactive narratives, my work centers on efficiency, scalability, and human connection."
            : "我致力于在技术实现与创意表达之间搭建桥梁。从优化云边协同的LLM推理到构建深度叙事，我的工作核心围绕着效率、可扩展性和人际连接展开。"}
        </p>
      </section>

      {/* Education & Research */}
      <div className="grid md:grid-cols-2 gap-12">
        <section>
          <div className="flex items-center space-x-3 mb-6">
            <GraduationCap className="text-brand-copper" />
            <h3 className="text-xl font-bold">{locale === 'en' ? "Education" : "教育背景"}</h3>
          </div>
          <div className="space-y-8">
            <div className="border-l-2 border-brand-copper/30 pl-6 py-2">
              <h4 className="font-bold text-lg">Master of Information Technology</h4>
              <p className="text-brand-oak">Monash University · HD Average</p>
              <p className="text-sm text-brand-oak/60">2024 – 2026</p>
            </div>
            <div className="border-l-2 border-brand-copper/30 pl-6 py-2">
              <h4 className="font-bold text-lg">Bachelor of Computer Science</h4>
              <p className="text-brand-oak">University of Bristol · 2:1</p>
              <p className="text-sm text-brand-oak/60">2018 – 2021</p>
            </div>
          </div>
        </section>

        <section className="bg-white/5 p-8 rounded-2xl border border-white/10">
          <div className="flex items-center space-x-3 mb-4">
            <BookOpen className="text-brand-copper" />
            <h3 className="text-xl font-bold">{locale === 'en' ? "Research Thesis" : "研究课题"}</h3>
          </div>
          <h4 className="text-brand-copper font-medium mb-2">Efficient Routing of Inference Requests across LLM Instances in Cloud-Edge Computing</h4>
          <p className="text-sm text-brand-oak/80 italic mb-4">Supervisor: Dr. Mohammad Goudarzi</p>
          <p className="text-sm text-brand-oak leading-relaxed">
            {locale === 'en' 
              ? "Exploring Memetic Algorithms (MA) for intelligent dispatch of heterogeneous LLM inference requests across cloud and edge nodes, minimizing latency and cost while respecting SLA constraints."
              : "探索使用模因算法（MA）在云和边缘节点之间智能调度异构LLM推理请求，在遵守SLA约束的同时，最大限度地降低延迟和成本。"}
          </p>
        </section>
      </div>

      {/* Skills */}
      <section>
        <div className="flex items-center space-x-3 mb-8">
          <Code2 className="text-brand-copper" />
          <h3 className="text-2xl font-bold">{locale === 'en' ? "Technical Arsenal" : "技术栈"}</h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
              <h4 className="text-brand-copper text-sm font-mono uppercase tracking-widest mb-2">{skill.category[locale]}</h4>
              <p className="text-brand-oak text-sm leading-relaxed">{skill.items}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Languages & Certs */}
      <div className="grid md:grid-cols-2 gap-12">
        <section>
          <div className="flex items-center space-x-3 mb-6">
            <Languages className="text-brand-copper" />
            <h3 className="text-xl font-bold">{locale === 'en' ? "Languages" : "语言能力"}</h3>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center bg-white/5 p-4 rounded-lg">
              <span className="font-medium">English</span>
              <span className="text-brand-oak text-sm">Superior (PTE 79)</span>
            </div>
            <div className="flex justify-between items-center bg-white/5 p-4 rounded-lg">
              <span className="font-medium">{locale === 'en' ? "Mandarin" : "普通话"}</span>
              <span className="text-brand-oak text-sm">{locale === 'en' ? "Native" : "母语"}</span>
            </div>
            <div className="flex justify-between items-center bg-white/5 p-4 rounded-lg">
              <span className="font-medium">{locale === 'en' ? "Japanese" : "日语"}</span>
              <span className="text-brand-oak text-sm">{locale === 'en' ? "Conversational" : "进修中"}</span>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center space-x-3 mb-6">
            <Award className="text-brand-copper" />
            <h3 className="text-xl font-bold">{locale === 'en' ? "Certifications" : "证书资质"}</h3>
          </div>
          <div className="bg-white/5 p-6 rounded-xl border border-white/10 flex items-center space-x-4">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
              <Award className="text-brand-copper" size={24} />
            </div>
            <div>
              <h4 className="font-bold">AWS Solutions Architect – Associate</h4>
              <p className="text-brand-oak text-sm">Amazon Web Services</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
