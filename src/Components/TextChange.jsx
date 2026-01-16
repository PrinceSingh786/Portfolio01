import { useState, useEffect } from "react";
const TextChange = () => {
  const texts = "Hi, I'm Prince Singh";
  const [currenText, setCurrentText] = useState("");
  const [endValue, setendValue] = useState(true);
  const [isForward, setIsForward] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText(texts.substring(0, endValue));
      if (isForward) {
        setendValue((prev) => prev + 1);
      } else {
        setendValue((prev) => prev - 1);
      }
      if (endValue==texts.length+1) {
        setIsForward(false);
      }
      if (endValue ==2) {
        setIsForward(true);
        
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [endValue, isForward, texts]);

  return <div className="transition ease duration-300">{currenText}</div>;
};

export default TextChange;
