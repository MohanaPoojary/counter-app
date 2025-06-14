import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/counter-app/',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './test/setup.ts',
    css: true,
        coverage: {
            reporter: ["text", "lcov", "html"], // include 'html' reporter
            exclude: ['src/main.tsx']
  },
}
});
