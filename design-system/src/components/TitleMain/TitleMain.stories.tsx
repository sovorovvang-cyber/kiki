import type { Meta, StoryObj } from '@storybook/react-vite';
import { TitleMain } from './TitleMain';

const meta = {
  title: 'Components/TitleMain',
  component: TitleMain,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof TitleMain>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    subtitle: '서브 타이틀',
    title: '메인 타이틀\n메인 타이틀',
    indicatorCount: 6,
    indicatorActiveIndex: 0,
  },
};

export const SecondSlide: Story = {
  args: {
    subtitle: '서브 타이틀',
    title: '메인 타이틀\n메인 타이틀',
    indicatorCount: 6,
    indicatorActiveIndex: 2,
  },
};
