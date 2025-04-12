import * as React from 'react'
import clsx from 'clsx'
import styles from './textarea.module.css'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({className, ...props}, ref) => {
    return <textarea className={clsx(styles['textarea'], className)} ref={ref} {...props} />
  },
)
Textarea.displayName = 'Textarea'

export default Textarea
