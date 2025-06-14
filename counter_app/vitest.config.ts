import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/counter-app/',  // <-- make sure this ends with a slash
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './test/setup.ts',
    css: true,
    coverage: {
      reporter: ['text', 'lcov', 'html'],
      exclude: ['src/main.tsx'],
    },
  },
})
