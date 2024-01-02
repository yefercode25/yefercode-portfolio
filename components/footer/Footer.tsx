import Link from 'next/link';
import styles from './Footer.module.css';
import Image from 'next/image';

const year = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <Link href="/">
          <Image src='/img/icon-dark.svg' alt='Yefercode Icon' width={59} height={50} />
        </Link>
        <div className={styles.footer__text}>
          <p>
            © {year} Yefercode. Desarrollado por Camilo Zaque con ❤️
          </p>
        </div>
      </div>
    </footer>
  )
}