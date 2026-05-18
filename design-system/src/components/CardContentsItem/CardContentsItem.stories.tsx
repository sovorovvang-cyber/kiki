import type { Meta, StoryObj } from '@storybook/react-vite';
import { CardContentsItem } from './CardContentsItem';

const meta = {
  title: 'Components/CardContentsItem',
  component: CardContentsItem,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof CardContentsItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TypeList: Story = {
  name: 'Type=List',
  args: {
    type: 'list',
    title: '왕과 사는 남자',
    subtitle: 'VVIP CGV 1인 무료 이용',
    daysLeft: 'D-2',
    buttonLabel: '버튼',
  },
};

export const TypeBarcode: Story = {
  name: 'Type=Barcode',
  args: { type: 'barcode' },
};

export const TypeAi: Story = {
  name: 'Type=ai',
  args: {
    type: 'ai',
    aiText: 'T 멤버십 사용 가능 포인트 65,300P',
  },
};

export const AllTypes: Story = {
  name: 'All Types',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, padding: 20, background: '#f4f5fa', borderRadius: 16 }}>
      <CardContentsItem type="list" title="왕과 사는 남자" subtitle="VVIP CGV 1인 무료 이용" daysLeft="D-2" buttonLabel="버튼" />
      <CardContentsItem type="barcode" />
      <CardContentsItem type="ai" aiText="T 멤버십 사용 가능 포인트 65,300P" />
    </div>
  ),
};
