import Link from "next/link";
import React from "react";
import { ButtonProps } from "@/lib/props";

const Button: React.FC<ButtonProps> = ({
  title,
  icon,
  className = "",
  href,
  target = "_self",
}) => {
  return (
    <Link
      href={href}
      target={target}
      className={`flex items-center text-white bg-yellow-500 gap-2 px-4 py-1 text-base rounded-[8px] ${className}`}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}>
     
      <span>{title}</span>
      {icon && <span>{icon}</span>}
    </Link>
  );
};

export default Button;
