import { useContext, useState } from 'react'
import BillButton from '../../components/BillButton'
import { authContext, TAuthProviderContext } from '../../functions/AuthProvider'

interface TwithdrawalInfo {
  '2': number
  '5': number
  '10': number
  '20': number
  '50': number
  '100': number
  '200': number
}

function DashboardWithdrawal() {
  const [withdrawalInfo, setwithdrawalInfo] = useState<TwithdrawalInfo>({
    '2': 0,
    '5': 0,
    '10': 0,
    '20': 0,
    '50': 0,
    '100': 0,
    '200': 0,
  })

  const { userInfo } = useContext(authContext) as TAuthProviderContext

  return (
    <div className="w-full h-full flex-col items-start max-w-7xl mx-auto py-6 gap-y-4 flex px-4 md:px-0">
      <p className="text-gray-800 text-2xl font-semibold">Saque</p>
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
            Quantidade sacada:{' '}
            <span className="font-bold">
              {withdrawalInfo
                ? Object.entries(withdrawalInfo)
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
              {withdrawalInfo
                ? (userInfo?.current_balance! -
                    Object.entries(withdrawalInfo).reduce(
                      (total, [key, value]) => total + Number(key) * value,
                      0
                    )
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
        Selecione a quantidade de cada cédula que deseja sacar:
      </p>
      <div className="w-full h-full grid grid-cols-2 md:grid-cols-5 grid-rows-[repeat(4,16rem)] md:grid-rows-[repeat(2,16rem)] items-start justify-start gap-4 py-2">
        {Object.keys(withdrawalInfo || {}).map((key) => (
          <div className="w-full h-full p-4 rounded-sm bg-gray-300 flex flex-col">
            <BillButton
              key={key}
              onClick={() => {
                setwithdrawalInfo((prevState) => ({
                  ...prevState,
                  [key as keyof TwithdrawalInfo]:
                    prevState[key as keyof TwithdrawalInfo] + 1,
                }))
              }}
            >
              {key}
            </BillButton>
            <div className="w-full flex items-center justify-between text-gray-800 text-lg px-4">
              Quantidade:
              <span className="font-bold">
                {withdrawalInfo[key as keyof TwithdrawalInfo]}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full h-full flex items-center justify-center gap-x-4 py-2">
        <button className="bg-gray-600 hover:bg-gray-400 text-white font-bold py-4 px-8 rounded transition-all duration-300 cursor-pointer">
          Voltar
        </button>
        <button
          className="bg-gray-800 hover:bg-gray-600 text-white font-bold py-4 px-8 rounded transition-all duration-300 cursor-pointer"
          onClick={() => {}}
        >
          Sacar
        </button>
      </div>
    </div>
  )
}

export default DashboardWithdrawal
