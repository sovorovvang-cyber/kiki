import React, { Component, type ReactNode, type ErrorInfo } from 'react';

// ── design-system component imports ─────────────────────────────────────────
import { AccordionNoticeInfo } from '@ds/components/AccordionNoticeInfo/AccordionNoticeInfo';
import { AccordionPriceInfo } from '@ds/components/AccordionPriceInfo/AccordionPriceInfo';
import { AccordionProductInfo } from '@ds/components/AccordionProductInfo/AccordionProductInfo';
import { ActionButton } from '@ds/components/ActionButton/ActionButton';
import { AppBar, BellIcon, MenuIcon } from '@ds/components/AppBar/AppBar';
import { Badge } from '@ds/components/Badge/Badge';
import { BadgeHome } from '@ds/components/BadgeHome/BadgeHome';
import { BadgeIcon } from '@ds/components/BadgeIcon/BadgeIcon';
import { BannerBenefit } from '@ds/components/BannerBenefit/BannerBenefit';
import { BannerHorizontalMedium } from '@ds/components/BannerHorizontalMedium/BannerHorizontalMedium';
import { BannerSearch } from '@ds/components/BannerSearch/BannerSearch';
import { BannerShop } from '@ds/components/BannerShop/BannerShop';
import { BottomNavigation } from '@ds/components/BottomNavigation/BottomNavigation';
import { Button } from '@ds/components/Button/Button';
import { ButtonCloseItem } from '@ds/components/ButtonCloseItem/ButtonCloseItem';
import { ButtonItem } from '@ds/components/ButtonItem/ButtonItem';
import { ButtonListOrder } from '@ds/components/ButtonListOrder/ButtonListOrder';
import { ButtonMore } from '@ds/components/ButtonMore/ButtonMore';
import { ButtonMoreProduct } from '@ds/components/ButtonMoreProduct/ButtonMoreProduct';
import { ButtonMoreProductItem } from '@ds/components/ButtonMoreProductItem/ButtonMoreProductItem';
import { ButtonSection } from '@ds/components/ButtonSection/ButtonSection';
import { ButtonTextUnderline } from '@ds/components/ButtonTextUnderline/ButtonTextUnderline';
import { Callout } from '@ds/components/Callout/Callout';
import { CardContentsFilled } from '@ds/components/CardContentsFilled/CardContentsFilled';
import { CardContentsItem } from '@ds/components/CardContentsItem/CardContentsItem';
import { CardContentsLine } from '@ds/components/CardContentsLine/CardContentsLine';
import { CardInfo } from '@ds/components/CardInfo/CardInfo';
import { CardSection } from '@ds/components/CardSection/CardSection';
import { CardSectionTitle } from '@ds/components/CardSectionTitle/CardSectionTitle';
import { CardSummary } from '@ds/components/CardSummary/CardSummary';
import { CardText } from '@ds/components/CardText/CardText';
import { CarouselProduct } from '@ds/components/CarouselProduct/CarouselProduct';
import { CarouselProductText } from '@ds/components/CarouselProductText/CarouselProductText';
import { CheckboxItem, CheckboxText } from '@ds/components/Checkbox/Checkbox';
import { Chip } from '@ds/components/Chip/Chip';
import { ChipImageItem } from '@ds/components/ChipImageItem/ChipImageItem';
import { Coupon } from '@ds/components/Coupon/Coupon';
import { Divider } from '@ds/components/Divider/Divider';
import { FilterSorting } from '@ds/components/FilterSorting/FilterSorting';
import { Footer } from '@ds/components/Footer/Footer';
import { HomeCardCarousel } from '@ds/components/HomeCardCarousel/HomeCardCarousel';
import { Icon } from '@ds/components/Icon/Icon';
import { Indicator } from '@ds/components/Indicator/Indicator';
import { InfoTextList } from '@ds/components/InfoTextList/InfoTextList';
import { LeftItem } from '@ds/components/LeftItem/LeftItem';
import { ListProductHorizontal } from '@ds/components/ListProductHorizontal/ListProductHorizontal';
import { ListProductRow } from '@ds/components/ListProductRow/ListProductRow';
import { ListProductVertical } from '@ds/components/ListProductVertical/ListProductVertical';
import { ListSelected } from '@ds/components/ListSelected/ListSelected';
import { ListSelectedRightItem } from '@ds/components/ListSelectedRightItem/ListSelectedRightItem';
import { ListText } from '@ds/components/ListText/ListText';
import { Map } from '@ds/components/Map/Map';
import { OptionList } from '@ds/components/OptionList/OptionList';
import { OptionListItem } from '@ds/components/OptionListItem/OptionListItem';
import { Pagestack } from '@ds/components/Pagestack/Pagestack';
import { PagestackItemCard } from '@ds/components/PagestackItemCard/PagestackItemCard';
import { PagestackItemDefault } from '@ds/components/PagestackItemDefault/PagestackItemDefault';
import { PayProductListItem } from '@ds/components/PayProductListItem/PayProductListItem';
import { PaymentList } from '@ds/components/PaymentList/PaymentList';
import { PaymentLogoItem } from '@ds/components/PaymentLogoItem/PaymentLogoItem';
import { Pin } from '@ds/components/Pin/Pin';
import { PopupActionButton } from '@ds/components/PopupActionButton/PopupActionButton';
import { ProductInfo } from '@ds/components/ProductInfo/ProductInfo';
import { ProductInfoHorizontal } from '@ds/components/ProductInfoHorizontal/ProductInfoHorizontal';
import { ProductInfoVertical } from '@ds/components/ProductInfoVertical/ProductInfoVertical';
import { RadioItem, RadioText } from '@ds/components/Radio/Radio';
import { RightItem } from '@ds/components/RightItem/RightItem';
import { SearchBar } from '@ds/components/SearchBar/SearchBar';
import { Sheet } from '@ds/components/Sheet/Sheet';
import { Spacing } from '@ds/components/Spacing/Spacing';
import { Tab } from '@ds/components/Tab/Tab';
import { TextButton } from '@ds/components/TextButton/TextButton';
import { TextField } from '@ds/components/TextField/TextField';
import { Thumbnail } from '@ds/components/Thumbnail/Thumbnail';
import { ThumbnailItem } from '@ds/components/ThumbnailItem/ThumbnailItem';
import { ThumbnailLogoItem } from '@ds/components/ThumbnailLogoItem/ThumbnailLogoItem';
import { ThumbnailSmall } from '@ds/components/ThumbnailSmall/ThumbnailSmall';
import { TitleBottomSheet } from '@ds/components/TitleBottomSheet/TitleBottomSheet';
import { TitleContents } from '@ds/components/TitleContents/TitleContents';
import { TitleContentsRightItem } from '@ds/components/TitleContentsRightItem/TitleContentsRightItem';
import { TitleMain } from '@ds/components/TitleMain/TitleMain';
import { TitleSection } from '@ds/components/TitleSection/TitleSection';
import { TitleSectionLeftItem } from '@ds/components/TitleSectionLeftItem/TitleSectionLeftItem';
import { TitleSectionRightItem } from '@ds/components/TitleSectionRightItem/TitleSectionRightItem';
import { Tooltip } from '@ds/components/Tooltip/Tooltip';
import { UnderlineTab } from '@ds/components/UnderlineTab/UnderlineTab';

