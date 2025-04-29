import { Outlet } from 'react-router'
import Navbar from '../../components/Navbar'
import AuthProvider from '../../functions/AuthProvider'

function DashboardLayout() {
  return (
    <AuthProvider>
      <main className="w-full h-full min-h-screen bg-gray-100">
        <Navbar />
        <Outlet />
      </main>
    </AuthProvider>
  )
}

export default DashboardLayout
