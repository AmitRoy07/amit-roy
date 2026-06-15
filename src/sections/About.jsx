import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Icon } from "@iconify/react";

const aboutHighlights = [
  { label: "5.5 years", icon: "lucide:badge-check" },
  { label: "Team lead", icon: "lucide:users-round" },
  { label: "Motion UI", icon: "lucide:sparkles" },
  { label: "Scalable frontend", icon: "lucide:blocks" },
];

const About = () => {
  const text = `5.5 years of building modern web applications
    across UI/UX design, frontend architecture,
    responsive systems, animation, and client delivery`;
  const aboutText = `I am a UI/UX Designer and Frontend Developer based in Kolkata, currently working as a lead at SentientGeeks. I build scalable web interfaces with React, Next.js, Angular, Svelte, JavaScript, TypeScript, Tailwind CSS, SCSS, Bootstrap, PrimeNG, Material UI, and modern design systems.

My work spans Figma-to-frontend implementation, reusable component architecture, responsive UI development, frontend performance optimization, cross-browser compatibility, animation with Framer Motion, GSAP, Three.js and Lenis, CMS platforms including WordPress, Shopify and Strapi, and hands-on client communication.

I enjoy collaborating with designers, developers, clients, and small teams to turn product ideas into clean, reliable, production-ready web experiences.`;
  const imgRef = useRef(null);

  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });

  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"Pixel-perfect, accessible, production-ready"}
        title={"About"}
        text={text}
        textColor={"text-white"}
        icon="lucide:user-round-check"
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-16 px-5 pb-16 text-xl font-light tracking-wide sm:px-10 lg:flex-row md:text-2xl lg:text-3xl text-white/60">
        <img
          ref={imgRef}
          src="/assets/images/Intro/profile.webp"
          alt="Amit Roy"
          className="object-cover w-md h-[600px] rounded-3xl"
        />
        <div className="flex w-full flex-col gap-8">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {aboutHighlights.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 border border-white/15 px-4 py-3 text-sm uppercase tracking-[0.18rem] text-white/75"
              >
                <Icon icon={item.icon} className="size-5 shrink-0 text-gold" />
                {item.label}
              </div>
            ))}
          </div>
          <AnimatedTextLines text={aboutText} className={"w-full"} />
        </div>
      </div>
    </section>
  );
};

export default About;
