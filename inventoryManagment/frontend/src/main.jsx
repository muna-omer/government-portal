import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.jsx'

const rootEl = document.getElementById('root')
console.log('mounting app, root element:', rootEl)

try {
  const root = createRoot(rootEl)
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  )
} catch (err) {
  console.error('React render error:', err)
}
