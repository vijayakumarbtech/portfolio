import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Only pull out framer-motion, which is large and self-contained.
        // Everything else is left to Rollup's automatic chunking — trying to
        // manually bucket every vendor package (as an earlier version of
        // this config did) created a circular chunk reference between the
        // "vendor" and "vendor-react" groups via shared transitive deps
        // like `scheduler`, which can cause "Cannot access before
        // initialization" errors at runtime.
        manualChunks(id: string) {
          if (id.includes('node_modules/framer-motion')) return 'vendor-motion';
        },
      },
    },
  },
});
