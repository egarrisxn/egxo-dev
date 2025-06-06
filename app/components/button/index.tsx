import {forwardRef} from 'react'
import clsx from 'clsx'
import {Spinner} from '../spinner'
import styles from './button.module.css'

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  children?: React.ReactNode
  buttonType?: 'primary' | 'secondary'
  className?: string
  // eslint-disable-next-line no-unused-vars
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  iconRight?: React.ReactNode
  iconLeft?: React.ReactNode
  height?: string | number
  width?: string | number
  padding?: string | number
  margin?: string | number
  loading?: boolean
}

// eslint-disable-next-line react/display-name
const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      onClick,
      className,
      buttonType = 'secondary',
      disabled = false,
      iconRight,
      iconLeft,
      height = 40,
      width,
      padding = 10,
      margin,
      loading,
      style,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={clsx(styles.button, className, {
          [styles.primary]: buttonType === 'primary',
          [styles.secondary]: buttonType === 'secondary',
        })}
        disabled={disabled || loading}
        onClick={onClick}
        style={{height, width, margin, padding, ...style}}
        {...props}
      >
        {children && iconLeft && (
          <span className={clsx(styles.icon, styles.iconLeft)}>{iconLeft}</span>
        )}
        {!loading &&
          (children ? children : <span className={styles.icon}>{iconLeft || iconRight}</span>)}
        {loading && (
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Spinner />
          </span>
        )}
        {children && iconRight && (
          <span className={clsx(styles.icon, styles.iconRight)}>{iconRight}</span>
        )}
      </button>
    )
  },
)

export default Button
