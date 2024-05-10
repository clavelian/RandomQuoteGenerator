import React, { useState } from "react";
import axios from "axios";

function Quote() {
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const quoteGenerator = () => {
    axios
      .get("https://api.quotable.io/random")
      .then((response) => {
        console.log(response.data.content, "by", response.data.author);
        setContent(response.data.content);
        setAuthor(response.data.author);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container m-5">
        <h3>{content}</h3>
        <h3>{author}</h3>
        <button onClick={quoteGenerator} className="btn btn-info">
          Click for random quotes
        </button>
      </div>
    </>
  );
}
export default Quote;
