"use client";

import BaseButton from "@/components/ui/buttons/base-button";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqQuestions = [
  {
    id: 1,
    title: "What do I own?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga excepturi ea molestiae quidem quas ullam.",
  },
  {
    id: 2,
    title: "How do I get paid?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga excepturi ea molestiae quidem quas ullam.",
  },
  {
    id: 3,
    title: "What’s the holding period?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga excepturi ea molestiae quidem quas ullam.",
  },
  {
    id: 4,
    title: "Can I use fiat?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga excepturi ea molestiae quidem quas ullam.",
  },
  {
    id: 5,
    title: "Minimum investment?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga excepturi ea molestiae quidem quas ullam.",
  },
  {
    id: 6,
    title: "Can I sell before exit?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga excepturi ea molestiae quidem quas ullam.",
  },
  {
    id: 7,
    title: "Are returns guaranteed?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga excepturi ea molestiae quidem quas ullam.",
  },
];

export default function Faq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    if (id === openFaq) {
      setOpenFaq(null);
    } else {
      setOpenFaq(id);
    }
  };

  return (
    <section id="faq" className="text-Gray-900 w-full bg-white">
      <div className="container py-16">
        <div className="grid w-full lg:grid-cols-[403px_1fr]">
          <h2 className="text-center text-3xl font-bold lg:text-start lg:text-[40px] lg:leading-[100%]">
            FAQs
          </h2>
          <div className="col-start w-full gap-y-3">
            {faqQuestions.map((question) => (
              <button
                key={question.id}
                onClick={() => toggleFaq(question.id)}
                className="border-Gray-50 w-full rounded-2xl border p-3 text-start outline-none"
              >
                <div className="flex w-full items-center justify-between select-none">
                  <h4 className="max-w-[511px] text-base font-semibold md:text-lg">
                    {question.title}
                  </h4>
                  <ChevronDown
                    className={`text-base text-inherit ${
                      openFaq === question.id ? "rotate-180" : "rotate-0"
                    } transition-all duration-300`}
                  />
                </div>
                <p
                  className={cn(
                    "w-full overflow-hidden text-sm font-normal transition-all duration-300 md:text-base",
                    openFaq === question.id ? "max-h-[1000px] py-2" : "max-h-0",
                  )}
                >
                  {question.content}
                </p>
              </button>
            ))}
          </div>
        </div>
        <div className="hidden flex-col items-center justify-center gap-4 pt-18 lg:flex">
          <h2 className="max-w-[562px] text-center text-3xl font-bold lg:text-start lg:text-[40px] lg:leading-[100%]">
            Start building your African real-estate portfolio today.
          </h2>
          <BaseButton href="#" className="w-full px-8 !text-base lg:w-fit">
            Get Started
          </BaseButton>
        </div>
      </div>
    </section>
  );
}
