import React from 'react';
import { Link } from 'react-router';
    function DashboardHome() {
        return (
            <div className="flex justify-center w-full h-full  bg-gray-950 min-h-screen overflow-hidden" >
              <div className=" justify-center flex flex-col items-center bg-gray-600 w-full  h-[90-vh] shadow-lg rounded-lg">
                <img src="/logo.png" alt="logo dev" />
                <input
                  type="text"
                  placeholder="Coloque aqui o end point da sua API"
                  className=" placeholder-white border border-black w-[90%] max-w-[900px] p-4 h-[70px] mt-5 text-base rounded-lg bg-gray-700 text-black opacity-100 text-center"
                />
                <Link to ={}>
                  <button className="mt-5 px-5 py-2 text-base cursor-pointer rounded-full w-[10%] bg-gray-950 text-white hover:bg-gray-900">
                    Entrar
                  </button>
                </Link>
              </div>
            </div>
          );
    }
    
    export default DashboardHome;

   /*<>
    <header>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>DevBank Playground</title>
        <link rel="stylesheet" href="style.css" />
    </header>
    <main>
        <section class="corpo">
            <div class="container">
                <label class="NomeDev">Dev Bank</label><br>
                <input type="text" class="local-link" id="local-link" placeholder="Coloque aqui o end point da sua API"><br>
                <button class="botao-enviar">Entrar</button>
            </div>
        </section>
    </main>
    </>*/