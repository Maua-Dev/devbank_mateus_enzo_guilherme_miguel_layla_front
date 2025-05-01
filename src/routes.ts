import { createBrowserRouter } from 'react-router'
import DashboardLayout from './pages/dashboard/_layout'
import DashboardDeposit from './pages/dashboard/deposit'
import DashboardManagement from './pages/dashboard/management'
import DashboardWithdrawal from './pages/dashboard/withdrawal'
import DashboardHome from './pages/dashboard/home'
import Home from './pages/home'
import HomeLayout from './pages/home/_layout'

const routes = createBrowserRouter([
  {
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: DashboardHome,
      },
    ],
  },
  {
    path: 'dashboard',
    Component: DashboardLayout,
    children: [
      {
        index: true,
        Component: Dashboard,
      },
      {
        path: 'deposit',
        Component: DashboardDeposit,
      },
      {
        path: 'withdrawal',
        Component: DashboardWithdrawal,
      },
    ],
  },
])

export default routes
