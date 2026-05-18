import type { Meta, StoryObj } from '@storybook/react-vite';
import { LeftItem } from './LeftItem';

const meta = {
  title: 'Components/LeftItem',
  component: LeftItem,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    type: { control: 'select', options: ['ai', 'ai+gift'] },
    color: { control: 'color' },
  },
} satisfies Meta<typeof LeftItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// ── Figma: Type=Ai+Gift (85×22) ─────────────────────────────────────────────
export const AiAndGift: Story = {
  name: 'Type=Ai+Gift',
  args: { type: 'ai+gift', color: '#ffffff' },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

// ── Figma: Type=Ai (43×22) ───────────────────────────────────────────────────
export const AiOnly: Story = {
  name: 'Type=Ai',
  args: { type: 'ai', color: '#ffffff' },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

// ── AppBar 컨텍스트 예시 ─────────────────────────────────────────────────────
export const InAppBar: Story = {
  name: 'In AppBar Context',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 2, width: 393 }}>
      {/* AI+Gift AppBar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 20px',
        background: 'linear-gradient(135deg, #3617ce 0%, #6b3fa0 100%)',
        height: 48,
        boxSizing: 'border-box',
      }}>
        <LeftItem type="ai+gift" color="#ffffff" />
        <span style={{ fontSize: 17, fontWeight: 700, color: '#fff', letterSpacing: '-0.05em' }}>홈</span>
        <div style={{ width: 22 }} />
      </div>

      {/* AI only AppBar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 20px',
        background: '#05001a',
        height: 48,
        boxSizing: 'border-box',
      }}>
        <LeftItem type="ai" color="#ffffff" />
        <span style={{ fontSize: 17, fontWeight: 700, color: '#fff', letterSpacing: '-0.05em' }}>AI 서비스</span>
        <div style={{ width: 22 }} />
      </div>
    </div>
  ),
  parameters: { layout: 'fullscreen' },
};

// ── 색상 커스터마이징 ─────────────────────────────────────────────────────────
export const Colors: Story = {
  name: 'Color Variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 0, width: 393 }}>
      {[
        { bg: '#3617ce', color: '#ffffff', label: 'White on Primary' },
        { bg: '#05001a', color: '#ffffff', label: 'White on Dark' },
        { bg: '#f4f5fa', color: 'rgba(6,12,31,1)', label: 'Dark on Light' },
      ].map(({ bg, color, label }) => (
        <div key={label} style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '13px 20px',
          background: bg,
        }}>
          <LeftItem type="ai+gift" color={color} />
          <span style={{ fontSize: 12, color, opacity: 0.6 }}>{label}</span>
        </div>
      ))}
    </div>
  ),
  parameters: { layout: 'fullscreen' },
};
