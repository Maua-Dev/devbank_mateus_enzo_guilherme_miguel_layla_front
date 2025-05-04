import { Outlet } from 'react-router'
import Navbar from '../../components/Navbar'
import AuthProvider from '../../functions/AuthProvider'
import UserProvider from '../../functions/UserProvider'

function DashboardLayout() {
  return (
    <AuthProvider>
      <UserProvider>
        <main className="w-full min-h-svh bg-gray-100">
          <Navbar />
          <div className='w-full h-full'>
            <Outlet />
          </div>
        </main>
      </UserProvider>
    </AuthProvider>
  )
}

export default DashboardLayout
