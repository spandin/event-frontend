import { createBrowserRouter } from 'react-router-dom'

import RootLayout from './layouts/RootLayout'
import { AuthPage } from '@/pages/auth/_index'

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
