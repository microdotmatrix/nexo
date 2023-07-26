// Shadcn UI Kit for Next.js based on Radix UI and Tailwind
// https://ui.shadcn.com/

"use client"

import { forwardRef } from "react"
import { tv } from 'tailwind-variants';

import { cn } from "@/utils/helpers"


const buttonVariants = tv({
  base: "flex w-fit items-center justify-center p-4 text-sm uppercase tracking-wide opacity-90 hover:opacity-100 transition-all duration-300",
  variants: {
    variant: {
      default:
        "bg-gray-900 text-white hover:bg-gray-700 dark:bg-slate-50 dark:text-slate-900",
      dark: 
        "bg-goth-900 text-white hover:bg-goth-400 dark:bg-goth-100 dark:hover:bg-goth-200 dark:text-goth-900",
      destructive:
        "bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600",
      outline:
        "bg-transparent border border-slate-200 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100",
      subtle:
        "bg-slate-100 text-slate-900 hover:bg-slate-200 hover:text-slate-600 dark:bg-slate-500 dark:text-slate-100",
      ghost:
        "bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
      link:
        "bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent",
    },
    size: {
      default: "px-4",
      sm: "px-2 rounded-md",
      lg: "px-8 rounded-md",
      wide: "w-full"
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

const Button = forwardRef(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }