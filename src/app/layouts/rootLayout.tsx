import React from 'react'
import { Outlet } from 'react-router-dom'
import { AuthProvider } from '../providers/authProvider'

const RootLayout: React.FC = () => {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  )
}

export default RootLayout
