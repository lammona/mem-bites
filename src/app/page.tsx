import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Mem_bite from "./components/mem_bite/mem_bite";
import styles from "./page.module.css";
import Link from "next/link";
import NavButton from "./components/navButton/navButton";

//  membites will be displayed on this page directly from the data base- after user will create them. alternatively we can provide 2-3 examples which can be added to the data base or removed by the user- like a mock / show how to work the app kind of test/examples.


export default function Home() {
  return (
    <div>
      <main>
        <Header></Header>

        <h2>Welcome to mem-bites app!!!!!</h2>
        <p>Test deployment</p>
        <div className={styles.mem_container}>
          <Mem_bite></Mem_bite>
          <Mem_bite></Mem_bite>
        </div>
        

        <NavButton text="Quiz me" />
        <Link href="/new_topic">
          <NavButton text="Create New" />
        </Link>

        <Footer></Footer>
      </main>
    </div>
  );
}
// /Users/monikalament/projects/mem-bites/src/app/pages/new_topic/page.tsx
//import Link from "next/link";

// export default function Home() {
//   return (
//     <div>
//       <h1>Home Page</h1>
//       <Link href="/about">
//         <button>Go to About Page</button>
//       </Link>
//     </div>
//   );
// }
