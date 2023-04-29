import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import elm from 'vite-plugin-elm';

export default defineConfig({
  plugins: [react(), elm()],
});
