import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import string from 'vite-plugin-string'; // Import the plugin

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    string(), // Add the plugin here
  ],
  server: {
    historyApiFallback: true, // Ensure React Router works with Vite
  },
});