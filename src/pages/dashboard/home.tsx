import React from 'react';
import { Link } from 'react-router';
    function DashboardHome() {
        return (
            <div className="flex justify-center w-full h-screen items-center mt-[7%] bg-white" >
              <div className=" justify-center flex flex-col items-center bg-[#b3d9f8] w-full  h-7/10 shadow-lg rounded-lg">
                <img src="/logo.png" alt="logo dev" />
                <input
                  type="text"
                  placeholder="Coloque aqui o end point da sua API"
                  className=" border border-black w-[90%] max-w-[900px] p-4 h-[70px] mt-5 text-base rounded-lg bg-[#7dbef5] text-black opacity-100 text-center"
                />
                <button className="mt-5 px-5 py-2 text-base cursor-pointer rounded-full w-[10%] bg-blue-600 text-white hover:bg-blue-700">
                  Entrar
                </button>
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