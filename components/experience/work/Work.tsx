import styles from './Work.module.css';

interface WorkProps {
  date: string;
  title: string;
  description: string;
  skills: string[];
  lastChild?: boolean;
}

export const Work = ({ date, description, skills, title, lastChild = false }: WorkProps) => {
  return (
    <div className={styles.work}>
      <div className={styles.work__line}></div>
      <article 
        className={styles.work__info}
        style={{ marginBottom: lastChild ? '0' : '40px' }}
      >
        <p>{ date }</p>
        <div className={styles.work__info__more}>
          <h3>{ title }</h3>
          <p>
            { description }
          </p>
          <div className={styles.work__info__more__skills}>
            {skills?.map((skill, index) => (
              <span key={index}>{ skill }</span>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}