import { createBrowserRouter } from 'react-router-dom'
import RootLayout from './layouts/rootLayout'
import { GuestRoute, PrivateRoute } from '@/shared/router/_index'
import { AuthPage } from '@/pages/Auth/_index'
import { EventPage } from '@/pages/Events/_index'
import { HomePage } from '@/pages/Home/_index'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <div>Error</div>,
    children: [
      {
        path: 'auth/',
        element: (
          <GuestRoute>
            <AuthPage />
          </GuestRoute>
        )
      },
      {
        path: '/',
        element: (
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        )
      },
      {
        path: '/events',
        element: (
          <PrivateRoute>
            <EventPage />
          </PrivateRoute>
        )
      },
      {
        path: '/events/:id',
        element: (
          <PrivateRoute>
            <div>Events Id</div>
          </PrivateRoute>
        )
      },
      {
        path: '/events/create',
        element: <div>Create Event</div>
      },
      {
        path: '/contacts',
        element: <div>Contacts</div>
      },
      {
        path: '/user/:userId',
        element: <div>User ID</div>
      },
      {
        path: '/statistics',
        element: <div>Statistics</div>
      },
      {
        path: '/settings',
        element: <div>Settings</div>
      }
    ]
  }
])
