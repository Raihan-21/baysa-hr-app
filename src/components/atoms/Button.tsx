import React from "react";

const Button = ({
  bgColor = "primary",
  textColor = "primary",
  text,
}: {
  bgColor?: string;
  textColor?: string;
  text: string;
}) => {
  return (
    <button className={`bg-${bgColor} text-${textColor} rounded-md`}>
      {text}
    </button>
  );
};

export default Button;
