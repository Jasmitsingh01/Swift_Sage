import { MouseEventHandler } from "react";
import { twMerge } from 'tailwind-merge';

interface ButtonProps {

     text:string;
     onclick:MouseEventHandler;
     className?:string
}
function Button({text ,onclick,className,...rest}:ButtonProps) {
  return (
    <button onClick={onclick} className={twMerge('hover:scale-110 btn-primary',className)} {...rest} >{text}</button>
  )
}

export default Button