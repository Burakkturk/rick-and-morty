import { Metadata } from "next";
import Link from "next/link";

export default function Home() {
  const metadata: Metadata = {
    title: "Rick and Morty App with NextJS",
    description:
      "Practice project using NextJS with App Router by Maria Litwa at Code Academy Berlin",
  };

  return (
    <main>
      <h1>Homepage: Next JS Rick & Morty App</h1>
      <Link href={"/characters"}>
        Click here to see a List of Rick & Morty Characters
      </Link>
    </main>
  );
}