import React from "react";
import TextGenerateEffect from "../components/ui/text-generate-effect";

const words = `I lost all of what you could call feelings of love. They weren't sealed, so they can;t be released. They weren't broken, so they can't be fixed. That which is lost, cannot be recovered. - Tatsuya Shiba
`;

function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
export default TextGenerateEffectDemo;
