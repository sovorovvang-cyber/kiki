import type { Meta, StoryObj } from '@storybook/react-vite';
import { SearchBar } from './SearchBar';

const meta = {
  title: 'Components/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: { type: { control: 'select', options: ['search', 'llm'] } },
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Search: Story = { args: { type: 'search', placeholder: '검색' } };
export const LLM: Story = { args: { type: 'llm', placeholder: '무엇을 도와드릴까요?' } };

export const AllTypes: Story = {
  name: 'All Types',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: 16 }}>
      <SearchBar type="search" />
      <SearchBar type="llm" />
    </div>
  ),
};
