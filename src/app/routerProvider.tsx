import { createBrowserRouter } from 'react-router-dom'
import RootLayout from './layouts/rootLayout'
import { AuthPage } from '@/pages/AuthPage'
import { PrivateRoute, GuestRoute } from '@/shared/router'

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
