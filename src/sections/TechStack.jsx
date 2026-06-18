import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { IconCloud } from "../components/ui/icon-cloud";
import { techStackCategories } from "../constants";

const getIconUrl = (icon) => {
  const [collection, name] = icon.split(":");
  return `https://api.iconify.design/${collection}/${name}.svg?color=%23111111`;
};

const TechStack = () => {
  const text = `A CV-aligned stack for UI design,
    frontend architecture, motion systems,
    CMS delivery, and production handoff.`;
  const cloudImages = techStackCategories
    .flatMap((category) => category.items)
    .map((item) => getIconUrl(item.icon));

  useGSAP(() => {
    gsap.from(".tech-stack-group", {
      y: 90,
      opacity: 0,
      duration: 0.9,
      stagger: 0.14,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#tech-stack",
        start: "top 70%",
      },
    });
  }, []);

  return (
    <section id="tech-stack" className="min-h-screen bg-primary">
      <AnimatedHeaderSection
        subTitle={"Tools I use to ship polished interfaces"}
        title={"Tech Stack"}
        text={text}
        textColor={"text-black"}
        icon="lucide:blocks"
        withScrollTrigger={true}
      />
      <div className="grid grid-cols-1 gap-10 px-5 pb-20 font-light sm:px-10 xl:items-start">
        <div className="tech-stack-group sticky top-24 flex md:min-h-[540px] items-center justify-center border-b-2 border-black/80 py-8">
          <div className="relative grid aspect-square w-full md:max-w-[560px] place-items-center">
            <div className="absolute inset-8 rounded-full border border-black/20" />
            <IconCloud images={cloudImages} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
