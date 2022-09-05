import React from 'react';

/* Service */
import { useGetSearchQueryResultQuery } from '../services/services.search';

const IntGetSearchResults = ({type, query, pageNo}) => {

    console.log({intQUery : query})
    const { data, error, isLoading } = useGetSearchQueryResultQuery({type, query, pageNo});

    return {
        data,
        error,
        isLoading
    }
}

export default IntGetSearchResults;
