import { Project, Title } from '@/components'
import styles from './Projects.module.css'

export const Projects = () => {
  return (
    <section className={styles.projects}>
      <div className={styles.projects__container}>
        <Title title='Proyectos' smallTitle='Trabajos' />
        <div className={styles.projects__list}>
          <Project
            description={`
            Un software de correspondencia que agiliza la recepción, generación
            y seguimiento de cada radicados, mejorando la eficiencia y accesibilidad
            por parte de la comunidad hacia la entidad.
          `}
            image='/img/projects/filesoft.png'
            skills={['Next JS', 'Express', 'Socket IO', 'API REST', 'JWT']}
            title='FileSoft'
            subtitle='Software de correspondencia'
            url='/'
            imagePosition='left'
          />
          <Project
            description={`
            Aplicación web para los estudiantes de la UNAD, permite el registro de 
            cursos, confirmación de entrega y calificación dada para la actividad, 
            brinda alertas cuando se aproxima la fecha límite, muestra resumen del 
            avance de cada curso  y del semestre en general.
          `}
            image='/img/projects/agenda-unad.png'
            skills={['Vue JS', 'ChartJS', 'Express', 'API REST', 'JWT']}
            title='Agenda UNAD'
            subtitle='Seguimiento de cursos'
            url='/'
            imagePosition='right'
          />
        </div>
      </div>
    </section>
  )
}