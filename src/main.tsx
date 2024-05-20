import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router } from './routes'
import './index.css'
import { AppThemeProvider } from './context/themeContext'
import { AuthGuard } from './guards/AuthGuard'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

const path = window.location.pathname
ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
  <React.StrictMode>
    <AppThemeProvider>
      {path === '/entrar' ? (
        <Router />
      ) : (
        <main style={{
          paddingLeft: '250px',
          minHeight: '100vh',
        
        }}>
        <AuthGuard>
          <>
            <Router />
          </>
        </AuthGuard>
        </main>
      )}
    </AppThemeProvider>
  </React.StrictMode>
  </QueryClientProvider>
)
