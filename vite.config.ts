import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import { qrcode } from 'vite-plugin-qrcode'

export default () => {
  return defineConfig({
    plugins: [react(), viteTsconfigPaths(), qrcode()],
    server: {
      open: true,
      port: 3000,
      host: '0.0.0.0',
      proxy: {
        '/events': 'http://localhost:4000',
        '/send': 'http://localhost:4000',
        '/webhook': 'http://localhost:4000',
      },
    },
    preview: {
      open: true,
      port: 3000,
      host: '0.0.0.0',
    },
    build:{
      cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom']
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return 'assets/css/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        }
      }
    },
    chunkSizeWarningLimit: 1000
    }
  })
}
