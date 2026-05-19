import type { ComponentMeta } from '../data/registry';
import { CATEGORY_COLORS, getFigmaUrl, getStorybookUrl } from '../data/registry';
import { PREVIEWS } from '../previews/index';
import styles from './ComponentCard.module.css';

const STORYBOOK_BASE = 'https://6a0b16735119d1a7865b7171-kujhkqysbi.chromatic.com';

interface Props {
  component: ComponentMeta;
  active?: boolean;
  onClick: () => void;
}

export function ComponentCard({ component, active, onClick }: Props) {
  const catColor = CATEGORY_COLORS[component.category];
  const figmaUrl = component.figmaNodeId ? getFigmaUrl(component.figmaNodeId) : null;
  const storybookUrl = `${STORYBOOK_BASE}/?path=/story/${component.storybookId}`;

  const PreviewComponent = PREVIEWS[component.name];

  return (
    <div
      className={`${styles.card} ${active ? styles.cardActive : ''}`}
      onClick={onClick}
    >
      <div className={styles.preview}>
        {PreviewComponent ? (
          <PreviewComponent />
        ) : (
          <div className={styles.previewFallback}>{component.name}</div>
        )}
      </div>

      <div className={styles.info}>
        <div className={styles.topRow}>
          <span className={styles.name}>{component.name}</span>
          <span
            className={styles.badge}
            style={{ background: `${catColor}18`, color: catColor }}
          >
            {component.category}
          </span>
        </div>
        <div className={styles.desc}>{component.description}</div>
        <div className={styles.actions} onClick={(e) => e.stopPropagation()}>
          {figmaUrl && (
            <a href={figmaUrl} target="_blank" rel="noreferrer" className={`${styles.btn} ${styles.btnFigma}`}>
              <svg width="10" height="10" viewBox="0 0 38 57" fill="currentColor">
                <path d="M19 28.5A9.5 9.5 0 1 1 28.5 19 9.5 9.5 0 0 1 19 28.5Z"/>
                <path d="M9.5 57A9.5 9.5 0 0 0 19 47.5V38H9.5A9.5 9.5 0 0 0 9.5 57Z"/>
                <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5Z"/>
                <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5Z"/>
                <path d="M19 0V19H28.5A9.5 9.5 0 0 0 19 0Z"/>
              </svg>
              Figma
            </a>
          )}
          <a href={storybookUrl} target="_blank" rel="noreferrer" className={`${styles.btn} ${styles.btnStorybook}`}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16.71.243l-.12 2.71a.18.18 0 0 0 .29.15l1.06-.8.9.7a.18.18 0 0 0 .28-.16l-.1-2.7L16.71.24zM5 19.8c-.42 0-.84-.09-1.23-.27L2 18.47V3.14l1.73.95c.39.18.82.28 1.27.28h15.6c.56 0 1.02.46 1.02 1.02v13.37c0 .56-.46 1.02-1.02 1.02H5zM3 2L1.37.83A1.03 1.03 0 0 0 0 1.76v17.36c0 .38.2.72.55.88L4.12 22c.6.27 1.27.29 1.88.05L21.5 21.1c.3-.11.5-.4.5-.72V4.39A2.02 2.02 0 0 0 20 2.37H3z"/>
            </svg>
            Storybook
          </a>
        </div>
      </div>
    </div>
  );
}
