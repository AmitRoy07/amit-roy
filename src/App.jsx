import React, { useEffect, useRef, useState } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import ServiceSummary from "./sections/ServiceSummary";
import Services from "./sections/Services";
import ReactLenis from "lenis/react";
import About from "./sections/About";
import TechStack from "./sections/TechStack";
import Works from "./sections/Works";
import ClientWebsites from "./sections/ClientWebsites";
import Certifications from "./sections/Certifications";
import Awards from "./sections/Awards";
import ContactSummary from "./sections/ContactSummary";
import Contact from "./sections/Contact";
import { useProgress } from "@react-three/drei";
import { SmoothCursor } from "./components/ui/smooth-cursor";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const greetings = [
  { word: "नमस्ते", language: "Hindi", lang: "hi" },
  { word: "নমস্কার", language: "Bengali", lang: "bn" },
  { word: "Hello", language: "English", lang: "en" },
  { word: "Hola", language: "Spanish", lang: "es" },
  { word: "Bonjour", language: "French", lang: "fr" },
  { word: "Hallo", language: "German", lang: "de" },
  { word: "Ciao", language: "Italian", lang: "it" },
  { word: "Ola", language: "Portuguese", lang: "pt" },
  { word: "Konnichiwa", language: "Japanese", lang: "ja" },
  { word: "Annyeong", language: "Korean", lang: "ko" },
  { word: "Ni hao", language: "Mandarin", lang: "zh" },
  { word: "Salaam", language: "Arabic", lang: "ar" },
  { word: "Merhaba", language: "Turkish", lang: "tr" },
  { word: "Shalom", language: "Hebrew", lang: "he" },
  { word: "Jambo", language: "Swahili", lang: "sw" },
  { word: "Hej", language: "Swedish", lang: "sv" },
  { word: "Czesc", language: "Polish", lang: "pl" },
  { word: "Privet", language: "Russian", lang: "ru" },
  { word: "Sawasdee", language: "Thai", lang: "th" },
  { word: "Vanakkam", language: "Tamil", lang: "ta" },
];

const App = () => {
  const { active, progress } = useProgress();
  const [isReady, setIsReady] = useState(false);
  const [minimumIntroDone, setMinimumIntroDone] = useState(false);
  const loaderRef = useRef(null);
  const greetingRef = useRef(null);
  const languageRef = useRef(null);
  const assetProgress = active ? progress : 100;
  const displayProgress = Math.min(100, Math.round(assetProgress));

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setMinimumIntroDone(true);
    }, 2200);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (minimumIntroDone && (!active || progress >= 100)) {
      setIsReady(true);
    }
  }, [active, progress, minimumIntroDone]);

  useGSAP(
    () => {
      const greetingEl = greetingRef.current;
      const languageEl = languageRef.current;

      if (isReady || !greetingEl || !languageEl) return;

      const tl = gsap.timeline({ repeat: -1 });

      greetings.forEach((greeting) => {
        tl.call(() => {
          if (!greetingEl.isConnected || !languageEl.isConnected) {
            tl.kill();
            return;
          }

          greetingEl.textContent = greeting.word;
          languageEl.textContent = greeting.language;
          greetingEl.lang = greeting.lang;
          greetingEl.dataset.lang = greeting.lang;
        })
          .fromTo(
            [greetingEl, languageEl],
            { yPercent: 110, opacity: 0 },
            {
              yPercent: 0,
              opacity: 1,
              duration: 0.28,
              stagger: 0.04,
              ease: "power3.out",
            }
          )
          .to([greetingEl, languageEl], {
            yPercent: -110,
            opacity: 0,
            duration: 0.22,
            stagger: 0.03,
            ease: "power3.in",
            delay: 0.08,
          });
      });

      return () => tl.kill();
    },
    { dependencies: [isReady], revertOnUpdate: true, scope: loaderRef }
  );

  return (
    <ReactLenis root className="relative w-screen min-h-screen overflow-x-auto">
      <SmoothCursor />
      {!isReady && (
        <div
          ref={loaderRef}
          className="fixed inset-0 z-[999] flex min-h-dvh flex-col justify-between overflow-hidden bg-black px-5 py-6 text-white transition-opacity duration-700 sm:px-10 sm:py-8"
        >
          <div className="relative z-10 flex items-start justify-between gap-6 text-xs font-light uppercase tracking-[0.28em] text-white/55 sm:text-sm">
            <p>Amit Roy</p>
            <p className="hidden text-right sm:block">
              Say hello
              <br />in 20 languages
            </p>
          </div>

          <div className="relative z-10 flex flex-1 flex-col justify-center">
            <p className="mb-6 text-xs uppercase tracking-[0.36em] text-gold sm:text-sm">
              Portfolio loading
            </p>
            <div className="overflow-hidden">
              <div
                ref={greetingRef}
                lang="hi"
                data-lang="hi"
                className="loader-greeting min-h-[0.9em] text-[clamp(4rem,18vw,14rem)] font-light leading-[0.86] text-white"
              >
                नमस्ते
              </div>
            </div>
            <div className="mt-4 overflow-hidden">
              <p
                ref={languageRef}
                className="text-sm uppercase tracking-[0.45em] text-white/45 sm:text-base"
              >
                English
              </p>
            </div>
          </div>

          <div className="relative z-10 grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.28em] text-white/55">
                <span>Loading</span>
                <span>{displayProgress}%</span>
              </div>
              <div className="relative h-px overflow-hidden bg-white/20">
                <div
                  className="h-full bg-gold transition-all duration-500 ease-out"
                  style={{ width: `${displayProgress}%` }}
                />
                <div className="loader-scan absolute inset-y-0 w-24 bg-white/60" />
              </div>
            </div>
            <p className="max-w-xs text-xs uppercase leading-relaxed tracking-[0.24em] text-white/45 md:text-right">
              UI/UX Designer and Frontend Developer
            </p>
          </div>
        </div>
      )}
      <div
        className={`${
          isReady ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000`}
      >
        <Navbar />
        <Hero />
        <ServiceSummary />
        <Services />
        <About />
        <TechStack />
        <Works />
        <ClientWebsites />
        <Certifications />
        <Awards />
        <ContactSummary />
        <Contact />
      </div>
    </ReactLenis>
  );
};

export default App;
