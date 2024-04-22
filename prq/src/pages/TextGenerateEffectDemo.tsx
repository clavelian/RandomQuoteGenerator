import React from "react";
import TextGenerateEffect from "../components/ui/text-generate-effect";

const words = "Man Seeks Peace, Yet At the Same Time Yearning For War.";
const quoteAuthor = "- Madara";

function TextGenerateEffectDemo() {
  return (
    <div>
      <TextGenerateEffect words={words} className="pb-4" />
      <TextGenerateEffect words={quoteAuthor} />
    </div>
  );
}
export default TextGenerateEffectDemo;
