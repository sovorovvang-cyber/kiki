import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Chip } from './Chip';

const meta = {
  title: 'Components/Chip',
  component: Chip,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: { selected: { control: 'boolean' } },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default:  Story = { args: { selected: false, children: '단말기' } };
export const Selected: Story = { args: { selected: true,  children: '단말기' } };

export const ChipGroup: Story = {
  render: () => {
    const items = ['요금제', '단말기', '구독상품', '부가서비스'];
    const [active, setActive] = useState(0);
    return (
      <div style={{ display: 'flex', gap: 8 }}>
        {items.map((item, i) => (
          <Chip key={item} selected={active === i} onClick={() => setActive(i)}>
            {item}
          </Chip>
        ))}
      </div>
    );
  },
};
