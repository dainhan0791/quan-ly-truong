import React from "react";

const Column = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section
      className={`flex flex-col justify-center items-center w-full ${className ?? ""}`}
    >
      {children}
    </section>
  );
};

export default Column;
