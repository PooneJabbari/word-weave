import {
  forwardRef,
  type ComponentProps,
  type FC,
  type HTMLAttributes,
  type InputHTMLAttributes
} from "react"
import { cn } from "src/utils"

type OutputProps = HTMLAttributes<HTMLDivElement> & { text: string }

export const Output: FC<OutputProps> = ({ text, className, ...props }) => {
  return (
    <div
      className={cn(
        "flex h-48 w-full rounded-md bg-slate-200 px-3 py-2 text-sm shadow-sm placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-400 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
        className
      )}
      {...props}>
      {text}
    </div>
  )
}
