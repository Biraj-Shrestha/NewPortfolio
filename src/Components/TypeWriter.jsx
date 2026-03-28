import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TEXT_ARRAY = ["LinkedIn", "Instagram", "Github", "Phone","Email"];
const TYPING_SPEED = 120;
const ERASING_SPEED = 80;
const PAUSE_DURATION = 1000;

const TypingEffect = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(TYPING_SPEED);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % TEXT_ARRAY.length;
      const fullText = TEXT_ARRAY[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? ERASING_SPEED : TYPING_SPEED);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), PAUSE_DURATION);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <div className="flex items-center justify-center font-['outfit']">
      <style>{`
        .cursor-blink {
          display: inline-block;
          width: 3px;
          height: 1.2em;
          margin-left: 4px;
          background-color: #4246ce;
          vertical-align: middle;
        }

        /* Use Framer Motion for the text, but CSS for the simple blink */
        .animate-blink {
          animation: blink 0.8s step-end infinite;
        }

        @keyframes blink {
          from, to { background-color: transparent }
          50% { background-color: #4246ce }
        }
      `}</style>

      <p className="text-2xl font-black text-white tracking-widest uppercase italic xl:text-left text-center w-full leading-relaxed">
        Contact me From{" "}<br className="block xl:hidden"/>
        <span className="font-['outfit'] text-[#4246ce]">
          {text}
        </span>
        <span className={`cursor-blink ${text.length === TEXT_ARRAY[loopNum % TEXT_ARRAY.length].length || text === "" ? "animate-blink" : ""}`} />
      </p>
    </div>
  );
};

export default TypingEffect;