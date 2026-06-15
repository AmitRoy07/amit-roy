import { Icon } from "@iconify/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { clientWebsites } from "../constants";

const ClientWebsites = () => {
  const text = `Additional client websites delivered across
    business, ecommerce, service, platform,
    and cybersecurity web experiences.`;

  useGSAP(() => {
    gsap.from(".client-website-link", {
      y: 80,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#client-websites",
        start: "top 70%",
      },
    });
  }, []);

  return (
    <section id="client-websites" className="min-h-screen bg-black text-white">
      <AnimatedHeaderSection
        subTitle={"Selected delivery beyond featured projects"}
        title={"Client Websites"}
        text={text}
        textColor={"text-white"}
        icon="lucide:globe-2"
        withScrollTrigger={true}
      />
      <div className="px-5 pb-20 sm:px-10">
        <div className="grid border-t border-white/20 md:grid-cols-2">
          {clientWebsites.map((site) => (
            <a
              key={site.id}
              href={site.href}
              target="_blank"
              rel="noopener noreferrer"
              className="client-website-link group flex min-h-40 flex-col justify-between gap-8 border-b border-white/20 px-0 py-6 transition-colors duration-300 hover:text-gold md:px-6 md:even:border-l"
              aria-label={`Visit ${site.name}`}
            >
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="mb-3 text-xs uppercase tracking-[0.35em] text-white/45">
                    {site.category}
                  </p>
                  <h3 className="text-3xl uppercase leading-none sm:text-4xl">
                    {site.name}
                  </h3>
                </div>
                <Icon
                  icon="lucide:arrow-up-right"
                  className="size-6 shrink-0 text-gold transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>
              <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.24em] text-white/45">
                <span>{site.href.replace(/^https?:\/\//, "")}</span>
                <span>0{site.id}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientWebsites;
