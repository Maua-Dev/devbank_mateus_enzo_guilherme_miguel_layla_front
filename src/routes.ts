import { createBrowserRouter } from 'react-router'
import Dashboard from './pages/dashboard'
import DashboardLayout from './pages/dashboard/_layout'
import DashboardDeposit from './pages/dashboard/deposit'
import DashboardWithdrawal from './pages/dashboard/withdrawal'
import DashboardManagement from './pages/dashboard/management'
import Home from './pages/home'
import HomeLayout from './pages/home/_layout'
import { Children, Component } from 'react'

const routes = createBrowserRouter([
  {
    Component: HomeLayout,
    children: [
      
    ]
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
      {
        path: 'teste',
        index: true,
        Component: Home
      },
    ],
  },
])

export default routes
