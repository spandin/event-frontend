import { createBrowserRouter } from 'react-router-dom'

import { AuthPage } from '@/pages/auth/_index'
import RootLayout from './layouts/RootLayout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <div>Error</div>,
    children: [
      {
        path: 'auth/',
        element: <AuthPage />,
        errorElement: <div>Error</div>
      }
    ]
  }
])
