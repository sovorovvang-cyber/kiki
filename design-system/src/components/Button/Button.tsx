import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

/** Figma: .Button — Size=Small|Medium × Type=Primary|Secondary|Disabled */
type Variant = 'primary' | 'secondary';
type Size    = 'small' | 'medium' | 'large';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  children: ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  children,
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={[
        styles.button,
        styles[variant],
        styles[size],
        fullWidth ? styles.fullWidth : '',
        className ?? '',
      ].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </button>
  );
}
