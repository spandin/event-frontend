import { createBrowserRouter } from 'react-router-dom'
import RootLayout from './layouts/rootLayout'
import { AuthPage } from '@/pages/AuthPage'

import { HomePage } from '@/pages/HomePage'
import { EventPage } from '@/pages/EventsPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <div>Error</div>,
    children: [
      {
        path: 'auth/',
        element: <AuthPage />
      },
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/events',
        element: <EventPage />
      },
      {
        path: '/events/:id',
        element: <div>Events Id</div>
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