// ── Error boundary ───────────────────────────────────────────────────────────
class PreviewErrorBoundary extends Component<{ name: string; children: ReactNode }, { error: boolean }> {
  state = { error: false };
  static getDerivedStateFromError() { return { error: true }; }
  componentDidCatch(_: Error, __: ErrorInfo) {}
  render() {
    if (this.state.error) {
      return (
        <div style={{
          position: 'absolute', inset: 0, display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          background: '#f4f5fa', color: 'rgba(6,12,31,0.3)',
          fontSize: 12, fontFamily: 'Pretendard Variable, sans-serif',
        }}>
          {this.props.name}
        </div>
      );
    }
    return this.props.children;
  }
}

// ── Layout helpers ───────────────────────────────────────────────────────────
function Scale({ children, bg = '#ffffff', scale = 0.78, padTop = 12 }: {
  children: ReactNode; bg?: string; scale?: number; padTop?: number;
}) {
  return (
    <div style={{ position: 'absolute', inset: 0, background: bg, overflow: 'hidden', paddingTop: padTop }}>
      <div style={{ transform: `scale(${scale})`, transformOrigin: 'top left' }}>
        {children}
      </div>
    </div>
  );
}

function Center({ children, bg = '#f4f5fa', gap = 8, column = false }: {
  children: ReactNode; bg?: string; gap?: number; column?: boolean;
}) {
  return (
    <div style={{
      position: 'absolute', inset: 0, background: bg,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      gap, flexWrap: 'wrap', padding: '20px',
      flexDirection: column ? 'column' : 'row',
    }}>
      {children}
    </div>
  );
}

