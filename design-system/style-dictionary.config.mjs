import StyleDictionary from 'style-dictionary';

const sd = new StyleDictionary({
  source: [
    'tokens/primitives/**/*.json',
    'tokens/semantic/**/*.json',
    'tokens/component/**/*.json',
  ],
  platforms: {
    // 1. CSS 커스텀 프로퍼티 (--color-bg-layer-default 형식)
    css: {
      transformGroup: 'css',
      prefix: 'skt',
      buildPath: 'src/tokens/',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
          options: { outputReferences: true },
        },
      ],
    },
    // 2. TypeScript 타입 + 상수 (타입 안전하게 토큰 사용)
    ts: {
      transformGroup: 'js',
      buildPath: 'src/tokens/',
      files: [
        {
          destination: 'tokens.ts',
          format: 'javascript/es6',
        },
      ],
    },
  },
});

await sd.cleanAllPlatforms();
await sd.buildAllPlatforms();

console.log('✅ Design tokens built successfully!');
