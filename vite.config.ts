import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '', // Empty base to ensure relative asset paths
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});