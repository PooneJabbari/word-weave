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
        "flex min-h-48 flex-grow w-full rounded-md bg-slate-100 px-3 py-2 text-sm shadow-sm ",
        className
      )}
      {...props}>
      {text}
    </div>
  )
}
