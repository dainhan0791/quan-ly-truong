import React from "react";

const Text = ({ text }: { text: string }) => {
  return <p className={`text-sm`}>{text}</p>;
};

export default Text;
