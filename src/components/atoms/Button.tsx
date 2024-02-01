import React, { ReactElement } from "react";

const Button = ({
  bgColor = "bg-primary",
  textColor = "text-white",
  children,
}: {
  bgColor?: string;
  textColor?: string;
  text?: string;
  icon?: ReactElement;
  children: any;
}) => {
  return (
    <button className={`${bgColor} ${textColor} rounded-[12px] py-3 px-4 `}>
      {children}
    </button>
  );
};

export default Button;
