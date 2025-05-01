import axios from 'axios'
import { useContext, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import BillButton from '../../components/BillButton'
import QuantityButton from '../../components/QuantityButton'
import { authContext, TAuthProviderContext } from '../../functions/AuthProvider'
import { TUserProviderContext, userContext } from '../../functions/UserProvider'

interface TDepositInfo {
  '2': number
  '5': number
  '10': number
  '20': number
  '50': number
  '100': number
  '200': number
}

interface TDepositResponse {
  current_balance: number
  timestamp: string
}

function DashboardDeposit() {
  const [depositInfo, setDepositInfo] = useState<TDepositInfo>({
    '2': 0,
    '5': 0,
    '10': 0,
    '20': 0,
    '50': 0,
    '100': 0,
    '200': 0,
  })

  const { apiUrl } = useContext(authContext) as TAuthProviderContext
  const { userInfo, setUserInfo } = useContext(userContext) as TUserProviderContext

  async function handleDeposit() {
    await axios.post<TDepositResponse>(apiUrl + 'deposit', depositInfo).then((res) => {
      if (res.status === 201) {
        setDepositInfo({
          '2': 0,
          '5': 0,
          '10': 0,
          '20': 0,
          '50': 0,
          '100': 0,
          '200': 0,
        })
        
        setUserInfo((prevState) => 
          prevState
            ? { ...prevState, current_balance: res.data.current_balance }
            : null
        )

        toast.success('Depósito realizado com sucesso!', {
          position: 'top-right',
          autoClose: 3000,
        })
      } else if (res.status === 403) {
        toast.error('Erro ao realizar depósito!', {
          position: 'top-right',
          autoClose: 3000,
        })
      }
    })
  }

  return (
    <div className="w-full h-full flex-col items-start max-w-7xl mx-auto py-6 gap-y-4 flex px-4 md:px-0">
      <ToastContainer />
      <p className="text-gray-800 text-2xl font-semibold">Depósito</p>
      <div className="w-full h-full md:max-h-16 bg-gray-300 rounded-sm px-4 py-4 md:py-0 flex md:flex-row flex-col md:items-center justify-between">
        <div className="md:w-fit w-full h-full flex items-center justify-between md:justify-normal gap-x-2 text-base text-gray-800">
          Saldo:{' '}
          <span className="font-bold">
            {userInfo?.current_balance.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
        </div>
        <div className="md:max-w-xs w-full h-full flex items-start flex-col justify-center">
          <div className="w-full flex justify-between">
            Quantidade depositada:{' '}
            <span className="font-bold">
              {depositInfo
                ? Object.entries(depositInfo)
                    .reduce(
                      (total, [key, value]) => total + Number(key) * value,
                      0
                    )
                    .toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })
                : 'R$ 0,00'}
            </span>
          </div>
          <div className="w-full flex justify-between">
            Quantidade final:{' '}
            <span className="font-bold">
              {depositInfo
                ? (
                    Object.entries(depositInfo).reduce(
                      (total, [key, value]) => total + Number(key) * value,
                      0
                    ) + userInfo?.current_balance!
                  ).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })
                : userInfo?.current_balance.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
            </span>
          </div>
        </div>
      </div>
      <p className="text-gray-800 text-base md:text-lg">
        Selecione a quantidade de cada cédula que deseja depositar:
      </p>
      <div className="w-full h-full grid grid-cols-2 md:grid-cols-5 grid-rows-[repeat(4,14rem)] md:grid-rows-[repeat(2,16rem)] items-start justify-start gap-4 py-2">
        {Object.keys(depositInfo || {}).map((key) => (
          <div className="w-full h-full p-4 rounded-sm bg-gray-300 flex flex-col gap-y-2">
            <BillButton
              key={key}
              onClick={() => {
                setDepositInfo((prevState) => ({
                  ...prevState,
                  [key as keyof TDepositInfo]:
                    prevState[key as keyof TDepositInfo] + 1,
                }))
              }}
            >
              {key}
            </BillButton>
            <QuantityButton quantity={depositInfo[key as keyof TDepositInfo]} onDecrease={() => {
                if (depositInfo[key as keyof TDepositInfo] > 0) {
                  setDepositInfo((prevState) => ({
                    ...prevState,
                    [key as keyof TDepositInfo]:
                      prevState[key as keyof TDepositInfo] - 1,
                  }))
                }
              }} onIncrease={() => {
                setDepositInfo((prevState) => ({
                  ...prevState,
                  [key as keyof TDepositInfo]:
                    prevState[key as keyof TDepositInfo] + 1,
                }))
              }} />
          </div>
        ))}
      </div>
      <div className="w-full h-full flex items-center justify-center gap-x-4 py-2">
        <button className="bg-gray-600 hover:bg-gray-400 text-white font-bold py-4 px-8 rounded transition-all duration-300 cursor-pointer">
          Voltar
        </button>
        <button
          className="bg-gray-800 hover:bg-gray-600 text-white font-bold py-4 px-8 rounded transition-all duration-300 cursor-pointer"
          onClick={() => {
            handleDeposit()
          }}
        >
          Depositar
        </button>
      </div>
    </div>
  )
}

export default DashboardDeposit
