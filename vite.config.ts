import { defineConfig } from 'vite';
import { chunkSplitPlugin } from 'vite-plugin-chunk-split'
import solidPlugin from 'vite-plugin-solid';


export default defineConfig({
  plugins: [
    solidPlugin(),
    chunkSplitPlugin({
      strategy: 'default',
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
      minify:'terser',
      target: 'esnext',
      terserOptions: {
        output: {
          comments: false, // This will remove all comments from the output files
        },
      },
    }
  },
);
