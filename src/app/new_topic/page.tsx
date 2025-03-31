import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import NavButton from "../components/navButton/navButton";
import TextForm from "../components/textForm/textForm";
import Link from "next/link";

export default function New_topic() {
  return (
    <div>
      <Header></Header>

      <h1>What do you want to remember?</h1>
      <TextForm />

      {/* //moved the following to the form component */}
      {/* <Link href="/memBite">
        <NavButton text="temporary link to mem_bite page" />
      </Link> */}

      <Link href="/">
        <NavButton text="Back" />
      </Link>

      <Footer></Footer>
    </div>
  );
}
