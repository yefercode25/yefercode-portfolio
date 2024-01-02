import Link from 'next/link';
import { Title, Work } from '@/components';
import styles from './Experience.module.css';
import { FaAnglesRight } from 'react-icons/fa6';

export const Experience = () => {
  return (
    <section className={styles.experience}>
      <div className={styles.experience__container}>
        <Title title='Experiencia' smallTitle='Actividades' />
        <Work 
          date='Febrero - Octubre 2023'
          description={`
            Diseño, desarrollo y despliegue de soluciones web personalizadas y eficientes, 
            realizando la creación de experiencias de usuario atractivas y funcionales, 
            desde el concepto inicial hasta la implementación, usando lenguajes de 
            programación front-end y back-end, con enfoque en la optimización del 
            rendimiento y la usabilidad.
          `}
          title='Desarrollador Web Freelancer'
          skills={['Next JS', 'Vue JS', 'Express', 'REST API']}
        />
        <Work 
          date='Octubre - Diciembre 2022'
          description={`
            Como profesional de apoyo en mantenimiento de equipos, soporte en seguridad 
            de datos y reparación de dispositivos, mi enfoque se centra en garantizar 
            el funcionamiento óptimo de los equipos, proteger la integridad de los 
            datos y solucionar cualquier problema relacionado con los dispositivos.
          `}
          title='Apoyo mantenimiento a equipos de la entidad'
          skills={['Mantenimiento de equipos', 'Soporte en seguridad de datos', 'Reparación de dispositivos']}
          lastChild
        />
        <div className={styles.experience__container__button}>
          <Link href={''}>
            Ver hoja de vida completa
            <FaAnglesRight />
          </Link>
        </div>
      </div>
    </section>
  )
}