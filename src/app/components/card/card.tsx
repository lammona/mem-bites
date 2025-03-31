import styles from "./card.module.css";

export default function Card() {
  return (
    <div>
      <p className={styles.card}>
        Some text generated by AI based on users input
      </p>
      <button>✅</button>
    </div>
  );
}
