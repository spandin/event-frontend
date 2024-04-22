import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'

import RootLayout from './layouts/rootLayout'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RootLayout></RootLayout>
    </ChakraProvider>
  </React.StrictMode>
)
