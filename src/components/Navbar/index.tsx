import { useContext } from 'react'
import { authContext, TAuthProviderContext } from '../../functions/AuthProvider'

function Navbar() {
  const { userInfo } = useContext(authContext) as TAuthProviderContext

  if (!userInfo) {
    return null
  }

  return (
    <div className="w-full h-24 bg-gray-950">
      <div className="flex items-center justify-between px-4 max-w-7xl mx-auto h-full">
        <img src="/logo.png" alt="Logo" className="h-8" />
        <div className="flex flex-col items-start space-x-4">
          <div className="text-white font-semibold">Nome: {userInfo.name}</div>
          <div className="text-gray-400">Agência: {userInfo.agency}</div>
          <div className="text-gray-400">Conta: {userInfo.acnumber}</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
