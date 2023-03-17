import { defineConfig } from 'vite';
import { chunkSplitPlugin } from 'vite-plugin-chunk-split'
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [
    solidPlugin(),
    chunkSplitPlugin({
      strategy: 'default',
    })
  ],
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
