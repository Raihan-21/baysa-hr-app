import React, { ReactElement } from "react";

const Button = ({
  bgColor = "bg-primary",
  textColor = "text-white",
  text,
  icon,
}: {
  bgColor?: string;
  textColor?: string;
  text: string;
  icon?: ReactElement;
}) => {
  return (
    <button
      className={`${bgColor} ${textColor} rounded-[12px] py-3 px-4 flex items-center gap-x-2`}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
