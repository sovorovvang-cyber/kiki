import { useState } from 'react';
import { ComponentCard } from '../components/ComponentCard';
import { DetailPanel } from '../components/DetailPanel';
import { COMPONENTS, type ComponentMeta } from '../data/registry';
import styles from './Gallery.module.css';

interface Props {
  search: string;
  activeCategory: string | null;
}

export function Gallery({ search, activeCategory }: Props) {
  const [selected, setSelected] = useState<ComponentMeta | null>(null);

  const filtered = COMPONENTS.filter((c) => {
    const matchCat = !activeCategory || c.category === activeCategory;
    const matchSearch = !search || c.name.toLowerCase().includes(search.toLowerCase()) || c.description.includes(search);
    return matchCat && matchSearch;
  });

  const title = activeCategory ?? '전체 컴포넌트';

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <div className={styles.title}>
          {title}
          <span className={styles.count}>{filtered.length}개</span>
        </div>
      </div>

      <div className={styles.grid}>
        {filtered.length === 0 ? (
          <div className={styles.empty}>검색 결과가 없습니다.</div>
        ) : (
          filtered.map((c) => (
            <ComponentCard
              key={c.name}
              component={c}
              active={selected?.name === c.name}
              onClick={() => setSelected(selected?.name === c.name ? null : c)}
            />
          ))
        )}
      </div>

      {selected && (
        <DetailPanel component={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
