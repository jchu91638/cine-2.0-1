import React from 'react';
import { useGetMovieDetailQuery } from '../services/services.detail';

const IntGetMovieDetail = (id) => {

    const { data, error , isLoading} = useGetMovieDetailQuery(id);

    /* root values */
    const gmd_data = data;
    const gmd_error = error;
    const gmd_loading = isLoading;

    /* extended values */

    /* constants */
    const title = gmd_data?.original_title;

    return {
        gmd_data,
        gmd_error,
        gmd_loading,

        title
    }
}

export default IntGetMovieDetail;
