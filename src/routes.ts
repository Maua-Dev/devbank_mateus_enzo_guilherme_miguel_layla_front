import { createBrowserRouter } from 'react-router'
import Dashboard from './pages/dashboard'
import DashboardLayout from './pages/dashboard/_layout'
import DashboardDeposit from './pages/dashboard/deposit'
import DashboardManagement from './pages/dashboard/management'
import DashboardWithdrawal from './pages/dashboard/withdrawal'
import Home from './pages/home'
import HomeLayout from './pages/home/_layout'

const routes = createBrowserRouter([
  {
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Home,
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
        path: 'management',
        Component: DashboardManagement,
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
