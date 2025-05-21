"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
// import NavButton from "../navButton/navButton";
import styles from "./textForm.module.css";

export default function TextForm() {
  const [text, setText] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/memBite?topic=${encodeURIComponent(text)}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter a topic"
        />
        <button type="submit"> Press Submit</button>
        {/* <Link href="/memBite">
        <NavButton text="Submit" />
        </Link> */}
      </form>
    </div>
  );
}

// Add a simple text input field. v

// Use React useState to store the text input value. v

// Add a submit button. v

// Prevent the default form submission behavior. v

// Show an alert with the entered text when submitted. v
