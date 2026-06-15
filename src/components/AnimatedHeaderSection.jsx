import React from "react";
import { useRef } from "react";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Icon } from "@iconify/react";
import AnimatedSvgMark from "./AnimatedSvgMark";

const AnimatedHeaderSection = ({
  subTitle,
  title,
  text,
  textColor,
  icon = "lucide:sparkles",
  withScrollTrigger = false,
}) => {
  const contextRef = useRef(null);
  const headerRef = useRef(null);
  const shouldSplitTitle = title.includes(" ");
  const titleParts = shouldSplitTitle ? title.split(" ") : [title];
  const titleSizeClass =
    title.length > 11 ? "long-title-responsive" : "banner-text-responsive";
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: withScrollTrigger
        ? {
            trigger: contextRef.current,
          }
        : undefined,
    });
    tl.from(contextRef.current, {
      y: "50vh",
      duration: 1,
      ease: "circ.out",
    });
    tl.from(
      headerRef.current,
      {
        opacity: 0,
        y: "200",
        duration: 1,
        ease: "circ.out",
      },
      "<+0.2"
    );
  }, []);
  return (
    <div ref={contextRef}>
      <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}>
        <div
          ref={headerRef}
          className="flex flex-col justify-center gap-12 pt-16 sm:gap-16"
        >
          <div
            className={`flex items-center gap-3 px-5 text-xs font-light uppercase tracking-[0.22rem] sm:gap-4 sm:px-10 sm:text-sm sm:tracking-[0.5rem] ${textColor}`}
          >
            <Icon icon={icon} className="size-5 shrink-0 text-gold" />
            <p className="min-w-0 leading-relaxed">{subTitle}</p>
            <AnimatedSvgMark
              variant="wave"
              className="hidden h-8 w-16 text-gold/80 md:block"
            />
          </div>
          <div className="px-5 sm:px-10">
            <h1
              className={`flex max-w-full flex-col gap-12 overflow-hidden break-words uppercase ${titleSizeClass} sm:gap-16 md:block ${textColor}`}
            >
              {titleParts.map((part, index) => (
                <span key={index} className="inline-block max-w-full">
                  {part}{" "}
                </span>
              ))}
            </h1>
          </div>
        </div>
      </div>
      <div className={`relative px-5 sm:px-10 ${textColor}`}>
        <div className="absolute inset-x-0 border-t-2" />
        <div className="py-12 sm:py-16 text-end">
          <AnimatedTextLines
            text={text}
            className={`font-light uppercase value-text-responsive ${textColor}`}
          />
        </div>
      </div>
    </div>
  );
};

export default AnimatedHeaderSection;
