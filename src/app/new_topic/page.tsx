import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import NavButton from "../components/navButton/navButton";

export default function New_topic() {
  return (
    <div>
      <Header></Header>

      <p>This is new topic page</p>
      <h1>What do you want to remember?</h1>

      

      <NavButton text="Next" />

      <Footer></Footer>
    </div>
  );
}
