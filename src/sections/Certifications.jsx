import { Icon } from "@iconify/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { certifications } from "../constants";

const Certifications = () => {
  const text = `Formal design and multimedia training
    across graphics, publishing, web design,
    and advanced digital production workflows.`;

  useGSAP(() => {
    gsap.from(".certification-item", {
      y: 80,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#certifications",
        start: "top 70%",
      },
    });
  }, []);

  return (
    <section id="certifications" className="min-h-screen bg-primary">
      <AnimatedHeaderSection
        subTitle={"Learning that shaped the craft"}
        title={"Certifications"}
        text={text}
        textColor={"text-black"}
        icon="lucide:badge-check"
        withScrollTrigger={true}
      />
      <div className="grid grid-cols-1 gap-3 px-5 pb-20 font-light uppercase sm:px-10 md:grid-cols-2">
        {certifications.map((item) => (
          <div
            key={item.id}
            className="certification-item flex min-h-36 flex-col items-start justify-between gap-5 border-y-2 border-black/80 py-6 text-black min-[430px]:flex-row min-[430px]:items-center min-[430px]:gap-6"
          >
            <div className="flex min-w-0 items-center gap-4 sm:gap-5">
              <span className="grid size-14 shrink-0 place-items-center rounded-full bg-black text-gold">
                <Icon icon={item.icon} className="size-7" />
              </span>
              <h2 className="min-w-0 text-xl leading-tight sm:text-2xl md:text-3xl">
                {item.title}
              </h2>
            </div>
            <span className="shrink-0 text-sm tracking-[0.35em] text-black/45">
              0{item.id}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
