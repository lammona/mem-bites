"use client";
import { useSearchParams } from "next/navigation";

export default function MyClientInput() {
  const searchParams = useSearchParams();
  const topic = searchParams.get("topic");
  return <p>Topic: {topic}</p>;
}
