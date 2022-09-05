import React from 'react';

import { getSearchQueryResult } from '../../../../intensions'

const Hook = (query, pageNo) => {
    console.log({hookQuery : query})
    const {data, error, isLoading } = getSearchQueryResult({type: 'movie',query, pageNo});

    return {
        data, 
        error,
        isLoading
    }
}

export default Hook;
