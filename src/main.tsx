import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router } from './routes'
import './index.css'
import { Sidebar } from './components/Sidebar'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Sidebar />
    <main style={{
      paddingLeft: '250px',
      backgroundColor:"#464646"
    
    }}>
      <Router />
    </main>
  </React.StrictMode>,
)
