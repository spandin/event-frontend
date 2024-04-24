import { createBrowserRouter } from 'react-router-dom'
import { AuthPage } from '@/pages/auth'
import RootLayout from './layouts/rootLayout'
import { PrivateRoute } from '@/shared'
import { GuestRoute } from '@/shared'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <div>Error</div>,
    children: [
      {
        path: '/',
        element: (
          <PrivateRoute>
            <div>App</div>
          </PrivateRoute>
        )
      },
      {
        path: '/auth',
        element: (
          <GuestRoute>
            <AuthPage />
          </GuestRoute>
        )
      }
    ]
  }
])
