import React from 'react'

export default function ResetFilter({handleResetFilters}) {
  return (
    <div className="pl-52">
      <button className="bg-[#010203] w-40 rounded-lg h-8 flex justify-center items-center text-stone-100 hover:bg-white-600 font-bold  hover:text-white py-2"
       onClick={handleResetFilters}>Reset Filters</button>
    </div>
  )
}
