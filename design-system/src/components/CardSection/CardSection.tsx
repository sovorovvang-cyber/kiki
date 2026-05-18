import type { ReactNode } from 'react';
import styles from './CardSection.module.css';

/* Figma: CardSection — node 1:4535, 369px, p-28px, radius-24px, bg rgba(255,255,255,0.9) */
interface CardSectionProps {
  children?: ReactNode;
  className?: string;
}

export function CardSection({ children, className }: CardSectionProps) {
  return (
    <div className={`${styles.outer}${className ? ` ${className}` : ''}`}>
      <div className={styles.card}>{children}</div>
    </div>
  );
}
