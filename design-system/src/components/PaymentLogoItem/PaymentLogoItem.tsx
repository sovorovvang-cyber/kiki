import type { ReactNode } from 'react';
import styles from './PaymentLogoItem.module.css';

type PaymentType = '11pay' | 'kakaopay' | 'naverpay';

interface PaymentLogoItemProps {
  type: PaymentType;
}

function ElevenPayLogo() {
  return (
    <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle"
        fontFamily="sans-serif" fontSize="7" fontWeight="700" fill="white">11</text>
    </svg>
  );
}

function KakaoPayLogo() {
  return (
    <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle"
        fontFamily="sans-serif" fontSize="5" fontWeight="700" fill="#3C1E1E">K</text>
    </svg>
  );
}

function NaverPayLogo() {
  return (
    <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle"
        fontFamily="sans-serif" fontSize="5" fontWeight="700" fill="white">N</text>
    </svg>
  );
}

const PAYMENT_CONFIG: Record<PaymentType, { className: string; logo: ReactNode }> = {
  '11pay':    { className: 'elevenPay',  logo: <ElevenPayLogo /> },
  'kakaopay': { className: 'kakaoPay',   logo: <KakaoPayLogo /> },
  'naverpay': { className: 'naverPay',   logo: <NaverPayLogo /> },
};

export function PaymentLogoItem({ type }: PaymentLogoItemProps) {
  const { className, logo } = PAYMENT_CONFIG[type];
  return (
    <div className={`${styles.circle} ${styles[className]}`}>
      <div className={styles.logo}>{logo}</div>
    </div>
  );
}
