import * as React from "react";
import {cva} from "class-variance-authority"
import { cn } from "../../lib/utils";
 
const buttonVariants = cva (
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-meduim transition-colors focus-visible:outline-none focus:visible:ring-1 focus-visible:ring:ring disabled:pointer-events-none disable:opacity-50",
{
  varients: {
    variants: {
      default: "bg-primary text-primary-foreground shadow hover:bg-primary/",
      destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/50",
      outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
    },
    sie: {
      default: "h-9 px-4 py-2",
      sm: "h-8 rounded-md text-xs",
      lg: "h-10 rounded-md px-8",
      icon: "h-9 w-9"
    },
  },

defaultVariants:{
  variant: "default",
  size: "default",
}
  }
);


export interface ButtonProps 
extends React.BaseHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icons";
  asChild?: boolean;
}



const Button = React.forwardRef<HTMLButtonElement, ButtonProps> (
  ({ className, variant = "default", size = "default", ...props}, ref) => {
    const Comp = "button"; 
    return (
      <Comp
      className={cn(buttonVariants({variant, size , className}))}
      ref={ref}
      {...props}
      />
    )
  }
);


Button.displayName = "Button";
export {Button, buttonVariants};