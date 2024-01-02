'use server';

import styles from './SkillSection.module.css';

interface SkillItem {
  Icon: any;
  text: string;
}

interface SkillSectionProps {
  title: string;
  skills: {
    habilities: SkillItem[];
    tools: SkillItem[];
  }
}

export const SkillSection = ({ title, skills }: SkillSectionProps) => {
  return (
    <div className={styles['skill-section']}>
      <h3>{title}</h3>
      <div className={`${styles['skills-list']} ${styles['skills-list--habilites']}`}>
        {skills?.habilities?.map((skill, index) => {
          const { Icon, text } = skill;
          return (
            <div key={index} className={styles['skill-item']}>
              <Icon />
              <p>{text}</p>
            </div>
          )
        })}
      </div>
      <div className={`${styles['skills-list']} ${styles['skills-list--tools']}`}>
        {skills?.tools?.map((skill, index) => {
          const { Icon, text } = skill;
          return (
            <div key={index} className={styles['skill-item']}>
              <Icon />
              <p>{text}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}