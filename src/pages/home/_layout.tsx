import { Outlet } from 'react-router'
import AuthProvider from '../../functions/AuthProvider'

export default function HomeLayout() {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  )
}
