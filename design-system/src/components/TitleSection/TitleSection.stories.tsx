import type { Meta, StoryObj } from '@storybook/react-vite';
import { TitleSection } from './TitleSection';

const meta = {
  title: 'Components/TitleSection',
  component: TitleSection,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    rightType: { control: 'select', options: ['icon', 'textButton', 'text'] },
  },
} satisfies Meta<typeof TitleSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithIcon: Story = {
  args: { title: '타이틀', rightType: 'icon' },
};

export const WithTextButton: Story = {
  args: { title: '타이틀', rightType: 'textButton', rightLabel: '전체 보기' },
};

export const WithCount: Story = {
  args: { title: '타이틀', count: 2, rightType: 'icon' },
};

export const WithSubtitle: Story = {
  args: { title: '타이틀', subtitle: '서브타이틀', rightType: 'icon' },
};

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: 16, width: 353 }}>
      <TitleSection title="타이틀" rightType="icon" />
      <TitleSection title="타이틀" rightType="textButton" rightLabel="전체 보기" />
      <TitleSection title="타이틀" count={2} rightType="icon" />
      <TitleSection title="타이틀" subtitle="서브타이틀" rightType="icon" />
    </div>
  ),
};
