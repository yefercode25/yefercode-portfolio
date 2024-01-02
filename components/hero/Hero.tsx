import Image from 'next/image';
import styles from './Hero.module.css';
import { NetworksLinks } from '@/components';

export const Hero = () => {
  return (
    <>
      <main className={styles.hero}>
        <div className={styles.hero__container}>
          <div className={styles['hero__container--info']}>
            <div className={styles['hero__container--info--name']}>
              <Image src='/img/icons/hand.svg' alt='Saludo' width={18} height={25} />
              <h1>¡Hola! soy Camilo Zaque</h1>
            </div>
            <div className={styles['hero__container--info--title']}>
              <h4>Transformo ideas en código</h4>
              <h2>
                Soy <span>Ingeniero de Sistemas</span> y <span> Desarrollador de Software
                </span>, apasionado por crear soluciones innovadoras.
              </h2>
            </div>
            <div className={styles['hero__container--info--description']}>
              <p>
                Cuento con experiencia en el diseño de interfaces hasta la creación de
                arquitecturas de software robustas. Con habilidades en el manejo de
                bases de datos y la optimización de recursos, asegurando que cada
                proyecto alcance su máximo potencial.
              </p>
              <NetworksLinks />
            </div>
          </div>
          <div className={styles['hero__container--image']}>
            <Image
              src="/img/developer.svg"
              alt="Software Developer"
              width={380}
              height={353}
            />
          </div>
        </div>
      </main>
      {/* <Image
        src='/img/sep-gray-leftsvg.svg'
        alt='Separador de secciones'
        width={1280}
        height={24}
        className={styles['hero__separator']}
      /> */}
    </>
  )
}