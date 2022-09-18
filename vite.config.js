import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command, mode }) => {

  process.env = {...process.env, ...loadEnv(mode, process.cwd())};
  return {
    plugins: [react()],
  }
})