import styles from "./card.module.css";

interface CardProps {
  content: string;
}

// export default function Card( {content}: CardProps) {
//   return (
//     <div>
//       <p className={styles.card}>
//         {content}
//       </p>
//       <button className={styles.approve}>✅</button>
//       <button className={styles.remove}>❌</button>
//     </div>
//   );
// }

export default function Card({content}: CardProps){
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <p>{content}</p>
        <div className={styles.actions}>
        <button className={styles.approve}>Approve ✅</button>
        <button className={styles.remove}>Remove❌</button>
        </div>
      </div>
    </div>
  )
}
