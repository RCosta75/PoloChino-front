import React from 'react'

export default function ResetFilter({handleResetFilters}) {
  return (
    <div>
      <button className="bg-white-800 hover:bg-white-600 text-black font-bold  hover:text-white py-2"
       onClick={handleResetFilters}>Reset</button>
    </div>
  )
}
