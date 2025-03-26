import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Mem_bite from "./components/mem_bite/mem_bite";
import styles from "./page.module.css";
import Link from "next/link";


export default function Home() {
  return (
    <div>
     <main>
      <Header></Header>
     
        <h2>Welcome to mem-bites app!!!!!</h2>
        <div className={styles.mem_container}>
          <Mem_bite></Mem_bite>
          <Mem_bite></Mem_bite>
          <Mem_bite></Mem_bite>
        </div>
        
        <button>Quiz me</button>
        <Link href="/new_topic">
        <button>Create New</button>
      </Link>
        {/* <button>New topic page</button> */}
      

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