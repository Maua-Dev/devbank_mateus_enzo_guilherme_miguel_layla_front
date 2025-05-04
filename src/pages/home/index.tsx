import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { authContext, TAuthProviderContext } from '../../functions/AuthProvider'

export default function Home() {
  const { setApiUrl } = useContext(authContext) as TAuthProviderContext
  const [inicialApi, setInicialApi] = useState<string>('')
  const navigate = useNavigate()

  function verifyUrl(url: string) {
    if (
      url ===
      'https://r2tcz6zsokynb72jb6o4ffd5nm0ryfyz.lambda-url.us-west-2.on.aws/'
    ) {
      return true
    }
    return false
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const apiUrl = localStorage.getItem('apiUrl')
      if (apiUrl) {
        setApiUrl(apiUrl)
        navigate('/dashboard')
      }
    }
  }, [])

  return (
    <div className="flex justify-center w-full h-full  bg-gray-950 min-h-screen overflow-hidden" >
    <div className=" justify-center flex flex-col items-center bg-gray-600 w-full  h-[90-vh] shadow-lg rounded-lg">
      <img src="/logo.png" alt="logo dev" className='md:w-sm w-3xs'/>
      <input
        type="text"
        placeholder="Coloque aqui o end point da sua API"
        onChange={(e) => {
          setInicialApi(e.target.value)
        }}
        className=" placeholder-white border border-black w-[90%] max-w-[900px] p-4 h-[70px] mt-5 text-base rounded-lg bg-gray-700 text-black opacity-100 text-center"
      />
      <button onClick={() => {
          if (verifyUrl(inicialApi)) {
            setApiUrl(inicialApi)
            navigate('/dashboard')
          }
        }} className="mt-5 px-10 py-2 text-base cursor-pointer rounded-full bg-gray-950 text-white hover:bg-gray-900">
        Entrar
      </button>
    </div>
  </div>
  )
}
