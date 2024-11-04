import React from 'react'

export default function ResetFilter({ handleResetFilters }) {
  return (
    <div>
      <button className="bg-white-500 hover:bg-black-600 text-black font-bold py-2"
       onClick={handleResetFilters}>Reset</button>
    </div>
  )
}
