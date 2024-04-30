/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react"

const useUsers = (users) => {

    //pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsDefaultPerPage] = useState(5);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(users.length / itemsPerPage);

    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const handleItemsPerPageChange = (e) => {
        setItemsDefaultPerPage(parseInt(e.target.value));
        setCurrentPage(1);
    };

    return {
        totalPages,
        currentItems,
        currentPage,
        itemsPerPage,
        prevPage,
        nextPage,
        setCurrentPage,
        handleItemsPerPageChange
    }
}

export default useUsers