import type { Meta, StoryObj } from '@storybook/react-vite';
import { PaymentPage } from './PaymentPage';

const meta = {
  title: 'Pages/PaymentPage',
  component: PaymentPage,
  parameters: {
    layout: 'fullscreen',
    viewport: { defaultViewport: 'mobile1' },
  },
} satisfies Meta<typeof PaymentPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
