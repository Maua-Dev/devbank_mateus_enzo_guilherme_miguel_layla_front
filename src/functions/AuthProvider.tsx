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
}

export const authContext = createContext<TAuthProviderContext | null>(null)

/*
    AuthProvider component that provides user information and a function to update it.
*/

function AuthProvider({ children }: { children: ReactNode }) {
  const [userInfo, setUserInfo] = useState<TUserInfo | null>(null)

  useEffect(() => {
    // Api call to fetch user information

    const fetchedUserInfo: TUserInfo = {
      name: 'John Doe',
      agency: '0001',
      acnumber: '12345-6',
      current_balance: 1000.0,
    }

    setUserInfo(fetchedUserInfo)
  }, [])

  return (
    <authContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </authContext.Provider>
  )
}

export default AuthProvider
