import { useState } from 'react';
import { AppBar } from '../components/AppBar/AppBar';
import { Button } from '../components/Button/Button';
import { Divider } from '../components/Divider/Divider';
import { TextField } from '../components/TextField/TextField';
import { Callout } from '../components/Callout/Callout';
import styles from './PaymentPage.module.css';

// ── 아이콘 ────────────────────────────────────────────────────────────────────
function CardIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="5" width="20" height="14" rx="3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M2 10h20" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="5" y="13" width="4" height="2" rx="1" fill="currentColor"/>
    </svg>
  );
}
function BankIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M3 21h18M3 10h18M5 10V21M19 10V21M12 3L3 10h18L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="7" y="2" width="10" height="20" rx="3" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="12" cy="18" r="1" fill="currentColor"/>
    </svg>
  );
}
function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M6.5 10l2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// ── 결제 수단 라디오 아이템 ───────────────────────────────────────────────────
interface PayMethodItemProps {
  icon: React.ReactNode;
  label: string;
  sublabel?: string;
  checked: boolean;
  onClick: () => void;
}
function PayMethodItem({ icon, label, sublabel, checked, onClick }: PayMethodItemProps) {
  return (
    <button className={`${styles.radioItem} ${checked ? styles.radioItemChecked : ''}`} onClick={onClick}>
      <span className={styles.radioIcon} style={{ color: checked ? '#3617ce' : 'rgba(6,12,31,0.40)' }}>
        {icon}
      </span>
      <span className={styles.radioText}>
        <span className={styles.radioLabel}>{label}</span>
        {sublabel && <span className={styles.radioSub}>{sublabel}</span>}
      </span>
      <span className={`${styles.radioCircle} ${checked ? styles.radioCircleChecked : ''}`} />
    </button>
  );
}

// ── 가격 상세 행 ──────────────────────────────────────────────────────────────
interface PriceRowProps {
  label: string;
  value: string;
  type?: 'default' | 'discount' | 'total';
}
function PriceRow({ label, value, type = 'default' }: PriceRowProps) {
  return (
    <div className={`${styles.priceRow} ${styles[`priceRow_${type}`]}`}>
      <span className={styles.priceLabel}>{label}</span>
      <span className={`${styles.priceValue} ${styles[`priceValue_${type}`]}`}>{value}</span>
    </div>
  );
}

// ── 약관 체크박스 아이템 ──────────────────────────────────────────────────────
interface CheckItemProps {
  label: string;
  required?: boolean;
  checked: boolean;
  onChange: () => void;
  hasLink?: boolean;
}
function CheckItem({ label, required, checked, onChange, hasLink }: CheckItemProps) {
  return (
    <div className={styles.checkItem}>
      <button
        className={`${styles.checkCircle} ${checked ? styles.checkCircleOn : ''}`}
        onClick={onChange}
        aria-checked={checked}
      >
        <CheckIcon />
      </button>
      <span className={styles.checkLabel}>
        {required && <span className={styles.checkRequired}>[필수]</span>}
        {label}
      </span>
      {hasLink && (
        <button className={styles.checkLink}>
          <ChevronRight />
        </button>
      )}
    </div>
  );
}

// ── AccordionPriceInfo ────────────────────────────────────────────────────────
interface AccordionProps {
  title: string;
  amount: string;
  children: React.ReactNode;
}
function Accordion({ title, amount, children }: AccordionProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.accordion}>
      <button className={styles.accordionHeader} onClick={() => setOpen(o => !o)}>
        <span className={styles.accordionTitle}>{title}</span>
        <span className={styles.accordionRight}>
          <span className={styles.accordionAmount}>{amount}</span>
          <ChevronDown open={open} />
        </span>
      </button>
      {open && <div className={styles.accordionBody}>{children}</div>}
    </div>
  );
}

