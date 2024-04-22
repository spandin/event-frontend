import './styles/_fonts.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'

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
        element: <LoginPage />,
        errorElement: <div>Error</div>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
)
