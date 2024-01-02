import Link from 'next/link';
import Image from 'next/image';
import { Switch } from '@/components';
import { PiMoonStarsFill } from "react-icons/pi";
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <Link href="/">
          <Image src='/img/icon-dark.svg' alt='Yefercode' width={59} height={50} />
        </Link>
        <div>
          <div className={styles['switch-mode']}>
            <Switch />
            <span className={styles['switch-mode__icon']}>
              <PiMoonStarsFill />
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}