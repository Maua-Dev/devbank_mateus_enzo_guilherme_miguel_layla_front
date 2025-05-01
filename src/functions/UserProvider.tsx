import axios from 'axios'
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react'
import { Navigate } from 'react-router'
import { authContext, TAuthProviderContext } from './AuthProvider'

export interface TUserInfo {
  name: string
  agency: string
  acnumber: string
  current_balance: number
}

export interface TUserProviderContext {
  userInfo: TUserInfo | null
  setUserInfo: Dispatch<SetStateAction<TUserInfo | null>>
}

export const userContext = createContext<TUserProviderContext | null>(null)

/*
    UserProvider component that provides user information and a function to update it.
*/

function UserProvider({ children }: { children: ReactNode }) {
  const { apiUrl } = useContext(authContext) as TAuthProviderContext
  const [userInfo, setUserInfo] = useState<TUserInfo | null>(null)

  useEffect(() => {
    // Api call to fetch user information
    async function fetchUserInfo() {
      // TODO: Replace with your actual API endpoint
      await axios
        .get(apiUrl)
        .then((res) => {
          const data = res.data
          const userInfo: TUserInfo = {
            name: data.name,
            agency: data.agency,
            acnumber: data.account,
            current_balance: data.current_balance,
          }

          setUserInfo(userInfo)
        })
        .catch((error) => {
          console.error('Error fetching user info:', error)
        })
    }

    fetchUserInfo()
  }, [apiUrl])

  return (
    <userContext.Provider value={{ userInfo, setUserInfo }}>
      {apiUrl ? children : <Navigate to="/" />}
    </userContext.Provider>
  )
}

export default UserProvider
