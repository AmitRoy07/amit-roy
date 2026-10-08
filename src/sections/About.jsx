import { useLayoutEffect, useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Icon } from "@iconify/react";
import GridDotBackground from "../components/GridDotBackground";
import Lanyard from "../components/Lanyard";

const aboutHighlights = [
  { label: "5.8+ years", icon: "lucide:badge-check" },
  { label: "Team lead", icon: "lucide:users-round" },
  { label: "Motion UI", icon: "lucide:sparkles" },
  { label: "Scalable frontend", icon: "lucide:blocks" },
];

const About = () => {
  const text = `5.8+ years of building modern web applications
    across UI/UX design, frontend architecture,
    responsive systems, animation, and client delivery`;
  const aboutText = `I am a UI/UX Designer and Frontend Developer based in Kolkata, currently working as a lead at SentientGeeks. I build scalable web interfaces with React, Next.js, Angular, Svelte, JavaScript, TypeScript, C#, Tailwind CSS, SCSS, Bootstrap, PrimeNG, Material UI, and modern design systems.

My work spans Figma-to-frontend implementation, reusable component architecture, responsive UI development, frontend performance optimization, cross-browser compatibility, animation with Framer Motion, GSAP, Three.js and Lenis, CMS platforms including WordPress, Shopify and Strapi, and hands-on client communication.

I enjoy collaborating with designers, developers, clients, and small teams to turn product ideas into clean, reliable, production-ready web experiences.`;
  const imgRef = useRef(null);
  const descriptionRef = useRef(null);

  useLayoutEffect(() => {
    const description = descriptionRef.current;
    const image = imgRef.current;
    const alignToBorder = () => {
      image.style.setProperty('--lanyard-offset', `${description.offsetHeight}px`);
    };
    alignToBorder();
    const observer = new ResizeObserver(alignToBorder);
    observer.observe(description);
    return () => observer.disconnect();
  }, []);

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
    <section id="about" className="relative isolate min-h-screen overflow-hidden bg-black rounded-b-4xl">
      <GridDotBackground theme="dark" />
      <div className="relative z-10">
        <AnimatedHeaderSection
          subTitle={"Pixel-perfect, accessible, production-ready"}
          title={"About"}
          text={text}
          textColor={"text-white"}
          icon="lucide:user-round-check"
          withScrollTrigger={true}
          descriptionRef={descriptionRef}
        />
        <div className="flex flex-col items-center justify-between gap-16 px-5 pb-16 text-xl font-light tracking-wide sm:px-10 lg:flex-row md:text-2xl lg:text-3xl text-white/60">
        <div
          ref={imgRef}
          className="relative h-[640px] w-full max-w-xl shrink-0 lg:mt-[calc(-1*var(--lanyard-offset,0px))] lg:h-[840px] lg:w-[44%] lg:self-start"
          role="img"
          aria-label="Interactive lanyard featuring Amit Roy, UI/UX designer and frontend developer in Kolkata"
        >
          <Lanyard
            frontImage="/assets/images/Intro/profile.webp"
            backImage="/assets/images/Intro/profile.webp"
            strapImage="/assets/images/lanyard-band.svg"
            imageFit="cover"
            cardColor="#ffffff"
            orientation="portrait"
            finish="glossy"
            cornerRadius={0.3}
            size={0.6}
            anchor="center"
            strapLength={0.8}
            strapColor="#111111"
            strapWidth={0.75}
            metal="silver"
            gravity={1}
            damping={0.5}
            elasticity={0.5}
            breeze={0.5}
            interactive
            intro
          />
        </div>
        <div className="flex w-full min-w-0 flex-col gap-8 lg:flex-1">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {aboutHighlights.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 border border-white/20 bg-black/75 px-4 py-3 text-sm uppercase tracking-[0.18rem] text-white/90 backdrop-blur-[2px]"
              >
                <Icon icon={item.icon} className="size-5 shrink-0 text-gold" />
                {item.label}
              </div>
            ))}
          </div>
          <AnimatedTextLines text={aboutText} className={"w-full"} />
        </div>
        </div>
      </div>
    </section>
  );
};

export default About;
