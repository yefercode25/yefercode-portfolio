'use server';

import { SkillSection, Title } from '@/components';
import { LuLayoutPanelTop } from "react-icons/lu";
import { LiaSitemapSolid } from "react-icons/lia";
import { BsPhoneFlip, BsReverseLayoutTextWindowReverse } from "react-icons/bs";
import { BiLogoTypescript } from "react-icons/bi";
import { MdOutlineScreenshotMonitor } from "react-icons/md";
import { AiOutlineApi } from "react-icons/ai";
import { FaChrome, FaCss3Alt, FaHtml5, FaNode, FaPython, FaReact, FaSass, FaUserGear, FaVuejs } from "react-icons/fa6";
import { SiAdobexd, SiExpress, SiGimp, SiNextdotjs, SiPostman, SiRedux, SiSocketdotio, SiTailwindcss } from "react-icons/si";
import { TbBrandCSharp, TbBrandJavascript, TbBrandZapier } from "react-icons/tb";
import { FaFigma, FaPhp } from "react-icons/fa";
import styles from './Skills.module.css';

interface SkillItem {
  Icon: React.ReactNode;
  text: string;
}

interface SkillsList {
  habilities: SkillItem[];
  tools: SkillItem[];
}

const designerSkills: SkillsList = {
  habilities: [
    { text: 'Wireframing', Icon: LuLayoutPanelTop },
    { text: 'Diseño de flujo', Icon: LiaSitemapSolid },
    { text: 'Accesibilidad', Icon: FaUserGear },
    { text: 'Prototipado', Icon: BsReverseLayoutTextWindowReverse },
    { text: 'Diseño responsivo', Icon: MdOutlineScreenshotMonitor },
  ],
  tools: [
    { text: 'Figma', Icon: FaFigma },
    { text: 'Adobe XD', Icon: SiAdobexd },
    { text: 'GIMP', Icon: SiGimp }
  ]
}

const frontendSkills: SkillsList = {
  habilities: [
    { text: 'HTML 5', Icon: FaHtml5 },
    { text: 'CSS 3', Icon: FaCss3Alt },
    { text: 'SASS', Icon: FaSass },
    { text: 'JavaScript', Icon: TbBrandJavascript },
    { text: 'TypeScript', Icon: BiLogoTypescript },
    { text: 'React JS', Icon: FaReact },
    { text: 'Vue JS', Icon: FaVuejs },
    { text: 'Next JS', Icon: SiNextdotjs },
    { text: 'Redux Toolkit', Icon: SiRedux },
    { text: 'Socket IO', Icon: SiSocketdotio },
    { text: 'Tailwind CSS', Icon: SiTailwindcss },
  ],
  tools: [
    { text: 'Chrome Developer Tools', Icon: FaChrome },
    { text: 'Responsively', Icon: BsPhoneFlip },
  ]
}

const backendSkills: SkillsList = {
  habilities: [
    { text: 'Node JS', Icon: FaNode },
    { text: 'Express JS', Icon: SiExpress },
    { text: 'Python', Icon: FaPython },
    { text: 'C#', Icon: TbBrandCSharp },
    { text: 'PHP', Icon: FaPhp },
    { text: 'REST API', Icon: AiOutlineApi },
    { text: 'JWT', Icon: TbBrandZapier },
  ],
  tools: [
    { text: 'Postman', Icon: SiPostman },
  ]
}

export const Skills = () => {
  return (
    <section className={styles.skills}>
      <div className={styles.skills__container}>
        <Title smallTitle="Herramientas" title="Habilidades" />
        <SkillSection 
          title='Diseñador UI/UX'
          skills={designerSkills}
        />
        <SkillSection 
          title='Desarrollador Frontend '
          skills={frontendSkills}
        />
        <SkillSection 
          title='Desarrollador Backend'
          skills={backendSkills}
        />
      </div>
    </section>
  )
}