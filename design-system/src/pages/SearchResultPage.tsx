import { useState } from 'react';
import { Chip } from '../components/Chip/Chip';
import { Divider } from '../components/Divider/Divider';
import styles from './SearchResultPage.module.css';

// ── 아이콘 ────────────────────────────────────────────────────────────────────
function BackIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M17.5 7L10.5 14L17.5 21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M13.5 13.5L17 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}
function ClearIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="7.5" fill="rgba(6,12,31,0.15)"/>
      <path d="M6.5 6.5l5 5M11.5 6.5l-5 5" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}
function SortIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function StarIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M6 1l1.4 2.8 3.1.45-2.25 2.19.53 3.1L6 8.1l-2.78 1.44.53-3.1L1.5 4.25l3.1-.45L6 1z" fill="#FFB800"/>
    </svg>
  );
}
function ChevronRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// ── 데이터 ────────────────────────────────────────────────────────────────────
type Category = 'all' | 'plan' | 'subscription' | 'addon';

interface SubscriptionProduct {
  id: string;
  category: Category;
  type: 'subscription';
  name: string;
  badge: string;
  price: string;
  originalPrice?: string;
  tag: string;
  bg: string;
  label: string;
}

interface PlanProduct {
  id: string;
  category: Category;
  type: 'plan';
  subtitle: string;
  name: string;
  price: string;
  subPrice: string;
  chips: string[];
}

type Product = SubscriptionProduct | PlanProduct;

const PRODUCTS: Product[] = [
  {
    id: 's1', category: 'subscription', type: 'subscription',
    name: '유튜브 프리미엄', badge: '구독 상품',
    price: '29,900원/월', originalPrice: '39,900원',
    tag: '광고 없음', bg: '#FF0000', label: 'YT',
  },
  {
    id: 's2', category: 'subscription', type: 'subscription',
    name: '유튜브 뮤직', badge: '구독 상품',
    price: '19,900원/월', originalPrice: '25,900원',
    tag: '음악 스트리밍', bg: '#FF0000', label: 'M',
  },
  {
    id: 's3', category: 'subscription', type: 'subscription',
    name: '구글 원 100GB', badge: '구독 상품',
    price: '2,900원/월', originalPrice: undefined,
    tag: '클라우드 저장', bg: '#4285F4', label: 'G',
  },
  {
    id: 's4', category: 'subscription', type: 'subscription',
    name: 'YouTube Premium Family', badge: '구독 상품',
    price: '47,900원/월', originalPrice: '59,900원',
    tag: '최대 6명', bg: '#FF0000', label: 'YF',
  },
  {
    id: 'p1', category: 'plan', type: 'plan',
    subtitle: '유튜브 프리미엄 포함',
    name: '5G 프리미어 에센셜',
    price: '79,000원/월',
    subPrice: '선택약정 시 63,200원',
    chips: ['유튜브 프리미엄', '데이터 무제한'],
  },
  {
    id: 'p2', category: 'plan', type: 'plan',
    subtitle: '유튜브 프리미엄 + 뮤직 포함',
    name: '5G 프리미어 플러스',
    price: '95,000원/월',
    subPrice: '선택약정 시 76,000원',
    chips: ['유튜브 프리미엄', '유튜브 뮤직', '데이터 무제한'],
  },
  {
    id: 'p3', category: 'plan', type: 'plan',
    subtitle: '유튜브 혜택 제공',
    name: '5G 라이트+',
    price: '55,000원/월',
    subPrice: '선택약정 시 44,000원',
    chips: ['유튜브 3개월 쿠폰', '데이터 110GB'],
  },
  {
    id: 'a1', category: 'addon', type: 'subscription',
    name: '유튜브 프리미엄 앱쿠폰', badge: '부가서비스',
    price: '월 0원 (무료)',
    tag: '3개월 이용권',
    bg: '#3617ce', label: 'T',
  },
];

const FILTERS: { key: Category; label: string }[] = [
  { key: 'all', label: '전체' },
  { key: 'plan', label: '요금제' },
  { key: 'subscription', label: '구독상품' },
  { key: 'addon', label: '부가서비스' },
];

