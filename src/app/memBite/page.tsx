"use client"

//this is a page where you can accept, change or ask for more facts generated
//after confirmation(submit) user will be taken to next page- ViewMemBite page

import  {useSearchParams} from "next/navigation";
import Card from "../components/card/card";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import NavButton from "../components/navButton/navButton";
import Link from "next/link";

export default function MemBite() {
const searchParams = useSearchParams();
const topic = searchParams.get("topic") || "Unknown topic";
  
return (
    <div>
      <Header />

{/* //display key facts about ...- the topic that user input in the TextForm function */}
      <h2>Key facts about: {topic}</h2>
      <main>
        <Card />
        <Card />
        <Card />
      </main>

      <button>Give me one more</button>
      <button>Create fact yourself</button>

      <NavButton text="Submit"></NavButton>
      <Link href="/viewMemBite">
        <NavButton text="temporary link to ViewMemBite page" />
      </Link>

      <Footer />
    </div>
  );
}
