import styles from './TitleBottomSheet.module.css';

interface TitleBottomSheetProps {
  title: string;
  subText?: string;
  subTextHighlight?: string;
  onClose?: () => void;
}

export function TitleBottomSheet({ title, subText, subTextHighlight, onClose }: TitleBottomSheetProps) {
  return (
    <div className={styles.container}>
      <div className={styles.titleRow}>
        <span className={styles.title}>{title}</span>
        <button className={styles.closeButton} onClick={onClose} aria-label="닫기">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6 6L18 18M18 6L6 18" stroke="rgba(6,12,31,0.60)" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      {(subText || subTextHighlight) && (
        <div className={styles.subTextRow}>
          {subText && <span className={styles.subText}>{subText}</span>}
          {subTextHighlight && <span className={styles.subTextHighlight}>{subTextHighlight}</span>}
        </div>
      )}
    </div>
  );
}
