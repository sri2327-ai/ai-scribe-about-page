
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ToastProvider } from '@/hooks/use-toast'
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from "@/components/ui/toaster"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <ToastProvider>
          <App />
          <Toaster />
        </ToastProvider>
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
