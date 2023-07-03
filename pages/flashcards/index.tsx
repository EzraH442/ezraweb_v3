import { NextPage } from "next";
import Link from "next/link";
import React, { useState } from "react";

const Home: NextPage = () => {
  const [a, b] = useState("0");

  return (
    <div className="ml-24">
      <ul>
        <li>
          <Link href="/flashcards/practice">practice</Link>
        </li>
        <li>
          <Link href="/flashcards/edit">edit (WIP)</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
