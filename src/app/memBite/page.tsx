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
import Modal from "../components/modal/modal";

function Content() {
  const searchParams = useSearchParams();
  const topic = searchParams.get("topic") || "Unknown topic";
  //const [definition, setDefinition] = useState<string>("Loading...");
  const [facts, setFacts] = useState<string[]>(["Loading..."]);
  const [showModal, setShowModal] = useState(false);
  const [customFact, setCustomFact] = useState("");
  const [loading, setLoading] = useState(false);

  //🛟 check for clarification
  const [allFacts, setAllFacts] = useState<string[]>([]);

  useEffect(() => {
    const fetchFacts = async () => {
      try {
        const data = await getTopicDefinition(topic);
        setFacts(data.facts || ["No facts found."]);
        setAllFacts(data.facts || []);
      } catch (error) {
        console.error("Error fetching facts:", error);
        setFacts(["Failed to load facts. Please try again."]);
      }
    };

    fetchFacts();
  }, [topic]);

  //🛟 new function - check for clarification
  const handleGiveMeMore = async () => {
    setLoading(true);
    try {
      const newFact = await getOneMoreFact(topic, allFacts);
      if (newFact && !allFacts.includes(newFact)) {
        setFacts((prev) => [...prev, newFact]);
        setAllFacts((prev) => [...prev, newFact]);
      }
    } catch (error) {
      console.error("Error getting new fact:", error);
    }finally{
      setLoading(false);
    }
  };

  const handleCustomFactSubmit = (fact: string) => {
    if (!fact.trim()) return;
    setFacts((prev) => [...prev, fact.trim()]);
    setCustomFact("");
    setShowModal(false);
  };

  return (
    <>
      <h2>Key facts about: {topic}</h2>
      {/* <p><strong>Definition:</strong> {facts}</p> */}
      <main>
        {loading && <p>Loading one more fact...</p>}
        {facts.map((fact, index) => (
          <Card key={index} content={fact} />
        ))}
      </main>

      <button onClick={handleGiveMeMore}>Give me one more</button>
      <button onClick={() => setShowModal(true)}> Create fact yourself</button>

      {showModal && (
        <Modal
          onClose={() => setShowModal(false)}
          onSubmit={handleCustomFactSubmit}
          value={customFact}
          setValue={setCustomFact}
        />
      )}

      <NavButton text="Submit"></NavButton>
      <Link href={`/viewMemBite?topic=${encodeURIComponent(topic)}`}>
        <NavButton text="temporary link to ViewMemBite page" />
      </Link>
    </>
  );
}

async function getOneMoreFact(topic: string, exclude: string[]) {
  const response = await fetch("/api/getDefinition", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ topic, excludesFacts: exclude }),
  });
  if (!response.ok) {
    throw new Error("Failed to fetch new fact");
  }
  const data = await response.json();
  return data.facts[0];
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
