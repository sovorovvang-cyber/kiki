import type { ReactNode } from 'react';
import { CATEGORIES, CATEGORY_COLORS, COMPONENTS } from '../data/registry';
import styles from './Layout.module.css';

interface LayoutProps {
  children: ReactNode;
  search: string;
  onSearch: (v: string) => void;
  activeCategory: string | null;
  onCategory: (c: string | null) => void;
  view: 'gallery' | 'tokens';
  onView: (v: 'gallery' | 'tokens') => void;
}

export function Layout({ children, search, onSearch, activeCategory, onCategory, view, onView }: LayoutProps) {
  const countByCategory = (cat: string) =>
    COMPONENTS.filter((c) => c.category === cat).length;

  return (
    <div className={styles.root}>
      <aside className={styles.sidebar}>
        <div className={styles.logo}>
          <div className={styles.logoTitle}>SKT Pattern Guide</div>
          <div className={styles.logoSub}>Design System · {COMPONENTS.length} Components</div>
        </div>

        <div className={styles.search}>
          <input
            className={styles.searchInput}
            placeholder="컴포넌트 검색..."
            value={search}
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>

        <nav className={styles.nav}>
          <div className={styles.navSection}>
            <div className={styles.navLabel}>Components</div>
            <div
              className={`${styles.navItem} ${activeCategory === null && view === 'gallery' ? styles.navItemActive : ''}`}
              onClick={() => { onCategory(null); onView('gallery'); }}
            >
              <span className={styles.navDot} style={{ background: 'rgba(255,255,255,0.3)' }} />
              전체
              <span className={styles.navCount}>{COMPONENTS.length}</span>
            </div>
            {CATEGORIES.map((cat) => (
              <div
                key={cat}
                className={`${styles.navItem} ${activeCategory === cat && view === 'gallery' ? styles.navItemActive : ''}`}
                onClick={() => { onCategory(cat); onView('gallery'); }}
              >
                <span className={styles.navDot} style={{ background: CATEGORY_COLORS[cat] }} />
                {cat}
                <span className={styles.navCount}>{countByCategory(cat)}</span>
              </div>
            ))}
          </div>

          <div className={styles.navDivider} />

          <div className={styles.navSection}>
            <div className={styles.navLabel}>Design Tokens</div>
            <div
              className={`${styles.navSpecial} ${view === 'tokens' ? styles.navSpecialActive : ''}`}
              onClick={() => onView('tokens')}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              토큰 뷰어
            </div>
          </div>
        </nav>
      </aside>

      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
}
