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
        "/events": "http://localhost:4000",
        "/send": "http://localhost:4000",
        "/webhook": "http://localhost:4000",
      },
    },
    preview: {
      open: true,
      port: 3000,
      host: '0.0.0.0',
    },
  })
}
