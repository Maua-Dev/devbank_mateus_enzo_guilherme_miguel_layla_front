import { useContext } from 'react'
import { Link, useNavigate,  } from 'react-router'
import { TUserProviderContext, userContext } from '../../functions/UserProvider'

function DashboardManagement() {
  const {userInfo}= useContext(userContext) as TUserProviderContext
  const navigate = useNavigate()

  if (!userInfo){
    return null
  }
  
  return (
    <main className="w-full h-full flex-col items-start max-w-7xl mx-auto py-6 gap-y-4 flex px-4 md:px-0">
      <section className="flex bg-gray-300 p-3 rounded-md justify-between items-center w-full">
        <div className="text-2xl p-1">O que você deseja fazer?</div>
        <div className=" py-3 bg-gray-800 h rounded-md flex items-start w-21/100">
          <span className="text-xl p-3 text-white">Saldo atual: R${userInfo.current_balance}</span>
        </div>
      </section>
      <section className="py-4 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="h-120 w-full md:w-1/4 bg-gray-800 flex items-center justify-center rounded-xl hover:bg-gray-600 mb-2 duration-300 transition-all cursor-pointer">
            <Link to={`/dashboard/deposit`} >
              <img
                src="/depositar.png"
                alt="opção depositar"
                className="py-10 px-15 w-xs md:w-full"
              />
            </Link>
          </div>
          <div className="h-120 w-full md:w-1/4 bg-gray-800 flex items-center justify-center rounded-xl hover:bg-gray-600 mb-2 duration-300 transition-all cursor-pointer">
            <Link to={`/dashboard/withdrawal`} >
              <img
                src="/retirar.png"
                alt="opção sacar"
                className="py-10 px-15 w-xs md:w-full"
              />
            </Link>
          </div>
          <div className="h-120 w-full md:w-1/4 bg-gray-800 flex items-center justify-center rounded-xl hover:bg-gray-600 mb-2 duration-300 transition-all cursor-pointer">
            <Link to={`/dashboard/history`} >
              <img
                src="/transacao.png"
                alt="opção transações"
                className="py-10 px-15 w-xs md:w-full"
              />
            </Link>
          </div>
        </div>
        <div className='flex justify-center jus py-7'> 
            <button className='bg-gray-800 hover:bg-gray-600 duration-300 text-white py-4 px-8 rounded transition-all' onClick={() => {
              localStorage.removeItem('apiUrl');
              navigate('/');
            }}>
              Sair
            </button>
        </div>
      </section>
    </main>
  )
}
export default DashboardManagement
