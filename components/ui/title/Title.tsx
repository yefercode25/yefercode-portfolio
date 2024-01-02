import styles from './Title.module.css';

interface ITitleProps {
  title: string;
  smallTitle: string;
}

export const Title = ({ smallTitle, title }: ITitleProps) => {
  return (
    <h2 className={styles.title}>
      <span>{ smallTitle }</span>
      { title }
    </h2>
  )
}