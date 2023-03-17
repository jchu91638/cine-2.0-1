import React from "react";

/* constants */
import { faqlist } from "../../../../constants/common";
import FaqItem from "./FaqItem";

const FaqSection = () => {
  return (
    <section className="container_x_md py-12 mt-6 bg-popular-bg-sm md:bg-popular-bg-lg bg-popular">
      <h1 className="title-2 mb-10 text-wah text-center">
        Frequently asked questions
      </h1>
      <div className="flex flex-col gap-5 w-[97%] lg:w-1/2 mx-auto">
        {faqlist?.map((item, index) => {
          return (
            <FaqItem
              key={index}
              index={index}
              question={item.question}
              answer={item.answer}
            />
          );
        })}
      </div>
    </section>
  );
};

export default FaqSection;
