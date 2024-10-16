import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AppContextProvider from './Components/context/appContext.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AppContextProvider>
  <App />
  </AppContextProvider>
</BrowserRouter>
)
