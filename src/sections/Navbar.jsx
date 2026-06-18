import React, { useEffect, useRef, useState } from "react";
import { socials } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-scroll";
import { Icon } from "@iconify/react";

const navLinks = [
  { section: "home", icon: "lucide:home" },
  { section: "services", icon: "lucide:wand-sparkles" },
  { section: "about", icon: "lucide:user-round" },
  { section: "tech-stack", icon: "lucide:blocks" },
  { section: "work", icon: "lucide:briefcase-business" },
  { section: "client-websites", icon: "lucide:globe-2" },
  { section: "certifications", icon: "lucide:badge-check" },
  { section: "awards", icon: "lucide:trophy" },
  { section: "contact", icon: "lucide:send" },
];

const Navbar = () => {
  const navRef = useRef(null);
  const linksRef = useRef([]);
  const contactRef = useRef(null);
  const topLineRef = useRef(null);
  const bottomLineRef = useRef(null);
  const tl = useRef(null);
  const iconTl = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showBurger, setShowBurger] = useState(true);
  useGSAP(() => {
    gsap.set(navRef.current, { xPercent: 100 });
    gsap.set([linksRef.current, contactRef.current], {
      autoAlpha: 0,
      x: -20,
    });

    tl.current = gsap
      .timeline({ paused: true })
      .to(navRef.current, {
        xPercent: 0,
        duration: 1,
        ease: "power3.out",
      })
      .to(
        linksRef.current,
        {
          autoAlpha: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: "power2.out",
        },
        "<"
      )
      .to(
        contactRef.current,
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "<+0.2"
      );

    iconTl.current = gsap
      .timeline({ paused: true })
      .to(topLineRef.current, {
        rotate: 45,
        y: 3.3,
        duration: 0.3,
        ease: "power2.inOut",
      })
      .to(
        bottomLineRef.current,
        {
          rotate: -45,
          y: -3.3,
          duration: 0.3,
          ease: "power2.inOut",
        },
        "<"
      );
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setShowBurger(currentScrollY <= lastScrollY || currentScrollY < 10);

      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    if (isOpen) {
      tl.current.reverse();
      iconTl.current.reverse();
    } else {
      tl.current.play();
      iconTl.current.play();
    }
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    if (!isOpen) return;
    tl.current.reverse();
    iconTl.current.reverse();
    setIsOpen(false);
  };

  return (
    <>
      <Link
        href="#home"
        className="fixed left-5 top-4 z-50 flex h-14 w-28 cursor-pointer items-center justify-center rounded-full border border-black/10 bg-primary px-4 shadow-sm transition-opacity duration-300 sm:left-10 md:h-20 md:w-36"
        to="home"
        smooth
        offset={0}
        duration={2000}
        onClick={closeMenu}
        aria-label="Go to home"
      >
        <img
          src="/assets/images/common/blackLogo.webp"
          alt="Amit Roy logo"
          className="max-h-8 w-full object-contain md:max-h-10"
        />
      </Link>
      <nav
        ref={navRef}
        data-lenis-prevent
        data-lenis-prevent-wheel
        data-lenis-prevent-touch
        className="fixed z-50 flex h-[100dvh] max-h-[100dvh] w-full touch-pan-y flex-col justify-between gap-8 overflow-y-auto overscroll-contain bg-black px-5 py-20 uppercase text-white/80 [-webkit-overflow-scrolling:touch] [scrollbar-gutter:stable] sm:px-8 md:left-1/2 md:w-1/2 md:px-10 md:py-[4.5rem] lg:py-16"
      >
        <Link
          href="#home"
          className="mb-4 flex w-32 shrink-0 cursor-pointer items-center"
          to="home"
          smooth
          offset={0}
          duration={2000}
          onClick={closeMenu}
          aria-label="Go to home"
        >
          <img
            src="/assets/images/common/whiteLogo.webp"
            alt="Amit Roy logo"
            className="max-h-10 w-full object-contain"
          />
        </Link>
        <div className="flex shrink-0 flex-col gap-y-2 text-[clamp(1.75rem,8vw,3rem)] leading-[0.98] md:text-[clamp(1.75rem,5vw,3rem)]">
          {navLinks.map(
            ({ section, icon }, index) => (
              <div key={index} ref={(el) => (linksRef.current[index] = el)}>
                <Link
                  className="flex min-w-0 items-center gap-3 transition-all duration-300 cursor-pointer hover:text-white sm:gap-4"
                  to={`${section}`}
                  smooth
                  offset={0}
                  duration={2000}
                  onClick={closeMenu}
                >
                  <Icon icon={icon} className="size-[0.42em] shrink-0 text-gold" />
                  <span className="min-w-0 break-words">{section}</span>
                </Link>
              </div>
            )
          )}
        </div>
        <div
          ref={contactRef}
          className="flex shrink-0 flex-col flex-wrap justify-between gap-6 pb-2 md:flex-row"
        >
          <div className="font-light">
            <p className="tracking-wider text-white/50">E-mail</p>
            <p className="text-lg tracking-widest lowercase text-pretty md:text-xl">
              amitroy2383@gmail.com
            </p>
          </div>
          <div className="font-light">
            <p className="tracking-wider text-white/50">Social Media</p>
            <div className="flex flex-col flex-wrap md:flex-row gap-x-2">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={
                    social.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    social.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex items-center gap-2 text-sm leading-loose tracking-widest uppercase hover:text-white transition-colors duration-300"
                >
                  <Icon icon={social.icon} className="size-4 text-gold" />
                  {"{ "}
                  {social.name}
                  {" }"}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
      <div
        className="fixed z-50 flex flex-col items-center justify-center gap-1 transition-all duration-300 bg-black rounded-full cursor-pointer w-14 h-14 md:w-20 md:h-20 top-4 right-5 sm:right-10 border-2 border-[#e5e5e0]/20"
        onClick={toggleMenu}
        role="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        style={
          showBurger
            ? { clipPath: "circle(50% at 50% 50%)" }
            : { clipPath: "circle(0% at 50% 50%)" }
        }
      >
        <span
          ref={topLineRef}
          className="block w-8 h-0.5 bg-white rounded-full origin-center"
        ></span>
        <span
          ref={bottomLineRef}
          className="block w-8 h-0.5 bg-white rounded-full origin-center"
        ></span>
      </div>
    </>
  );
};

export default Navbar;
