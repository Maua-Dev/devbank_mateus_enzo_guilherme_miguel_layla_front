import React, { useContext, useState } from 'react'
import AuthProvider, { authContext, TAuthProviderContext } from '../../functions/AuthProvider'


export default function Home() {
    const {setApiUrl}= useContext(authContext) as TAuthProviderContext
    const [inicialApi, setInicialApi] = useState<string>('');
    function verifyUrl(url:string){
        if(url === 'https://r2tcz6zsokynb72jb6o4ffd5nm0ryfyz.lambda-url.us-west-2.on.aws/'){
            return true
        }
        return false
    }
  return (
    <div className='w-full h-screen bg-black flex items-center justify-center flex-col'>
        <input type="text" className='text-white border border-white' onChange={(e) => {
            setInicialApi(e.target.value);
        }}/>
        <button className="text-white bg-blue-400" onClick={() =>{
            if(verifyUrl(inicialApi)){
                setApiUrl(inicialApi);
            }
        }}>Enviar</button>
    </div>
  )

}
