// import logoDev from "./images/Logo_DevBank.png";
// import interrogacao from "./images/pergunta de interrogação.png";
// import depositar from "";
// import retirar from "./images/retirar.png";
// import transacao from "./images/transacao.png";
import { useContext } from 'react'
import { Link } from 'react-router'
import { userContext, TUserProviderContext } from '../../functions/UserProvider'

function DashboardManagement() {
  const {userInfo}= useContext(userContext) as TUserProviderContext

  if (!userInfo){
    return null
  }
  return (
    <>
      <header className="flex h-1/5 w-full bg-gray-950 justify-between">
        <img src="/logo.png" alt="logo dev" className=" w-1/3 p-4 ml-6" />
        <section className="w-1/3 h-1/2 flex p-3 justify-end">
          <div className="flex flex-col w-4/10 bg-white rounded-md p-3 mr-9">
            <span className="text-blue-500">Nome:</span>
            <span className="text-blue-500">Agência:</span>
            <span className="text-blue-500">Conta:</span>
          </div>
        </section>
      </header>
      <main className="h-1/3 w-full px-10 py-10">
        <section className="flex bg-gray-300 p-3 rounded-md justify-between items-center">
          <div className="text-4xl p-1">O que você deseja fazer?</div>
          <div className=" py-3 bg-gray-800 h rounded-md flex items-start w-21/100">
            <span className="text-xl p-3 text-white">Saldo atual: R${userInfo.current_balance}</span>
          </div>
        </section>
        <section className="py-4">
          <div className="flex items-center justify-between">
            <div className="h-120 w-1/4 bg-gray-800 flex items-center justify-center rounded-xl hover:bg-gray-950 mb-2">
              <img
                src="/depositar.png"
                alt="opção depositar"
                className="py-10 px-15"
              />
            </div>
            <div className="h-120 w-1/4 bg-gray-800 flex items-center justify-center rounded-xl hover:bg-gray-950">
              <img
                src="/retirar.png"
                alt="opção retirar"
                className="py-10 px-15"
              />
            </div>
            <div className="h-120 w-1/4 bg-gray-800 flex items-center justify-center rounded-xl hover:bg-gray-950">
              <img
                src="/transacao.png"
                alt="opção trasacao"
                className="px-12"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
export default DashboardManagement
