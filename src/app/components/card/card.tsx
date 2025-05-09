import styles from "./card.module.css";

interface CardProps {
  content: string;
}

export default function Card( {content}: CardProps) {
  return (
    <div>
      <p className={styles.card}>
        {content}
      </p>
      <button>✅</button>
    </div>
  );
}
