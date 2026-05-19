import styles from './TokenViewer.module.css';

interface Token { name: string; value: string; }

const colorTokens: Token[] = [
  { name: '--color-palette-gray-00',     value: '#ffffff' },
  { name: '--color-palette-gray-50',     value: '#f4f5fa' },
  { name: '--color-palette-gray-100',    value: '#ebeef6' },
  { name: '--color-palette-gray-200',    value: '#e2e6f1' },
  { name: '--color-palette-gray-300',    value: '#d0d5e4' },
  { name: '--color-palette-gray-500',    value: '#8a93ad' },
  { name: '--color-palette-gray-1000',   value: '#060c1f' },
  { name: '--color-palette-gray-alpha-400', value: 'rgba(6,12,31,0.4)' },
  { name: '--color-palette-gray-alpha-600', value: 'rgba(6,12,31,0.6)' },
  { name: '--color-palette-gray-alpha-800', value: 'rgba(6,12,31,0.8)' },
  { name: '--color-palette-white-alpha-900', value: 'rgba(255,255,255,0.9)' },
  { name: '--color-brand-primary',       value: '#3617ce' },
  { name: '--color-brand-secondary',     value: '#7355c7' },
  { name: '--color-text-primary',        value: '#05001a' },
];

const spacingTokens: Token[] = [
  { name: '--spacing-2',  value: '2px' },
  { name: '--spacing-4',  value: '4px' },
  { name: '--spacing-6',  value: '6px' },
  { name: '--spacing-8',  value: '8px' },
  { name: '--spacing-12', value: '12px' },
  { name: '--spacing-16', value: '16px' },
  { name: '--spacing-20', value: '20px' },
  { name: '--spacing-24', value: '24px' },
  { name: '--spacing-28', value: '28px' },
  { name: '--spacing-32', value: '32px' },
  { name: '--spacing-40', value: '40px' },
];

const radiusTokens: Token[] = [
  { name: '--radius-4',    value: '4px' },
  { name: '--radius-6',    value: '6px' },
  { name: '--radius-8',    value: '8px' },
  { name: '--radius-10',   value: '10px' },
  { name: '--radius-12',   value: '12px' },
  { name: '--radius-16',   value: '16px' },
  { name: '--radius-20',   value: '20px' },
  { name: '--radius-24',   value: '24px' },
  { name: '--radius-full', value: '9999px' },
];

export function TokenViewer() {
  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <div className={styles.title}>Design Tokens</div>
        <div className={styles.subtitle}>
          Figma Variables에서 자동 동기화되는 디자인 토큰입니다.
          GitHub Actions가 30분마다 Figma API를 확인해 변경사항을 반영합니다.
        </div>
        <div className={styles.syncInfo}>
          <span className={styles.dot} />
          마지막 동기화: 2026-05-19 · Figma 파일 연동됨
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionTitle}>Color</div>
        <div className={styles.colorGrid}>
          {colorTokens.map((t) => (
            <div key={t.name} className={styles.colorCard}>
              <div className={styles.colorSwatch} style={{ background: t.value }} />
              <div className={styles.colorInfo}>
                <div className={styles.colorName}>{t.name}</div>
                <div className={styles.colorValue}>{t.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionTitle}>Spacing</div>
        <div className={styles.spacingList}>
          {spacingTokens.map((t) => (
            <div key={t.name} className={styles.spacingRow}>
              <span className={styles.spacingName}>{t.name}</span>
              <div className={styles.spacingBar} style={{ width: t.value }} />
              <span className={styles.spacingValue}>{t.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionTitle}>Border Radius</div>
        <div className={styles.radiusGrid}>
          {radiusTokens.map((t) => (
            <div key={t.name} className={styles.radiusCard} style={{ borderRadius: t.value === '9999px' ? '24px' : t.value }}>
              <div className={styles.radiusBox} style={{ borderRadius: t.value }} />
              <div className={styles.radiusName}>{t.name.replace('--radius-', '')} · {t.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
