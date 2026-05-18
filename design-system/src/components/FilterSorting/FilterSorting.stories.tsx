import type { Meta, StoryObj } from '@storybook/react-vite';
import { FilterSorting } from './FilterSorting';

const meta = {
  title: 'Components/FilterSorting',
  component: FilterSorting,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof FilterSorting>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { totalCount: 256, sortLabel: '인기순', divider: true },
};

export const NoDivider: Story = {
  args: { totalCount: 45, sortLabel: '최신순', divider: false },
};
