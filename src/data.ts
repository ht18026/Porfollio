export interface Project {
  title: string;
  description: Record<'en' | 'zh', string>;
  tech: string[];
  links: { demo?: string; github?: string };
  grade?: string;
  type: string;
}

export interface Game {
  title: string;
  engine: string;
  genre: string;
  status: Record<'en' | 'zh', string>;
  description: Record<'en' | 'zh', string>;
  image?: string;
  link?: string;
  highlights: Record<'en' | 'zh', string[]>;
}

export interface Experience {
  company: string;
  role: Record<'en' | 'zh', string>;
  period: string;
  tech?: string[];
  points: Record<'en' | 'zh', string[]>;
}

export const projects: Project[] = [
  {
    title: "WoHub",
    type: "Full-Stack Web Application",
    description: {
      en: "Women's Health Platform with AI-powered features, bulk email, and admin dashboard.",
      zh: "女性健康平台，具备AI功能、批量邮件和管理员仪表盘。"
    },
    tech: ["Vue.js 3", "Firebase", "Firestore", "Cloud Functions", "Gemini API"],
    grade: "92/100 (HD)",
    links: { demo: "https://fit5032-wohub.web.app/", github: "https://github.com/ht18026/FIT5032-women-health" }
  },
  {
    title: "BirdTag",
    type: "AWS Serverless Media System",
    description: {
      en: "ML-powered bird species detection system using AWS serverless architecture.",
      zh: "基于AWS无服务器架构的机器学习驱动鸟类物种检测系统。"
    },
    tech: ["S3", "Lambda", "DynamoDB", "API Gateway", "Cognito", "SNS", "VPC"],
    links: { github: "https://github.com/ht18026" }
  },
  {
    title: "CloudPoseDetection",
    type: "Containerized ML Service",
    description: {
      en: "Pose estimation REST API with containerized deployment and load testing.",
      zh: "具备容器化部署和负载测试的姿态估计REST API。"
    },
    tech: ["Python", "Docker", "TFLite (MoveNet)", "Locust"],
    links: { github: "https://github.com/ht18026" }
  }
];

export const games: Game[] = [
  {
    title: "失眠俱乐部 (Insomnia Club)",
    engine: "Ren'Py",
    genre: "Emotional, Modern Urban",
    status: { en: "Demo building (1.5–2 hours gameplay)", zh: "Demo迭代中 (1.5-2小时游戏流程)" },
    description: {
      en: "2025, a late-night insomnia support group. A 24-year-old product manager searching for genuine human connection.",
      zh: "2025年，一个深夜失眠互助小组。一名24岁的项目经理在寻找真实的人因连接。"
    },
    link: "https://pagexxx.itch.io/insomnia-club",
    image: "/insomnia_club.jpg",
    highlights: {
      en: ["Phone/social timeline system", "Day/night cycle", "Hidden attribute system"],
      zh: ["手机社交时间线系统", "昼夜循环", "隐藏属性系统"]
    }
  },
  {
    title: "岛 (The Island)",
    engine: "Godot 4",
    genre: "Survival, Atmospheric, Narrative",
    status: { en: "In Development", zh: "开发中" },
    description: {
      en: "A psychological survival game set on an ever-changing island that mirrors the player's internal state. Focuses on procedural storytelling and atmospheric exploration.",
      zh: "一款心理生存游戏，背景设定在一个反映玩家内心状态的不断变化的岛屿。专注于程序化叙事和氛围探索。"
    },
    highlights: {
      en: ["Procedural landscape generation", "Internal-state driven weather", "Environmental storytelling"],
      zh: ["程序化地形生成", "内心状态驱动的天气系统", "环境叙事"]
    }
  }
];

export const experiences: Experience[] = [
  {
    company: "Citi Group",
    role: { en: "Tech Analyst", zh: "技术分析师" },
    period: "Jul 2021 – Jun 2024",
    tech: ["Java", "Python", "SQL", "Spark", "Jenkins"],
    points: {
      en: [
        "Automated risk mitigation via Python, recognized as Best Practice.",
        "Selenium + RESTful API automation reduced management effort by 80%.",
        "Lead Sybase to Oracle database migration.",
        "Collaborated on FRTB program and global Trade Sensitive Matching systems."
      ],
      zh: [
        "使用Python自动化风险缓解，被评为年度最佳实践。",
        "Selenium + RESTful API自动化将项目管理精力减少80%。",
        "主导Sybase到Oracle的数据库迁移。",
        "协作开发FRTB计划和全球贸易敏感匹配系统。"
      ]
    }
  },
  {
    company: "Memo Studio",
    role: { en: "Producer & Founder", zh: "制作人 & 创始人" },
    period: "2025 – Present",
    points: {
      en: [
        "Leading an 10-member indie game studio (writers, artists, programmers).",
        "Overseeing end-to-end production: milestone planning, asset pipeline, and release management.",
        "Developing 'Insomnia Club' (Visual Novel) and 'The Island' (Godot)."
      ],
      zh: [
        "领导由10名成员（编剧、美术、程序员）组成的独立游戏工作室。",
        "负责端到端制作：里程碑计划、资产管线和发布管理。",
        "正在开发《失眠俱乐部》和《岛 (The Island)》。"
      ]
    }
  }
];
