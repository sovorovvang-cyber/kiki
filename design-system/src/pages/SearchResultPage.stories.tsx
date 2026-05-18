import type { Meta, StoryObj } from '@storybook/react-vite';
import { SearchResultPage } from './SearchResultPage';

const meta = {
  title: 'Pages/SearchResultPage',
  component: SearchResultPage,
  parameters: {
    layout: 'fullscreen',
    viewport: { defaultViewport: 'mobile1' },
  },
} satisfies Meta<typeof SearchResultPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
