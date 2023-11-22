import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './App.Routes.jsx'
import './index.css'
import { AuthProvider } from './providers/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <AuthProvider>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </AuthProvider>
)
