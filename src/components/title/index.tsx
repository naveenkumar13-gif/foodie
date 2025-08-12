import React from "react";

interface TitleProps {
  title?: string;
  children?: React.ReactNode;
  className?: string;
}

function Title({ title, children, className }: TitleProps) {
  return (
    <div
      className={`text-3xl font-bold !py-8 max-md:text-lg max-md:!py-4 ${className}`}
    >
      {children || title}
    </div>
  );
}

export default Title;
