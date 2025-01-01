import { cn } from '@/lib/utility'
import React from 'react'


import { PiCardholder } from 'react-icons/pi'


const Card= React.forwardRef<
HTMLDivElement,
React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props}, ref) =>(
  <div ref={ref} className={cn(
    "rounded-xl border bg-card-foreground shadow"
    
  )} 
  {...props}/>
))

  Card.displayName="CardHeader"
const CardTitle= React.forwardRef<
HTMLDivElement,
React.HTMLAttributes<HTMLHeadingElement>
>(({className, ...props}, ref) =>(
  <div
  ref={ref}
  className={cn("flex flex-col space-y-1 p-6", className)}
  {...props}
  />

  
))

   CardTitle.displayName="CardTITLE"
const CardDescription=React.forwardRef<
HTMLParagraphElement,
React.HTMLAttributes<HTMLHeadingElement>
>(({className,...props},ref) =>(
  <h3
  ref={ref}
  className={cn("font-semibold leading-none tracking-tight" , className)}/>
))

CardTitle.displayName="CardTitle"


const CardContent =React.forwardRef<
HTMLDivElement,
React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props}, ref) =>(
  <div ref={ref}
  className={cn("p-6 pt-0", className)}
  {...props}/>
))

CardContent.displayName ="CardContent"


const CardFooter =React.forwardRef<
HTMLDivElement,
React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props}, ref) =>(
  <div ref={ref}
  className={cn("flex items-center p-6 pt-0", className)}
  {...props}/>
))

CardFooter.displayName="CardFooter"

export {Card,  CardTitle,CardDescription,CardContent,CardFooter}

















