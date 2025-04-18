"use client";

//this is a page where you can accept, change or ask for more facts generated
//after confirmation(submit) user will be taken to next page- ViewMemBite page

import Card from "../components/card/card";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import NavButton from "../components/navButton/navButton";
import Link from "next/link";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getTopicDefinition } from "../lib/chatgpt";

function Content() {
  const searchParams = useSearchParams();
  const topic = searchParams.get("topic") || "Unknown topic";
  const [definition, setDefinition] = useState<string>("Loading...");

    useEffect(() =>{
      const fetchDefinition = async () => {
        const def = await getTopicDefinition(topic);
        setDefinition(def);
      };
      fetchDefinition();
    }, [topic]);

  return (
    <>
      <h2>Key facts about: {topic}</h2>
      <p><strong>Definition:</strong> {definition}</p>
      <main>
        <Card />
        <Card />
        <Card />
      </main>

      <button>Give me one more</button>
      <button>Create fact yourself</button>

      <NavButton text="Submit"></NavButton>
      <Link href={`/viewMemBite?topic=${encodeURIComponent(topic)}`}>
        <NavButton text="temporary link to ViewMemBite page" />
      </Link>
    </>
  );
}

export default function MemBite() {
  return (
    <div>
      <Header />
      <Suspense>
        <Content />
      </Suspense>
      <Footer />
    </div>
  );
}
