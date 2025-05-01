
function QuantityButton({
    quantity,
    onDecrease,
    onIncrease,
    }: {
    quantity: number
    onDecrease: () => void
    onIncrease: () => void
}) {
  return (
    <div className='flex items-center justify-center gap-x-10'>
        <button
            className="bg-gray-800 hover:bg-gray-600 text-white font-bold rounded transition-all duration-300 cursor-pointer w-full h-full min-h-12 hover:scale-105"
            onClick={onDecrease}
            >
                -
            </button>
        <p>{quantity}</p>
        <button
            className="bg-gray-800 hover:bg-gray-600 text-white font-bold rounded transition-all duration-300 cursor-pointer w-full h-full hover:scale-105"
            onClick={onIncrease}
            >
                +
            </button>
    </div>
  )
}

export default QuantityButton