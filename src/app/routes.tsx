import { createBrowserRouter } from 'react-router-dom'

import RootLayout from './layouts/rootLayout'
import { LoginPage, RecoveryPage, RegisterPage } from '@/pages/auth/_index'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <div>Error</div>,
    children: [
      {
        path: 'login/',
        element: <LoginPage />,
        errorElement: <div>Error</div>
      },
      {
        path: 'register/',
        element: <RegisterPage />,
        errorElement: <div>Error</div>
      },
      {
        path: 'recovery-password/',
        element: <RecoveryPage />,
        errorElement: <div>Error</div>
      }
    ]
  }
])
