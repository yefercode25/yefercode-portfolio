import Image from 'next/image';
import Link from 'next/link';
import { FaAnglesRight } from 'react-icons/fa6';
import styles from './Project.module.css';

interface ProjectProps {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  skills: string[];
  url: string;
  imagePosition?: 'left' | 'right';
}

export const Project = ({ description, image, skills, title, url, subtitle, imagePosition }: ProjectProps) => {
  return (
    <div 
      className={`${styles.project} ${imagePosition === 'right' && styles['row-reverse-direction']}`} 
    >
      <Image
        src={image}
        alt={`Proyecto de ${title}`}
        width={400}
        height={250}
      />
      <div 
        className={`${styles.project__info} ${imagePosition === 'right' && styles['text-right']}`}
      >
        <h3>
          { title }
          <span>{ subtitle }</span>
        </h3>
        <p>
          { description }
        </p>
        <div className={styles.project__info__skills}>
          {skills?.map((skill, index) => (
              <span key={index}>{ skill }</span>
          ))}
        </div>
        <div className={styles.project__info__button}>
          <Link href={url} target='_blank'>
            Ver más información
            <FaAnglesRight />
          </Link>
        </div>
      </div>
    </div>
  )
}