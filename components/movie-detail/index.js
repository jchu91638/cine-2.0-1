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
    } = Hook(movieId)

    return (
        <>
            <DetailHero
                data = {gmd_data}
                error = {gmd_error}
                loading = {gmd_loading}

                title = {title}
                backgroundImage = {heroBackground}
                poster = {poster}
                releasedYear = {releasedYear}
                contentRating = {contentRating}
                genres = {genres}
                runtime = {runtime}
                status = {status}
                tagline = {tagline}
                overview = {overview}
                rating = {rating}
                popularity = {popularity}
                imdbID = {imdbID}
            />
        </>
    );
}

export default MovieDetail;
