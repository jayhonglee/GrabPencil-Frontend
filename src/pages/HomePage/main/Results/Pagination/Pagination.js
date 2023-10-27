import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PaginationItem from "./PaginationItem/PaginationItem";

function Pagination({ paginationObject }) {
    const { currentPage, pageIndexes, onPageChange } = paginationObject;
    const nextPage = currentPage + 1;
    const previousPage = currentPage - 1;
    const pageExists = (page) => {
        if (pageIndexes?.includes(page)) return true;
        return false;
    };

    const paginationListRender = pageIndexes?.map((index, num) => {
        return (
            <PaginationItem
                item={index}
                key={num + 1}
                currentPage={currentPage}
                onClick={() => onPageChange(index)}
            />
        );
    });

    return (
        <nav className="d-flex justify-content-center align-items-center mt-4 px-5">
            {pageExists(previousPage) ? (
                <PaginationItem
                    item={<FontAwesomeIcon icon={"angle-left"} />}
                    key={-1}
                    onClick={() => onPageChange(currentPage - 1)}
                />
            ) : (
                ""
            )}
            {paginationListRender}
            {pageExists(nextPage) ? (
                <PaginationItem
                    item={<FontAwesomeIcon icon={"angle-right"} />}
                    key={0}
                    onClick={() => onPageChange(currentPage + 1)}
                />
            ) : (
                ""
            )}
        </nav>
    );
}

export default Pagination;
