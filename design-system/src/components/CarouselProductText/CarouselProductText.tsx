import type { ReactNode } from 'react';
import styles from './CarouselProductText.module.css';

interface BadgeIconData {
  icon: ReactNode;
  label: string;
  subLabel?: string;
}

interface CarouselProductTextProps {
  subtitle?: string;
  title?: string;
  description?: string;
  logoSrc?: string;
  badges?: BadgeIconData[];
}

function DefaultLogo() {
  return (
    <div style={{ width: 40, height: 40, borderRadius: 8, background: '#E2E6F1' }} />
  );
}

export function CarouselProductText({
  subtitle = '{SubTitle}',
  title,
  description,
  logoSrc,
  badges = [],
}: CarouselProductTextProps) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.textInfo}>
          <span className={styles.subtitle}>{subtitle}</span>
          {title && <span className={styles.title}>{title}</span>}
          {description && <span className={styles.description}>{description}</span>}
        </div>
        <div className={styles.logo}>
          {logoSrc ? (
            <img src={logoSrc} alt="" className={styles.logoImg} />
          ) : (
            <DefaultLogo />
          )}
        </div>
      </div>
      {badges.length > 0 && (
        <div className={styles.badgeList}>
          {badges.map((b, i) => (
            <div key={i} className={styles.badgeItem}>
              <div className={styles.badgeMain}>
                <span className={styles.badgeIcon}>{b.icon}</span>
                <span className={styles.badgeLabel}>{b.label}</span>
              </div>
              {b.subLabel && <span className={styles.badgeSubLabel}>{b.subLabel}</span>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
