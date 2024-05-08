import './styles/_global.scss'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routerProvider'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme/_index'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider
        router={router}
        future={{
          v7_startTransition: true
        }}
      />
    </ChakraProvider>
  </React.StrictMode>
)
