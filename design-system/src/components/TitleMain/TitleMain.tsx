import styles from './TitleMain.module.css';
import { Indicator } from '../Indicator/Indicator';

/* Figma: .TitleMain — 385×126, padding 28, VERTICAL gap 12 */
interface TitleMainProps {
  subtitle?: string;
  title?: string;
  indicatorCount?: number;
  indicatorActiveIndex?: number;
}

export function TitleMain({
  subtitle = '서브 타이틀',
  title = '메인 타이틀\n메인 타이틀',
  indicatorCount = 6,
  indicatorActiveIndex = 0,
}: TitleMainProps) {
  return (
    <div className={styles.container}>
      <span className={styles.subtitle}>{subtitle}</span>
      <span className={styles.title}>{title}</span>
      <Indicator count={indicatorCount} activeIndex={indicatorActiveIndex} />
    </div>
  );
}
