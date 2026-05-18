import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextButton } from './TextButton';

const meta = {
  title: 'Components/TextButton',
  component: TextButton,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof TextButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// ── Figma: Property 1=Default (28×21) ───────────────────────────────────────
export const Default: Story = {
  name: 'Property 1=Default',
  args: { label: '버튼', color: '#ffffff' },
  parameters: { backgrounds: { default: 'dark' } },
};

// ── Figma: Property 1=Variant2 (97×22) ──────────────────────────────────────
export const Double: Story = {
  name: 'Property 1=Variant2',
  args: { type: 'double', leftLabel: '버튼', rightLabel: '버튼', color: '#ffffff' },
  parameters: { backgrounds: { default: 'dark' } },
};

// ── 실사용 예: AppBar 우측 버튼 ───────────────────────────────────────────────
export const InAppBar: Story = {
  name: 'In AppBar Context',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 2, width: 393 }}>
      {/* 단일 버튼 */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '10px 20px', background: '#3617ce', height: 48, boxSizing: 'border-box',
      }}>
        <div style={{ width: 28 }} />
        <span style={{ fontSize: 17, fontWeight: 700, color: '#fff', letterSpacing: '-0.05em' }}>홈</span>
        <TextButton label="로그인" color="#ffffff" />
      </div>

      {/* 이중 버튼 */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '10px 20px', background: '#05001a', height: 48, boxSizing: 'border-box',
      }}>
        <div style={{ width: 28 }} />
        <span style={{ fontSize: 17, fontWeight: 700, color: '#fff', letterSpacing: '-0.05em' }}>AI 서비스</span>
        <TextButton type="double" leftLabel="로그인" rightLabel="설정" color="#ffffff" />
      </div>
    </div>
  ),
  parameters: { layout: 'fullscreen' },
};

// ── 색상 변형 ─────────────────────────────────────────────────────────────────
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
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '13px 20px', background: bg,
        }}>
          <TextButton type="double" leftLabel="버튼" rightLabel="버튼" color={color} />
          <span style={{ fontSize: 12, color, opacity: 0.6 }}>{label}</span>
        </div>
      ))}
    </div>
  ),
  parameters: { layout: 'fullscreen' },
};
