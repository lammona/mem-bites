// this is ViewMemBite page. this page will display only one membite at the time with selected facts.
// user will access this when submit button will be clicked on mem-bite page OR user will access this page from home page

"use client";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import NavButton from "../components/navButton/navButton";
import Link from "next/link";
import { Suspense } from "react";


function Content() {

  return (
    <>
      <p>This is the place where whole piece of individual MemBite will be displayed with the facts about the topic. this will be accessed from home page or from mem-bite page after submit button is clicked</p>
    <main>
      
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
