import React, { useState, useEffect } from "react";
import axios from "axios";

interface Quote {
  anime: string;
  character: string;
  quote: string;
}

const RandomAnimeQuote = () => {
  const [quote, setQuote] = useState<Quote | null>(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await axios.get("https://animechan.xyz/api/random");
        setQuote(response.data);
      } catch (error) {
        console.error("Error fetching quote:", error);
      }
    };

    fetchQuote();
  }, []);

  return (
    <div>
      {quote ? (
        <>
          <p>Anime: {quote.anime}</p>
          <p>Character: {quote.character}</p>
          <p>Quote: "{quote.quote}"</p>
        </>
      ) : (
        <p>Loading quote...</p>
      )}
    </div>
  );
};

export default RandomAnimeQuote;
