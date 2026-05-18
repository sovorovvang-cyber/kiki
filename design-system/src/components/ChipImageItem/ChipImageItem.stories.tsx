import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ChipImageItem } from './ChipImageItem';

const meta = {
  title: 'Components/ChipImageItem',
  component: ChipImageItem,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    selected: { control: 'boolean' },
  },
} satisfies Meta<typeof ChipImageItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// ── Figma: Selected=Off (selected, purple) ───────────────────────────────────
export const Selected: Story = {
  name: 'Selected=Off (Active)',
  args: { label: '단말기', selected: true },
};

// ── Figma: Selected=On (default, white) ──────────────────────────────────────
export const Default: Story = {
  name: 'Selected=On (Default)',
  args: { label: '단말기', selected: false },
};

// ── 두 상태 나란히 ─────────────────────────────────────────────────────────────
export const BothStates: Story = {
  name: 'Both States',
  render: () => (
    <div style={{ display: 'flex', gap: 8, padding: 16, background: '#f4f5fa', borderRadius: 12 }}>
      <ChipImageItem label="단말기" selected={true} />
      <ChipImageItem label="단말기" selected={false} />
    </div>
  ),
};

// ── 인터랙티브 필터 그룹 ──────────────────────────────────────────────────────
export const FilterGroup: Story = {
  name: 'Interactive Filter Group',
  render: () => {
    const [selected, setSelected] = useState<string>('단말기');
    const items = ['단말기', '기프트', '약정', '기간', '혜택'];
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, padding: 16, background: '#f4f5fa', borderRadius: 12, maxWidth: 360 }}>
        {items.map((item) => (
          <ChipImageItem
            key={item}
            label={item}
            selected={selected === item}
            onClick={() => setSelected(item)}
          />
        ))}
      </div>
    );
  },
};
