import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/kiki/',
  resolve: {
    alias: {
      '@ds': path.resolve(__dirname, '../design-system/src'),
    },
    dedupe: ['react', 'react-dom'],
  },
});
