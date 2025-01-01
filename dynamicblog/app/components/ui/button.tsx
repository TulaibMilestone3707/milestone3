import * as React from 'react'

import { cn } from '@/lib/utility'
const buttonVariants= cva(
  "inline-flex items-center justify-center whitescape-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring disable:pointer-events-none disable:opacity-50",
{
  varients:{
    varients:{
      default:"bg-primary text-primary-forground shadow hover:bg-primary/90",
      destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destruction/90",
      outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
      secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
      ghost:"hover:bg-accent hover:text-accent-foreground",
      link:"text-primary underline-offset-4 hover:underline",

    },

size:{
  default:"h-9 px-4 py-2",
  sm:"h-8 rounded-md text-xs",
  lg:"h-10 rounded-md px-8",
  icon:"h-9 w-9"
},




  },

defaultVariants:{
  varient:"default",
  size:"default",
}



}
  );



export interface ButtonProps
extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  varient?:"default"  |  "destructive"  |  "outline"  | "secondary"  | "ghost"  |"link"
size?: "default"    | "sm"|"lg"|"icons";
asChild?: boolean;

}


const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
     className, varient ="default", size="default", asChild = false, ...props
  }, ref )  =>{
    const Comp = "button";
    return(
      <Comp
      className={cn(({varient, size, className}))}
      ref={ref}
      {...props}/>
    )
  }
)

Button.displayName ="Button";
export {Button, buttonVariants};

























export default function button() {
  return (
    <div>
      
    </div>
  )
}
function cva(arg0: string, arg1: { varients: { varients: { default: string; destructive: string; outline: string; secondary: string; ghost: string; link: string; }; size: { default: string; sm: string; lg: string; icon: string; }; }; defaultVariants: { varient: string; size: string; }; }) {
  throw new Error('Function not implemented.');
}

