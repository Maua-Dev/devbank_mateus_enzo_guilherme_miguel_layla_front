import { createBrowserRouter } from 'react-router'
import Dashboard from './pages/dashboard'
import DashboardLayout from './pages/dashboard/_layout'
import DashboardDeposit from './pages/dashboard/deposit'
import DashboardWithdrawal from './pages/dashboard/withdrawal'
import DashboardManagement from './pages/dashboard/management'

const routes = createBrowserRouter([
  {
    path: '/',
    Component: DashboardLayout,
    children: [
      {
        index: true,
        Component: Dashboard,
      },
      {
        path: 'menagement',
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
