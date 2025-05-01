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
    <div className="w-full h-screen bg-black flex items-center justify-center flex-col">
      <input
        type="text"
        className="text-white border border-white"
        onChange={(e) => {
          setInicialApi(e.target.value)
        }}
      />
      <button
        className="text-white bg-blue-400"
        onClick={() => {
          if (verifyUrl(inicialApi)) {
            setApiUrl(inicialApi)
            navigate('/dashboard')
          }
        }}
      >
        Enviar
      </button>
    </div>
  )
}
