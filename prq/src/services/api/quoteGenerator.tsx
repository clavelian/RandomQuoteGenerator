import React from "react";
import axios from "axios";

function quote() {
  const quoteGenerator = () => {
    axios
      .get("https://api/quotable.io/random")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container m-5">
        <button onClick={quoteGenerator} className="btn btn-info">
          Click for random quotes
        </button>
      </div>
    </>
  );
}
export default quote;
