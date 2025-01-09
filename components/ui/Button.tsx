import Link from "next/link";
import { ButtonProps } from "@/lib/props";

const Button = ({ title, icon, className = "", href, target = "_self" }: ButtonProps) => (
  <Link
    href={href}
    target={target}
    className={`
      flex items-center justify-center gap-2 text-yellow-950 bg-yellow-500 rounded-md 
      text-xs px-4 py-2 font-medium max-w-24
      md:text-sm md:px-5 md:py-3 md:max-w-32
      lg:text-base lg:px-6 lg:py-3 lg:max-w-36
      ${className}
    `}
    rel={target === "_blank" ? "noopener noreferrer" : undefined}>
    <span>{title}</span>
    {icon && <span className=" text-yellow-950">{icon}</span>}
  </Link>
);

export default Button;

