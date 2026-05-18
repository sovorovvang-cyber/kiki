import styles from './SearchBar.module.css';

/* Figma: SearchBar — Type=search|LLM, 353px */
type SearchBarType = 'search' | 'llm';

interface SearchBarProps {
  type?: SearchBarType;
  placeholder?: string;
  onClick?: () => void;
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="8.5" cy="8.5" r="5.75" stroke="rgba(6,12,31,0.4)" strokeWidth="1.5" />
      <path d="M13 13L17 17" stroke="rgba(6,12,31,0.4)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/* Figma: LLM button icon — waveform bars, white fill */
function WaveIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
      <rect x="2" y="7" width="2.5" height="6" rx="1.25" fill="white" />
      <rect x="6.5" y="4" width="2.5" height="12" rx="1.25" fill="white" />
      <rect x="11" y="5.5" width="2.5" height="9" rx="1.25" fill="white" />
      <rect x="15.5" y="8" width="2.5" height="4" rx="1.25" fill="white" />
    </svg>
  );
}

export function SearchBar({ type = 'search', placeholder, onClick }: SearchBarProps) {
  if (type === 'llm') {
    return (
      <div className={styles.llmContainer} onClick={onClick}>
        <span className={styles.llmPlaceholder}>
          {placeholder ?? '무엇을 도와드릴까요?'}
        </span>
        <button className={styles.llmBtn} aria-label="AI 검색">
          <WaveIcon />
        </button>
      </div>
    );
  }

  return (
    <div className={styles.searchContainer} onClick={onClick}>
      <span className={styles.searchPlaceholder}>
        {placeholder ?? '검색'}
      </span>
      <SearchIcon />
    </div>
  );
}
