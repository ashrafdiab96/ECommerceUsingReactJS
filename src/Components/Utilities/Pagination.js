import React from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = () => {
    const pageCount = 100;
    const handlePageClick = () => {};

    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel='التالي'
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel='السابق'
            renderOnZeroPageCount={null}
            containerClassName={'pagination justify-content-center mt-5'}
            pageClassName={'page-item'}
            pageLinkClassName={'page-link custom-page-link'}
            previousClassName={'page-item'}
            previousLinkClassName={'page-link custom-page-link'}
            nextClassName={'page-item'}
            nextLinkClassName={'page-link custom-page-link'}
            breakClassName={'page-item'}
            breakLinkClassName={'page-link custom-page-link'}
            // activeClassName={'active'}
            activeLinkClassName={'pagination-active'}
        />
    );
}

export default Pagination;
