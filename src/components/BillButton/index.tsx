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
      className="bg-gray-800 hover:bg-gray-600 text-white font-bold rounded transition-all duration-300 cursor-pointer w-full h-full hover:scale-105"
      onClick={onClick}
    >
      <div className="flex items-center justify-center gap-x-2">
        <span className="md:text-4xl text-2xl font-bold text-white">
          {children} R$
        </span>
      </div>
    </button>
  )
}

export default BillButton
