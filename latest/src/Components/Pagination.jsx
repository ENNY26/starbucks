import React, { useState } from 'react';

const Pagination = ({ recipesPerPage, totalRecipes, paginate, currentPage }) => {
    const [showAllPages, setShowAllPages] = useState(false);
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalRecipes / recipesPerPage); i++) {
        pageNumbers.push(i);
    }

    const toggleShowAllPages = () => {
        setShowAllPages(!showAllPages);
    };

    return (
        <nav>
            <ul className='flex justify-center mt-4'>
                {pageNumbers.length > 5 && !showAllPages ? (
                    <li className='mx-2'>
                        <button
                            onClick={toggleShowAllPages}
                            className='px-4 py-2 bg-gray-200 text-gray-700 rounded'
                        >
                            &rarr;
                        </button>
                    </li>
                ) : (
                    pageNumbers.map((number) => (
                        <li key={number} className='mx-2'>
                            <button
                                onClick={() => paginate(number)}
                                className={`px-4 py-2 ${
                                    currentPage === number ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'
                                } rounded`}
                            >
                                {number}
                            </button>
                        </li>
                    ))
                )}
            </ul>
        </nav>
    );
};

export default Pagination;