import App from '@/App.tsx'
import '@/tailwind.css'
import '@fontsource-variable/noto-sans-sc'
import '@fontsource/noto-serif-sc/200.css'
import '@fontsource/noto-serif-sc/400.css'
import '@fontsource/noto-serif-sc/700.css'
import React from 'react'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
