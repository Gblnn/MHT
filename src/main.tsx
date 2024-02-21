import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/style.css'
import './styles/utils.css'
import '../app/globals.css'
import { ConfigProvider, theme } from 'antd'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider theme={{algorithm: theme.darkAlgorithm}}>
    <App />
    </ConfigProvider>
  </React.StrictMode>,
)
