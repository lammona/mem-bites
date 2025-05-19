import styles from "./header.module.css"



export default function Header() {
  return (
  <header className={styles.header}>
  <h1 className={styles.appName}>Memory Bites</h1>
  <h3 className={styles.appDescription}>Your daily dose of smart, bite-sized facts</h3>
  </header>
  )
}
