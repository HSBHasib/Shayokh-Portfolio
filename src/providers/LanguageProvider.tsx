"use client";

import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from "react";

type Language = "en" | "zh";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Navigation
  "nav.home": { en: "Home", zh: "首页" },
  "nav.about": { en: "About", zh: "关于" },
  "nav.skills": { en: "Skills", zh: "技能" },
  "nav.research": { en: "Research", zh: "研究" },
  "nav.education": { en: "Education", zh: "教育" },
  "nav.contact": { en: "Contact", zh: "联系" },
  "nav.menu": { en: "Menu", zh: "菜单" },

  // Hero
  "hero.greeting": { en: "Hello, I'm", zh: "你好，我是" },
  "hero.viewCV": { en: "View CV", zh: "查看简历" },
  "hero.viewResearch": { en: "View Research", zh: "查看研究" },
  "hero.title1": { en: "BSC Graduate in EEE", zh: "电气工程学士" },
  "hero.title2": { en: "Researcher", zh: "研究员" },
  "hero.title3": { en: "Power Electronics", zh: "电力电子" },
  "hero.title": { en: "Energy & Electrical Engineering Researcher", zh: "能源与电气工程研究员" },

  // About
  "about.title": { en: "About", zh: "关于" },
  "about.subtitle": { en: "Academic background and professional journey in electrical engineering research.", zh: "电气工程研究的学术背景和职业历程。" },
  "about.publications": { en: "Publications", zh: "发表论文" },
  "about.skills": { en: "Skills", zh: "技能" },
  "about.researchAreas": { en: "Research Areas", zh: "研究领域" },

  // Personal Info
  "personal.title": { en: "Energy & Electrical Engineering Researcher", zh: "能源与电气工程研究员" },
  "personal.institution": { en: "Nanjing University of Information Science and Technology (NUIST), Nanjing, China", zh: "南京信息工程大学，中国南京" },
  "personal.degree": { en: "Bachelor of Electrical Engineering (2021 – 2025)", zh: "电气工程学士 (2021 – 2025)" },
  "personal.bio1": { en: "Specializing in Cryogenic Energy Storage (CES), Wide-Bandgap Semiconductors (SiC/GaN), and Smart Grid Optimization.", zh: "专注于低温储能 (CES)、宽禁带半导体 (SiC/GaN) 和智能电网优化。" },
  "personal.bio2": { en: "Engineering Next-Generation Power Electronics & High-Efficiency Energy Conversion Systems.", zh: "设计下一代电力电子与高效能源转换系统。" },
  "personal.bio3": { en: "Exploring Optical Fiber Communications, DWDM Systems & Advanced Power Grid Control.", zh: "探索光纤通信、DWDM 系统与先进电网控制。" },
  "personal.detailedBio": { en: "Md Shayokh Mondol is a dedicated researcher in Electrical Engineering currently completing his Bachelor's degree at Nanjing University of Information Science and Technology (NUIST). His academic trajectory focuses on solving key energy transition challenges through high-efficiency power electronics, next-generation semiconductor materials like SiC and GaN, and advanced Cryogenic Energy Storage (CES) systems. Moving forward, he aims to advance smart grid optimization using artificial intelligence algorithms (MPC and Reinforcement Learning) and pursue graduate-level research to engineer sustainable, ultra-efficient power conversion and storage architectures for global renewable grids.", zh: "Md Shayokh Mondol 是南京信息工程大学 (NUIST) 电气工程专业的研究员，目前正在完成学士学位。他的学术轨迹专注于通过高效电力电子、下一代半导体材料（如 SiC 和 GaN）以及先进的低温储能 (CES) 系统来解决能源转型的关键挑战。未来，他计划利用人工智能算法（MPC 和强化学习）推进智能电网优化，并追求研究生级别的研究，为全球可再生能源电网设计可持续、超高效的电力转换和存储架构。" },

  // Skills
  "skills.title": { en: "Skills", zh: "技能" },
  "skills.subtitle": { en: "Technical expertise developed through academic research and hands on projects in electrical engineering.", zh: "通过电气工程学术研究和实践项目获得的技术专长。" },
  "skill.matlab": { en: "MATLAB Simulation", zh: "MATLAB 仿真" },
  "skill.control": { en: "Control Theory", zh: "控制理论" },
  "skill.eee": { en: "Electrical & Electronics Engineering", zh: "电气与电子工程" },
  "skill.powerEng": { en: "Electrical Power Engineering", zh: "电力工程" },
  "skill.powerAnalysis": { en: "Power Systems Analysis", zh: "电力系统分析" },
  "skill.powerSim": { en: "Power Systems Simulation", zh: "电力系统仿真" },
  "skill.renewable": { en: "Renewable Energy Technologies", zh: "可再生能源技术" },
  "skill.automation": { en: "Automation & Robotics", zh: "自动化与机器人" },
  "skill.generation": { en: "Power Generation", zh: "发电" },
  "skill.problem": { en: "Problem Solving", zh: "问题解决" },
  "skill.program": { en: "Program Management", zh: "项目管理" },
  "skill.digital": { en: "Digital Media", zh: "数字媒体" },
  "skill.hr": { en: "Human Resources (HR)", zh: "人力资源 (HR)" },
  "skill.training": { en: "Training and Development", zh: "培训与发展" },

  // Research
  "research.title": { en: "Research", zh: "研究" },
  "research.subtitle": { en: "Research contributions in power electronics, optical communications, and energy storage systems.", zh: "在电力电子、光通信和储能系统方面的研究贡献。" },
  "research.details": { en: "Details", zh: "详情" },
  "research.viewPDF": { en: "View PDF", zh: "查看PDF" },
  "research.references": { en: "references", zh: "参考文献" },
  "research.title1": { en: "High-Efficiency Power Electronics: Researching Wide-Bandgap Semiconductors for Power Conversion Systems with Higher Efficiency and Thermal Performance", zh: "高效电力电子：研究宽禁带半导体在功率转换系统中的高效率和热性能" },
  "research.journal1": { en: "International Journal of Electrical Engineering and Applied Sciences (IJEEAS)", zh: "国际电气工程与应用科学杂志 (IJEEAS)" },
  "research.title2": { en: "Exploring the Future of Optical Fiber Communications Technologies and Applications", zh: "探索光纤通信技术与应用的未来" },
  "research.journal2": { en: "Middle East Research Journal of Engineering and Technology", zh: "中东工程与技术研究杂志" },
  "research.title3": { en: "Revolutionary Cryogenic Energy Storage for Ultra-Efficient Power and Smart Grids", zh: "革命性低温储能用于超高效电力和智能电网" },
  "research.journal3": { en: "North American Academic Research", zh: "北美学术研究" },
  "research.title4": { en: "High-Efficiency Power Electronics: Researching Wide-Bandgap Semiconductors for Power Conversion Systems with Higher Efficiency and Thermal Performance", zh: "高效电力电子：研究宽禁带半导体在功率转换系统中的高效率和热性能" },
  "research.journal4": { en: "International Journal of Electrical and Electronics Engineering Studies", zh: "国际电气与电子工程研究杂志" },
  "research.modal.published": { en: "Published", zh: "发表日期" },
  "research.modal.doi": { en: "DOI", zh: "DOI" },
  "research.modal.references": { en: "References", zh: "参考文献" },
  "research.modal.figures": { en: "Figures", zh: "图表" },
  "research.modal.authors": { en: "Authors", zh: "作者" },
  "research.modal.abstract": { en: "Abstract", zh: "摘要" },
  "research.modal.keyFindings": { en: "Key Findings", zh: "主要发现" },
  "research.modal.keywords": { en: "Keywords", zh: "关键词" },
  "research.modal.doiLink": { en: "DOI Link", zh: "DOI 链接" },

  // Research 1 - Content
  "research1.abstract": { en: "Power electronics applications including renewable energy power conversion systems along with electric vehicles (EVs), industrial automation systems, and telecommunication depend on power conversion systems to meet their rising demand requirements. Such industries need power conversion systems with capabilities to handle high voltage, high temperature, and high frequency operation. Power electronics systems use silicon-based semiconductors as the foundation of their operation, but these components are insufficient to handle current demands. The need for materials that exceed existing performance in voltage applications and thermal conditions as well as switching properties remains high. Temperamental WBG semiconductors SiC and GaN stand as promising alternative materials for high voltage along with high temperature and high frequency applications. SiC stands out because it combines efficient thermal conductivity with high voltage tolerance and thus is useful for power-train systems, industrial motors, and power grid installations in electric vehicles. GaN devices provide quick switching behavior alongside higher electron mobility and enable use in small high-frequency power converters, solar inverters, and power supplies. The investigation examines power conversion systems through which SiC and GaN semiconductors show electrically conductive properties together with thermal conductive properties. The research results revealed that both SiC and GaN devices surpass silicon-based devices by 4 to nearly 9 percent in terms of operating efficiency. Junction temperature decreases by 30-40% under high load conditions for SiC devices, whereas GaN-based devices achieve a 15-20% improvement compared to silicon.", zh: "电力电子应用包括可再生能源电力转换系统、电动汽车 (EV)、工业自动化系统和电信，这些都依赖电力转换系统来满足日益增长的需求。这些行业需要能够处理高电压、高温和高频运行的电力转换系统。电力电子系统使用硅基半导体作为其运行基础，但这些组件不足以应对当前的需求。对超越现有性能的材料需求仍然很高，包括电压应用、热条件和开关特性。WBG 半导体 SiC 和 GaN 作为高电压、高温和高频应用的有前途的替代材料而备受关注。SiC 因其高效的热导率和高电压耐受性而脱颖而出，因此适用于电动汽车的动力系统、工业电机和电网安装。GaN 器件提供快速开关行为和更高的电子迁移率，可用于小型高频功率转换器、太阳能逆变器和电源。研究考察了 SiC 和 GaN 半导体在功率转换系统中的电导和热导特性。研究结果表明，SiC 和 GaN 器件在运行效率方面比硅基器件高出 4% 至近 9%。在高负载条件下，SiC 器件的结温降低 30-40%，而 GaN 器件比硅实现 15-20% 的改进。" },
  "research1.finding1": { en: "4-9% efficiency improvement over Silicon", zh: "比硅效率提高 4-9%" },
  "research1.finding2": { en: "30-40% junction temp reduction in SiC under high loads", zh: "SiC 在高负载下结温降低 30-40%" },
  "research1.finding3": { en: "15-20% thermal performance boost in GaN", zh: "GaN 热性能提升 15-20%" },
  "research1.keyword1": { en: "wide bandgap semiconductors", zh: "宽禁带半导体" },
  "research1.keyword2": { en: "Silicon Carbide (SiC)", zh: "碳化硅 (SiC)" },
  "research1.keyword3": { en: "Gallium Nitride (GaN)", zh: "氮化镓 (GaN)" },
  "research1.keyword4": { en: "Power conversion system", zh: "功率转换系统" },
  "research1.keyword5": { en: "high efficiency power electronics", zh: "高效电力电子" },
  "research1.keyword6": { en: "thermal management", zh: "热管理" },

  // Research 2 - Content
  "research2.abstract": { en: "Optical fiber communication (OFC) has entirely transformed communication by enabling data to be carried at lightning speeds over long distances with high bandwidth and low losses. This paper examines the future of optical fiber communications including innovations such as Dense Wavelength Division Multiplexing (DWDM) and Quantum Key Distribution (QKD) to enhance network capacity and security. The study evaluates optical fiber systems using mathematical models such as the Shannon-Hartley law and Beer-Lambert law. Findings indicate how DWDM enhances efficiency by running multiple data streams through the same fiber, while QKD offers quantum mechanics-based privacy against cyber threats. Furthermore, the paper explores how OFC facilitates 5G, 6G, IoT, Fiber-to-the-Home (FTTH), and addresses signal degradation, rural deployment costs, and environmental fiber disposal challenges.", zh: "光纤通信 (OFC) 通过以闪电般的速度在远距离传输数据，具有高带宽和低损耗，彻底改变了通信方式。本文探讨了光纤通信的未来，包括密集波分复用 (DWDM) 和量子密钥分发 (QKD) 等创新技术，以增强网络容量和安全性。该研究使用香农-哈特利定律和比尔-朗伯定律等数学模型评估光纤系统。研究结果表明 DWDM 如何通过在同一光纤中运行多个数据流来提高效率，而 QKD 提供基于量子力学的隐私保护以抵御网络威胁。此外，本文还探讨了 OFC 如何促进 5G、6G、物联网、光纤到户 (FTTH)，并解决了信号衰减、农村部署成本和环境光纤处理挑战。" },
  "research2.finding1": { en: "DWDM optimization for high-density data traffic", zh: "DWDM 高密度数据流量优化" },
  "research2.finding2": { en: "QKD security integration against quantum cyber threats", zh: "QKD 安全集成抵御量子网络威胁" },
  "research2.finding3": { en: "Signal attenuation analysis over long-distance links", zh: "长距离链路信号衰减分析" },
  "research2.keyword1": { en: "Optical Fiber Communication", zh: "光纤通信" },
  "research2.keyword2": { en: "DWDM", zh: "DWDM" },
  "research2.keyword3": { en: "Quantum Key Distribution (QKD)", zh: "量子密钥分发 (QKD)" },
  "research2.keyword4": { en: "Shannon-Hartley law", zh: "香农-哈特利定律" },
  "research2.keyword5": { en: "Beer-Lambert law", zh: "比尔-朗伯定律" },
  "research2.keyword6": { en: "5G/6G", zh: "5G/6G" },
  "research2.keyword7": { en: "IoT", zh: "物联网" },

  // Research 3 - Content
  "research3.abstract": { en: "As the world transitions to renewable energy sources, scalable energy storage solutions for grid stability are in high demand. Traditional storage such as Li-ion batteries and hydrogen experience scaling and efficiency limits. This paper proposes Cryogenic Energy Storage (CES), which uses cryogenic fluids at ultra-low temperatures to store and release energy effectively. Utilizing thermodynamic modeling, dynamic phase transition analysis, Multi-objective optimization, Monte Carlo simulations, Model Predictive Control (MPC), and Reinforcement Learning (RL), the system optimizes energy dispatch. Results prove CES outperforms traditional battery technologies in NPV, IRR, CAPEX sensitivity, and dispatch stability for large-scale smart grids.", zh: "随着世界向可再生能源过渡，电网稳定性所需的可扩展储能解决方案需求量很大。传统的储能方式如锂离子电池和氢气存在扩展性和效率限制。本文提出了低温储能 (CES)，利用超低温下的低温流体有效存储和释放能量。通过热力学建模、动态相变分析、多目标优化、蒙特卡洛模拟、模型预测控制 (MPC) 和强化学习 (RL)，该系统优化了能源调度。结果证明 CES 在大规模智能电网的 NPV、IRR、CAPEX 敏感性和调度稳定性方面优于传统电池技术。" },
  "research3.finding1": { en: "Superior NPV and IRR compared to Li-ion & Hydrogen storage", zh: "与锂离子和氢气存储相比具有更优的 NPV 和 IRR" },
  "research3.finding2": { en: "Enhanced real-time energy dispatch via MPC and RL algorithms", zh: "通过 MPC 和 RL 算法增强实时能源调度" },
  "research3.finding3": { en: "Zero-emission long-duration grid storage", zh: "零排放长期电网储能" },
  "research3.keyword1": { en: "Cryogenic Energy Storage (CES)", zh: "低温储能 (CES)" },
  "research3.keyword2": { en: "Smart Grids", zh: "智能电网" },
  "research3.keyword3": { en: "Model Predictive Control (MPC)", zh: "模型预测控制 (MPC)" },
  "research3.keyword4": { en: "Reinforcement Learning (RL)", zh: "强化学习 (RL)" },
  "research3.keyword5": { en: "Thermodynamic Modeling", zh: "热力学建模" },

  // Research 4 - Content
  "research4.abstract": { en: "Power electronics applications across EVs, solar inverters, and industrial motor drives require higher voltage handling, thermal stability, and switching speeds. This study evaluates SiC MOSFETs and GaN HEMTs against silicon devices in DC-DC converters and inverters. Experimental analysis demonstrates that SiC and GaN surpass silicon devices by 4 to 9 percent in efficiency, with SiC showing exceptional junction temperature reductions (30-40%) under heavy thermal load conditions.", zh: "电动汽车、太阳能逆变器和工业电机驱动中的电力电子应用需要更高的电压处理能力、热稳定性和开关速度。本研究评估了 SiC MOSFET 和 GaN HEMT 在 DC-DC 转换器和逆变器中与硅器件的对比。实验分析表明，SiC 和 GaN 在效率方面比硅器件高出 4% 到 9%，其中 SiC 在重热负载条件下显示出出色的结温降低 (30-40%)。" },
  "research4.finding1": { en: "4-9% overall efficiency improvement", zh: "整体效率提高 4-9%" },
  "research4.finding2": { en: "30-40% reduction in junction temperatures for SiC", zh: "SiC 结温降低 30-40%" },
  "research4.finding3": { en: "6 comprehensive experimental figures included", zh: "包含 6 个综合实验图表" },
  "research4.keyword1": { en: "SiC MOSFETs", zh: "SiC MOSFET" },
  "research4.keyword2": { en: "GaN HEMTs", zh: "GaN HEMT" },
  "research4.keyword3": { en: "Thermal Management", zh: "热管理" },
  "research4.keyword4": { en: "EV Powertrains", zh: "电动汽车动力系统" },
  "research4.keyword5": { en: "DC-DC Converters", zh: "DC-DC 转换器" },

  // Education
  "education.title": { en: "Education", zh: "教育" },
  "education.subtitle": { en: "Four years of dedicated study in electrical engineering at one of China's leading universities.", zh: "在中国一流大学进行四年的电气工程专业学习。" },
  "education.bachelor": { en: "Bachelor of Electrical Engineering", zh: "电气工程学士" },
  "education.ongoing": { en: "Currently in 4th Year", zh: "现读大四" },
  "education.nuist": { en: "Nanjing University of Information Science and Technology", zh: "南京信息工程大学" },
  "education.coursework": { en: "Relevant Coursework", zh: "相关课程" },
  "education.powerElectronics": { en: "Power Electronics & Drives", zh: "电力电子与驱动" },
  "education.controlSystems": { en: "Control Systems", zh: "控制系统" },
  "education.renewableEnergy": { en: "Renewable Energy Systems", zh: "可再生能源系统" },
  "education.signalProcessing": { en: "Signal Processing", zh: "信号处理" },
  "education.completed": { en: "Completed", zh: "已完成" },
  "education.fullTime": { en: "Full Time", zh: "全日制" },
  "education.years": { en: "4 Years", zh: "4 年" },

  // Contact
  "contact.title": { en: "Get in Touch", zh: "联系我们" },
  "contact.subtitle": { en: "Feel free to reach out for collaborations, research opportunities, or academic inquiries.", zh: "欢迎联系合作、研究机会或学术咨询。" },
  "contact.name": { en: "Your Name", zh: "您的姓名" },
  "contact.email": { en: "Your Email", zh: "您的邮箱" },
  "contact.subject": { en: "Subject", zh: "主题" },
  "contact.message": { en: "Message", zh: "消息" },
  "contact.send": { en: "Send Message", zh: "发送消息" },
  "contact.sending": { en: "Sending...", zh: "发送中..." },
  "contact.emailLabel": { en: "Email", zh: "邮箱" },
  "contact.linkedinLabel": { en: "LinkedIn", zh: "领英" },
  "contact.whatsapp": { en: "WhatsApp", zh: "WhatsApp" },

  // Footer
  "footer.quickLinks": { en: "Quick Links", zh: "快速链接" },
  "footer.connect": { en: "Connect", zh: "联系" },
  "footer.socialLinks": { en: "Social Links", zh: "社交链接" },
  "footer.copyright": { en: "All rights reserved.", zh: "版权所有。" },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("language") as Language | null;
    if (saved) {
      setLanguage(saved);
      document.documentElement.setAttribute("data-lang", saved);
    } else {
      document.documentElement.setAttribute("data-lang", "en");
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    const next = language === "en" ? "zh" : "en";
    setLanguage(next);
    localStorage.setItem("language", next);
    document.documentElement.setAttribute("data-lang", next);
  }, [language]);

  const t = useCallback((key: string): string => {
    return translations[key]?.[language] || key;
  }, [language]);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    return {
      language: "en",
      toggleLanguage: () => {},
      t: (key: string) => key,
    };
  }
  return context;
}
