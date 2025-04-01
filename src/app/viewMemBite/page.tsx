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

function Content() {
  const searchParams = useSearchParams();
  const topic = searchParams.get("topic") || "Unknown topic";
  return (
    <>
      <h2>Key facts about: {topic}</h2>
      <main>
        <Card />
        <Card />
        <Card />
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
