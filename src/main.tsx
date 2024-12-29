import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Initialize dark mode based on localStorage or system preference
const isDarkMode = localStorage.getItem('darkMode') === 'true' || 
  (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

if (isDarkMode) {
  document.documentElement.classList.add('dark');
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)