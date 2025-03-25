import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Mem_bite from "./components/mem_bite/mem_bite";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Header></Header>
      <main>
        <h2>Welcome to mem-bites app!!!!!</h2>
        <div className={styles.mem_container}>
          <Mem_bite></Mem_bite>
          <Mem_bite></Mem_bite>
          <Mem_bite></Mem_bite>
        </div>
      </main>

      <Footer></Footer>
    </>
  );
}
