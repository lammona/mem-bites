import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import NavButton from "../components/navButton/navButton";
import TextForm from "../components/textForm/textForm";

export default function New_topic() {
  return (
    <div>
      <Header></Header>

      <p>This is new topic page</p>
      <h1>What do you want to remember?</h1>
      <TextForm/>

      <NavButton text="Next" />

      <Footer></Footer>
    </div>
  );
}
