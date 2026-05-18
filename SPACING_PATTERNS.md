# SKT App — Spacing Patterns

> **목적**: 컴포넌트 내부 간격 + 화면 레이아웃 간격의 정확한 수치 정의서.  
> **측정 방법**: Figma Plugin API (paddingTop/Bottom/Left/Right, itemSpacing 직접 추출)  
> **기준 뷰포트**: 393×852px

---

## Table of Contents

1. [Spacing Token Scale](#1-spacing-token-scale)
2. [Component Spacing Specs](#2-component-spacing-specs)
   - 2.1 [전역 고정 크롬](#21-전역-고정-크롬-statusbar--appbar--bottomnavigation)
   - 2.2 [버튼 (.Button)](#22-버튼-button)
   - 2.3 [입력 필드 (TextField)](#23-입력-필드-textfield)
   - 2.4 [탭 (UnderlineTab)](#24-탭-underlinetab)
   - 2.5 [칩 (Chip / .ChipItem)](#25-칩-chip--chipitem)
   - 2.6 [카드 (CardSection)](#26-카드-cardsection)
   - 2.7 [아코디언 (Accordion 3종)](#27-아코디언-accordion-3종)
   - 2.8 [리스트 행 (ListText / InfoTextList)](#28-리스트-행-listtext--infotextlist)
   - 2.9 [바텀시트 (Bottomsheet)](#29-바텀시트-bottomsheet)
   - 2.10 [팝업 버튼 영역 (.PopupActionButton)](#210-팝업-버튼-영역-popupactionbutton)
   - 2.11 [검색바 (SearchBar)](#211-검색바-searchbar)
   - 2.12 [배너 (BannerHorizontalMedium)](#212-배너-bannerhorizontalmedium)
   - 2.13 [필터 정렬 (FilterSorting)](#213-필터-정렬-filtersorting)
   - 2.14 [푸터 (Footer)](#214-푸터-footer)
   - 2.15 [선택 목록 (ListSelected)](#215-선택-목록-listselected)
3. [Screen Layout Spacing](#3-screen-layout-spacing)
   - 3.1 [공통 크롬 구조](#31-공통-크롬-구조)
   - 3.2 [메인 화면](#32-메인-화면)
   - 3.3 [리스트 화면](#33-리스트-화면)
   - 3.4 [상세 화면](#34-상세-화면)
   - 3.5 [폼/입력 화면](#35-폼입력-화면)
   - 3.6 [완료 화면](#36-완료-화면)
   - 3.7 [바텀시트 오버레이](#37-바텀시트-오버레이)
   - 3.8 [팝업 오버레이](#38-팝업-오버레이)
4. [Grid & Column System](#4-grid--column-system)
5. [Spacing Decision Rules](#5-spacing-decision-rules)
6. [Quick Reference Table](#6-quick-reference-table)

---

## 1. Spacing Token Scale

```
Token      Value   Usage
─────────────────────────────────────────────────────
space/2    2px     아이콘 내부 미세 간격, 인디케이터 점 간격
space/4    4px     아이콘↔텍스트 인라인 갭, 탭 내 아이콘-텍스트 갭
space/5    5px     칩 목록 수평 간격 (Chip row gap)
space/6    6px     —
space/8    8px     배지 내부, 칩 내부 아이콘-텍스트, Help Text 간격
space/10   10px    버튼 내 icon-label gap, 바텀시트 Title 내부 gap
space/12   12px    칩(Chip) 좌우 패딩, 버튼(Small) 좌우 패딩
           12px    바텀시트 하단 CTA 상단 패딩, 팝업 버튼 상단 패딩
           12px    BottomNavigation 상단 패딩
space/16   16px    앱바 좌우 패딩, 버튼(Medium) 좌우 패딩
           16px    InfoTextList 상하 패딩, 아코디언 열린 상태 gap
           16px    페이지 콘텐츠 좌우 패딩 (기본)
space/20   20px    AppBar 좌우 패딩, StatusBar 좌우 패딩
           20px    칩 목록 시작 패딩(왼쪽), 바텀시트 Title 좌우 패딩
           20px    화면 콘텐츠 좌우 패딩 (넓은 버전)
space/24   24px    StatusBar 좌우 패딩, 팝업 내부 좌우 패딩
           24px    카드(CardSection) 내부 패딩, 아코디언 내부 패딩
           24px    섹션 타이틀 상단 여백 기준
space/28   28px    CardSection 내부 상하 패딩
space/32   32px    바텀시트 타이틀 좌우 패딩, 버튼(XLarge) 좌우 패딩
           32px    FilterSorting 내부 좌우 패딩, Footer 좌우 패딩
space/36   36px    BottomNavigation 하단 패딩 (safe area 포함)
space/40   40px    StatusBar 상단 패딩 (iOS notch 영역)
```

---

## 2. Component Spacing Specs

> 각 컴포넌트의 **실측값**을 기준으로 정리합니다.  
> 표기 형식: `padding: T R B L` / `gap: N`

---

### 2.1 전역 고정 크롬 (StatusBar / AppBar / BottomNavigation)

#### StatusBar
```
크기      : 393 × 59px
padding   : top 20px, bottom 18px, left 24px, right 24px
내부 gap  : 221px (좌우 그룹 사이 flex space)
역할      : 항상 화면 최상단 고정. 높이 = 59px (notch 포함)
```

#### AppBar
```
크기      : 393 × 48px
padding   : top 10px, bottom 10px, left 20px, right 20px
내부 구조 : [LeftItem 28px] — [Title 가변폭] — [RightItem 68px]
RightItem : gap 12px (아이콘 사이 간격)
Title     : gap 4px (뒤로가기 아이콘 + 텍스트 사이)
합계 높이 : StatusBar(59) + AppBar(48) = 107px 고정 크롬
```

```
AppBar Variant별 RightItem 구성:
  On(아이콘 2개) : RightItem width=68px, gap=12px → 아이콘 28px×2 + gap 12px
  On(아이콘 1개) : RightItem width=28px
  Off           : RightItem 없음, Title이 전체 폭 차지
```

#### BottomNavigation
```
크기      : 393 × 88px
padding   : top 12px, bottom 36px, left 0, right 0
           ※ bottom 36px = safe area indicator 공간 포함
탭 아이템 : 96 × 40px (3탭 균등 분배, 각 탭 padL/R 5px)
아이콘↔레이블 gap : 2px (VERTICAL layout)
탭 간 gap : 12px
총 가시 콘텐츠 높이 : 40px (88 - 12 - 36)
사용 위치 : 메인 탭 화면(홈/검색/쇼핑)에서만
```

---

### 2.2 버튼 (.Button)

> **모든 버튼은 pill 형태 (radius: 9999px)**

```
Size      Height   padT/B   padL/R   icon-label gap
──────────────────────────────────────────────────
Small     28px     6px      12px     10px
Medium    36px     10px     16px     10px
Large     48px     10px     16px     10px
XLarge    56px     0px      32px     10px   ← CTA (full-width용)
```

```
XLarge CTA 버튼 상세:
  height  : 56px
  padL/R  : 32px (버튼이 full-width일 때 시각 여백)
  실제 텍스트 영역 : 393 - 24(양쪽 여백) - 64(padL+R) = 281px
  사용처  : Bottomsheet CTA, 화면 하단 sticky CTA
```

```
버튼 타입별 시각 차이 (크기와 무관):
  Primary   : bg=#421ED8, text=#FFFFFF
  Secondary : bg=#EEEEF0, text=#05001A
  Disabled  : bg=#EEEEF0, text=#C8C8CC (동일 크기, 색상만 변경)
```

---

### 2.3 입력 필드 (TextField)

```
전체 컨테이너 (Label + Input + HelpText):
  layout    : VERTICAL, gap 8px
  padB      : 8px
  총 높이   : ~106px

  ┌──────────────────────────────┐
  │ Label (18px height)          │  padB 0
  ├──────────────────────────────┤  gap 8px
  │ Input Field (48px height)    │  ← 핵심 입력 영역
  ├──────────────────────────────┤  gap 8px
  │ Help Text (16px height)      │
  └──────────────────────────────┘  padB 8px

Input Field 내부:
  height    : 48px
  padding   : top 0, bottom 0, left 16px, right 8px (버튼 있을 때)
  내부 gap  : 8px (아이콘/텍스트/버튼 사이)
  border    : 1px solid #C8C8CC (Default)
              2px solid #421ED8 (Focus/Active)
              1px solid #FF3B30 (Error)
  border-radius : 16px

부속 버튼 (예: "모두 사용"):
  height    : 36px (Medium 버튼)
  padL/R    : 16px
  필드 내 위치 : 우측 정렬, gap 8px
```

```
TextField 여러 개 배치 시:
  필드 간 수직 gap : 12px
  그룹 제목과 첫 필드 간격 : 8px
  그룹 간 수직 여백 : 24px
```

---

### 2.4 탭 (UnderlineTab)

```
크기      : 393 × 60px
layout    : HORIZONTAL, gap 0 (탭이 균등 분배)
padding   : 0

탭 버튼 내부 (각 탭):
  width     : 197px (2탭 기준, N탭 시 393/N)
  height    : 60px
  padT      : 24px  ← 탭 텍스트 위 여백 (하단에 underline 공간)
  padB      : 0
  padL/R    : 12px (첫 탭) / 12px (마지막 탭)
  내부 gap  : 4px (아이콘 + 텍스트)

  텍스트 아래 underline:
    height  : 2px
    color   : #421ED8 (활성) / transparent (비활성)
    position: bottom 0 (탭 하단에 붙음)

텍스트 영역 (Text frame):
  layout    : VERTICAL, gap 12px
  height    : 36px (텍스트 18px + underline 간격)
```

```
다탭(3개 이상) 처리:
  3탭 : 각 131px
  4탭 : 각 98px
  5탭 : 각 78px (최대)
  5탭 초과 : 고정 너비 + 횡스크롤 적용
```

---

### 2.5 칩 (Chip / .ChipItem)

```
.ChipItem 개별 크기:
  height    : 37px
  padT/B    : 10px
  padL/R    : 12px
  내부 gap  : 2px (아이콘 + 텍스트)
  border-radius : 9999px (pill)

활성 칩     : bg=#421ED8, text=#FFFFFF
비활성 칩   : bg=#F5F5F7, text=#3A3A3C, border 1px #EEEEF0

Chip 목록 컨테이너 (가로 스크롤 행):
  layout    : HORIZONTAL, gap 5px
  padT/B    : 10px
  padL      : 20px (시작 여백)
  padR      : 0 (스크롤 끝까지)
  총 높이   : 57px (37 + 10 + 10)
  overflow  : scroll (가로)
```

---

### 2.6 카드 (CardSection)

```
CardSection 외부 컨테이너:
  width     : 369px (화면 393 - 좌우 12px 여백)
  height    : 가변
  padT/B    : 0 / 4px
  padL/R    : 0

내부 Card 프레임:
  padding   : top 28px, bottom 28px, left 28px, right 28px
  내부 gap  : 24px (섹션 내 콘텐츠 간격)
  bg        : #FFFFFF
  border    : 1px solid #EEEEF0
  radius    : 20px
  shadow    : 0 2px 12px rgba(0,0,0,0.06)
```

```
카드 내부 요소 간격 패턴:
  제목 ↔ 서브제목       : 4px
  서브제목 ↔ 콘텐츠     : 12px
  콘텐츠 ↔ 구분선       : 16px
  구분선 ↔ 다음 섹션    : 16px
  마지막 요소 ↔ 카드 하단: 28px (카드 내부 padB)
```

---

### 2.7 아코디언 (Accordion 3종)

#### AccordionProductInfo (상품 상세용)
```
닫힌 상태:
  height    : 88px
  padding   : top 24px, bottom 24px, left 24px, right 24px
  내부 gap  : 10px (Title 내)

열린 상태:
  padding   : top 24px, bottom 24px, left 24px, right 24px
  내부 gap  : 0 (Spacing 컴포넌트로 간격 제어)
  Spacing 사용 패턴: Spacing/16 → Divider → Spacing/16 → 콘텐츠

Title 행:
  layout    : HORIZONTAL
  좌측 텍스트 ↔ 우측 아이콘 gap : 101px (justify space-between 역할)
  아이콘 크기 : 16×16px
```

#### AccordionNoticeInfo (FAQ용)
```
닫힌 상태:
  height    : 61px
  padding   : top 20px, bottom 20px, left 0, right 0
  ※ 좌우 패딩 없음 — 부모 화면이 16px 좌우 패딩 보유

열린 상태:
  padding   : top 20px, bottom 20px, left 0, right 0
  Title ↔ 본문 gap : 16px

Title 행:
  layout    : HORIZONTAL
  좌측 텍스트 ↔ 우측 아이콘 gap : 40px
  아이콘 내부 gap : 4px
```

#### AccordionPriceInfo (결제 금액용)
```
닫힌 상태:
  height    : 69px
  padding   : top 24px, bottom 24px, left 24px, right 24px
  내부 gap  : 16px

열린 상태:
  padding   : top 24px, bottom 24px, left 24px, right 24px
  내부 gap  : 0 (슬롯에 ListText 행 반복)

TitleAccordion 행:
  좌측 가격+텍스트 ↔ 우측 아이콘+텍스트 gap : 126px
```

---

### 2.8 리스트 행 (ListText / InfoTextList)

#### ListText
```
행 높이    : 22px + padB 4px = 26px (한 행)
layout     : HORIZONTAL, gap 16px
             ← 왼쪽 텍스트(flex) / 오른쪽 아이콘/값(고정)

Table=off (기본 탐색 행):
  LeftItem : gap 0 (텍스트만)
  RightItem: 16×16px 아이콘

Table=첫번째 강조 타이틀 (섹션 헤더):
  height   : 25px, gap 16px
  폰트     : 굵게 (17px/700)

Table=두번째 강조 타이틀 (서브 헤더):
  height   : 22px, gap 16px
  폰트     : 중간 (15px/500)
```

#### InfoTextList (key-value 정보 행)
```
전체 컨테이너:
  padding   : top 16px, bottom 16px, left 0, right 0
  내부 gap  : 4px (행 사이 간격)

개별 행 (txt):
  layout    : HORIZONTAL, gap 40px
  height    : 21px
  ← 항목명(좌, 가변) / 값(우, 고정)

서브 행 (txt_sub):
  layout    : HORIZONTAL, gap 8px
  height    : 14px (캡션 텍스트)

합계 행 (강조):
  별도 스타일 적용 (폰트 굵게, 색상 #421ED8)
  Divider H (1px) 위에 추가 (합계 행 상단)
```

---

### 2.9 바텀시트 (Bottomsheet)

```
전체 구조 (ActionButton=on, 기본):
  width     : 393px
  총 높이   : 423px (기본, 콘텐츠에 따라 가변)
  radius    : 24px 24px 0 0 (상단만)

┌──────────────────────────────────────────┐
│ .Handle 영역                   (32px)    │
│   padT: 12px, padB: 0                    │
│   handle bar: 44×3px, bg=#C8C8CC         │
│   중앙 정렬                              │
├──────────────────────────────────────────┤
│ Title 영역                     (68px)    │
│   padding: left 32px, right 32px         │
│   내부 gap: 10px                         │
│   구성: 타이틀 텍스트 + X 아이콘(우)     │
│   .TitleBottomSheet: padB 8px            │
├──────────────────────────────────────────┤
│ 콘텐츠 슬롯 (Con)              (가변)    │
│   padding: 0 (자식이 직접 패딩 정의)     │
│   ← 라디오/체크/리스트 등               │
│   콘텐츠 좌우 패딩: 20px (ActionButton=off) │
│              또는 32px (ActionButton=on)  │
├──────────────────────────────────────────┤
│ ActionButton CTA 영역          (102px)   │
│   padding: top 10px, bottom 36px         │
│   padL/R: 12px                           │
│   내부 gap: 10px                         │
│   버튼 내부: padL/R 32px (XLarge pill)   │
└──────────────────────────────────────────┘
```

```
ActionButton=off (CTA 없는 시트):
  padB      : 34px (safe area)
  Title 좌우: 20px (32px보다 좁음)
  콘텐츠 슬롯: 높이 275px
```

```
바텀시트 콘텐츠 아이템 간격 (시트 내부):
  라디오/체크 항목 간 : 0px gap (각 항목이 자체 상하 padding 12px 보유)
  항목 좌우 패딩      : 20px (시트 콘텐츠 슬롯 내)
  탭(UnderlineTab) 포함 시: 탭 바로 아래 콘텐츠까지 0px gap
```

---

### 2.10 팝업 버튼 영역 (.PopupActionButton)

```
2버튼 구성:
  전체: width 361px, height 60px
  padding : top 12px, bottom 0, left 24px, right 24px
  버튼 간 gap : 8px

  버튼 비율 (전형적):
    Secondary : width ~56px (짧은 레이블용)
    Primary   : width ~249px (긴 레이블용)
    또는 50:50 균등 분배

1버튼 구성:
  전체: width 361px, height 60px
  padding : top 12px, bottom 0, left 24px, right 24px
  버튼 width : 313px (full)
  버튼 height: 48px (Large 버튼)

팝업 카드 전체 패딩:
  padding   : top 24px, bottom 24px, left 24px, right 24px
  button 영역은 카드 내 별도 섹션으로 분리
  margin-top(버튼 위): 24px (본문 ↔ 버튼 영역)
```

---

### 2.11 검색바 (SearchBar)

```
크기      : 353px × 52px (화면 내 인스턴스 기준)
padding   : top 6px, bottom 6px, left 20px, right 6px
내부 gap  : 166px (검색 아이콘 + placeholder 사이 공간)
radius    : 9999px (pill)
bg        : #F5F5F7 (비활성) / #FFFFFF + border (활성)
아이콘    : 20×20px, 좌측 padL 20px 위치
우측 X 버튼 : padR 6px
```

---

### 2.12 배너 (BannerHorizontalMedium)

```
크기      : 369 × 112px (컨테이너)
padding   : padB 4px
내부 gap  : 10px (Banner image + Indicator 사이)

Banner 이미지 영역: 369 × 94px
  내부 텍스트 영역: 219px 너비, layout VERTICAL, gap 4px
  텍스트 위치: 이미지 내부 좌하단 또는 중앙

Indicator 도트:
  height    : 4px
  도트 크기 : 4×4px 원형
  도트 간격 : gap 8px, padL/R 2px
```

---

### 2.13 필터 정렬 (FilterSorting)

```
크기      : 393 × 52px
내부 filter 프레임:
  padding   : top 16px, bottom 16px, left 32px, right 32px
  layout    : VERTICAL, gap 10px
  높이      : 50px (52 - 1px Divider)
Divider    : 하단 1px (총 52px 중 마지막 1px)

내부 정렬 텍스트:
  좌측: "전체 N개" (13px/#868686)
  우측: "인기순 ▾ 필터 ≡" (버튼 텍스트)
  사이: flex space-between
```

---

### 2.14 푸터 (Footer)

```
크기 (Type=01): 393 × 376px
padding   : top 32px, bottom 120px, left 32px, right 32px
내부 gap  : 30px (버튼그룹 ↔ 정보그룹 ↔ 저작권)

버튼 그룹:
  layout    : HORIZONTAL, gap 8px
정보 그룹:
  layout    : VERTICAL, gap 4px
```

---

### 2.15 선택 목록 (ListSelected)

```
크기 (컨테이너): 393 × 25px (단일 항목)
layout    : HORIZONTAL, gap 8px
padding   : top 0, bottom 4px, left 0, right 0

.RadioText 내부:
  gap      : 8px (라디오 아이콘 + 텍스트)
  height   : 18px

SubText (우측 보조 텍스트): width 100px
RightItem (.ListSelectedRightItem): 43px width

항목 반복 시 간격 패턴:
  기본 행 패딩 : padB 4px (각 행 자체)
  행 간 구분  : Divider 없이 패딩으로만 분리 (간결한 목록)
  또는 Divider H 사용 (긴 목록)
```

---

## 3. Screen Layout Spacing

> 실제 화면 프레임의 레이아웃 구조와 간격 패턴

---

### 3.1 공통 크롬 구조

```
모든 화면 공통:
  ┌────────────────────────────────────┐
  │ StatusBar           59px fixed     │  padT 20px / padB 18px / padLR 24px
  │ AppBar              48px fixed     │  padT 10px / padB 10px / padLR 20px
  ├────────────────────────────────────┤
  │ [선택] 탭 바        60px fixed     │  UnderlineTab
  │ [선택] 칩/필터 행   57px fixed     │  Chip + FilterSorting
  ├────────────────────────────────────┤
  │                                    │
  │  스크롤 콘텐츠 영역                │  flex: 1 (가변)
  │                                    │
  ├────────────────────────────────────┤
  │ [선택] Sticky CTA  88px fixed      │  padT 12px / padB 36px
  │ [선택] BottomNavi  88px fixed      │  padT 12px / padB 36px
  └────────────────────────────────────┘

크롬 높이 계산:
  기본 서브 페이지 : 59 + 48 = 107px (상단)
  메인 탭 : 59 + 48 + 60 = 167px (상단) + 88px (하단)
  폼 페이지 : 107px (상단) + 88px (하단 CTA)
  가용 콘텐츠 높이 = 852 - 상단크롬 - 하단크롬
```

---

### 3.2 메인 화면

```
메인_검색 프레임 (393×852) 측정값:

  StatusBar+AppBar 묶음:
    layout  : VERTICAL, gap 0
    height  : 107px (59+48)

  콘텐츠 영역 (con):
    layout  : VERTICAL, gap 0
    padding : 0
    height  : 616px

    └─ Pagestack (인스턴스):
         padT/B : 28px
         padL/R : 12px

    └─ Chip/List 영역:
         layout : VERTICAL, gap 8px
         padB   : 16px
         padL/R : 20px

    └─ SearchBar:
         padT/B : 6px
         padL   : 20px / padR : 6px

  BottomNavigation: 88px (padT 12, padB 36)

메인_관리 패턴 (추정):
  카드 사이 간격   : 12px (gap)
  카드와 화면 간격 : 좌우 16px 패딩
  섹션 타이틀 상단 : 24px
  섹션 타이틀 하단 : 12px
```

---

### 3.3 리스트 화면

```
리스트_요금제 프레임 (393×1749) 측정값:

  Statusbar+Header (묶음):
    layout  : VERTICAL, gap 0
    height  : 107px

  Chip 필터 행:
    layout  : HORIZONTAL, gap 5px  ← 칩 간격
    padT/B  : 10px
    padL    : 20px / padR : 0
    height  : 57px

  FilterSorting:
    height  : 52px (내부 50px + Divider 1px)
    padT/B  : 16px / padL/R : 32px

  ProductListGroup (콘텐츠):
    layout  : VERTICAL, gap 0
    padT/B  : 12px
    padL/R  : 12px
    ← 이 패딩이 화면 좌우 여백 = 12px

    ContentsTitle (카테고리 소제목):
      height  : 59px
      layout  : HORIZONTAL, gap 10px
      padL/R  : 20px

    contents (아이템 목록):
      layout  : VERTICAL, gap 0
      ← 아이템 자체가 상하 패딩 보유 (padT/B 16px)
```

```
리스트 화면 좌우 패딩 정리:
  화면 기본 좌우 패딩: 12px (ProductListGroup)
  카드 내 좌우 패딩: 20px (ContentsTitle 기준)
  칩 필터 시작 패딩: 20px (padL)
  필터/정렬 좌우: 32px
  → 콘텐츠 유효 너비 = 393 - 24 = 369px
```

---

### 3.4 상세 화면

```
상세 화면 레이아웃 간격 패턴:

  Hero 영역 상하:
    AppBar overlap: Hero 이미지가 StatusBar+AppBar 뒤에서 시작 (z-index)
    Hero height  : 200–360px (상품 유형별)

  콘텐츠 섹션 (Hero 이하):
    화면 좌우 패딩: 16px
    섹션 간 수직 gap: 0 (Divider H로 구분)
    카드 컨테이너 내부 padT/B: 28px

  AccordionProductInfo 반복:
    각 아코디언 padT/B : 24px
    아코디언 간 구분   : Divider H (1px) 또는 gap 0

  CarouselProduct 영역:
    전체 너비: 393px (full-bleed)
    카드 시작 leftPad: 16px
    카드 간 gap: 12px
    카드 너비: 160–180px

  Sticky CTA 영역:
    height  : 88px
    padT    : 12px / padB : 36px / padL/R : 12px
    버튼 내 padL/R : 32px (XLarge)
    상단 구분선 : 1px solid #EEEEF0
```

---

### 3.5 폼/입력 화면

```
폼 화면 콘텐츠 좌우 패딩: 16px

  섹션 그룹 구조:
    섹션 제목 (15px/600):
      marginT   : 24px (이전 섹션과 구분)
      marginB   : 8px (다음 필드와 간격)

    TextField 그룹:
      필드 간 gap : 12px
      label ↔ input : 8px (TextField 내부)
      input ↔ help text : 8px (TextField 내부)

    약관 동의 영역 (.CheckboxText):
      체크박스 간 gap : 12px
      체크박스 아이콘 ↔ 텍스트 : 8px

  가격 요약 영역 (InfoTextList):
    padding   : top 16px, bottom 16px
    행 간 gap : 4px
    항목명 ↔ 값 gap : 40px
    합계 행 상단 Divider: 반드시 포함

  Sticky CTA:
    height    : 88px
    padT      : 12px / padB : 36px
    좌우 패딩 : 16px
    버튼      : full-width, height 56px
```

---

### 3.6 완료 화면

```
완료 화면 (어두운 배경, 393×852 기준):

  X 닫기 버튼:
    position  : absolute, top 59px (StatusBar), right 20px
    크기      : 24×24px

  완료 메시지 블록:
    marginT   : 24px (X 버튼 아래)
    marginL/R : 20px (화면 좌우 패딩)

    서브 텍스트(날짜/번호): marginB 8px
    완료 제목(H1)         : marginB 12px
    본문 보조 설명         : marginB 24px

  InfoTextList 카드:
    bg        : rgba(255,255,255,0.08)
    radius    : 16px
    padding   : 20px 20px
    marginL/R : 20px
    행 간 gap : 4px

  CarouselProduct (결제완료):
    marginT   : 32px
    카드 시작 : leftPad 20px

  하단 2버튼:
    position  : sticky bottom
    padT      : 12px / padB : 36px / padL/R : 16px
    버튼 간 gap : 8px
    각 버튼 height : 56px
```

---

### 3.7 바텀시트 오버레이

```
딤 배경:
  z-index   : 위에서 덮음
  bg        : rgba(0,0,0,0.5)
  height    : 화면 전체 (852px)

시트 패널 위치:
  position  : bottom 0
  height    : 콘텐츠에 따라 auto (min 300px, max ~700px)

시트 패널 내부 간격:
  핸들 바 영역     : 32px (padT 12px → 3px 핸들 → 공간)
  타이틀 영역      : 68px (padL/R 32px)
  콘텐츠 좌우      : 20px (ActionButton=off) / 0px (ActionButton=on, 자식이 정의)
  CTA 영역         : 102px (padT 10 + btn 56 + padB 36)

라디오 목록 아이템 (콘텐츠 영역):
  각 항목 height   : 52px
  padT/B           : 16px 각
  padL/R           : 0 (부모 20px 좌우 패딩 적용)
  아이콘 ↔ 텍스트 : 8px
```

---

### 3.8 팝업 오버레이

```
팝업 카드:
  width     : 345px (393 - 24px × 2 좌우 마진)
  padding   : 24px 사방
  radius    : 32px

카드 내부 간격:
  타이틀 ↔ 본문 : 12px (marginB)
  본문 ↔ 체크박스 영역 : 16px
  체크박스 간   : 8px
  체크박스 영역 ↔ 버튼 : 24px

버튼 영역 (.PopupActionButton):
  padT      : 12px
  padL/R    : 24px (전체 카드 패딩과 맞춤)
  버튼 간 gap : 8px
  버튼 height : 48px (Large)
```

---

## 4. Grid & Column System

### 4.1 기본 그리드

```
화면 너비      : 393px
기본 여백(gutter): 16px 좌우
콘텐츠 너비    : 393 - 32 = 361px

1컬럼 기준:
  콘텐츠 너비: 361px

2컬럼 기준:
  각 컬럼: (361 - gap) / 2
  gap 12px → 각 (361 - 12) / 2 = 174.5 ≈ 174px
  gap 8px  → 각 (361 - 8) / 2 = 176.5 ≈ 176px
  사용처: ThumbnailItem 그리드 (2열)
```

### 4.2 카드 레이아웃별 너비

```
레이아웃       너비      좌우여백   용도
──────────────────────────────────────────────────
Full bleed     393px    0         Hero 이미지, 앱바, BottomNav
콘텐츠 기본    361px    16px×2    대부분의 콘텐츠
카드 컨테이너  369px    12px×2    CardSection (리스트 화면)
카드 내부      321px    24px×2    AccordionProductInfo 내부
바텀시트 내    353px    20px×2    시트 콘텐츠
팝업 카드      345px    24px×2    팝업 모달
2열 카드       174px    16+12+16  ThumbnailItem 그리드
캐러셀 카드    160–182px 12px gap  CarouselProduct 아이템
```

### 4.3 수직 리듬 (Vertical Rhythm)

```
기준 단위: 4px 기반

콘텐츠 그루핑:
  같은 그룹 내 요소 간  : 4–8px
  한 카드 내 섹션 간    : 16–24px
  별개 카드/섹션 간     : 24–32px
  주요 페이지 섹션 간   : 32–40px

화면 구조:
  크롬 영역 (AppBar 등) : 8의 배수 (48px, 56px, 88px)
  컴포넌트 높이         : 4의 배수 (28px, 36px, 48px, 52px, 56px, 60px)
  패딩                  : 4의 배수 (4, 8, 10, 12, 16, 20, 24, 28, 32, 36, 40px)
```

---

## 5. Spacing Decision Rules

### 5.1 간격 선택 기준

```
0–4px   → 같은 원자 내부 (아이콘+텍스트 인라인, 배지 도트)
8–12px  → 같은 컴포넌트 내부 인접 요소
16–20px → 카드/컨테이너 내부 패딩, 화면 좌우 패딩
24–28px → 카드 내 상하 패딩, 섹션 구분
32–40px → 화면 상단 여백, 바텀시트 타이틀 좌우, 크롬 영역
```

### 5.2 좌우 패딩 선택 기준

```
20px  → AppBar, StatusBar, 화면 상단 크롬
16px  → 화면 기본 콘텐츠 (대부분의 섹션)
12px  → 리스트 콘텐츠 그룹 (ProductListGroup)
24px  → 팝업 내부, 아코디언 내부, 바텀시트 버튼 영역
32px  → 바텀시트 타이틀, Footer, FilterSorting, XLarge 버튼 내부
```

### 5.3 컴포넌트 조합 시 간격 우선순위

```
컴포넌트 간 간격은 OUTER margin이 아닌
부모 CONTAINER의 gap 또는 padding으로 제어합니다.

원칙:
  1. 각 컴포넌트는 외부 margin을 갖지 않습니다
  2. 목록 컨테이너의 gap 값으로 아이템 간 간격 제어
  3. 페이지 레이아웃 컨테이너의 padding으로 좌우 여백 제어
  4. Spacing 컴포넌트(Size=8/12/16/24px)로 수직 간격 보정
     → 화면 배포 시 opacity=0 처리
```

### 5.4 Safe Area 처리

```
하단 safe area: 34–36px (기기 홈 인디케이터 영역)

포함 컴포넌트:
  BottomNavigation : padB 36px
  Sticky CTA 버튼  : padB 36px
  Bottomsheet CTA  : padB 36px

미포함 (safe area 없는) 컴포넌트:
  Popup, 일반 카드, 콘텐츠 영역
```

---

## 6. Quick Reference Table

### 컴포넌트 크기 한눈에 보기

```
컴포넌트            Width     Height    padT/B    padL/R    gap
───────────────────────────────────────────────────────────────
StatusBar           393px     59px      20/18     24        —
AppBar              393px     48px      10/10     20        12(아이콘)
BottomNavigation    393px     88px      12/36     0         12(탭)
UnderlineTab        393px     60px      0/0       0         0(탭)
Chip(.ChipItem)     가변      37px      10/10     12        2(아이콘)
Chip 목록 행        393px     57px      10/10     20/0      5(칩)
Button/Small        가변      28px      6/6       12        10
Button/Medium       가변      36px      10/10     16        10
Button/Large        가변      48px      10/10     16        10
Button/XLarge(CTA)  full      56px      0/0       32        10
TextField(입력)     가변      48px      0/0       16/8      8
TextField(전체)     가변      106px     0/8       0         8
SearchBar           353px     52px      6/6       20/6      —
FilterSorting       393px     52px      16/16     32        —
CardSection(내부)   369px     가변      28/28     28        24
InfoTextList(행)    가변      21px      16/16     0         40(L/R)
ListText(행)        393px     22px      0/4       0         16
AccordionProduct    369px     88px      24/24     24        10
AccordionNotice     329px     61px      20/20     0         0
AccordionPrice      369px     69px      24/24     24        16
Bottomsheet(CTA)    393px     102px     10/36     12        10
PopupButton(2)      361px     60px      12/0      24        8
Footer              393px     376px     32/120    32        30
```

### 화면 좌우 패딩 요약

```
AppBar / StatusBar     : 20px
기본 콘텐츠            : 16px
리스트 그룹 wrapper    : 12px
바텀시트 타이틀        : 32px
바텀시트 콘텐츠        : 20px
팝업                   : 24px
```

### 수직 간격 요약

```
컴포넌트 내부 인접    : 4–8px
카드 내 섹션 간       : 16–24px
카드/섹션 간          : 24–32px
화면 상단 히어로 여백 : 28px
Safe area (하단)      : 36px
```

---

*Measured from Figma k7R6CRvP2MxvOTIdi61QmX using Plugin API — 2026-05-15*
