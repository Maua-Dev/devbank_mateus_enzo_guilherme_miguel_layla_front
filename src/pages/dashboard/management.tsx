// import logoDev from "./images/Logo_DevBank.png";
// import interrogacao from "./images/pergunta de interrogação.png";
// import depositar from "";
// import retirar from "./images/retirar.png";
// import transacao from "./images/transacao.png";
import { Link } from 'react-router';


function DashboardManagement() {

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
            <div className="rounded-full bg-white flex justify-center items-center w-2/10 p-1 mr-2">
            {/* <img src= alt="sibolo interrogacao" /> */}
            </div>
          </section>
        </header>
        <main className="h-1/3 w-full px-10 py-10">
          <section className="flex bg-[#0073E6]/25 p-3 rounded-md justify-between items-center">
            <div className="text-4xl p-1">O que você deseja fazer?</div>
            <div className=" py-3  bg-[#0073E6]/30 h rounded-md flex items-start w-21/100">
            <span className="text-xl p-3 text-white">Saldo atual:</span>
            </div> 
          </section>
          <section className="py-5">
                <Link to= "/">
                    <div className="flex items-center justify-between">
                        <img src="/depositar.png" alt="opção deposirar" className="hover:bg-blue-950"/>
                        <img src="/retirar.png"alt="opção retirar" className="hover:bg-blue-950" />
                        <img src="/transacao.png" alt="opção trasacao" className="hover:bg-blue-950"/>
                    </div>
                </Link>
          </section>
        </main>
      </>
    )
}
export default DashboardManagement;
  
  
  