import React from 'react'
import { Outlet } from 'react-router-dom'
import { AuthProvider } from '../providers/authProvider'
import { Loader } from '@/shared/ui'

const RootLayout: React.FC = () => {
  return (
    <AuthProvider fallback={<Loader />}>
      <Outlet />
    </AuthProvider>
  )
}

export default RootLayout
