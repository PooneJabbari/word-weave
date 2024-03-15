import { forwardRef, type InputHTMLAttributes } from "react"
import { cn, useDebounce } from "src/utils"

export type TextareaProps = {
  debounce: number
  onChange: (value: string | number | readonly string[] | undefined) => void
} & Omit<InputHTMLAttributes<HTMLTextAreaElement>, "onChange">

export const Input = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ value: initialValue, onChange, debounce, className, ...props }, ref) => {
    const [value, setValue] = useDebounce({ initialValue, onChange, debounce })
    return (
      <textarea
        ref={ref}
        className={cn(
          "flex h-48 w-full rounded-md bg-slate-200 px-3 py-2 text-sm shadow-sm placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-400 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
          className
        )}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        {...props}
      />
    )
  }
)
