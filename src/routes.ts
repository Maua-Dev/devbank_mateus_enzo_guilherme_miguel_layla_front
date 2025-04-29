import { createBrowserRouter } from 'react-router'
import Dashboard from './pages/dashboard'
import DashboardLayout from './pages/dashboard/_layout'
import DashboardDeposit from './pages/dashboard/deposit'

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
        path: 'deposit',
        Component: DashboardDeposit,
      },
    ],
  },
])

export default routes
