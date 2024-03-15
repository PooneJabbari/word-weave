"use client"

import { type FC, type PropsWithChildren } from "react"
import { cn } from "src/utils"

const Label: FC<PropsWithChildren & { className?: string }> = ({
  children,
  className
}) => {
  return (
    <p
      className={cn(
        "text-2xl font-black leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        { className }
      )}>
      {children}
    </p>
  )
}

export { Label }
