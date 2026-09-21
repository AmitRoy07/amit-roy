const questions = [
  {
    question: "Who is Amit Roy?",
    answer:
      "Amit Roy is a Kolkata-based UI/UX Designer and Frontend Developer with 5.8+ years of experience creating scalable, responsive web interfaces.",
  },
  {
    question: "What services does Amit Roy provide?",
    answer:
      "He provides UI/UX design implementation, frontend development, responsive interface development, motion and interaction work, and CMS platform delivery.",
  },
  {
    question: "Which technologies does Amit Roy work with?",
    answer:
      "His stack includes React, Next.js, Angular, Svelte, JavaScript, TypeScript, C#, Tailwind CSS, GSAP, Three.js, WordPress, Shopify, Strapi, and Figma.",
  },
  {
    question: "Is Amit Roy available for remote frontend or UI/UX work?",
    answer:
      "Yes. Amit is open to UI/UX design and frontend developer roles across hybrid, remote, and full-time teams.",
  },
];

const Faq = () => (
  <section id="faq" className="bg-primary px-5 py-20 sm:px-10" aria-labelledby="faq-title">
    <div className="mx-auto max-w-5xl">
      <p className="text-xs uppercase tracking-[0.35em] text-black/55">Quick answers</p>
      <h2 id="faq-title" className="mt-4 text-5xl uppercase sm:text-7xl">FAQ</h2>
      <div className="mt-10 divide-y-2 divide-black/80 border-y-2 border-black/80">
        {questions.map(({ question, answer }) => (
          <details key={question} className="group py-5">
            <summary className="cursor-pointer list-none pr-8 text-xl font-medium sm:text-2xl">
              {question}
            </summary>
            <p className="max-w-3xl pt-4 text-base leading-relaxed text-black/70 sm:text-lg">{answer}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default Faq;
