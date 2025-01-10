import React from 'react'

const Pagination = ({recipesPerPage, totalRecipes, paginate, curentPage}) => {
    const pageNumbers = []

    for(let i =1; i <= Math.ceil(totalRecipes /recipesPerPage); i++){
        pageNumbers.push(i)
    }
  return (
    <nav>
        <ul className='flex justify-center mt-4'>
            {pageNumbers.map((number) =>
            <li key={number} className='mx-2'>
                <button onClick={() => paginate(number)}
                className={`px-4 py-2 ${
                    curentPage === number ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'
                } rounded`}
                >
                    {number}
                    
                 </button>
            </li>
            )}
        </ul>
    </nav>
  )
}

export default Pagination