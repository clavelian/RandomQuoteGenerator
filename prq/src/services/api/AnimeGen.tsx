import React from "react";
import { useState } from "react";
import axios from "axios";

function AQuote() {
  const [content, setAContent] = useState("");
  const [author, setAAuthor] = useState("");
}

const AnimeGen = () => {
    axios
    .get("https://animechan.xyz/api/random")
    .then((response) => {
        console.log(response.data.content, "by", response.data.author);
        setAContent(response.data.content);
        setAAuthor(response.data.author);
      })
      .catch((error) => {
        console.log(error);
      });
  };


//   fetch("https://animechan.xyz/api/random")
//     .then((response) => response.json())
//     .then((quote) => console.log(quote));

  return <></>;
};

export default AnimeGen;
