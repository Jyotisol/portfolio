"use client";
import { useEffect, useRef } from "react";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffectLinkedIn = ({
  words,
  className,
  onComplete,
}: {
  words: string;
  className?: string;
  onComplete?: () => void;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  const orangeIndices = [6];
  const purpleIndices = [10, 11, 12, 13];
  const emailIndex = 31; // Index for the email word
  
  useEffect(() => {
    if (isInView) {
      animate(
        "span, a",
        {
          opacity: 1,
        },
        {
          duration: 1,
          delay: stagger(0.02),
          onComplete,
        }
      );
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          idx !== emailIndex ? (
            <motion.span
              key={word + idx}
              className={`opacity-0 ${purpleIndices.includes(idx) ? 'text-purple' : ''} ${orangeIndices.includes(idx) ? 'text-orange-500' : ''}`}
            >
              {word}{" "}
            </motion.span>
          ) : null
        ))}
       <motion.a
          key={wordsArray[emailIndex] + emailIndex}
          href="mailto:jyoti989solanki@gmail.com"
          className="text-blue-500 underline opacity-0"
        >
          {wordsArray[emailIndex]}{" "}
        </motion.a>
      </motion.div>
    );
  };

  return (
    <div ref={ref} className={cn("font-bold", className)}>
      <div className="my-4">
        <div className="dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
