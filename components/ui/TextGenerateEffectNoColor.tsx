"use client";
import { useEffect, useRef } from "react";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffectNoColor = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
    const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  const purpleIndices = [3, 8, 9];
  
  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          opacity: 1,
        },
        {
          duration: 2,
          delay: stagger(0.1),
        }
      );
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className={`opacity-0 ${purpleIndices.includes(idx) ? 'text-purple' : ''}`}
          >
            {word}{" "}
          </motion.span>
        ))}
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
