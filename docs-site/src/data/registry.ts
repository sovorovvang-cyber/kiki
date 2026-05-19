const FILE_KEY = 'ovg86eZdOa16MRWkuQXY7s';

export type Category =
  | 'Navigation'
  | 'Card'
  | 'Banner'
  | 'List'
  | 'Button'
  | 'Form'
  | 'Accordion'
  | 'Badge'
  | 'Thumbnail'
  | 'Product'
  | 'Title'
  | 'Layout'
  | 'Other';

export interface ComponentMeta {
  name: string;
  category: Category;
  description: string;
  figmaNodeId?: string;
  storybookId: string;
}

function figmaUrl(nodeId: string) {
  return `https://www.figma.com/design/${FILE_KEY}?node-id=${nodeId.replace(':', '-')}`;
}

export const COMPONENTS: ComponentMeta[] = [
  // Navigation
  { name: 'AppBar', category: 'Navigation', description: '상단 앱바', storybookId: 'components-appbar--default' },
  { name: 'Tab', category: 'Navigation', description: '탭 컴포넌트', figmaNodeId: '9508:56855', storybookId: 'components-tab--default' },
  { name: 'UnderlineTab', category: 'Navigation', description: '하단 라인 탭', figmaNodeId: '9596:37541', storybookId: 'components-underlinetab--default' },
  { name: 'BottomNavigation', category: 'Navigation', description: '하단 네비게이션 바', storybookId: 'components-bottomnavigation--default' },

  // Card
  { name: 'CardSection', category: 'Card', description: '섹션 카드 (Medium/Large)', figmaNodeId: '9137:105620', storybookId: 'components-cardsection--medium' },
  { name: 'CardSummary', category: 'Card', description: '요약 카드 (Text/Button)', figmaNodeId: '9726:24546', storybookId: 'components-cardsummary--text-with-right-item' },
  { name: 'CardContentsFilled', category: 'Card', description: '채워진 콘텐츠 카드', figmaNodeId: '10081:70577', storybookId: 'components-cardcontentsfilled--default' },
  { name: 'CardContentsLine', category: 'Card', description: '테두리 콘텐츠 카드', figmaNodeId: '10570:27752', storybookId: 'components-cardcontentsline--default' },
  { name: 'CardInfo', category: 'Card', description: '정보 카드', figmaNodeId: '9793:62316', storybookId: 'components-cardinfo--default' },
  { name: 'CardText', category: 'Card', description: '텍스트 카드', storybookId: 'components-cardtext--default' },
  { name: 'HomeCardCarousel', category: 'Card', description: '홈 캐러셀 카드', figmaNodeId: '9787:98694', storybookId: 'components-homecardcarousel--default' },
  { name: 'Callout', category: 'Card', description: '콜아웃 강조 영역', storybookId: 'components-callout--default' },
  { name: 'Coupon', category: 'Card', description: '쿠폰 카드', figmaNodeId: '9793:40301', storybookId: 'components-coupon--default' },

  // Banner
  { name: 'BannerBenefit', category: 'Banner', description: '혜택 배너', figmaNodeId: '9343:13643', storybookId: 'components-bannerbenefit--default' },
  { name: 'BannerHorizontalMedium', category: 'Banner', description: '수평 미디엄 배너', figmaNodeId: '9137:104871', storybookId: 'components-bannerhorizontalmedium--default' },
  { name: 'BannerHorizontalSmall', category: 'Banner', description: '수평 소형 배너', figmaNodeId: '9738:66701', storybookId: 'components-bannerhorizontalsmall--default' },
  { name: 'BannerSearch', category: 'Banner', description: '검색 배너', figmaNodeId: '9861:48728', storybookId: 'components-bannersearch--default' },
  { name: 'BannerShop', category: 'Banner', description: '쇼핑 배너', figmaNodeId: '9343:13644', storybookId: 'components-bannershop--default' },

  // List
  { name: 'ListProductHorizontal', category: 'List', description: '수평 상품 리스트', figmaNodeId: '9607:61688', storybookId: 'components-listproducthorizontal--default' },
  { name: 'ListProductVertical', category: 'List', description: '수직 상품 카드', figmaNodeId: '9684:95820', storybookId: 'components-listproductvertical--default' },
  { name: 'ListProductRow', category: 'List', description: '2열 상품 리스트', storybookId: 'components-listproductrow--default' },
  { name: 'ListSelected', category: 'List', description: '선택된 리스트', storybookId: 'components-listselected--default' },
  { name: 'ListText', category: 'List', description: '텍스트 리스트', storybookId: 'components-listtext--default' },
  { name: 'InfoTextList', category: 'List', description: '정보 텍스트 리스트', storybookId: 'components-infotextlist--default' },
  { name: 'OptionList', category: 'List', description: '옵션 리스트', figmaNodeId: '10312:49816', storybookId: 'components-optionlist--default' },
  { name: 'OptionListItem', category: 'List', description: '옵션 리스트 아이템', figmaNodeId: '9793:35469', storybookId: 'components-optionlistitem--default' },
  { name: 'PaymentList', category: 'List', description: '결제 방법 리스트', figmaNodeId: '9738:71657', storybookId: 'components-paymentlist--default' },
  { name: 'PayProductListItem', category: 'List', description: '결제 상품 아이템', figmaNodeId: '10312:50173', storybookId: 'components-payproductlistitem--default' },

  // Button
  { name: 'Button', category: 'Button', description: '기본 버튼', storybookId: 'components-button--default' },
  { name: 'ButtonSection', category: 'Button', description: '두 메뉴 버튼 섹션', figmaNodeId: '9861:44966', storybookId: 'components-buttonsection--default' },
  { name: 'ButtonItem', category: 'Button', description: '버튼 아이템', figmaNodeId: '9861:46125', storybookId: 'components-buttonitem--default' },
  { name: 'ButtonMore', category: 'Button', description: '더보기 버튼', figmaNodeId: '9853:49214', storybookId: 'components-buttonmore--default' },
  { name: 'ButtonMoreProduct', category: 'Button', description: '상품 더보기 버튼', figmaNodeId: '10228:40933', storybookId: 'components-buttonmoreproduct--default' },
  { name: 'ButtonMoreProductItem', category: 'Button', description: '상품 더보기 아이템', storybookId: 'components-buttonmoreproductitem--default' },
  { name: 'ButtonCloseItem', category: 'Button', description: '닫기 버튼 아이템', storybookId: 'components-buttoncloseitem--default' },
  { name: 'ButtonListOrder', category: 'Button', description: '정렬 버튼', storybookId: 'components-buttonlistorder--default' },
  { name: 'ButtonTextUnderline', category: 'Button', description: '밑줄 텍스트 버튼', storybookId: 'components-buttontextunderline--default' },
  { name: 'ActionButton', category: 'Button', description: '액션 버튼', figmaNodeId: '9598:34265', storybookId: 'components-actionbutton--default' },
  { name: 'PopupActionButton', category: 'Button', description: '팝업 액션 버튼', storybookId: 'components-popupactionbutton--default' },
  { name: 'TextButton', category: 'Button', description: '텍스트 버튼', storybookId: 'components-textbutton--property-1default' },

  // Form
  { name: 'Checkbox', category: 'Form', description: '체크박스', storybookId: 'components-checkbox--default' },
  { name: 'Radio', category: 'Form', description: '라디오 버튼', storybookId: 'components-radio--default' },
  { name: 'TextField', category: 'Form', description: '텍스트 입력 필드', storybookId: 'components-textfield--default' },
  { name: 'Chip', category: 'Form', description: '칩/태그', storybookId: 'components-chip--default' },
  { name: 'ChipImageItem', category: 'Form', description: '이미지 칩 아이템', storybookId: 'components-chipimageitem--default' },
  { name: 'SearchBar', category: 'Form', description: '검색 바', figmaNodeId: '9914:57887', storybookId: 'components-searchbar--default' },
  { name: 'FilterSorting', category: 'Form', description: '필터 정렬', figmaNodeId: '9638:92802', storybookId: 'components-filtersorting--default' },

  // Accordion
  { name: 'AccordionNoticeInfo', category: 'Accordion', description: '공지 아코디언', figmaNodeId: '10065:55537', storybookId: 'components-accordionnoticeinfo--default' },
  { name: 'AccordionProductInfo', category: 'Accordion', description: '상품 아코디언', figmaNodeId: '9793:43094', storybookId: 'components-accordionproductinfo--default' },
  { name: 'AccordionPriceInfo', category: 'Accordion', description: '가격 아코디언', figmaNodeId: '10059:130989', storybookId: 'components-accordionpriceinfo--default' },

  // Badge
  { name: 'Badge', category: 'Badge', description: '기본 배지', storybookId: 'components-badge--default' },
  { name: 'BadgeHome', category: 'Badge', description: '홈 배지', storybookId: 'components-badgehome--default' },
  { name: 'BadgeIcon', category: 'Badge', description: '아이콘 배지', storybookId: 'components-badgeicon--default' },
  { name: 'Indicator', category: 'Badge', description: '인디케이터 도트', storybookId: 'components-indicator--default' },
  { name: 'Pin', category: 'Badge', description: '순위 핀', storybookId: 'components-pin--default' },
  { name: 'Tooltip', category: 'Badge', description: '툴팁', storybookId: 'components-tooltip--default' },

  // Thumbnail
  { name: 'Thumbnail', category: 'Thumbnail', description: '상품/브랜드 썸네일', figmaNodeId: '9743:55035', storybookId: 'components-thumbnail--product' },
  { name: 'ThumbnailItem', category: 'Thumbnail', description: '썸네일 아이템', storybookId: 'components-thumbnailitem--default' },
  { name: 'ThumbnailLogoItem', category: 'Thumbnail', description: '로고 썸네일 아이템', storybookId: 'components-thumbnaillogoitem--default' },
  { name: 'ThumbnailSmall', category: 'Thumbnail', description: '소형 썸네일', storybookId: 'components-thumbnailsmall--default' },
  { name: 'CarouselProduct', category: 'Thumbnail', description: '상품 캐러셀', storybookId: 'components-carouselproduct--default' },
  { name: 'CarouselProductText', category: 'Thumbnail', description: '텍스트 상품 캐러셀', storybookId: 'components-carouselproducttext--default' },

  // Product
  { name: 'ProductInfo', category: 'Product', description: '상품 정보 섹션', figmaNodeId: '9641:25662', storybookId: 'components-productinfo--default' },
  { name: 'ProductInfoHorizontal', category: 'Product', description: '수평 상품 정보', storybookId: 'components-productinfohorizontal--default' },
  { name: 'ProductInfoVertical', category: 'Product', description: '수직 상품 정보', storybookId: 'components-productinfovertical--default' },
  { name: 'Sheet', category: 'Product', description: '상품 바텀 시트', figmaNodeId: '10038:56583', storybookId: 'components-sheet--default' },
  { name: 'Map', category: 'Product', description: '지도 영역', figmaNodeId: '10040:51445', storybookId: 'components-map--default' },
  { name: 'PaymentLogoItem', category: 'Product', description: '결제 로고 아이템', storybookId: 'components-paymentlogoitem--default' },

  // Title
  { name: 'TitleMain', category: 'Title', description: '메인 타이틀', figmaNodeId: '9740:49516', storybookId: 'components-titlemain--default' },
  { name: 'TitleSection', category: 'Title', description: '섹션 타이틀', figmaNodeId: '10095:64950', storybookId: 'components-titlesection--default' },
  { name: 'TitleContents', category: 'Title', description: '콘텐츠 타이틀', figmaNodeId: '10009:151423', storybookId: 'components-titlecontents--default' },
  { name: 'TitleSectionLeftItem', category: 'Title', description: '좌측 아이템 섹션 타이틀', storybookId: 'components-titlesectionleftitem--default' },
  { name: 'TitleSectionRightItem', category: 'Title', description: '우측 아이템 섹션 타이틀', storybookId: 'components-titlesectionrightitem--default' },
  { name: 'TitleContentsRightItem', category: 'Title', description: '우측 아이템 콘텐츠 타이틀', storybookId: 'components-titlecontentsrightitem--default' },
  { name: 'TitleBottomSheet', category: 'Title', description: '바텀 시트 타이틀', storybookId: 'components-titlebottomsheet--default' },
  { name: 'CardSectionTitle', category: 'Title', description: '카드 섹션 타이틀', storybookId: 'components-cardsectiontitle--default' },

  // Layout
  { name: 'Spacing', category: 'Layout', description: '간격 컴포넌트', figmaNodeId: '10527:10432', storybookId: 'components-spacing--default' },
  { name: 'Divider', category: 'Layout', description: '구분선', storybookId: 'components-divider--default' },
  { name: 'Icon', category: 'Layout', description: '아이콘', storybookId: 'components-icon--default' },

  // Other
  { name: 'Footer', category: 'Other', description: '푸터', figmaNodeId: '9729:30506', storybookId: 'components-footer--type01' },
  { name: 'Pagestack', category: 'Other', description: '페이지스택', figmaNodeId: '9945:46762', storybookId: 'components-pagestack--default' },
  { name: 'PagestackItemCard', category: 'Other', description: '페이지스택 카드 아이템', figmaNodeId: '9945:47622', storybookId: 'components-pagestackitemcard--default' },
  { name: 'PagestackItemDefault', category: 'Other', description: '페이지스택 기본 아이템', figmaNodeId: '9945:47565', storybookId: 'components-pagestackitemdefault--default' },
  { name: 'LeftItem', category: 'Other', description: '앱바 좌측 아이템', storybookId: 'components-leftitem--type-ai-gift' },
  { name: 'RightItem', category: 'Other', description: '앱바 우측 아이템', storybookId: 'components-rightitem--default' },
  { name: 'ListSelectedRightItem', category: 'Other', description: '선택 리스트 우측 아이템', storybookId: 'components-listselectedrightitem--default' },
];

export const CATEGORIES: Category[] = [
  'Navigation', 'Card', 'Banner', 'List', 'Button',
  'Form', 'Accordion', 'Badge', 'Thumbnail', 'Product',
  'Title', 'Layout', 'Other',
];

export const CATEGORY_COLORS: Record<Category, string> = {
  Navigation: '#3617ce',
  Card: '#7355c7',
  Banner: '#e53935',
  List: '#00897b',
  Button: '#f4511e',
  Form: '#039be5',
  Accordion: '#8e24aa',
  Badge: '#fb8c00',
  Thumbnail: '#43a047',
  Product: '#d81b60',
  Title: '#6d4c41',
  Layout: '#546e7a',
  Other: '#78909c',
};

export function getFigmaUrl(nodeId: string): string {
  return figmaUrl(nodeId);
}

export function getStorybookUrl(baseUrl: string, storyId: string): string {
  return `${baseUrl}/iframe.html?id=${storyId}&viewMode=story`;
}
