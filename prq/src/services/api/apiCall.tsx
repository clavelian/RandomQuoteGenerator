import React from "react";
import axios from "axios";

const apiCall = () => {
  const quoteGenerator = () => {
    axios
      .get("https://api.quotable.io/random")
      .then((response) => {
        console.log(response.data.content, " - ", response.data.author);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container m-5">
        <button
          onClick={quoteGenerator}
          className="bg-blue-500 border-red-700 border-2 rounded-md space-x-3"
        >
          Click for random quotes
        </button>
      </div>
    </>
  );
};

export default apiCall;
