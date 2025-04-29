import { Outlet } from 'react-router'
import Navbar from '../../components/Navbar'
import AuthProvider from '../../functions/AuthProvider'
import UserProvider from '../../functions/UserProvider'

function DashboardLayout() {
  return (
    <AuthProvider>
      <UserProvider>
        <main className="w-full h-full min-h-screen bg-gray-100">
          <Navbar />
          <Outlet />
        </main>
      </UserProvider>
    </AuthProvider>
  )
}

export default DashboardLayout
