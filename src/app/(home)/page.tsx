import React from "react";
import { Hero } from "../components/Hero";
import { List } from "../components/List";
import { Description } from "../components/Description";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <List />
      <Description />
    </main>
  );
}
