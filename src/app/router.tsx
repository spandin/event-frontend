import { createBrowserRouter } from 'react-router-dom'
import RootLayout from './layouts/rootLayout'
import LoginPage from '../pages/login'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <div>Error</div>,
    children: [
      {
        path: 'login/',
        element: <LoginPage />
      }
    ]
  }
])

export default router
