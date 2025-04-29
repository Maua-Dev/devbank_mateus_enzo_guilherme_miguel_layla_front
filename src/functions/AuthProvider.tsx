"use client" 
import axios from 'axios'
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from 'react'

export interface TUserInfo {
  name: string
  agency: string
  acnumber: string
  current_balance: number
}

export interface TAuthProviderContext {
  userInfo: TUserInfo | null
  setUserInfo: Dispatch<SetStateAction<TUserInfo | null>>
  apiUrl: string
  setApiUrl: Dispatch<SetStateAction<string>>
}

export const authContext = createContext<TAuthProviderContext | null>(null)

/*
    AuthProvider component that provides user information and a function to update it.
*/

function AuthProvider({ children }: { children: ReactNode }) {
  const [userInfo, setUserInfo] = useState<TUserInfo | null>(null)
  const [apiUrl, setApiUrl] = useState<string>('');

  useEffect(() => {
    console.log(apiUrl)
    // Api call to fetch user information
    async function fetchUserInfo() {
      // TODO: Replace with your actual API endpoint
      await axios.get(apiUrl).then((res) => {
        const data = res.data
        const userInfo: TUserInfo = {
          name: data.name,
          agency: data.agency,
          acnumber: data.account,
          current_balance: data.current_balance,
        }
        
        setUserInfo(userInfo)
      }).catch((error) => {
        console.error('Error fetching user info:', error)
      });
    }

    fetchUserInfo()
  }, [apiUrl, setApiUrl])

  return (
    <authContext.Provider value={{ userInfo, setUserInfo, apiUrl, setApiUrl }}>
      {children}
    </authContext.Provider>
  )
}

export default AuthProvider
