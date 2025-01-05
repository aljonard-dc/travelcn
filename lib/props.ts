
//button prop
export type ButtonProps = {
  title: string; 
  icon?: string;
  className?: string;
  href: string;
  target?: "_self" | "_blank" | "_parent" | "_top"; 
};

//card prop
export type cardProps = {
  id: number,
  img: string,
  title: string,
  description: string,
}