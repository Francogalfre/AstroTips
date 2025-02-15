import React from "react";

import { cn } from "@/lib/utils";
interface RainbowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function RainbowButton({ children, className, ...props }: RainbowButtonProps) {
  return (
    <button
      className={cn(
        "text-md sm:text-lg group relative inline-flex h-11 sm:h-12 animate-rainbow cursor-pointer items-center justify-center rounded-full border-0 bg-[length:200%] px-6 sm:px-10 font-medium text-primary-foreground [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:scale-105 transition-transform",

        // dark mode colors
        "text-gray-800 bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",

        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
