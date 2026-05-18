import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    variant:   { control: 'select', options: ['primary', 'secondary'] },
    size:      { control: 'select', options: ['small', 'medium', 'large'] },
    fullWidth: { control: 'boolean' },
    disabled:  { control: 'boolean' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story   = { args: { variant: 'primary',   size: 'medium', children: '버튼' } };
export const Secondary: Story = { args: { variant: 'secondary', size: 'medium', children: '버튼' } };
export const Disabled: Story  = { args: { variant: 'primary',   size: 'medium', children: '버튼', disabled: true } };

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: 200 }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="primary" disabled>Disabled</Button>
    </div>
  ),
};

export const FullWidth: Story = {
  args: { variant: 'primary', size: 'large', fullWidth: true, children: '요금제 신청하기' },
  parameters: { layout: 'padded' },
};
