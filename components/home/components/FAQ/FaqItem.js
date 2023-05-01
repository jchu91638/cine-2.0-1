import React from "react";

const FaqItem = ({ index, question, answer }) => {
  return (
    <div
      tabIndex={index}
      className="collapse collapse-arrow bg-black rounded-box  border-4 border-solid border-light text-wah"
    >
      <div className="collapse-title text-xl font-medium font-heading">{question}</div>
      <div className="collapse-content">
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default FaqItem;
