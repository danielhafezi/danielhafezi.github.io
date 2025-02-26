import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/danielhafezi.github.io/', // Base path for GitHub Pages repository
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});