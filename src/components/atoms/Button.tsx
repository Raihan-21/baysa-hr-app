import React, { ReactElement } from "react";

const Button = ({
  bgColor = "bg-primary",
  textColor = "text-white",
  type = "button",
  onClick,
  children,
}: {
  bgColor?: string;
  textColor?: string;
  type?: any;
  onClick?: () => void;
  children: any;
}) => {
  return (
    <button
      className={`${bgColor} ${textColor} rounded-[12px] py-3 px-4 `}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
