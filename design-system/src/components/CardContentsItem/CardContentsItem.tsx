import styles from './CardContentsItem.module.css';

type CardType = 'list' | 'barcode' | 'ai';

interface CardContentsItemProps {
  type?: CardType;
  imageSrc?: string;
  title?: string;
  subtitle?: string;
  daysLeft?: string;
  buttonLabel?: string;
  aiText?: string;
}

function AiIcon() {
  return (
    <div className={styles.aiIcon}>
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <circle cx="6" cy="6" r="5" fill="rgba(6,12,31,0.10)" />
        <path d="M3 6h6M6 3v6" stroke="rgba(6,12,31,0.40)" strokeWidth="1" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function BarcodeLines() {
  const bars = [3, 1, 2, 1, 3, 1, 1, 2, 1, 3, 1, 2, 1, 1, 3, 1, 2, 1, 3, 1, 1, 2, 3];
  return (
    <div className={styles.barcode}>
      <div className={styles.barLines}>
        {bars.map((w, i) => (
          <div key={i} className={styles.bar} style={{ width: w * 3 }} />
        ))}
      </div>
      <span className={styles.barcodeText}>1234 5678 9012 3456</span>
    </div>
  );
}

export function CardContentsItem({
  type = 'list',
  imageSrc,
  title = '왕과 사는 남자',
  subtitle = 'VVIP CGV 1인 무료 이용',
  daysLeft = 'D-2',
  buttonLabel = '버튼',
  aiText = 'T 멤버십 사용 가능 포인트 65,300P',
}: CardContentsItemProps) {
  if (type === 'barcode') {
    return <BarcodeLines />;
  }

  if (type === 'ai') {
    return (
      <div className={styles.aiRow}>
        <AiIcon />
        <span className={styles.aiText}>{aiText}</span>
      </div>
    );
  }

  return (
    <div className={styles.listRow}>
      <div className={styles.listInfo}>
        <div className={styles.listThumbnail}>
          {imageSrc ? (
            <img src={imageSrc} alt={title} className={styles.listImg} />
          ) : (
            <div className={styles.listImgPlaceholder} />
          )}
        </div>
        <div className={styles.listText}>
          <span className={styles.listTitle}>{title}</span>
          <div className={styles.listSubRow}>
            <span className={styles.listSub}>{subtitle}</span>
            <div className={styles.dot} />
            <span className={styles.listSub}>{daysLeft}</span>
          </div>
        </div>
      </div>
      <button className={styles.listButton}>{buttonLabel}</button>
    </div>
  );
}