// ── 서브 컴포넌트 ─────────────────────────────────────────────────────────────
function SubscriptionCard({ item }: { item: SubscriptionProduct }) {
  return (
    <button className={styles.subCard}>
      <div className={styles.subThumb} style={{ backgroundColor: item.bg }}>
        <span className={styles.subThumbLabel}>{item.label}</span>
      </div>
      <div className={styles.subInfo}>
        <span className={styles.subBadge}>{item.badge}</span>
        <p className={styles.subName}>{item.name}</p>
        {item.originalPrice && (
          <p className={styles.subOrigin}>{item.originalPrice}</p>
        )}
        <p className={styles.subPrice}>{item.price}</p>
        <span className={styles.subTag}>{item.tag}</span>
      </div>
    </button>
  );
}

function PlanItem({ item }: { item: PlanProduct }) {
  return (
    <div className={styles.planItem}>
      <p className={styles.planSubtitle}>{item.subtitle}</p>
      <p className={styles.planName}>{item.name}</p>
      <p className={styles.planPrice}>{item.price}</p>
      <p className={styles.planSub}>{item.subPrice}</p>
      <div className={styles.planChips}>
        {item.chips.map((c) => (
          <span key={c} className={styles.planChip}>{c}</span>
        ))}
      </div>
      <button className={styles.planDetailBtn}>
        자세히 보기 <ChevronRightIcon />
      </button>
    </div>
  );
}

// ── 메인 컴포넌트 ──────────────────────────────────────────────────────────────
export function SearchResultPage() {
  const [query, setQuery] = useState('유튜브');
  const [filter, setFilter] = useState<Category>('all');
  const [sort, setSort] = useState('관련도순');

  const filtered = PRODUCTS.filter(
    (p) => filter === 'all' || p.category === filter
  );

  const subscriptions = filtered.filter(
    (p): p is SubscriptionProduct => p.type === 'subscription'
  );
  const plans = filtered.filter(
    (p): p is PlanProduct => p.type === 'plan'
  );

  return (
    <div className={styles.page}>
      {/* ── 검색 헤더 ── */}
      <header className={styles.searchHeader}>
        <button className={styles.backBtn} aria-label="뒤로가기">
          <BackIcon />
        </button>
        <div className={styles.searchBar}>
          <span className={styles.searchIcon}><SearchIcon /></span>
          <input
            className={styles.searchInput}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="검색어를 입력하세요"
          />
          {query && (
            <button className={styles.clearBtn} onClick={() => setQuery('')} aria-label="지우기">
              <ClearIcon />
            </button>
          )}
        </div>
      </header>

      {/* ── 카테고리 필터 칩 ── */}
      <div className={styles.filterRow}>
        {FILTERS.map((f) => (
          <Chip key={f.key} selected={filter === f.key} onClick={() => setFilter(f.key)}>
            {f.label}
          </Chip>
        ))}
      </div>

      <Divider />

      {/* ── 결과 수 + 정렬 ── */}
      <div className={styles.sortBar}>
        <span className={styles.resultCount}>총 <strong>{filtered.length}</strong>개</span>
        <button className={styles.sortBtn} onClick={() => {}}>
          {sort} <SortIcon />
        </button>
      </div>

      {/* ── 스크롤 콘텐츠 ── */}
      <main className={styles.scroll}>

        {/* 구독상품 그리드 */}
        {subscriptions.length > 0 && (
          <section className={styles.section}>
            {filter === 'all' && (
              <p className={styles.sectionTitle}>구독상품 · 부가서비스</p>
            )}
            <div className={styles.cardGrid}>
              {subscriptions.map((item) => (
                <SubscriptionCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        )}

        {/* 요금제 리스트 */}
        {plans.length > 0 && (
          <>
            {subscriptions.length > 0 && <Divider type="section" />}
            <section className={styles.section}>
              {filter === 'all' && (
                <p className={styles.sectionTitle}>요금제</p>
              )}
              <div className={styles.planList}>
                {plans.map((item, i) => (
                  <div key={item.id}>
                    {i > 0 && <Divider />}
                    <PlanItem item={item} />
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {/* 결과 없음 */}
        {filtered.length === 0 && (
          <div className={styles.empty}>
            <p className={styles.emptyTitle}>검색 결과가 없어요</p>
            <p className={styles.emptySub}>다른 키워드로 검색해 보세요</p>
          </div>
        )}

        <div style={{ height: 40 }} />
      </main>
    </div>
  );
}
