import { useState } from 'react';
import { Layout } from './components/Layout';
import { TokenViewer } from './components/TokenViewer';
import { Gallery } from './pages/Gallery';

export default function App() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [view, setView] = useState<'gallery' | 'tokens'>('gallery');

  return (
    <Layout
      search={search}
      onSearch={(v) => { setSearch(v); setView('gallery'); }}
      activeCategory={activeCategory}
      onCategory={setActiveCategory}
      view={view}
      onView={setView}
    >
      {view === 'gallery' ? (
        <Gallery search={search} activeCategory={activeCategory} />
      ) : (
        <TokenViewer />
      )}
    </Layout>
  );
}
