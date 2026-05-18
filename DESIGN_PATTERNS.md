# SKT App — Design Pattern Reference

> **목적**: 신규 화면 제작 시 일관성 유지를 위한 패턴 정의서.  
> **파일 출처**: Figma `k7R6CRvP2MxvOTIdi61QmX` (Page 1)  
> **기준 뷰포트**: 393×852px (iPhone 기준, 라이트 테마 단일)

---

## Table of Contents

1. [Design Tokens](#1-design-tokens)
2. [Component Catalog](#2-component-catalog)
3. [Page Templates](#3-page-templates)
   - 3.1 [메인 (Main Tab)](#31-메인-main-tab)
   - 3.2 [리스트_카드 (Card List)](#32-리스트_카드-card-list)
   - 3.3 [리스트_텍스트 (Text List)](#33-리스트_텍스트-text-list)
   - 3.4 [상세_상품 (Product Detail)](#34-상세_상품-product-detail)
   - 3.5 [상세_정보입력 (Form/Input)](#35-상세_정보입력-forminput)
   - 3.6 [완료 (Completion)](#36-완료-completion)
   - 3.7 [바텀시트 (Bottom Sheet)](#37-바텀시트-bottom-sheet)
   - 3.8 [팝업 (Popup / Modal)](#38-팝업-popup--modal)
4. [Interaction Patterns](#4-interaction-patterns)
5. [Content Patterns](#5-content-patterns)
6. [Anti-patterns (금지 사항)](#6-anti-patterns-금지-사항)
7. [New Screen Checklist](#7-new-screen-checklist)
8. [Figma Node ID Reference](#8-figma-node-id-reference)

---

## 1. Design Tokens

### 1.1 Color

```
# Brand
primary           : #421ED8   ← Primary CTA, active state, link, positive value
primary-dark      : #3617CE   ← Hover / pressed state of primary
primary-light     : #E8E4FF   ← Background tint, chip selected bg, tag bg

# Neutral
color-bg-page     : #F5F5F7   ← 페이지 최상위 배경
color-bg-card     : #FFFFFF   ← 카드/컨테이너 배경
color-border      : #EEEEF0   ← 카드 border, 구분선 (1px)
color-border-mid  : #C8C8CC   ← 강조 구분선, 입력 필드 inactive

# Text
text-primary      : #05001A   ← 본문 기본 텍스트
text-secondary    : #3A3A3C   ← 본문 보조 텍스트
text-tertiary     : #868686   ← 캡션, 메타, placeholder
text-inverse      : #FFFFFF   ← 어두운 배경 위 텍스트

# Semantic
color-positive    : #421ED8   ← +값, 적립, 혜택 (파란색)
color-negative    : #FF3B30   ← -값, 차감, 에러 (빨간색)
color-success     : #00C851   ← 완료 상태 아이콘
color-warning     : #FF9500   ← 주의 알림
color-info        : #007AFF   ← 정보성 링크

# Complete Page (특수)
color-bg-complete : linear-gradient(180deg, #05001A 0%, #1A0F4A 100%)
```

**규칙**:
- 일반 화면 배경은 반드시 `#F5F5F7`. 카드/컨테이너는 `#FFFFFF`.
- 완료(완료) 페이지만 예외적으로 어두운 배경 사용.
- 강조색 `#421ED8`은 CTA 버튼, 활성 탭, 포인트 적립값, 선택된 라디오에만 사용.
- 금액 표기: 증가/적립은 파란색(`#421ED8`), 차감/할인은 빨간색(`#FF3B30`).

---

### 1.2 Typography

```
font-family: 'Pretendard Variable', -apple-system, sans-serif
letter-spacing: -0.03em  ← 모든 텍스트에 기본 적용

# Scale (size / weight / line-height)
display     : 28–32px / 700 / 1.2   ← 완료 페이지 히어로 메시지
title-1     : 22–24px / 700 / 1.3   ← 섹션 대표 제목
title-2     : 18–20px / 600 / 1.4   ← 서브섹션 제목, 카드 제목
body-1      : 15–16px / 500 / 1.5   ← 리스트 아이템 제목, 본문
body-2      : 13–14px / 400 / 1.6   ← 보조 본문, 설명
caption-1   : 12–13px / 400 / 1.4   ← 메타 정보, 날짜, 서브텍스트
caption-2   : 11px    / 400 / 1.4   ← 가장 작은 레이블, 태그
price       : 20–28px / 700 / 1.2   ← 가격 숫자 (letter-spacing -0.04em)
```

**규칙**:
- `display` 크기는 완료 페이지와 메인 히어로 캘아웃에만 사용.
- 가격은 항상 `price` 스타일(700 weight + -0.04em spacing).
- placeholder 텍스트: `text-tertiary(#868686)`, `body-2` 크기.

---

### 1.3 Spacing (space/* 변수)

```
space/2  : 2px   ← 아이콘 내부 미세 간격
space/4  : 4px   ← 아이콘↔텍스트 갭, 인라인 요소 간격
space/8  : 8px   ← 배지 패딩, 칩 내부, 소형 컴포넌트 간격
space/12 : 12px  ← 리스트 아이템 상하 패딩, 카드 내부 요소 갭
space/16 : 16px  ← 페이지 좌우 패딩(기본), 카드 내부 패딩
space/20 : 20px  ← 페이지 좌우 패딩(넓은 버전), 섹션 내부
space/24 : 24px  ← 컴포넌트 간 수직 간격
space/28 : 28px  ← 섹션 헤더 상단 여백
space/32 : 32px  ← 섹션 간 구분 간격
space/40 : 40px  ← 페이지 상단 대형 여백
```

**페이지 기준 패딩 규칙**:
```
좌우 페이지 패딩  : 16px (space/16) — 기본
카드 내부 패딩   : 16px (사방)
섹션 간 수직 간격 : 24–32px
리스트 아이템 패딩: 상하 12–16px, 좌우 0 (부모가 16px 패딩 보유)
바텀시트 내부 패딩: 좌우 20px, 상단 24px
팝업 내부 패딩   : 사방 24px
```

---

### 1.4 Border Radius

```
radius/4  : 4px   ← Progress bar, 미세 UI 요소
radius/8  : 8px   ← 작은 배지(Badge), Tag
radius/12 : 12px  ← Chip, 소형 버튼
radius/16 : 16px  ← TextField, ListItem 컨테이너, 일반 버튼
radius/20 : 20px  ← 카드(Card), ThumbnailItem 컨테이너
radius/24 : 24px  ← 바텀시트 상단 모서리, 대형 카드
radius/32 : 32px  ← 팝업(Modal) 카드
radius/pill: 9999px ← Primary CTA 버튼, ActionButton, 필터 Chip
```

---

### 1.5 Shadow / Elevation

```
elevation/card    : box-shadow: 0 2px 12px rgba(0,0,0,0.06)
elevation/sheet   : box-shadow: 0 -4px 24px rgba(0,0,0,0.12)
elevation/sticky  : box-shadow: 0 -1px 0 #EEEEF0  ← CTA 영역 구분
```

---

## 2. Component Catalog

### 2.1 Component Hierarchy (4-Layer)

```
Layer 1: Atoms          ← 단독 사용 불가, 반드시 Organism에 포함
Layer 2: Single Organism← 단독 화면 배치 가능
Layer 3: Compound Org.  ← 여러 Atom/Single 조합
Layer 4: Utility        ← 디자이너 전용, 실제 화면 배포 불가
```

---

### 2.2 Atoms (Layer 1)

#### `.Button`
```
Variants   : 12
크기       : XSmall / Small / Medium / Large / XLarge
타입       : Primary / Secondary / Ghost / Disabled
형태       : Solid(파란 배경) / Outline(테두리만) / Text(텍스트만)
모양       : 항상 pill (radius/pill)
Primary XL : width=full, height=56px, bg=#421ED8, text=#FFFFFF, 17px/700
Secondary L: width=fit, height=48px, bg=#EEEEF0, text=#05001A
Ghost      : bg=transparent, border=1px #C8C8CC
Disabled   : bg=#EEEEF0, text=#C8C8CC, 클릭 불가
```

#### `.Ico`
```
Variants   : 6 (기본) + 49 (교체용) + 49 (수정용 — 디자이너 전용)
크기       : 16/20/24/32/40/48px
사용법     : 반드시 .Ico/교체용 variant 사용 (직접 SVG 삽입 금지)
색상       : 상위 컴포넌트의 text color 상속 (currentColor)
```

#### `.Badge`
```
Variants   : 3 (Default / New / Count)
크기       : 고정 (컨텍스트에 따라 자동)
배경       : #421ED8 (파란) 또는 #FF3B30 (빨간) 또는 #868686 (회색)
위치       : 항상 아이콘/썸네일 우상단에 absolute 배치
```

#### `.RadioText` / `.CheckboxText`
```
Variants   : 각 4 (Default / Selected / Disabled / Error)
Selected   : 라디오 원형 → #421ED8 채움, 텍스트 color: #05001A
형태       : 아이콘(좌) + 텍스트(우) 수평 배치, 항상 full-width
사용처     : 바텀시트 선택 목록, 결제수단, 약관 동의
```

#### `ActionButton`
```
Variants   : 5 (크기별)
형태       : 아이콘(상) + 텍스트(하) 수직 배치
크기       : 44–64px 정사각형
사용처     : 메인 홈 빠른 실행 버튼 (T 가족으로이데이터, 데이터 함께 쓰기 등)
배경       : 회색(#F5F5F7) 또는 primary-light(#E8E4FF)
```

---

### 2.3 Single → Organism (Layer 2)

#### `AppBar`
```
Variants   : 6
[홈 전용]   : T로고(좌) + 스캔/장바구니/메뉴 아이콘(우)
[서브 기본] : ← 뒤로가기(좌) + 타이틀 텍스트(중앙) + 선택 아이콘(우)
[서브 우측] : ← 뒤로가기(좌) + 타이틀(중앙) + 장바구니+메뉴(우)
[서브 검색] : ← 뒤로가기(좌) + 타이틀(중앙) + 검색 아이콘(우)
[투명]     : 히어로 이미지 위 오버레이, bg=transparent
높이       : 56px
타이틀     : 17px / 600 / center-aligned
```

#### `UnderlineTab`
```
Variants   : 2 (2탭 / 다탭)
활성 탭    : 텍스트 #421ED8 + 하단 2px border #421ED8
비활성     : 텍스트 #868686
높이       : 44px
사용처     : 메인 탭 전환(관리/쇼핑/검색), 이용안내 FAQ 카테고리
최대 탭 수 : 5개 (그 이상은 횡스크롤 처리)
```

#### `TextField`
```
Variants   : 10 (5 상태 × 2 크기)
상태       : Default / Focus / Typing / Typed / Disabled
Default    : border 1px #C8C8CC, bg=#FFFFFF, placeholder #868686
Focus      : border 2px #421ED8, label 올라감(floating label 패턴)
Typed      : border 1px #C8C8CC, value text #05001A
Error      : border 1px #FF3B30, 하단 에러 메시지 표시
Disabled   : bg=#F5F5F7, text #C8C8CC
높이       : 56px (기본) / 44px (compact)
```

#### `SearchBar`
```
Variants   : 2
형태       : 전체 너비 pill 형태, 좌측 검색 아이콘
비활성     : bg=#F5F5F7, placeholder
활성       : bg=#FFFFFF, border, 우측 X 버튼
```

#### `FilterSorting`
```
Variants   : 2
구성       : 좌측 필터 결과 수 텍스트 + 우측 정렬/필터 버튼 2개
예시       : "전체 45개" (좌) / "인기순 ▾" + "필터 ≡" (우)
높이       : 44px
```

#### `Chip` / `ChipImage`
```
Variants   : 각 9 (9가지 콘텐츠 타입)
선택됨     : bg=#421ED8, text=#FFFFFF, radius/pill
비선택     : bg=#F5F5F7, text=#3A3A3C, border 1px #EEEEF0
크기       : height 32–36px, 좌우 패딩 12–16px
사용처     : 리스트 필터, 카테고리 선택, 기간 필터
```

#### `Divider`
```
Variants   : 2 (Horizontal / Vertical)
H Divider  : height 1px, color #EEEEF0, full-width
V Divider  : width 1px, color #EEEEF0, height 부모에 맞춤
사용처     : 섹션 구분, 리스트 아이템 간 구분
```

#### `ListText`
```
구성       : 좌측(title + subtitle + date) + 우측(value)
title      : 15px / 500 / #05001A
subtitle   : 13px / 400 / #868686  (구분자 · 로 연결)
date       : 13px / 400 / #868686
value(+)   : 15px / 600 / #421ED8  (ex: +500P, +1,000원)
value(-)   : 15px / 600 / #FF3B30  (ex: -700원)
높이       : 72px (기본)
```

#### `InfoTextList`
```
구성       : 좌측 항목명 + 우측 값 (key-value 테이블)
항목명     : 13px / 400 / #868686
값         : 13px / 500 / #05001A
강조 행    : 15px / 700 / #05001A (최종 금액 등)
강조 값    : 15px / 700 / #421ED8 (최종 결제 금액)
취소값     : 값에 line-through + #C8C8CC
```

#### `Callout`
```
구성       : 아이콘(선택) + 텍스트 + CTA 버튼(선택)
배경       : #E8E4FF (primary-light) — 정보성
배경       : #FFF9C4 — 경고성
배경       : #ECFDF5 — 성공/완료성
border-left: 4px solid #421ED8
radius     : 12px
padding    : 14px 16px
```

#### `ListSelected`
```
Variants   : 2 (단순 / 우측 아이템 포함)
구성       : 좌측 텍스트(제목+서브) + 우측 라디오/체크/화살표
사용처     : 바텀시트 내 옵션 선택 (회선, 배송방법 등)
```

---

### 2.4 Compound → Organism (Layer 3)

#### `StatusBar`
```
높이  : 44px
내용  : 시간(좌) + wifi/배터리(우) — iOS 표준 StatusBar
색상  : 화면 배경과 동일 (라이트: dark 아이콘)
```

#### `BottomNavigation`
```
Variants   : 3 (탭 수에 따라)
현재 앱    : 홈 / 검색 / 쇼핑 (3탭)
높이       : 56px + safe area
활성 탭    : 아이콘 #421ED8 + 텍스트 #421ED8
비활성     : 아이콘 #868686 + 텍스트 #868686
사용 규칙  : 메인 탭 화면(메인_관리, 메인_검색, 메인_쇼핑)에만 포함
            서브 페이지, 완료 페이지, 오버레이에서 절대 사용 안 함
```

#### `TitleSection`
```
Variants   : 2 (링크 있음 / 없음)
구성       : 섹션 제목(좌, 18–20px/600) + 더보기 링크(우, 선택적)
패딩       : 상 24px, 하 12px
더보기 텍스트: "전체 보기" 또는 "더보기" + 우측 화살표
```

#### `TitleMain`
```
Variants   : 2
구성       : 대형 제목(좌, 22–24px/700) + 서브텍스트(하)
사용처     : 섹션 최상단 타이틀 (예: "T 단말기", "요금제 추천")
```

#### `CardSection`
```
Variants   : 3
구성       : TitleSection + 콘텐츠 카드 또는 리스트
외형       : bg=#FFFFFF, radius/20, border 1px #EEEEF0, padding 16px
shadow     : elevation/card
```

#### `ThumbnailItem`
```
Variants   : 5
구성       : 썸네일 이미지(상) + 상품명(중) + 가격(하) + CTA(선택)
크기       : 2컬럼 배치 시 (393-32-12)/2 ≈ 174px 너비
radius     : 20px
이미지 비율: 1:1 또는 4:3
가격 표기  : 원가 취소선(13px/#C8C8CC) + 할인가(15px/700/#421ED8)
```

#### `AppBar` (Compound용)
> Section 2.3 참조. Compound Organism이지만 동일 컴포넌트.

#### `Bottomsheet`
```
Variants   : 2 (콘텐츠 타입에 따라)
딤 배경    : rgba(0, 0, 0, 0.5), 탭 시 닫힘
패널       : bg=#FFFFFF, 상단 radius 24px, 하단 0
핸들 바    : width 32px, height 4px, bg=#C8C8CC, 상단 8px 여백
타이틀     : 17px / 600 + X 아이콘 (우측)
패딩       : 좌우 20px, 내용 상단 8px
CTA 영역   : 패널 하단 고정, 상단 1px #EEEEF0 구분, padding 16px
```

#### `Popup`
```
Variants   : 4
딤 배경    : rgba(0, 0, 0, 0.5)
카드       : bg=#FFFFFF, radius 32px, 좌우 margin 24px, padding 24px
타이틀     : 18–20px / 700
본문       : 14px / 400 / #868686, line-height 1.6
버튼 영역  : margin-top 24px
```

#### `CompletePage`
```
Variants   : 3 (개통/요금제변경/해지 타입)
전체 배경  : linear-gradient(180deg, #05001A 0%, #1A0F4A 100%)
텍스트     : #FFFFFF (역색상)
구성       : X버튼(우상단) + 완료 메시지(H1) + 부제(소형 회색) + 정보 요약
```

#### `Footer`
```
Variants   : 2
구성       : 법적 고지, 회사 정보, 링크 목록
배경       : #F5F5F7
텍스트     : 11px / 400 / #868686
사용처     : 상세 페이지 최하단 (상세_구독상품, 상세_단말기 등)
```

#### `AccordionProductInfo` / `AccordionNoticeInfo` / `AccordionPriceInfo`
```
닫힘 상태  : 제목 + 우측 ∨ 아이콘
열림 상태  : 제목 + 우측 ∧ 아이콘 + 내용 펼쳐짐
구분선     : Divider H로 항목 분리
ProductInfo: 상품 스펙, 혜택 정보 (상세_상품 페이지)
NoticeInfo : FAQ Q&A 형식 (이용안내 페이지)
PriceInfo  : 가격 구성 상세 (결제 페이지)
```

#### `CarouselProduct`
```
구성       : TitleSection + 수평 스크롤 카드 목록
카드 크기  : 약 160–180px 너비
스크롤     : 좌우 스크롤, 좌측 첫 카드는 16px padding 시작
사용처     : 관련 상품 추천, 완료 페이지 크로스셀
```

#### `PageStack`
```
Variants   : 2
형태       : 카드 겹쳐 쌓인 형태 (Stack 형식)
사용처     : 구독 상품 목록 표시
```

---

### 2.5 Utility (Layer 4 — 디자이너 전용)

```
Spacing        : 8 variants (Size=2/4/8/12/16/20/24/28px)
               → 실제 화면 배포 시 opacity=0 또는 미포함
TextFieldDefault/Focused/Typing/Typed/Disabled
               → TextField 컴포넌트의 상태 단독 참조용 프레임
```

---

## 3. Page Templates

> 각 템플릿은 **컴포넌트 스택 순서** + **크기/여백** + **조합 규칙**을 정의합니다.

---

### 3.1 메인 (Main Tab)

**화면 목록**: 메인_관리_세그먼트1 (393×1392), 메인_관리_세그먼트2 (393×1470), 메인_검색 (393×852), 메인_쇼핑 (393×3918)

#### 레이아웃 스택 (관리 탭)
```
┌─────────────────────────────┐
│ StatusBar          (44px)   │ ← 고정
├─────────────────────────────┤
│ AppBar [홈 전용]    (56px)   │ ← T로고+스캔/장바구니/메뉴, 고정
├─────────────────────────────┤
│ UnderlineTab                │ ← 관리·쇼핑·검색, 고정
│ (관리 | 쇼핑 | 검색)  (44px) │
├─────────────────────────────┤
│                             │
│  [스크롤 영역]              │
│                             │
│  Callout Banner             │ ← AI 추천 요금제 등 개인화 메시지
│  ─────────────────          │
│  CardSection × N            │ ← 각 정보 카드 (결합가족, 잔여량 등)
│  ─────────────────          │
│  ActionButton Row (2열)     │ ← 빠른 실행 버튼 2개
│  ─────────────────          │
│  CardSection × N            │
│  ─────────────────          │
│  Barcode Area               │ ← T멤버십 바코드 (full-width 카드)
│  ─────────────────          │
│  Text Link "MY 현황"        │ ← 우측 정렬 텍스트 링크
│                             │
├─────────────────────────────┤
│ BottomNavigation   (56px)   │ ← 고정
└─────────────────────────────┘
```

#### 컴포넌트 조합 규칙
| 위치 | 컴포넌트 | Variant | 규칙 |
|------|---------|---------|------|
| 최상단 | StatusBar | 기본 | 항상 포함 |
| 헤더 | AppBar | 홈 전용 | T로고 variant만 사용 |
| 탭 | UnderlineTab | 3탭 | 관리/쇼핑/검색 고정 순서 |
| 정보카드 | CardSection | 3v | 각 카드 수직 나열, 간격 12px |
| 빠른실행 | ActionButton | 2열 그리드 | 항목 2–4개, 한 행에 2–4개 |
| 바코드 | 직접 제작 | - | full-width, bg=#FFFFFF, radius/16 |
| 하단 | BottomNavigation | 3탭 | 홈 탭 active |

#### 쇼핑 탭 특이사항
```
구조: AppBar(고정) → [스크롤]
  → Callout (최상단 프로모션 배너, full-width)
  → TitleSection + CarouselProduct × N  (상품 카테고리 반복)
  → TitleSection + ThumbnailItem 2열 그리드 × N
  → TitleSection + ListProductHorizontal × N
  → Footer
  → BottomNavigation(고정)

카테고리 반복 패턴 (1회 = 1섹션):
  TitleSection (제목 + 더보기) → 해당 상품 컴포넌트 → Spacing 28px
```

---

### 3.2 리스트_카드 (Card List)

**화면 목록**: 리스트_구독상품 (2열 그리드) · 리스트_단말기 (1열) · 리스트_요금제 (1열 텍스트) · 리스트_혜택 (2열) · 리스트_부가서비스 (1열) · 리스트_인터넷 (1열)

#### 레이아웃 스택
```
┌─────────────────────────────┐
│ StatusBar          (44px)   │
├─────────────────────────────┤
│ AppBar [서브 기본]  (56px)   │ ← ← 뒤로 + 타이틀 + 우측 1–2 아이콘
├─────────────────────────────┤
│ Filter/Chip Row    (44px)   │ ← 횡스크롤 Chip 필터 (선택적)
│ 또는 FilterSorting (44px)   │
├─────────────────────────────┤
│ 결과 수 + 정렬     (44px)   │ ← "전체 N개" + 정렬 드롭다운 (선택적)
├─────────────────────────────┤
│                             │
│  [스크롤 영역]              │
│  padding: 0 16px            │
│                             │
│  ┌──────┐  ┌──────┐         │ ← 2열 그리드 (구독/혜택)
│  │Card  │  │Card  │         │   gap: 12px
│  └──────┘  └──────┘         │
│  ── 또는 ──                 │
│  ┌──────────────────┐       │ ← 1열 리스트 (요금제/단말기)
│  │ListItem          │       │
│  └──────────────────┘       │
│  Divider                    │
│  ┌──────────────────┐       │
│  │ListItem          │       │
│  └──────────────────┘       │
│                             │
└─────────────────────────────┘
```

#### 레이아웃 선택 기준
| 콘텐츠 유형 | 레이아웃 | 이유 |
|------------|---------|------|
| 구독상품, 혜택 | 2열 그리드 | 썸네일 이미지 중심, 시각적 탐색 |
| 요금제, 부가서비스 | 1열 리스트 | 텍스트 정보량 많음, 비교 필요 |
| 단말기 | 1열 리스트 | 가격+스펙 텍스트 필수 |
| 인터넷 상품 | 1열 카드 | 상품 수 적음, 정보 상세 |

#### 요금제 리스트 아이템 구조
```
┌─────────────────────────────────────────┐
│ [카테고리 소제목]  13px/400/#868686      │ ← ex: "유튜브 프리미엄 앱쿱"
│                                          │
│ XXX,XXX원/월      22px/700/#05001A       │ ← 핵심 가격
│ 선택약정 할인 시 XX,XXX원  13px/#868686  │ ← 서브가격
│                                          │
│ [chip1] [chip2]                          │ ← 혜택 칩 (2–4개)
│ ──────────────────────────────────────── │ ← Divider
└─────────────────────────────────────────┘
아이템 패딩: 16px 0
```

---

### 3.3 리스트_텍스트 (Text List)

**화면 목록**: 이용내역 · T플러스포인트 내역 · 할인내역 · 이용안내 · 공지사항

#### 레이아웃 스택
```
┌─────────────────────────────┐
│ StatusBar          (44px)   │
├─────────────────────────────┤
│ AppBar [서브 기본]  (56px)   │
├─────────────────────────────┤
│ UnderlineTab        (44px)  │ ← 카테고리 분류 (3–5개 탭)
├─────────────────────────────┤
│ Summary Header      (72px)  │ ← 총합 요약 (선택적, bg=#F5F5F7)
│  예: "990P 사용가능 포인트" │
├─────────────────────────────┤
│ 기간 필터 Chip      (44px)  │ ← "전체 / 적립 / 사용" 또는 "최근 3개월 ▾"
├─────────────────────────────┤
│  [스크롤 영역]              │
│  padding: 0 16px            │
│                             │
│  날짜 그룹 헤더             │ ← "2026.01" — 13px/600/#868686, bg=#F5F5F7
│  ──────────────────         │
│  ListText × N               │ ← 아이템 반복
│  ──────────────────         │
│  ListText × N               │
│                             │
└─────────────────────────────┘
```

#### 날짜 그룹 헤더 규칙
```
형식    : YYYY.MM  (월 단위 그룹)
폰트    : 13px / 600 / #868686
배경    : #F5F5F7 (full-width, 좌우 패딩 없이 화면 전체)
높이    : 36px
```

#### ListText 아이템 규칙
```
좌측 상단  : 거래명    — 15px / 500 / #05001A
좌측 중간  : 거래 유형 — 13px / 400 / #868686
좌측 하단  : 날짜     — 13px / 400 / #868686 (구분: "|" 기호)
우측       : 금액/값  — 15px / 600
           양수(적립): #421ED8  (ex: +500P, +1,000원)
           음수(차감): #FF3B30  (ex: -700원, -1,000P)
높이       : 72px (고정)
구분선     : 하단 Divider H
```

#### FAQ/이용안내 아코디언
```
Q 접두사 : "Q. " 텍스트 + 질문 (15px/500/#05001A)
닫힘     : 제목 + 우측 ∨
열림     : 제목 + 우측 ∧ + 본문 (14px/400/#3A3A3C, 좌측 16px 들여쓰기)
배경     : bg=#FFFFFF
```

---

### 3.4 상세_상품 (Product Detail)

**화면 목록**: 상세_혜택브랜드 (3226px) · 상세_구독상품 (4604px) · 상세_기프티콘 (1867px) · 상세_단말기 (3583px)

#### 레이아웃 스택
```
┌─────────────────────────────┐
│ StatusBar          (44px)   │ ← 투명 overlay
├─────────────────────────────┤
│ AppBar [투명]       (56px)  │ ← bg=transparent, 아이콘만 표시
├─────────────────────────────┤
│  ┌───────────────────────┐  │
│  │   Hero 이미지 영역    │  │ ← full-width, 200–360px 높이
│  │  (제품 이미지 또는    │  │   StatusBar/AppBar와 겹침(overlap)
│  │   브랜드 컬러 배경)   │  │
│  └───────────────────────┘  │
│  [스크롤 영역] padding 0 16px│
│                             │
│  상품명 + 배지 + 별점        │ ← 22px/700 + .Badge
│  ─────────────────          │
│  가격 정보                  │ ← 원가(취소선) + 할인가(파란) + 월할부
│  ─────────────────          │
│  TitleSection + 주요 혜택   │
│  ─────────────────          │
│  AccordionProductInfo × N   │ ← 상품 상세, 이용 안내 등
│  ─────────────────          │
│  TitleSection + CarouselProduct│ ← 관련 상품 추천 (필수)
│  ─────────────────          │
│  Footer                     │
│                             │
├─────────────────────────────┤
│ Sticky CTA 영역    (88px)   │ ← 하단 고정
│  [단일] 바로 구매하기       │
│  [이중] 닫기  /  구매하기   │
└─────────────────────────────┘
```

#### Sticky CTA 영역 규칙
```
배경     : #FFFFFF
상단선   : 1px solid #EEEEF0
padding  : 12px 16px + safe area
단일 버튼: .Button Primary XL, full-width, height 56px
이중 버튼: 좌측 .Button Secondary (1/3 너비) + 우측 .Button Primary (2/3 너비)
          또는 좌우 각 50% (닫기+구매 등가 선택지)
버튼 형태: 항상 pill (radius/pill)
```

#### 가격 표기 패턴
```
원가     : 13px / 400 / #C8C8CC / text-decoration: line-through
할인가   : 20–24px / 700 / #421ED8
할인율   : 20px / 700 / #FF3B30 (할인율 %)
월 할부  : 13px / 400 / #868686  "월 XX,XXX원 (12개월)"
```

---

### 3.5 상세_정보입력 (Form/Input)

**화면 목록**: 인풋 (1168px) · 정보체크 (2431px) · 장바구니 (1985px) · 결제 (3468px)

#### 플로우 순서
```
인풋 → 정보체크 → 장바구니 → 결제 → [완료 페이지]
```

#### 레이아웃 스택 (공통)
```
┌─────────────────────────────┐
│ StatusBar          (44px)   │
├─────────────────────────────┤
│ AppBar [서브 기본]  (56px)   │ ← 타이틀: 현재 단계명 (ex: "결제하기")
├─────────────────────────────┤
│  [스크롤 영역] padding 0 16px│
│                             │
│  ─── 인풋 페이지 ───         │
│  TitleSection (페이지 안내)  │
│  TextField × N              │ ← 각 입력 필드
│  .CheckboxText × N          │ ← 약관 동의
│                             │
│  ─── 정보체크 페이지 ───     │
│  InfoTextList × 섹션         │ ← 입력 정보 확인 표
│  .RadioText × N             │ ← 추가 선택 항목
│                             │
│  ─── 장바구니 페이지 ───     │
│  상품 카드 × N               │ ← 선택 상품 목록
│  AccordionPriceInfo         │ ← 가격 상세 accordion
│  InfoTextList (가격 합계)   │ ← 최종 금액
│                             │
│  ─── 결제 페이지 ───         │
│  주문 요약 카드              │
│  결제 수단 (ListSelected)    │
│  InfoTextList (가격 상세)   │
│  .CheckboxText (약관 전체)  │
│  AccordionPriceInfo × N     │
│                             │
├─────────────────────────────┤
│ Sticky CTA         (88px)   │ ← 단계별 텍스트 변경
│  인풋   → "다음"            │
│  정보체크 → "확인"          │
│  장바구니 → "주문하기"      │
│  결제   → "약관에 동의하고 결제하기"│
└─────────────────────────────┘
```

#### TextField 그룹 규칙
```
그룹 제목    : 15px / 600 / #05001A, 상단 margin 24px
필드 간 간격 : 12px (Spacing/12)
필드 + 버튼  : TextField + 보조 버튼(.Button Secondary) 수평 배치
              필드 너비: flex-grow, 버튼 너비: 80–100px 고정
에러 상태   : TextField Error variant + 하단 에러 텍스트 (13px/400/#FF3B30)
```

#### 결제 금액 요약 규칙
```
InfoTextList 구성:
  일반 행  : 항목명(#868686) — 금액(#05001A)
  할인 행  : 항목명(#868686) — 금액(#FF3B30, -표시)
  합계 행  : 최종 결제 금액(#05001A/700) — 금액(#421ED8/700)
  구분선   : Divider H (합계 행 상단)
```

---

### 3.6 완료 (Completion)

**화면 목록**: 완료_개통 (852px) · 완료_요금제 변경 (852px) · 완료_해지 (852px) · 완료_결제 (2051px)

#### 레이아웃 스택
```
┌─────────────────────────────┐
│ StatusBar [다크 텍스트]      │ ← 어두운 배경이므로 텍스트 반전
├─────────────────────────────┤
│ X 닫기 버튼 (우상단)         │ ← AppBar 없음, 독립 아이콘
│                             │   크기: 24px, 색상: #FFFFFF
│  처리 번호 / 날짜 텍스트     │ ← 12px/400/#FFFFFF55 (반투명)
│                             │
│  완료 제목                  │ ← 24–28px / 700 / #FFFFFF
│  (예: "개통이 완료되었어요") │   letter-spacing -0.04em
│  서브텍스트                 │ ← 14px/400/#FFFFFF88
│                             │
│  ─────────────────          │
│  InfoTextList (결과 요약)   │ ← bg=rgba(255,255,255,0.08)
│  항목 텍스트 : #FFFFFF88    │   (반투명 카드 안에 배치)
│  값 텍스트   : #FFFFFF      │
│  ─────────────────          │
│  (완료_결제만) CarouselProduct│ ← 하단 크로스셀
│  ─────────────────          │
│  (완료_결제만) 선물 받기 안내│ ← 긴 텍스트 블록
│                             │
├─────────────────────────────┤
│ 하단 2-버튼        (88px)   │ ← 고정
│  좌: Secondary 버튼         │   텍스트: 추가 액션 (← 로 돌아가기)
│  우: Primary 버튼           │   텍스트: "확인" 또는 "홈으로"
└─────────────────────────────┘
전체 배경: linear-gradient(180deg, #05001A 0%, #1A0F4A 100%)
```

#### 완료 타입별 구성 차이
| 타입 | 정보 내용 | 버튼(좌) | 버튼(우) |
|------|---------|---------|---------|
| 개통 | 회선명, 요금제, 납부일 | 데이터 돌리기 | 확인 |
| 요금제 변경 | 변경 요금제명, 금액, 납부일 | 요금제 보기 | 확인 |
| 해지 | 해지 서비스, 종료일 | 혜택 다시 받기 | 확인 |
| 결제 | 영수증 전체 항목 | 다른 구독 알아보기 | 확인 |

---

### 3.7 바텀시트 (Bottom Sheet)

**Variants**: 선물 데이터 선택 · 회선 변경 · T deal 약관 동의 · 브랜드/필터 · SDP · 추천 상품

#### 레이아웃 스택
```
┌─────────────────────────────┐  ←── 전체 화면 (852px)
│                             │
│   딤 배경 영역              │  ← rgba(0,0,0,0.5), 탭시 dismiss
│   (화면 전체 커버)          │      높이: 화면 - 시트 높이
│                             │
├─────────────────────────────┤
│  ●●●  핸들 바    (12px)     │  ← width 32px, height 4px, #C8C8CC
│                             │     margin: 8px auto
│  타이틀          (52px)     │  ← 17px/600 + X 버튼 (우측)
│  ─────────────────          │     height 52px, padding 0 20px
│  (선택) UnderlineTab(44px)  │  ← 필터 시트에만 포함
│  ─────────────────          │
│  콘텐츠 영역                │  ← padding 0 20px
│                             │
│  ─── 선택형 ───             │
│  .RadioText 또는            │
│  ListSelected × N           │
│                             │
│  ─── 정보형 ───             │
│  InfoTextList               │
│  + 상품 요약 카드           │
│                             │
│  ─── 상품 추천형 ───        │
│  CarouselProduct            │
│  + 텍스트 안내              │
│                             │
├─────────────────────────────┤
│ CTA 영역         (88px)     │  ← 하단 고정, 상단 1px #EEEEF0
│  단일: Primary full-width   │
│  이중: 닫기(Secondary) + 확인(Primary) 각 50%
└─────────────────────────────┘
시트 배경 : #FFFFFF
시트 radius: 24px 24px 0 0
```

#### 바텀시트 타입별 콘텐츠 규칙
| 타입 | 콘텐츠 | 탭 포함 | CTA |
|------|-------|---------|-----|
| 단순 선택 | .RadioText 리스트 | ✗ | Primary 1개 |
| 다항목 필터 | UnderlineTab + .RadioText | ✓ | Primary 1개 ("N개 상품 보기") |
| 약관 동의 | .CheckboxText 리스트 | ✗ | Primary 1개 ("동의하기") |
| 상품 요약 | 상품 정보 + 가격 | ✗ | Secondary + Primary |
| 상품 추천 | 텍스트 + CarouselProduct | ✗ | 없음 (닫기 X만) |

---

### 3.8 팝업 (Popup / Modal)

**Variants**: 개인정보 동의 · 상담 예약 완료 · 결제 실패

#### 레이아웃 스택
```
┌─────────────────────────────┐  ← 전체 화면 852px
│                             │
│   딤 배경               │  ← rgba(0,0,0,0.5)
│   ┌─────────────────────┐   │
│   │  ╭─────────────────╮│   │
│   │  │ 타이틀  18-20px/700││  ← 좌측 정렬
│   │  │                 ││
│   │  │ 본문 텍스트      ││  ← 14px/400/#868686, line-height 1.6
│   │  │ (2–4줄 권장)     ││
│   │  │                 ││
│   │  │ [선택] 체크박스  ││  ← 동의형만
│   │  │                 ││
│   │  │ [Secondary][Primary]  ← .PopupActionButton 사용
│   │  ╰─────────────────╯│
│   └─────────────────────┘
│                             │
└─────────────────────────────┘
팝업 카드: bg=#FFFFFF, radius 32px
팝업 너비: 화면 - 48px 마진 (= 345px)
팝업 패딩: 24px
```

#### 팝업 타입별 구성
| 타입 | 본문 형식 | 체크박스 | 버튼 |
|------|---------|---------|------|
| 동의형 | 짧은 설명 + 링크 | ✓ (필수/선택 구분) | 다음에 + 동의하고 시작 |
| 정보형 | InfoTextList | ✗ | 닫기 + 추가 액션 |
| 에러형 | 단순 에러 메시지 | ✗ | 확인 1개 (full-width) |

---

## 4. Interaction Patterns

### 4.1 Navigation Flow
```
메인 탭 ─┬─ 리스트 화면 ─── 상세 화면 ─┬─ 정보입력 ─── 완료
         │                            └─ 바텀시트 (오버레이)
         ├─ 검색 화면
         └─ 쇼핑 탭

팝업은 모든 화면에서 트리거 가능 (오버레이)
바텀시트는 상세/리스트/정보입력에서 트리거
```

### 4.2 뒤로가기 규칙
```
서브 페이지   : AppBar 좌측 ← 아이콘 (gestural back 지원)
완료 페이지   : X 아이콘 (단, 완료 후 스택 전체 pop)
팝업          : X 아이콘 또는 딤 배경 탭 또는 "닫기" 버튼
바텀시트      : X 아이콘 또는 딤 배경 탭 또는 아래로 스와이프
```

### 4.3 상태 전이
```
리스트 아이템 탭 → 상세 페이지 push
필터 Chip 선택  → 즉시 리스트 갱신 (로딩 인디케이터)
CTA 버튼 탭     → 바텀시트 또는 다음 페이지 push
완료 "확인"     → 스택 초기화 후 메인으로 pop to root
```

---

## 5. Content Patterns

### 5.1 비어있는 상태 (Empty State)
```
아이콘   : 관련 아이콘 or 일러스트 (64px)
제목     : "아직 내역이 없어요"  18px/600/#05001A
서브     : "XX를 이용하면 여기에 나타나요"  14px/400/#868686
CTA      : .Button Primary (선택적)  ex: "요금제 알아보기"
레이아웃 : 수직 중앙 정렬, 패딩 40px
```

### 5.2 로딩 상태
```
스켈레톤 : 회색(#EEEEF0) 블록으로 실제 레이아웃 미러링
           bg=#EEEEF0, radius 동일, animated shimmer
전체 로딩 : 중앙 spinner (24px, #421ED8)
```

### 5.3 가격 표기 일관성
```
숫자 단위  : 원(₩) — 한국 원화
천 단위    : 쉼표(,) 구분  ex: 999,999원
월정액     : XX,XXX원/월
연단위     : XX,XXX원/년 (월) 형식으로 병기 가능
할인전 원가: line-through + #C8C8CC
무료 혜택  : 파란색 텍스트 "무료" 또는 chip
```

### 5.4 날짜/기간 표기
```
기본    : YYYY.MM.DD
월 그룹 : YYYY.MM
시간    : HH:MM (24시간제)
기간    : YYYY.MM.DD ~ YYYY.MM.DD
D-Day   : "D-3" 형식 (마감 임박 배지)
```

### 5.5 버튼 레이블 규칙
```
Primary CTA  : 동사형  ex: "구매하기", "신청하기", "다음", "확인"
Secondary CTA: 명사형  ex: "닫기", "취소", "더보기"
링크 텍스트  : 명사+보기  ex: "전체 보기", "요금제 보기"
금지         : "클릭", "여기", "이동" 단독 사용 금지
```

---

## 6. Anti-patterns (금지 사항)

### 레이아웃 금지
```
✗  서브 페이지에 BottomNavigation 포함
✗  완료 페이지에 AppBar 뒤로가기(←) 포함
✗  바텀시트 내부에 또 다른 바텀시트 중첩
✗  팝업 내부에 스크롤 영역 (콘텐츠가 길면 바텀시트로 변경)
✗  메인 탭 AppBar에 뒤로가기(←) 포함
✗  CTA 버튼을 고정(sticky)하지 않고 콘텐츠 중간에 배치
```

### 컬러 금지
```
✗  일반 화면에 어두운 배경 (#05001A계열) 사용 (완료 페이지 예외)
✗  Primary #421ED8을 장식 목적으로 남용 (CTA·액티브·양수값에만)
✗  체크박스/라디오 선택 상태에 파란색이 아닌 다른 색 사용
```

### 컴포넌트 금지
```
✗  .Ico 대신 직접 SVG 삽입
✗  일반 .Button 대신 팝업에 .PopupActionButton 혼용
✗  Atom 컴포넌트를 화면에 직접 배치 (반드시 Organism을 통해 사용)
✗  Utility 컴포넌트(Spacing, TextFieldDefault 등)를 실제 화면에 포함
✗  Typography 스케일 외 임의 크기 사용
```

### 콘텐츠 금지
```
✗  버튼 레이블에 "클릭해주세요", "여기를 눌러" 사용
✗  가격 표기 시 천 단위 구분자 누락
✗  완료 메시지에 "완료되었습니다" (딱딱한 표현) — "OO되었어요" 사용
```

---

## 7. New Screen Checklist

### Phase 1 — 화면 유형 결정
```
[ ] 이 화면의 섹션 유형은? (메인/리스트/상세/폼/완료/오버레이)
[ ] 탭 화면인가? → BottomNavigation 포함 여부 결정
[ ] 스크롤 높이가 852px 초과하는가? → sticky 요소 확정
[ ] 오버레이인가? → 바텀시트 or 팝업 결정 기준 확인
```

### Phase 2 — 구조 설계
```
[ ] StatusBar: 항상 포함 (44px)
[ ] AppBar: 올바른 variant 선택 (홈용/서브용/투명)
[ ] 콘텐츠 영역 좌우 패딩: 16px 기본
[ ] Sticky 영역: CTA 버튼 하단 고정 (88px = 56px button + 16px padding ×2)
[ ] safe area: 하단 노치 디바이스 고려
```

### Phase 3 — 컴포넌트 매핑
```
[ ] 각 영역에 맞는 컴포넌트 선택 (Catalog 참조)
[ ] Atom은 직접 사용 안 하고 Organism으로 감싸기
[ ] 텍스트: Typography 스케일 준수
[ ] 색상: Design Token 변수 사용 (직접 hex 지정 금지)
```

### Phase 4 — 상태 정의
```
[ ] 기본 상태 (콘텐츠 있음)
[ ] 로딩 상태 (skeleton UI)
[ ] 비어있는 상태 (empty state)
[ ] 에러 상태 (에러 메시지 + 재시도 CTA)
[ ] TextField 사용 시: 5가지 상태 모두 정의
```

### Phase 5 — 검토
```
[ ] 배경색: 일반 #F5F5F7, 카드 #FFFFFF, 완료만 navy
[ ] 금액: 취소선+할인가, 색상 규칙(+파란/−빨간) 적용
[ ] 버튼 레이블: 동사형 (Primary) / 명사형 (Secondary)
[ ] 날짜: YYYY.MM.DD 포맷 통일
[ ] Spacing 컴포넌트: opacity=0 확인
[ ] 아이콘: .Ico/교체용 variant 사용 확인
```

---

## 8. Figma Node ID Reference

```
File Key: k7R6CRvP2MxvOTIdi61QmX

# Foundation
DSG_CLR (Color)        : 1:22491  ← 진행중
DSG_TYP (Typography)   : 1:23315  ← 진행중
DSG_RAD (Radius)       : 1:20346
DSG_ICO (Iconography)  : 1:20902
DSG_SPC (Spacing)      : 1:21972

# Component Library
Component (전체 섹션)   : 1:4026
Atoms 그룹             : 1:4426
Single→Organism 그룹   : 1:4428
Compound→Organism 그룹 : 1:4430
Utility 그룹           : 1:4424

# Screen Sections
메인 섹션              : 1:3373
리스트_카드 섹션        : 1:3165
리스트_텍스트 섹션      : 1:3254
상세_상품 섹션          : 1:3571
상세_정보입력 섹션      : 1:2839
완료 섹션              : 1:3909
바텀시트 섹션          : 1:3466
팝업 섹션              : 1:3552

# 개별 화면 프레임
메인_관리_세그먼트1     : 1:3434  (393×1392)
메인_관리_세그먼트2     : 1:3451  (393×1470)
메인_검색              : 1:3374  (393×852)
메인_쇼핑              : 1:3396  (393×3918)
리스트_구독상품         : 1:3199
리스트_단말기           : 1:3187
리스트_요금제           : 1:3166  (393×1749)
리스트_혜택             : 1:3211
리스트_부가서비스        : 1:3224
리스트_인터넷           : 1:3239
리스트_이용내역         : 1:3255  (393×852)
리스트_T플러스포인트    : 1:3277
리스트_할인내역         : 1:3299
리스트_이용안내         : 1:3342
리스트_공지사항         : 1:3320
상세_혜택브랜드         : 1:3764  (393×3226)
상세_구독상품           : 1:3572  (393×4604)
상세_기프티콘           : 1:3690  (393×1867)
상세_단말기             : 1:3840  (393×3583)
상세_정보입력_인풋      : 1:2840  (393×1168)
상세_정보체크           : 1:2880  (393×2431)
상세_장바구니           : 1:3097  (393×1985)
상세_결제              : 1:2954  (393×3468)
완료_개통              : 1:3910  (393×852)
완료_요금제변경         : 1:3928  (393×852)
완료_해지              : 1:4014  (393×852)
완료_결제              : 1:3950  (393×2051)
바텀시트 1~6           : 1:3467, 1:3480, 1:3489, 1:3502, 1:3516, 1:3530
팝업 1~3              : 1:3553, 1:3558, 1:3566
```

---

*Last updated: 2026-05-15 | Source: Figma k7R6CRvP2MxvOTIdi61QmX*
