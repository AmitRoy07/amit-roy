import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { techStackCategories } from "../constants";
import GridDotBackground from "../components/GridDotBackground";
import TechKeyboard from "../components/TechKeyboard";

const TechStack = () => {
  const text = `A CV-aligned stack for UI design,
    frontend architecture, motion systems,
    CMS delivery, and production handoff.`;
  useGSAP(() => {
    gsap.from(".tech-keyboard", {
      y: 120,
      opacity: 0,
      rotateX: 14,
      transformOrigin: "center bottom",
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: "#tech-stack",
        start: "top 60%",
      },
    });
  }, []);

  return (
    <section id="tech-stack" className="relative isolate min-h-screen overflow-hidden bg-primary">
      <GridDotBackground />
      <div className="relative z-10">
        <AnimatedHeaderSection
          subTitle={"Tools I use to ship polished interfaces"}
          title={"Tech Stack"}
          text={text}
          textColor={"text-black"}
          icon="lucide:blocks"
          withScrollTrigger={true}
        />
        <div className="px-5 pb-20 sm:px-10">
          <TechKeyboard categories={techStackCategories} />
        </div>
      </div>
    </section>
  );
};

export default TechStack;
