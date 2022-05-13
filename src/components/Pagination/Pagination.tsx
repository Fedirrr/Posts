import React, { FC } from 'react';
import { Button } from 'antd';
import { IPagination } from '../../types';
import { postsPerPage } from '../../constants';
import './pagination.css';


const Pagination: FC<IPagination> = ({totalPosts, currentPage, setCurrentPage}) => {
    const pageNumbers: number[] = [];
    const nextPage = () => setCurrentPage((pageNumber: number) => pageNumber === 10 ? 10 : pageNumber + 1);
    const prevPage = () => setCurrentPage((pageNumber: number) => pageNumber === 1 ? 1 : pageNumber - 1);

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <ul className="pagination">
            <Button
                disabled={currentPage === pageNumbers[0]}
                onClick={prevPage}
            >
                Prev
            </Button>
            {pageNumbers.map((number) =>
                <li
                    key={number}
                    className={number === currentPage ? 'activePageItem' : 'pageItem'}
                    onClick={() => setCurrentPage(number)}
                >
                    {number}
                </li>
            )}
            <Button
                disabled={currentPage === pageNumbers[pageNumbers.length - 1]}
                onClick={nextPage}
            >
                Next
            </Button>
        </ul>
    );
};

export default Pagination;
