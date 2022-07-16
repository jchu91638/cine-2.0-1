import React from 'react';

/* Components */
import { DetailHero } from '../common';

import Hook from './hook.movieDetail';

const MovieDetail = ({
    movieId
}) => {

    const {
        //#region - getMovieDetail
        gmd_data,
        gmd_error,
        gmd_loading,

        title
        //#endregion
    } = Hook(movieId)

    return (
        <>
            <DetailHero
                data = {gmd_data}
                error = {gmd_error}
                loading = {gmd_loading}

                title = {title}
            />
        </>
    );
}

export default MovieDetail;
