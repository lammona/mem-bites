//this is ViewMemBite page. use is no longer manipulate the facts at this stage-
//unless special feature will be created in the future to do so
"use client";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import NavButton from "../components/navButton/navButton";
import Card from "../components/card/card";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { useEffect, useState } from "react";
import { getTopicDefinition } from "../lib/chatgpt";


function Content() {
  const searchParams = useSearchParams();
  const topic = searchParams.get("topic") || "Unknown topic";
  const [facts, setFacts] = useState<string[]>(["Loading..."]);

  useEffect(() => {
    const fetchFacts = async () => {
      try {
        const data = await getTopicDefinition(topic);
        setFacts(data.facts || ["No facts found."]);
      } catch (error) {
        console.error("Error fetching facts:", error);
        setFacts(["Failed to load facts."]);
      }
    };

    fetchFacts();
  }, [topic]);

  return (
    <>
      <h2>Key facts about: {topic}</h2>
      <main>
      {facts.map((fact, index) => ( 
              <Card key={index} content={fact} />
            ))}
      </main>

      <Link href="/memBite">
        <NavButton text="Back" />
      </Link>
    </>
  );
}

export default function ViewMemBite() {
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
