import { ReactNode } from 'react'

function BillButton({
  children,
  onClick,
}: {
  children?: ReactNode
  onClick: () => void
}) {
  return (
    <button
      className="bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition-all duration-300 cursor-pointer h-56 w-56 hover:scale-105"
      onClick={onClick}
    >
      <div className="flex items-center justify-center gap-x-2">
        <span className="text-4xl font-bold text-white">{children} R$</span>
      </div>
    </button>
  )
}

export default BillButton
