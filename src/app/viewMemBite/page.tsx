//this is ViewMemBite page. use is no longer manipulate the facts at this stage-
//unless special feature will be created in the future to do so

import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import NavButton from "../components/navButton/navButton";
import Card from "../components/card/card";
import Link from "next/link";

export default function ViewMemBite() {
  return (
    <div>
      <Header />

      <h2>Key facts about: ...tralalalala.....</h2>
      <main>
        <Card />
        <Card />
        <Card />
      </main>

      <Link href="/memBite">
        <NavButton text="Back" />
      </Link>
      <Footer />
    </div>
  );
}
