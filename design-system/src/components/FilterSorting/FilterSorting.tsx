import { ButtonListOrder } from '../ButtonListOrder/ButtonListOrder';
import styles from './FilterSorting.module.css';

/* Figma: FilterSorting — node 1:4516, 393×52px */
interface FilterSortingProps {
  totalCount?: number;
  sortLabel?: string;
  onSortClick?: () => void;
  onFilterClick?: () => void;
  divider?: boolean;
}

function FilterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
      <path d="M2 4.5H14" stroke="#05001A" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M4 8H12" stroke="#05001A" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M6 11.5H10" stroke="#05001A" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function FilterSorting({
  totalCount = 256,
  sortLabel = '인기순',
  onSortClick,
  onFilterClick,
  divider = true,
}: FilterSortingProps) {
  return (
    <div className={styles.container}>
      {divider && <div className={styles.dividerTop} />}
      <div className={styles.inner}>
        <span className={styles.count}>
          전체 <span>{totalCount}</span>개
        </span>
        <div className={styles.btnGroup}>
          <ButtonListOrder label={sortLabel} onClick={onSortClick} />
          <div className={styles.sep} />
          <button className={styles.filterBtn} onClick={onFilterClick}>
            <span className={styles.filterLabel}>필터</span>
            <FilterIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
