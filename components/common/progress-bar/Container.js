import React from "react";

const Container = ({ animationDuration, children, isFinished }) => {
  return (
    <div
      style={{
        opacity: isFinished ? 0 : 1,
        transition: `opacity ${animationDuration}ms linear`,
      }}
    >
      {children}
    </div>
  );
};

export default Container;
