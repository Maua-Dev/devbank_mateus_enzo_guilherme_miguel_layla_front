import { useContext, useState } from 'react'
import BillButton from '../../components/BillButton'
import { authContext, TAuthProviderContext } from '../../functions/AuthProvider'

interface TDepositInfo {
  '2': number
  '5': number
  '10': number
  '20': number
  '50': number
  '100': number
  '200': number
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

  const { userInfo } = useContext(authContext) as TAuthProviderContext

  return (
    <div className="w-full h-full flex-col items-start max-w-7xl mx-auto py-6 gap-y-4 flex">
      <p className="text-gray-800 text-2xl font-semibold">Depósito</p>
      <div className="w-full h-full max-h-16 bg-gray-300 rounded-sm px-4 flex flex-row items-center justify-between">
        <div className="w-fit h-full flex items-center gap-x-2 text-base text-gray-800">
          Saldo:{' '}
          <span className="font-bold">
            {userInfo?.current_balance.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
        </div>
        <div className="max-w-xs w-full h-full flex items-start flex-col justify-center">
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
      <p className="text-gray-800 text-lg">
        Selecione a quantidade de cada cédula que deseja depositar:
      </p>
      <div className="w-full h-full flex flex-row flex-wrap items-start justify-start gap-4 py-2">
        {Object.keys(depositInfo || {}).map((key) => (
          <div className="w-fit h-full p-4 rounded-sm bg-gray-300">
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
            <div className="w-full h-full flex items-center justify-between text-gray-800 text-lg px-4">
              Quantidade:
              <span className="font-bold">
                {depositInfo[key as keyof TDepositInfo]}
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
          Depositar
        </button>
      </div>
    </div>
  )
}

export default DashboardDeposit
