import styles from "./navButton.module.css";

interface NavButtonProps {
  text: string;
}

export default function NavButton({ text }: NavButtonProps) {
  return (
    <button className={styles.navButton}>
      <p>{text}</p>
    </button>
  );
}
