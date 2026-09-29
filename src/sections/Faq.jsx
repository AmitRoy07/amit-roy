import { Icon } from "@iconify/react";
import { useGSAP } from "@gsap/react";
import {
  AnimatePresence,
  motion as Motion,
  useReducedMotion,
} from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useId, useRef, useState } from "react";
import DotDistortionBackground from "../components/DotDistortionBackground";

gsap.registerPlugin(ScrollTrigger);

const questions = [
  {
    question: "Who is Amit Roy?",
    answer:
      "Amit is a Kolkata-based UI/UX Designer and Frontend Developer with 5.8+ years of experience creating scalable, responsive web interfaces.",
  },
  {
    question: "What services does Amit Roy provide?",
    answer:
      "He turns product ideas and Figma files into thoughtful, responsive interfaces—covering UI implementation, frontend development, motion, interactions, and CMS delivery.",
  },
  {
    question: "Which technologies does Amit Roy work with?",
    answer:
      "His toolkit includes React, Next.js, Angular, Svelte, JavaScript, TypeScript, C#, Tailwind CSS, GSAP, Three.js, WordPress, Shopify, Strapi, and Figma.",
  },
  {
    question: "Is Amit Roy available for remote frontend or UI/UX work?",
    answer:
      "Yes. Amit is open to UI/UX design and frontend developer roles with hybrid, remote, and full-time teams.",
  },
];

const FaqItem = ({ item, isOpen, onToggle }) => {
  const answerId = useId();
  const reduceMotion = useReducedMotion();

  return (
    <Motion.li
      layout
      className={`group relative overflow-hidden transition-colors duration-300 ${isOpen ? "rounded-xl border border-black/15 bg-white text-DarkLava shadow-[0_12px_30px_rgba(57,54,50,0.08)]" : "border border-transparent text-DarkLava hover:bg-white/45"}`}
      transition={{
        layout: reduceMotion
          ? { duration: 0 }
          : { type: "spring", stiffness: 310, damping: 30, mass: 0.72 },
      }}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={answerId}
        className="relative flex w-full items-center gap-4 px-5 py-5 text-left outline-none sm:px-6 sm:py-6"
      >
        <span className="flex-1 text-lg leading-snug tracking-[-0.015em] sm:text-xl">
          {item.question}
        </span>
        <span
          className={`grid size-9 shrink-0 place-items-center text-black/55 transition-all duration-300 group-hover:text-gold ${isOpen ? "rotate-45 text-DarkLava" : ""}`}
          aria-hidden="true"
        >
          <Icon icon="lucide:plus" className="size-5" />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <Motion.div
            id={answerId}
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={
              reduceMotion
                ? { duration: 0.01 }
                : { type: "spring", stiffness: 250, damping: 26, mass: 0.7 }
            }
            className="overflow-hidden"
          >
            <div className="px-5 pb-6 sm:px-6 sm:pb-7">
              <p className="max-w-3xl text-sm leading-relaxed text-DarkLava/75 sm:text-base">
                {item.answer}
              </p>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </Motion.li>
  );
};

const Faq = () => {
  const [openItems, setOpenItems] = useState(() => new Set([0]));
  const sectionRef = useRef(null);
  const openCountRef = useRef(1);

  const revealItem = (index) => {
    setOpenItems((current) => {
      if (current.has(index)) return current;

      return new Set([...current, index]);
    });
  };
  useGSAP(
    () => {
      const trigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 12%",
        end: () => `+=${Math.max(window.innerHeight * 1.25, 960)}`,
        scrub: 0.35,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const nextOpenCount = Math.ceil(self.progress * questions.length);

          if (nextOpenCount === openCountRef.current) return;

          openCountRef.current = nextOpenCount;
          setOpenItems(
            new Set(Array.from({ length: nextOpenCount }, (_, index) => index)),
          );
        },
      });

      return () => trigger.kill();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="relative overflow-hidden bg-primary px-5 py-24 sm:px-10 sm:py-32"
      aria-labelledby="faq-title"
    >
      <DotDistortionBackground />
      <div className="pointer-events-none absolute -right-16 top-16 select-none font-amiamie-round text-[13rem] leading-none text-black/[0.035] sm:text-[20rem]">
        ?
      </div>
      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-8 border-b-2 border-black pb-10 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end sm:pb-12">
          <div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-black/55">
              <span className="size-2 rounded-full bg-gold" />
              Quick answers
            </div>
            <h2
              id="faq-title"
              className="mt-5 text-[clamp(4rem,12vw,9rem)] leading-[0.72] tracking-[-0.07em] uppercase"
            >
              FAQ
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-black/60 sm:text-right">
            Everything you may want to know before we make something excellent
            together.
          </p>
        </div>

        <ul className="relative mt-10 space-y-2 px-3 before:absolute before:inset-y-0 before:left-0 before:border-l before:border-dashed before:border-black/15 after:absolute after:inset-y-0 after:right-0 after:border-r after:border-dashed after:border-black/15 sm:mt-12 sm:px-8">
          {questions.map((item, index) => (
            <FaqItem
              key={item.question}
              item={item}
              isOpen={openItems.has(index)}
              onToggle={() => revealItem(index)}
            />
          ))}
        </ul>

        <p className="mt-8 text-sm text-black/55 sm:mt-10">
          Still have a question?{" "}
          <a
            href="#contact"
            className="underline decoration-gold decoration-2 underline-offset-4 transition-colors hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            Let&apos;s talk.
          </a>
        </p>
      </div>
    </section>
  );
};

export default Faq;
