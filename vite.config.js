import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['yup'], // Exclude yup from the bundle
      output: {
        globals: {
          yup: 'yup', // Map 'yup' to global variable if necessary
        },
      },
    },
  },
});
