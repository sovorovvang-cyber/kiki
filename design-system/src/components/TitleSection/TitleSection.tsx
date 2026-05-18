import { TitleSectionLeftItem } from '../TitleSectionLeftItem/TitleSectionLeftItem';
import { TitleSectionRightItem } from '../TitleSectionRightItem/TitleSectionRightItem';
import styles from './TitleSection.module.css';

/* Figma: TitleSection — node 1:4186, flex-col gap-4px pb-16px */
interface TitleSectionProps {
  title: string;
  subtitle?: string;
  count?: number;
  rightType?: 'icon' | 'textButton' | 'text';
  rightLabel?: string;
  onRightClick?: () => void;
}

export function TitleSection({
  title,
  subtitle,
  count,
  rightType = 'icon',
  rightLabel = '전체 보기',
  onRightClick,
}: TitleSectionProps) {
  return (
    <div className={styles.container}>
      {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
      <div className={styles.titleRow}>
        <div className={styles.titleLeft}>
          <span className={styles.title}>{title}</span>
          {count !== undefined && (
            <TitleSectionLeftItem type="text" count={count} />
          )}
        </div>
        <TitleSectionRightItem
          type={rightType}
          label={rightLabel}
          onClick={onRightClick}
        />
      </div>
    </div>
  );
}
