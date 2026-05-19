import type { ComponentMeta } from '../data/registry';
import { CATEGORY_COLORS, getFigmaUrl, getStorybookUrl } from '../data/registry';
import styles from './DetailPanel.module.css';

const STORYBOOK_BASE = 'https://6a0b16735119d1a7865b7171-kujhkqysbi.chromatic.com';

interface Props {
  component: ComponentMeta;
  onClose: () => void;
}

export function DetailPanel({ component, onClose }: Props) {
  const catColor = CATEGORY_COLORS[component.category];
  const iframeUrl = getStorybookUrl(STORYBOOK_BASE, component.storybookId);
  const figmaUrl = component.figmaNodeId ? getFigmaUrl(component.figmaNodeId) : null;
  const storybookUrl = `${STORYBOOK_BASE}/?path=/story/${component.storybookId}`;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.panel} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <div className={styles.headerInfo}>
            <div className={styles.headerName}>{component.name}</div>
            <span
              className={styles.headerBadge}
              style={{ background: `${catColor}18`, color: catColor }}
            >
              {component.category}
            </span>
            <div className={styles.headerDesc}>{component.description}</div>
          </div>
          <button className={styles.closeBtn} onClick={onClose}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <div className={styles.body}>
          <div className={styles.preview}>
            <iframe src={iframeUrl} title={component.name} />
          </div>

          <div className={styles.links}>
            {figmaUrl ? (
              <a href={figmaUrl} target="_blank" rel="noreferrer" className={`${styles.linkBtn} ${styles.linkBtnFigma}`}>
                <svg width="13" height="13" viewBox="0 0 38 57" fill="currentColor">
                  <path d="M19 28.5A9.5 9.5 0 1 1 28.5 19 9.5 9.5 0 0 1 19 28.5Z"/>
                  <path d="M9.5 57A9.5 9.5 0 0 0 19 47.5V38H9.5A9.5 9.5 0 0 0 9.5 57Z"/>
                  <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5Z"/>
                  <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5Z"/>
                  <path d="M19 0V19H28.5A9.5 9.5 0 0 0 19 0Z"/>
                </svg>
                Figma에서 열기
              </a>
            ) : (
              <span className={`${styles.linkBtn} ${styles.linkBtnFigma}`} style={{ opacity: 0.4, cursor: 'not-allowed' }}>
                Figma 링크 없음
              </span>
            )}
            <a href={storybookUrl} target="_blank" rel="noreferrer" className={`${styles.linkBtn} ${styles.linkBtnStorybook}`}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.71.243l-.12 2.71a.18.18 0 0 0 .29.15l1.06-.8.9.7a.18.18 0 0 0 .28-.16l-.1-2.7L16.71.24zM5 19.8c-.42 0-.84-.09-1.23-.27L2 18.47V3.14l1.73.95c.39.18.82.28 1.27.28h15.6c.56 0 1.02.46 1.02 1.02v13.37c0 .56-.46 1.02-1.02 1.02H5z"/>
              </svg>
              Storybook에서 열기
            </a>
          </div>

          <div className={styles.meta}>
            <div className={styles.metaRow}>
              <span className={styles.metaLabel}>컴포넌트</span>
              <span className={styles.metaValue}>{component.name}</span>
            </div>
            <div className={styles.metaRow}>
              <span className={styles.metaLabel}>카테고리</span>
              <span className={styles.metaValue}>{component.category}</span>
            </div>
            {component.figmaNodeId && (
              <div className={styles.metaRow}>
                <span className={styles.metaLabel}>Figma Node</span>
                <span className={styles.metaValue}>{component.figmaNodeId}</span>
              </div>
            )}
            <div className={styles.metaRow}>
              <span className={styles.metaLabel}>Story ID</span>
              <span className={styles.metaValue}>{component.storybookId}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
