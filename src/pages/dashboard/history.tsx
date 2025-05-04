import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { authContext, TAuthProviderContext } from "../../functions/AuthProvider";

interface THistoryResponse {
    all_transactions: {
        type: string;
        value: number;
        current_balance: number;
        timestamp: string;
    }[]
}

const TTransactionType = new Map<string, string>([
    ['deposit', 'Depósito'],
    ['withdraw', 'Saque'],
])

function DashboardHistory() {
    const [history, setHistory] = useState<THistoryResponse>()

    const { apiUrl } = useContext(authContext) as TAuthProviderContext

    const navigate = useNavigate();

    useEffect(() => {
        async function fetchHistory() {
            await axios.get<THistoryResponse>(apiUrl + 'history').then((res) => {
                if (res.status === 200) {
                    setHistory(res.data)
                } else {
                    console.log('Erro ao buscar histórico de transações')
                }
            }
            ).catch((err) => {
                console.log('Erro ao buscar histórico de transações', err)
            })
        }

        fetchHistory()
    }, [])

    return (
        <div className="w-full h-full flex flex-col items-start max-w-7xl mx-auto py-6 gap-y-4 px-4 md:px-0">
            <p className="text-gray-800 text-2xl font-semibold">Histórico de transações</p>
            {!history ? (
                <div className="w-full h-full min-h-dvh bg-gray-300 animate-pulse shadow-lg rounded-lg p-4 overflow-auto">
                </div>
            ) : (
            <div className="w-full h-full min-h-dvh bg-gray-300 shadow-lg rounded-lg p-4 overflow-auto">
                <table className="w-full table-auto text-left border-collapse">
                    <thead className="bg-gray-300 text-gray-700">
                        <tr>
                        <th className="px-4 py-2">Data e hora</th>
                        <th className="px-4 py-2">Tipo</th>
                        <th className="px-4 py-2">Valor</th>
                        <th className="px-4 py-2">Saldo final</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        {history?.all_transactions.map((transaction, index) => (
                            <tr key={index} className="bg-gray-200 hover:bg-gray-100 transition duration-200">
                            <td className="px-4 py-2">{new Date(transaction.timestamp).toLocaleString('pt-BR')}</td>
                            <td className="px-4 py-2">{TTransactionType.get(transaction.type)}</td>
                            <td className="px-4 py-2">{transaction.value.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                            })}</td>
                            <td className="px-4 py-2">{transaction.current_balance.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                            })}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            )}
            <div>
            <button onClick={() => {
                navigate(-1);
                }} className="bg-gray-800 hover:bg-gray-600 text-white font-bold py-4 px-8 rounded transition-all duration-300 cursor-pointer">
                Voltar
            </button>
            </div>
        </div>
    )
}

export default DashboardHistory
