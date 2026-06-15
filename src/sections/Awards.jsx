import { Icon } from "@iconify/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { awards } from "../constants";

const Awards = () => {
  const text = `Recognitions for performance, growth,
    and contribution across training and professional
    frontend delivery at SentientGeeks.`;

  useGSAP(() => {
    gsap.from(".award-item", {
      y: 80,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#awards",
        start: "top 70%",
      },
    });
  }, []);

  return (
    <section id="awards" className="min-h-screen bg-black rounded-t-4xl">
      <AnimatedHeaderSection
        subTitle={"Recognition and achievements"}
        title={"Awards"}
        text={text}
        textColor={"text-white"}
        icon="lucide:trophy"
        withScrollTrigger={true}
      />
      <div className="flex flex-col gap-4 px-5 pb-20 font-light uppercase text-white sm:px-10">
        {awards.map((item) => (
          <div
            key={item.id}
            className="award-item grid gap-5 border border-white/20 px-5 py-6 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:px-7"
          >
            <span className="grid size-14 place-items-center rounded-full bg-white/10 text-gold">
              <Icon icon={item.icon} className="size-7" />
            </span>
            <div className="min-w-0">
              <h2 className="text-2xl leading-tight sm:text-3xl md:text-4xl">
                {item.title}
              </h2>
              <p className="mt-2 text-xs tracking-[0.22em] text-white/55 sm:text-sm sm:tracking-[0.3em]">
                {item.issuer}
              </p>
            </div>
            <p className="text-4xl text-gold md:text-5xl">{item.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awards;
