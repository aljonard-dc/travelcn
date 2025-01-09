
//button prop
export type ButtonProps = {
  title: string; 
  icon?: React.ReactNode;
  className?: string;
  href: string;
  target?: "_self" | "_blank" | "_parent" | "_top"; 
};

export type iconProps = {
  id: number,
  title: string; 
  icon: string;
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