import type { Meta, StoryObj } from '@storybook/react-vite';
import { CardSection } from './CardSection';
import { TitleSection } from '../TitleSection/TitleSection';
import { CardSectionTitle } from '../CardSectionTitle/CardSectionTitle';

const meta = {
  title: 'Components/CardSection',
  component: CardSection,
  tags: ['autodocs'],
  parameters: { layout: 'centered', backgrounds: { default: 'gray', values: [{ name: 'gray', value: '#F4F5FA' }] } },
} satisfies Meta<typeof CardSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithTitleSection: Story = {
  name: 'With TitleSection',
  render: () => (
    <CardSection>
      <TitleSection title="혜택 서비스" rightType="textButton" rightLabel="전체 보기" />
      <div style={{ height: 80, background: '#F4F5FA', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#868686', fontSize: 13 }}>
        콘텐츠 영역
      </div>
    </CardSection>
  ),
};

export const WithCardSectionTitle: Story = {
  name: 'With CardSectionTitle',
  render: () => (
    <CardSection>
      <CardSectionTitle subtitle="서브타이틀" title="타이틀" badge="Badge" />
      <div style={{ height: 80, background: '#F4F5FA', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#868686', fontSize: 13 }}>
        콘텐츠 영역
      </div>
    </CardSection>
  ),
};

export const Empty: Story = {
  render: () => (
    <CardSection>
      <div style={{ height: 120, background: '#F4F5FA', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#868686', fontSize: 13 }}>
        콘텐츠 영역
      </div>
    </CardSection>
  ),
};
