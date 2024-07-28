"use client";

import * as Accordion from "@radix-ui/react-accordion";
import Plus from "@/public/plusicon.svg";
import Image from "next/image";

const items = [
  {
    question: "Can I manage multiple training programs with StrikeMMA.AI?",
    answer:
      "Yes, our platform supports multiple training programs, allowing you to manage all your workouts and progress from one centralized dashboard.",
  },
  {
    question: "Does StrikeMMA.AI support all major martial arts styles?",
    answer:
      "Yes, we support a variety of martial arts styles, including MMA, boxing, Muay Thai, and more. You can customize your training to fit your specific needs.",
  },
  {
    question: "How can I measure the success of my training sessions?",
    answer:
      "Our platform provides detailed analytics and tracking tools that help you monitor key performance indicators (KPIs) and measure the success of your training sessions.",
  },
  {
    question: "Is it possible to collaborate with my coach on StrikeMMA.AI?",
    answer:
      "Absolutely! Our platform includes collaboration features that allow you to work with your coach, receive feedback, and adjust your training plan accordingly.",
  },
  {
    question: "Do you offer any training or support for new users?",
    answer:
      "Yes, we provide comprehensive onboarding, training materials, and 24/7 customer support to ensure you get the most out of our platform.",
  },
  {
    question: "Can I schedule training sessions for different time zones?",
    answer:
      "Yes, our scheduling tool allows you to set different training times for various time zones, ensuring you can train at the optimal time no matter where you are.",
  },
];

export default function FAQ() {
  return (
    <div className="max-w-7xl mx-auto h-full px-[20px] flex flex-col w-full py-[48px] lg:py-[60px] lg:flex-row lg:gap-x-6">
      <div className="lg:w-1/3 lg:py-[32px] lg:pr-[56px]">
        <h3 className="text-[#4328EB] text-[14px] font-medium lg:text-base">
          Frequently Asked Questions
        </h3>
        <h1 className="py-4 text-2xl font-medium text-white lg:text-[42px] lg:leading-[58px]">
          Let's clarify some of your questions
        </h1>
        <p className="text-gray-400 pb-[24px]">
          Here are some common questions about StrikeMMA.AI and how it can help you improve your training.
        </p>
      </div>

      <div className="lg:w-2/3">
        <Accordion.Root
          type="single"
          defaultValue="item-1"
          collapsible
          className="flex flex-col gap-y-4">
          {items.map((item, index) => (
            <div key={index}>
              <Accordion.Item
                value={`item-${index + 1}`}
                className="bg-[#1500f6] p-[16px] rounded-[8px]">
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center justify-between">
                    <p className="text-left font-medium text-white lg:text-[18px]">
                      {item.question}
                    </p>
                    <span>
                      <Image
                        src={Plus}
                        color="white"
                        alt="See more"
                        className="h-10 w-10 lg:w-6 lg:h-6"
                      />
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>

                <Accordion.Content>
                  <p className="pt-2 text-gray-300">{item.answer}</p>
                </Accordion.Content>
              </Accordion.Item>
            </div>
          ))}
        </Accordion.Root>
      </div>
    </div>
  );
}
