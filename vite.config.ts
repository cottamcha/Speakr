import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  optimizeDeps: {
    include: ['lodash-es','firebase/app', 'firebase/firestore'],
  },
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
