'use client'
import clsx from 'clsx'
import { start } from 'repl'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'contained' | 'outlined' | 'text'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}

const root =
  'rounded-md transition-all hover:bg-gray-200 inline-flex items-center min-w-16 w-full justify-center leading-6'

const variants = {
  contained: 'bg-[#0162FF] hover:bg-[#013b99] text-white',
  outlined: 'border',
  text: ''
}

const sizes = {
  sm: 'px-2.5 py-0.25 text-13',
  md: 'px-15 py-1.25 text-sm',
  lg: 'px-5.5 py-1.75 text-15'
}

export default function Button({
  children,
  className,
  variant = 'contained',
  size = 'md',
  startIcon,
  endIcon,
  ...props
}: ButtonProps) {
  const styles = clsx(root, className, variants[variant], sizes[size])

  return (
    <button className={styles} {...props}>
      {startIcon && <span className="mr-2">{startIcon}</span>}
      {children}
      {endIcon && <span className="ml-2">{endIcon}</span>}
    </button>
  )
}
