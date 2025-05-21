
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'

// Create a new cache for emotion to use
const emotionCache = createCache({
  key: 'emotion-cache',
  stylisPlugins: [],
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CacheProvider value={emotionCache}>
      <BrowserRouter>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </BrowserRouter>
    </CacheProvider>
  </React.StrictMode>,
)
