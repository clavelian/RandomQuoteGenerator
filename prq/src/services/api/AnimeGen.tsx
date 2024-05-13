import React from "react";
import { useState } from "react";

function AQuote() {
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
}

const AnimeGen = () => {
  fetch("https://animechan.xyz/api/random")
    .then((response) => response.json())
    .then((quote) => console.log(quote));

  return <></>;
};

export default AnimeGen;
