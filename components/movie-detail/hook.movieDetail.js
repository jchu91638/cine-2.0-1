import React from 'react';

import { getMovieDetail } from '../../intensions';

const Hook = (id) => {

    const {
        gmd_data,
        gmd_error,
        gmd_loading,

        title,
        heroBackground,
        poster,
        releasedYear,
        contentRating,
        genres,
        runtime,
        status,
        tagline,
        overview,
        rating,
        popularity,
        imdbID
    }  = getMovieDetail(id)

    return {
        //#region - getMovieDetail
        gmd_data,
        gmd_error,
        gmd_loading,

        title,
        heroBackground,
        poster,
        releasedYear,
        contentRating,
        genres,
        runtime,
        status,
        tagline,
        overview,
        rating,
        popularity,
        imdbID
        //#endregion
    }
}

export default Hook;
