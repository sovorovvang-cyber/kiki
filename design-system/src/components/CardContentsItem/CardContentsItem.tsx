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
  barcodeNumbers?: [string, string, string, string];
  barcodeTime?: string;
}

// ── AI 타입 아이콘 (16×16 rounded square, #ECEDEF bg, sparkle icon) ─────────
function AiSparkleIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M6 1L6.8 4.2C7 5 7.5 5.6 8.2 5.9L11 6L8.2 6.1C7.5 6.4 7 7 6.8 7.8L6 11L5.2 7.8C5 7 4.5 6.4 3.8 6.1L1 6L3.8 5.9C4.5 5.6 5 5 5.2 4.2L6 1Z" fill="rgba(6,12,31,0.50)" />
    </svg>
  );
}

// ── Barcode: 실제 Figma 벡터 데이터 기반 SVG ──────────────────────────────────
// 각 bar: [x, width] — 어두운 바만 (#05001a), 흰 배경에 렌더링
const BARCODE_DARK_BARS: [number, number][] = [
  [0, 3.5], [3, 1.6], [5, 1.6], [9, 7.1], [18, 2], [25, 7.1],
  [34, 3.7], [41, 2], [45, 1.6], [49, 2], [54, 7], [63, 3.7],
  [68, 1.6], [72, 7.1], [81, 1.6], [88, 6.9], [97, 3.9],
  [104, 1.6], [108, 2], [113, 1.6], [117, 7.1], [126, 3.7],
  [131, 2], [135, 7.1], [144, 2], [151, 7.1], [160, 3.7],
  [167, 2], [171, 1.6], [175, 2], [180, 7.1], [189, 3.7],
  [194, 1.6], [197, 7.2], [207, 2], [214, 7.1], [223, 3.9],
  [230, 1.6], [234, 2], [238, 2], [243, 7], [252, 3.7],
  [257, 2], [261, 7], [270, 1.6], [277, 7.1], [286, 3.7],
  [293, 2], [297, 2], [302, 1.6], [306, 6.7],
];

function BarcodeDisplay({
  numbers = ['1234', '4561', '1506', '4932'],
  time = '19:58',
}: {
  numbers?: [string, string, string, string];
  time?: string;
}) {
  return (
    <div className={styles.barcodeWrap}>
      {/* 바코드 SVG — 313×48 실제 벡터 데이터 */}
      <svg
        width="313"
        height="48"
        viewBox="0 0 313 48"
        fill="none"
        className={styles.barcodeSvg}
      >
        {BARCODE_DARK_BARS.map(([x, w], i) => (
          <rect key={i} x={x} y={0} width={w} height={48} fill="#05001a" />
        ))}
      </svg>
      {/* 바코드 번호 + 시간 */}
      <div className={styles.barcodeNumRow}>
        <div className={styles.barcodeNums}>
          {numbers.map((n) => (
            <span key={n} className={styles.barcodeNum}>{n}</span>
          ))}
        </div>
        <span className={styles.barcodeTime}>{time}</span>
      </div>
    </div>
  );
}

// ── 메인 컴포넌트 ──────────────────────────────────────────────────────────────
export function CardContentsItem({
  type = 'list',
  imageSrc,
  title = '왕과 사는 남자',
  subtitle = 'VVIP CGV 1인 무료 이용',
  daysLeft = 'D-2',
  buttonLabel = '버튼',
  aiText = 'T 멤버십 사용 가능 포인트 65,300P',
  barcodeNumbers = ['1234', '4561', '1506', '4932'],
  barcodeTime = '19:58',
}: CardContentsItemProps) {
  // ── Type=Barcode ──
  if (type === 'barcode') {
    return <BarcodeDisplay numbers={barcodeNumbers} time={barcodeTime} />;
  }

  // ── Type=ai ──
  if (type === 'ai') {
    return (
      <div className={styles.aiRow}>
        <div className={styles.aiIconWrap}>
          <AiSparkleIcon />
        </div>
        <span className={styles.aiText}>{aiText}</span>
      </div>
    );
  }

  // ── Type=List ──
  return (
    <div className={styles.listRow}>
      {/* Info: ThumbnailItem + Text */}
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
            <span className={styles.dotSep} />
            <span className={styles.listSub}>{daysLeft}</span>
          </div>
        </div>
      </div>
      {/* Button: pill, #E2E6F1, pad 6/12 */}
      <button className={styles.listButton}>{buttonLabel}</button>
    </div>
  );
}