// ── Preview map ──────────────────────────────────────────────────────────────
type PreviewFn = () => React.ReactElement;

const RAW_PREVIEWS: Record<string, PreviewFn> = {
  AccordionNoticeInfo: () => (
    <Scale bg="#ffffff" scale={0.82} padTop={20}>
      <AccordionNoticeInfo title="요금제 변경 방법을 알고 싶어요" state="Close" />
    </Scale>
  ),

  AccordionPriceInfo: () => (
    <Scale bg="#ffffff" scale={0.82} padTop={20}>
      <AccordionPriceInfo />
    </Scale>
  ),

  AccordionProductInfo: () => (
    <Scale bg="#f4f5fa" scale={0.82} padTop={20}>
      <AccordionProductInfo />
    </Scale>
  ),

  ActionButton: () => (
    <Scale bg="#05001a" scale={0.8} padTop={24}>
      <ActionButton type="Ai" button="2" showText topText="텍스트" leftText="텍스트" rightText="텍스트" />
    </Scale>
  ),

  AppBar: () => (
    <Scale bg="#ffffff" scale={0.85} padTop={0}>
      <AppBar title="결제하기" showBack rightItem={<><BellIcon /><MenuIcon /></>} />
    </Scale>
  ),

  Badge: () => (
    <Center bg="#f4f5fa" gap={8}>
      <Badge variant="gray">Gray</Badge>
      <Badge variant="black">Black</Badge>
      <Badge variant="blue">Blue</Badge>
    </Center>
  ),

  BadgeHome: () => (
    <Center bg="#f4f5fa" gap={8}>
      <BadgeHome label="VVIP" />
      <BadgeHome label="VIP" />
      <BadgeHome label="우수" />
    </Center>
  ),

  BadgeIcon: () => (
    <Center bg="#f4f5fa" gap={16}>
      <BadgeIcon icon={<Icon name="shopping" size={20} />} label="쇼핑" subLabel="4,815개" />
      <BadgeIcon icon={<Icon name="my" size={20} />} label="MY" />
    </Center>
  ),

  BannerBenefit: () => (
    <Scale bg="#1a0a4b" scale={0.82} padTop={16}>
      <BannerBenefit />
    </Scale>
  ),

  BannerHorizontalMedium: () => (
    <Scale bg="#f4f5fa" scale={0.78} padTop={12}>
      <BannerHorizontalMedium />
    </Scale>
  ),

  BannerSearch: () => (
    <Scale bg="#ffffff" scale={0.85} padTop={16}>
      <BannerSearch />
    </Scale>
  ),

  BannerShop: () => (
    <Scale bg="#0d0d1a" scale={0.78} padTop={12}>
      <BannerShop />
    </Scale>
  ),

  BottomNavigation: () => (
    <Scale bg="#ffffff" scale={0.85} padTop={0}>
      <BottomNavigation
        activeKey="home"
        onChange={() => {}}
        items={[
          { key: 'home', label: 'MY', icon: <Icon name="my" size={24} />, activeIcon: <Icon name="my-filled" size={24} /> },
          { key: 'shop', label: '쇼핑', icon: <Icon name="shopping" size={24} />, activeIcon: <Icon name="shopping-filled" size={24} /> },
          { key: 'search', label: '검색', icon: <Icon name="search" size={24} /> },
          { key: 'menu', label: '메뉴', icon: <Icon name="menu" size={24} /> },
        ]}
      />
    </Scale>
  ),

  Button: () => (
    <Center bg="#f4f5fa" gap={8}>
      <Button variant="primary" size="medium">버튼</Button>
      <Button variant="secondary" size="medium">버튼</Button>
      <Button variant="solid" size="xsmall">쿠폰 받기</Button>
    </Center>
  ),

  ButtonCloseItem: () => (
    <Center bg="#f4f5fa">
      <ButtonCloseItem />
    </Center>
  ),

  ButtonItem: () => (
    <Center bg="#ffffff">
      <ButtonItem label="MY 편집" />
    </Center>
  ),

  ButtonListOrder: () => (
    <Center bg="#ffffff">
      <ButtonListOrder label="인기순" />
    </Center>
  ),

  ButtonMore: () => (
    <Center bg="#f4f5fa">
      <ButtonMore label="상품 정보 더보기" />
    </Center>
  ),

  ButtonMoreProduct: () => (
    <Scale bg="#f4f5fa" scale={0.82} padTop={20}>
      <ButtonMoreProduct label="Gifticon Best 상품 더보기" logoColor="#dad2ff" />
    </Scale>
  ),

  ButtonMoreProductItem: () => (
    <Scale bg="#ffffff" scale={0.82} padTop={20}>
      <ButtonMoreProductItem label="기프티콘 전체 상품 더보기" />
    </Scale>
  ),

  ButtonSection: () => (
    <Scale bg="rgba(0,0,0,0.3)" scale={0.78} padTop={20}>
      <ButtonSection />
    </Scale>
  ),

  ButtonTextUnderline: () => (
    <Center bg="#ffffff">
      <ButtonTextUnderline label="전체 약관 보기" />
    </Center>
  ),

  Callout: () => (
    <Scale bg="#f4f5fa" scale={0.82} padTop={20}>
      <Callout title="안내사항">요금제 변경 후 즉시 적용되며, 기존 혜택은 만료일까지 유지됩니다.</Callout>
    </Scale>
  ),

  CardContentsFilled: () => (
    <Scale bg="#f4f5fa" scale={0.78} padTop={12}>
      <CardContentsFilled title="이용 혜택" />
    </Scale>
  ),

  CardContentsItem: () => (
    <Scale bg="#ffffff" scale={0.78} padTop={12}>
      <CardContentsItem />
    </Scale>
  ),

  CardContentsLine: () => (
    <Scale bg="#f4f5fa" scale={0.78} padTop={12}>
      <CardContentsLine />
    </Scale>
  ),

  CardInfo: () => (
    <Scale bg="#f4f5fa" scale={0.82} padTop={20}>
      <CardInfo type="Brand" />
    </Scale>
  ),

  CardSection: () => (
    <Scale bg="#f4f5fa" scale={0.78} padTop={12}>
      <CardSection
        type="Medium"
        subtitle="서브타이틀"
        title="타이틀"
        badge="Badge"
        itemTitle="왕과 사는 남자"
        itemSubtext="VVIP CGV 1인 무료 이용"
        itemButtonText="바로 가기"
      />
    </Scale>
  ),

  CardSectionTitle: () => (
    <Scale bg="#f4f5fa" scale={0.82} padTop={20}>
      <CardSectionTitle />
    </Scale>
  ),

  CardSummary: () => (
    <Scale bg="#f4f5fa" scale={0.78} padTop={12}>
      <CardSummary
        type="Text"
        subText="SubText"
        mainText="MainText"
        row1Title="TitleText"
        row1Info="InfoText"
        row2Title="TitleText"
        row2Info="InfoText"
      />
    </Scale>
  ),

  CardText: () => (
    <Scale bg="#f4f5fa" scale={0.78} padTop={12}>
      <CardText />
    </Scale>
  ),

  CarouselProduct: () => (
    <Scale bg="#f4f5fa" scale={0.78} padTop={12}>
      <CarouselProduct />
    </Scale>
  ),

  CarouselProductText: () => (
    <Scale bg="#f4f5fa" scale={0.78} padTop={12}>
      <CarouselProductText subtitle="T우주" title="구독 상품 특별 혜택" description="월 최대 50% 절약" />
    </Scale>
  ),

  Checkbox: () => (
    <Center bg="#f4f5fa" gap={16}>
      <CheckboxItem checked={false} />
      <CheckboxItem checked={true} />
      <CheckboxText label="선택 항목" checked={false} />
    </Center>
  ),

  Chip: () => (
    <Center bg="#f4f5fa" gap={8}>
      <Chip selected={false}>단말기</Chip>
      <Chip selected={true}>요금제</Chip>
      <Chip selected={false}>액세서리</Chip>
    </Center>
  ),

  ChipImageItem: () => (
    <Center bg="#f4f5fa" gap={8}>
      <ChipImageItem label="단말기" selected={false} />
      <ChipImageItem label="요금제" selected={true} />
    </Center>
  ),

  Coupon: () => (
    <Scale bg="#f4f5fa" scale={0.78} padTop={16}>
      <Coupon />
    </Scale>
  ),

  Divider: () => (
    <Center bg="#ffffff" column gap={12}>
      <Divider type="contents" />
      <Divider type="section" />
    </Center>
  ),

  FilterSorting: () => (
    <Scale bg="#ffffff" scale={0.85} padTop={0}>
      <FilterSorting totalCount={256} sortLabel="인기순" />
    </Scale>
  ),

  Footer: () => (
    <Scale bg="#ffffff" scale={0.72} padTop={12}>
      <Footer type="01" />
    </Scale>
  ),

  HomeCardCarousel: () => (
    <Scale bg="#f4f5fa" scale={0.78} padTop={12}>
      <HomeCardCarousel subtitle="서브 타이틀" titleLine1="메인 타이틀" titleLine2="메인 타이틀" />
    </Scale>
  ),

  Icon: () => (
    <Center bg="#f4f5fa" gap={12}>
      <Icon name="shopping" size={24} color="#05001a" />
      <Icon name="my" size={24} color="#05001a" />
      <Icon name="search" size={24} color="#05001a" />
      <Icon name="bubble" size={24} color="#05001a" />
      <Icon name="close" size={24} color="#05001a" />
    </Center>
  ),

  Indicator: () => (
    <Center bg="#f4f5fa">
      <Indicator count={5} activeIndex={2} />
    </Center>
  ),

  InfoTextList: () => (
    <Scale bg="#ffffff" scale={0.82} padTop={16}>
      <InfoTextList />
    </Scale>
  ),

  LeftItem: () => (
    <Center bg="#05001a" gap={16}>
      <LeftItem type="ai+gift" color="#ffffff" />
    </Center>
  ),

  ListProductHorizontal: () => (
    <Scale bg="#f4f5fa" scale={0.78} padTop={12}>
      <ListProductHorizontal />
    </Scale>
  ),

  ListProductRow: () => (
    <Scale bg="#f4f5fa" scale={0.75} padTop={12}>
      <ListProductRow
        left={{ subTitle: 'T우주', title: '5G 프리미어 플러스', originalPrice: '130,000원', discountRate: '57%', price: '55,000원', priceUnit: '/월', badges: ['인기', '추천'] }}
        right={{ subTitle: 'T다이렉트샵', title: '5GX 플래티넘', originalPrice: '95,000원', discountRate: '7%', price: '89,000원', priceUnit: '/월', badges: ['NEW'] }}
      />
    </Scale>
  ),

  ListProductVertical: () => (
    <Scale bg="#f4f5fa" scale={0.85} padTop={16}>
      <ListProductVertical
        subTitle="TextSub"
        title="TextMain"
        originalPrice="999,999원"
        discountRate="7%"
        price="999,999원"
        priceUnit="/12개월"
        badges={['Badge', 'Badge']}
      />
    </Scale>
  ),

  ListSelected: () => (
    <Scale bg="#ffffff" scale={0.82} padTop={16}>
      <ListSelected label="기본 요금제" price="-9,900원" />
    </Scale>
  ),

  ListSelectedRightItem: () => (
    <Center bg="#f4f5fa" gap={12}>
      <ListSelectedRightItem type="buttonXsmallSolid" label="받기" />
      <ListSelectedRightItem type="textButton" label="변경" />
    </Center>
  ),

  ListText: () => (
    <Scale bg="#ffffff" scale={0.82} padTop={16}>
      <ListText table="off" title="요금제 안내" />
    </Scale>
  ),

  Map: () => (
    <Scale bg="#f4f5fa" scale={0.82} padTop={0}>
      <Map />
    </Scale>
  ),

  OptionList: () => (
    <Scale bg="#f4f5fa" scale={0.82} padTop={20}>
      <OptionList
        type="color"
        options={[{ label: '코발트 바이올렛' }, { label: '코발트 블루' }]}
        activeIndex={0}
      />
    </Scale>
  ),

  OptionListItem: () => (
    <Center bg="#f4f5fa" gap={8}>
      <OptionListItem type="Module" label="코발트 바이올렛" selected={true} />
      <OptionListItem type="Module" label="그라파이트" selected={false} />
    </Center>
  ),

  Pagestack: () => (
    <Scale bg="#ffffff" scale={0.82} padTop={16}>
      <Pagestack title="구독 상품 선택" />
    </Scale>
  ),

  PagestackItemCard: () => (
    <Scale bg="#f4f5fa" scale={0.82} padTop={16}>
      <PagestackItemCard>
        <div style={{ height: 60, background: '#e2e6f1', borderRadius: 8 }} />
      </PagestackItemCard>
    </Scale>
  ),

  PagestackItemDefault: () => (
    <Scale bg="#f4f5fa" scale={0.82} padTop={16}>
      <PagestackItemDefault>
        <div style={{ height: 40, background: '#e2e6f1', borderRadius: 8 }} />
      </PagestackItemDefault>
    </Scale>
  ),

  PayProductListItem: () => (
    <Scale bg="#ffffff" scale={0.72} padTop={8}>
      <PayProductListItem />
    </Scale>
  ),

  PaymentList: () => (
    <Scale bg="#ffffff" scale={0.82} padTop={16}>
      <PaymentList />
    </Scale>
  ),

  PaymentLogoItem: () => (
    <Center bg="#f4f5fa" gap={12}>
      <PaymentLogoItem type="kakaopay" />
      <PaymentLogoItem type="naverpay" />
      <PaymentLogoItem type="11pay" />
    </Center>
  ),

  Pin: () => (
    <Center bg="#f4f5fa" gap={12}>
      <Pin number={1} color="#3617ce" />
      <Pin number={2} color="#3617ce" />
      <Pin number={3} color="#3617ce" />
    </Center>
  ),

  PopupActionButton: () => (
    <Scale bg="#ffffff" scale={0.82} padTop={20}>
      <PopupActionButton primaryLabel="확인" secondaryLabel="취소" />
    </Scale>
  ),

  ProductInfo: () => (
    <Scale bg="#ffffff" scale={0.78} padTop={12}>
      <ProductInfo />
    </Scale>
  ),

  ProductInfoHorizontal: () => (
    <Scale bg="#f4f5fa" scale={0.82} padTop={16}>
      <ProductInfoHorizontal />
    </Scale>
  ),

  ProductInfoVertical: () => (
    <Scale bg="#f4f5fa" scale={0.82} padTop={16}>
      <ProductInfoVertical />
    </Scale>
  ),

  Radio: () => (
    <Center bg="#f4f5fa" gap={16}>
      <RadioItem checked={false} />
      <RadioItem checked={true} />
      <RadioText label="선택 항목" checked={false} />
    </Center>
  ),

  RightItem: () => (
    <Center bg="#ffffff" gap={12}>
      <RightItem type="text" label="-3,000원" />
    </Center>
  ),

  SearchBar: () => (
    <Scale bg="#ffffff" scale={0.85} padTop={16}>
      <SearchBar type="LLM" />
    </Scale>
  ),

  Sheet: () => (
    <Scale bg="#ffffff" scale={0.82} padTop={16}>
      <Sheet />
    </Scale>
  ),

  Spacing: () => (
    <Center bg="#f4f5fa" column gap={0}>
      <div style={{ fontSize: 11, color: 'rgba(6,12,31,0.4)', marginBottom: 6, fontFamily: 'monospace' }}>spacing</div>
      <div style={{ width: 120, height: 16, background: 'rgba(54,23,206,0.15)', borderRadius: 3 }} />
      <div style={{ fontSize: 11, color: '#3617ce', marginTop: 4, fontFamily: 'monospace' }}>16px</div>
    </Center>
  ),

  Tab: () => (
    <Scale bg="#ffffff" scale={0.85} padTop={0}>
      <Tab
        items={[{ key: 'all', label: '전체' }, { key: 'my', label: '나의 혜택' }, { key: 'store', label: '스토어' }]}
        activeKey="all"
        onChange={() => {}}
      />
    </Scale>
  ),

  TextButton: () => (
    <Center bg="#05001a" gap={12}>
      <TextButton label="더보기" color="#ffffff" />
    </Center>
  ),

  TextField: () => (
    <Scale bg="#ffffff" scale={0.82} padTop={20}>
      <TextField label="레이블" placeholder="텍스트를 입력하세요" helperText="Help Text" />
    </Scale>
  ),

  Thumbnail: () => (
    <Scale bg="#f4f5fa" scale={0.78} padTop={0}>
      <Thumbnail type="Product" totalDots={4} activeDotIndex={0} />
    </Scale>
  ),

  ThumbnailItem: () => (
    <Center bg="#f4f5fa" gap={12}>
      <ThumbnailItem size="40" />
      <ThumbnailItem size="64" />
      <ThumbnailItem size="160" />
    </Center>
  ),

  ThumbnailLogoItem: () => (
    <Center bg="#f4f5fa" gap={12}>
      <ThumbnailLogoItem bgColor="#ff143b" />
      <ThumbnailLogoItem bgColor="#3617ce" />
      <ThumbnailLogoItem bgColor="#016a41" />
    </Center>
  ),

  ThumbnailSmall: () => (
    <Center bg="#f4f5fa">
      <ThumbnailSmall />
    </Center>
  ),

  TitleBottomSheet: () => (
    <Scale bg="#ffffff" scale={0.85} padTop={20}>
      <TitleBottomSheet title="구독 상품 선택" subText="최대" subTextHighlight=" 3개 " />
    </Scale>
  ),

  TitleContents: () => (
    <Scale bg="#ffffff" scale={0.82} padTop={16}>
      <TitleContents title="타이틀" showButton />
    </Scale>
  ),

  TitleContentsRightItem: () => (
    <Center bg="#ffffff" gap={12}>
      <TitleContentsRightItem type="button" label="더보기" />
    </Center>
  ),

  TitleMain: () => (
    <Scale bg="#ffffff" scale={0.75} padTop={12}>
      <TitleMain type="Complete" />
    </Scale>
  ),

  TitleSection: () => (
    <Scale bg="#ffffff" scale={0.85} padTop={16}>
      <TitleSection title="타이틀" subtitle="서브타이틀" count={2} />
    </Scale>
  ),

  TitleSectionLeftItem: () => (
    <Center bg="#ffffff" gap={16}>
      <TitleSectionLeftItem type="text" count="2" />
      <TitleSectionLeftItem type="badge" badge="NEW" />
    </Center>
  ),

  TitleSectionRightItem: () => (
    <Center bg="#ffffff" gap={12}>
      <TitleSectionRightItem type="textButton" label="더보기" />
    </Center>
  ),

  Tooltip: () => (
    <Center bg="#f4f5fa">
      <Tooltip label="이 상품이 가장 인기있어요!" tailPosition="center" />
    </Center>
  ),

  UnderlineTab: () => (
    <Scale bg="#ffffff" scale={0.85} padTop={0}>
      <UnderlineTab items={['상품 정보', '사용 방법', '유의 사항']} activeIndex={0} />
    </Scale>
  ),
};

// ── Public API ───────────────────────────────────────────────────────────────
export const PREVIEWS: Record<string, () => React.ReactElement> = Object.fromEntries(
  Object.entries(RAW_PREVIEWS).map(([name, fn]) => [
    name,
    () => (
      <PreviewErrorBoundary name={name}>
        {fn()}
      </PreviewErrorBoundary>
    ),
  ])
);
