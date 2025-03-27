"use client";
import React, { useState } from "react";
import NavButton from "../navButton/navButton";
import styles from "./textForm.module.css";


export default function TextForm(){
    const [text, setText]= useState("");

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      alert(`Submited text: ${text}`);
    };

    return (
            <form onSubmit={handleSubmit}>
                <input 
                className={styles.input} 
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                />
            <NavButton text="Submit"/>
            </form>
    

    )
}

// Add a simple text input field. v

// Use React useState to store the text input value. v

// Add a submit button. v

// Prevent the default form submission behavior. v

// Show an alert with the entered text when submitted. v