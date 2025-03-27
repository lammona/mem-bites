import Card from "../components/card/card";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import NavButton from "../components/navButton/navButton";

export default function MemBite() {
  return (
    <div>
      <Header />


      <h2>Key facts about: ........</h2>
      <main>
        <Card />
        <Card />
        <Card />
      </main>

      <button>Give me one more</button>
      <button>Create fact yourself</button>

      <NavButton text="Submit"></NavButton>


      <Footer />
    </div>
  );
}
