import { useState } from 'react';
import { AppBar, SktLogo } from '../components/AppBar/AppBar';
import { TextField } from '../components/TextField/TextField';
import { Button } from '../components/Button/Button';
import styles from './LoginPage.module.css';

function KakaoIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M10 3C6.134 3 3 5.462 3 8.5c0 1.946 1.178 3.658 2.97 4.695l-.757 2.793c-.067.246.21.443.424.302L8.73 14.4A8.16 8.16 0 0010 14.5c3.866 0 7-2.462 7-5.5S13.866 3 10 3z" fill="#060C1F"/>
    </svg>
  );
}

function NaverIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.4 10.26L8.52 6H6v8h2.6V9.74L11.48 14H14V6h-2.6v4.26z" fill="#060C1F"/>
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.9 10.2c0-.6-.05-1.2-.15-1.7H10v3.2h4.4a3.76 3.76 0 01-1.63 2.47v2.05h2.64C16.9 14.8 17.9 12.7 17.9 10.2z" fill="#4285F4"/>
      <path d="M10 18c2.21 0 4.07-.73 5.42-1.98l-2.64-2.05C11.99 14.6 11.06 14.9 10 14.9c-2.14 0-3.95-1.44-4.6-3.38H2.68v2.12A8 8 0 0010 18z" fill="#34A853"/>
      <path d="M5.4 11.52A4.81 4.81 0 015.15 10c0-.53.09-1.04.25-1.52V6.36H2.68A8 8 0 002 10c0 1.29.31 2.51.68 3.64l2.72-2.12z" fill="#FBBC05"/>
      <path d="M10 5.1c1.21 0 2.29.42 3.14 1.23l2.35-2.35A7.96 7.96 0 0010 2a8 8 0 00-7.32 4.36l2.72 2.12C6.05 6.54 7.86 5.1 10 5.1z" fill="#EA4335"/>
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.18 2c.07.54-.13 1.08-.46 1.49-.33.41-.85.72-1.37.68-.08-.53.15-1.07.46-1.44.34-.41.88-.71 1.37-.73zM15.5 13.17c-.23.52-.34.75-.64 1.21-.41.63-.99 1.42-1.71 1.43-.64.01-1-.42-1.87-.41-.87.01-1.25.42-1.9.43-.71.01-1.26-.73-1.67-1.36-.86-1.3-1.51-3.54-.63-5.09.44-.76 1.23-1.24 2.07-1.25.81-.01 1.33.42 2 .42.66 0 1.07-.43 2.02-.43.75 0 1.55.41 2.1 1.1-.2.12-1.87 1.09-1.85 3.08.02 1.95 1.71 2.6 2.08 2.87z" fill="#060C1F"/>
    </svg>
  );
}

const SNS_ITEMS = [
  { key: 'kakao', label: '카카오', Icon: KakaoIcon, bg: '#FEE500', color: '#060C1F' },
  { key: 'naver', label: '네이버', Icon: NaverIcon, bg: '#03C75A', color: '#ffffff' },
  { key: 'google', label: '구글', Icon: GoogleIcon, bg: '#ffffff', color: '#060C1F', border: true },
  { key: 'apple', label: '애플', Icon: AppleIcon, bg: '#060C1F', color: '#ffffff' },
];

export function LoginPage() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  return (
    <div className={styles.page}>
      <AppBar showLogo />
      <main className={styles.content}>
        <div className={styles.heading}>
          <p className={styles.headingMain}>안녕하세요</p>
          <p className={styles.headingSub}>SKT입니다</p>
        </div>

        <div className={styles.form}>
          <TextField
            label="아이디"
            placeholder="전화번호 또는 이메일"
            value={id}
            onChange={setId}
          />
          <TextField
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요"
            type="password"
            value={pw}
            onChange={setPw}
          />
        </div>

        <div className={styles.links}>
          <button className={styles.linkBtn}>아이디 찾기</button>
          <span className={styles.linkDot}>|</span>
          <button className={styles.linkBtn}>비밀번호 찾기</button>
          <span className={styles.linkDot}>|</span>
          <button className={styles.linkBtn}>회원가입</button>
        </div>

        <Button variant="primary" size="large" fullWidth>
          로그인
        </Button>

        <div className={styles.orRow}>
          <span className={styles.orLine} />
          <span className={styles.orText}>또는</span>
          <span className={styles.orLine} />
        </div>

        <div className={styles.snsSection}>
          <p className={styles.snsLabel}>SNS 계정으로 로그인</p>
          <div className={styles.snsRow}>
            {SNS_ITEMS.map(({ key, label, Icon, bg, color, border }) => (
              <button
                key={key}
                className={styles.snsBtn}
                style={{
                  backgroundColor: bg,
                  color,
                  border: border ? '1px solid rgba(6,12,31,0.12)' : 'none',
                }}
                aria-label={`${label} 로그인`}
              >
                <Icon />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <SktLogo />
        <p className={styles.footerText}>SKT 통합 계정으로 모든 서비스를 이용하세요</p>
      </footer>
    </div>
  );
}
