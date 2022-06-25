import React from "react";
import Accordion from "./components/Accordion";

const items = [
  {
    title: "What is React",
    content: "React is JS Libraby",
  },
  {
    title: "Why React",
    content: "React is popular",
  },
  {
    title: "how to use React",
    content: "By creating Components",
  },
];

export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
