import { type ButtonHTMLAttributes } from 'react'
import './Button.css'

type ButtonProps = {
  label: string
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>

const Button = ({ label, className = '', ...buttonProps }: ButtonProps) => {
  const classes = ['app-button']
  if (className) {
    classes.push(className)
  }

  return (
    <button className={classes.join(' ')} {...buttonProps}>
      {label}
    </button>
  )
}

export default Button
