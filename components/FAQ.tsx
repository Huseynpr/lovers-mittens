import { Icon } from "./Icon";
import { Reveal } from "./Reveal";

const QUESTIONS = [
  {
    q: "Is it really One Size Fits All?",
    a: "Yes — our stretch knit comfortably fits almost every hand size, for both partners in the set.",
  },
  {
    q: "How warm and soft is the material?",
    a: "Each mitten is hand-knit from a soft, breathable acrylic-wool blend designed for real winter warmth without any itch.",
  },
  {
    q: "How do I wash them?",
    a: "Hand wash in cold water and lay flat to dry to keep the knit soft and its shape intact.",
  },
  {
    q: "How fast is holiday shipping?",
    a: "Orders placed during our holiday window ship within 1-2 business days with tracked express delivery.",
  },
  {
    q: "Can I add a gift note?",
    a: "Yes — add a free handwritten-style gift note at checkout in the cart drawer, and your set arrives in gift-ready packaging.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="px-6 py-16 scroll-mt-24">
      <div className="max-w-[720px] mx-auto">
        <div className="text-center max-w-[600px] mx-auto mb-8">
          <span className="inline-flex items-center gap-1.5 text-[11.5px] tracking-[0.16em] uppercase text-gold font-semibold mb-2.5">
            <Icon name="snowflake" size={12} />
            Questions
          </span>
          <h2 className="font-heading font-semibold text-[30px]">Everything You Need To Know</h2>
        </div>

        {QUESTIONS.map((item, i) => (
          <Reveal key={item.q} delay={i * 70}>
            <details className="lm-faq border-b border-espresso/10">
              <summary className="flex items-center justify-between py-4 px-1 font-semibold text-[14.5px] cursor-pointer">
                <span>{item.q}</span>
                <Icon name="chevron" size={17} className="lm-chevron text-gold transition-transform duration-200" />
              </summary>
              <p className="text-[13.5px] text-[#5c5650] mb-4 px-1">{item.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
