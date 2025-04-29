'use client'
import {
  createContext,
  Dispatch,
  memo,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from 'react'

export interface TAuthProviderContext {
  apiUrl: string
  setApiUrl: Dispatch<SetStateAction<string>>
}

export const authContext = createContext<TAuthProviderContext | null>(null)

/*
    AuthProvider component that provides auth information and a function to update it.
*/

const AuthProvider = memo(function AuthProvider({
  children,
}: {
  children: ReactNode
}) {
  const [apiUrl, setApiUrl] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('apiUrl') || ''
    }
    return ''
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (apiUrl) {
        localStorage.setItem('apiUrl', apiUrl)
      } else {
        localStorage.removeItem('apiUrl')
      }
    }
  }, [apiUrl])

  return (
    <authContext.Provider value={{ apiUrl, setApiUrl }}>
      {children}
    </authContext.Provider>
  )
})

export default AuthProvider