// ── 메인 컴포넌트 ──────────────────────────────────────────────────────────────
export function PaymentPage() {
  const [payMethod, setPayMethod] = useState<'card' | 'bank' | 'skt'>('card');
  const [coupon, setCoupon] = useState('');
  const [point, setPoint] = useState('');
  const [allChecked, setAllChecked] = useState(false);
  const [terms, setTerms] = useState({ purchase: false, privacy: false });

  const toggleAll = () => {
    const next = !allChecked;
    setAllChecked(next);
    setTerms({ purchase: next, privacy: next });
  };
  const toggleTerm = (key: keyof typeof terms) => {
    const next = { ...terms, [key]: !terms[key] };
    setTerms(next);
    setAllChecked(Object.values(next).every(Boolean));
  };

  const canPay = terms.purchase && terms.privacy;

  return (
    <div className={styles.page}>
      {/* ── AppBar ── */}
      <AppBar title="결제하기" showBack />

      {/* ── 스크롤 콘텐츠 ── */}
      <main className={styles.scroll}>

        {/* 1. 주문 상품 */}
        <section className={styles.section}>
          <p className={styles.sectionTitle}>주문 상품</p>
          <div className={styles.productCard}>
            <div className={styles.productThumb}>
              <span className={styles.productThumbLabel}>T</span>
            </div>
            <div className={styles.productInfo}>
              <p className={styles.productBadge}>구독 상품</p>
              <p className={styles.productName}>유튜브 프리미엄 앱 쿠폰</p>
              <p className={styles.productDesc}>3개월 이용권 · 자동 갱신</p>
            </div>
            <div className={styles.productPrice}>
              <p className={styles.productOrigin}>39,900원</p>
              <p className={styles.productSale}>29,900원</p>
            </div>
          </div>
        </section>

        <Divider type="section" />

        {/* 2. 결제 수단 */}
        <section className={styles.section}>
          <p className={styles.sectionTitle}>결제 수단</p>
          <div className={styles.methodList}>
            <PayMethodItem
              icon={<CardIcon />}
              label="신용/체크카드"
              sublabel="국내외 모든 카드"
              checked={payMethod === 'card'}
              onClick={() => setPayMethod('card')}
            />
            <Divider />
            <PayMethodItem
              icon={<BankIcon />}
              label="계좌이체"
              sublabel="실시간 계좌이체"
              checked={payMethod === 'bank'}
              onClick={() => setPayMethod('bank')}
            />
            <Divider />
            <PayMethodItem
              icon={<PhoneIcon />}
              label="SKT 요금 합산"
              sublabel="SKT 통신 요금에 합산 청구"
              checked={payMethod === 'skt'}
              onClick={() => setPayMethod('skt')}
            />
          </div>
        </section>

        <Divider type="section" />

        {/* 3. 할인 혜택 */}
        <section className={styles.section}>
          <p className={styles.sectionTitle}>할인 혜택</p>
          <div className={styles.discountGroup}>
            <TextField
              label="쿠폰"
              placeholder="쿠폰 번호를 입력해주세요"
              value={coupon}
              onChange={setCoupon}
              rightElement={
                <button className={styles.applyBtn}>적용</button>
              }
            />
            <TextField
              label="T포인트"
              placeholder="사용할 포인트를 입력해주세요"
              value={point}
              onChange={setPoint}
              rightElement={
                <span className={styles.pointAvail}>보유 990P</span>
              }
            />
          </div>
        </section>

        <Divider type="section" />

        {/* 4. 결제 금액 */}
        <section className={styles.section}>
          <p className={styles.sectionTitle}>결제 금액</p>
          <div className={styles.priceList}>
            <PriceRow label="상품 금액" value="29,900원" />
            <PriceRow label="쿠폰 할인" value="-3,000원" type="discount" />
            <PriceRow label="T포인트 할인" value="-500원" type="discount" />
            <div className={styles.priceDivider}><Divider /></div>
            <PriceRow label="최종 결제 금액" value="26,400원" type="total" />
          </div>
        </section>

        <Divider type="section" />

        {/* 5. 가격 상세 아코디언 */}
        <section className={styles.sectionNoPad}>
          <Accordion title="상품 금액 상세" amount="29,900원">
            <div className={styles.accordionContent}>
              <PriceRow label="유튜브 프리미엄 3개월" value="39,900원" />
              <PriceRow label="SKT 고객 할인" value="-10,000원" type="discount" />
            </div>
          </Accordion>
          <Divider />
          <Accordion title="할인 상세" amount="-3,500원">
            <div className={styles.accordionContent}>
              <PriceRow label="쿠폰 할인" value="-3,000원" type="discount" />
              <PriceRow label="T포인트" value="-500원" type="discount" />
            </div>
          </Accordion>
        </section>

        <Divider type="section" />

        {/* 6. 안내 Callout */}
        <section className={styles.section}>
          <Callout title="결제 전 꼭 확인해주세요">
            구독 상품은 결제 완료 후 즉시 이용 가능합니다. 3개월 이용 후 자동 갱신되며, 갱신 3일 전 알림을 드립니다.
          </Callout>
        </section>

        <Divider type="section" />

        {/* 7. 약관 동의 */}
        <section className={styles.section}>
          <CheckItem
            label="전체 동의"
            checked={allChecked}
            onChange={toggleAll}
          />
          <div className={styles.termsDivider}><Divider /></div>
          <div className={styles.termsList}>
            <CheckItem
              label="구매 조건 및 결제 진행 동의"
              required
              checked={terms.purchase}
              onChange={() => toggleTerm('purchase')}
              hasLink
            />
            <CheckItem
              label="개인정보 제3자 제공 동의"
              required
              checked={terms.privacy}
              onChange={() => toggleTerm('privacy')}
              hasLink
            />
          </div>
        </section>

        {/* Sticky CTA 여백 확보 */}
        <div style={{ height: 88 }} />
      </main>

      {/* ── Sticky CTA (88px) ── */}
      <footer className={styles.cta}>
        <Button
          variant="primary"
          size="large"
          fullWidth
          disabled={!canPay}
        >
          {canPay ? '26,400원 결제하기' : '약관에 동의하고 결제하기'}
        </Button>
      </footer>
    </div>
  );
}
