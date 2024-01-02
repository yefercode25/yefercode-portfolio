import Link from 'next/link';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";
import { HiDocumentArrowDown } from "react-icons/hi2";
import styles from './NetworksLinks.module.css';

const networks = {
  github: 'https://github.com/yefercode25',
  linkedin: 'https://www.linkedin.com/in/yeferson-zaque',
  cv: 'https://drive.google.com/',
}

export const NetworksLinks = () => {
  return (
    <div className={styles['networks-links']}>
      <Link href={networks.github} className={styles['networks-links__item']}>
        <FaGithub />
        <span>Github</span>
        <FaAnglesRight />
      </Link>
      <Link href={networks.linkedin} className={styles['networks-links__item']}>
        <FaLinkedin />
        <span>Linkedin</span>
        <FaAnglesRight />
      </Link>
      <Link href={networks.cv} className={styles['networks-links__item']}>
        <HiDocumentArrowDown />
        <span>Hoja de vida</span>
        <FaAnglesRight />
      </Link>
    </div>
  )
}