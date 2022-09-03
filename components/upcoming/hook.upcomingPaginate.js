import {useState} from 'react';
import { useRouter } from 'next/router';

import { getUpcomingMoviesPaginate } from '../../intensions';

const Hook = () => {

    const router = useRouter();
    const pageNo = parseInt(router.query["pageNo"]);
    const [ currentPage, setCurrentPage ] = useState(pageNo);

    const { gump_data, gump_loading, gump_error } = getUpcomingMoviesPaginate(pageNo);

    let total_pages = gump_data?.total_pages;

    const pageClick =(page) => {
        setCurrentPage(page)
    }

    const goToBackPage = () => {
        setCurrentPage( prev => prev-1)
    }

    const goToNextPage = () => {
        setCurrentPage( prev => prev+1)
    }

    return {
        gump_data,
        gump_loading,
        gump_error,
        pageNo,
        total_pages,

        /* actions */
        pageClick,
        goToBackPage,
        goToNextPage

    }
}

export default Hook;
