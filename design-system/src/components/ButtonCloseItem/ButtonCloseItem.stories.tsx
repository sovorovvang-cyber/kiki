import type { Meta, StoryObj } from '@storybook/react-vite';
import { ButtonCloseItem } from './ButtonCloseItem';

const meta = {
  title: 'Components/ButtonCloseItem',
  component: ButtonCloseItem,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof ButtonCloseItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// ── Figma: .ButtonCloseItem (18×18) ─────────────────────────────────────────
export const Default: Story = {};

// ── 칩/태그 컨텍스트 예시 ─────────────────────────────────────────────────────
export const InChip: Story = {
  name: 'In Chip Context',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      {['5G 요금제', '월 5만원 이하', '데이터 무제한'].map((label) => (
        <div key={label} style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 4,
          padding: '5px 10px 5px 12px',
          background: '#3617ce',
          borderRadius: 9999,
        }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: '#fff', letterSpacing: '-0.04em' }}>
            {label}
          </span>
          <ButtonCloseItem />
        </div>
      ))}
    </div>
  ),
};

// ── 검색어 태그 예시 ──────────────────────────────────────────────────────────
export const InSearchTag: Story = {
  name: 'In Search Tag',
  render: () => (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 6,
      padding: '8px 12px', background: '#f4f5fa', borderRadius: 8,
    }}>
      <span style={{ fontSize: 14, color: '#05001a', letterSpacing: '-0.04em' }}>무제한 요금제</span>
      <ButtonCloseItem />
    </div>
  ),
};
