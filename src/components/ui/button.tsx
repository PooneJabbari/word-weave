import { cva, type VariantProps } from "class-variance-authority"
import type { ButtonHTMLAttributes, FC } from "react"
import { twMerge } from "tailwind-merge"

const buttonStyles = cva(
  "flex flex-row items-center py-2 px-3 gap-1 border border-transparent justify-center disabled:bg-gray-300 rounded-lg self-center bg-blue-500 border-blue-500",
  {
    variants: {
      variant: {
        outlined: "bg-transparent border",
        filled: "text-white border-transparent text-md font-medium text-white",
        content: "bg-transparent border-transparent p-0",
        icon: "bg-transparent border-transparent p-2"
      }
    },
    defaultVariants: {
      variant: "filled"
    }
  }
)

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    VariantProps<typeof buttonStyles> {
  isActive?: boolean
}

export const Button: FC<ButtonProps> = ({
  isActive,
  variant,
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={twMerge(buttonStyles({ variant }), className)}
      {...props}>
      {children ? <div>{children}</div> : null}
    </button>
  )
}
