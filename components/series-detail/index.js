import React from "react";

/* Components */
import { DetailHero, YTPopUp } from "../common";

import Hook from "./hook.seriesDetail";

const SeriesDetail = ({ seriesId }) => {
  const {
    //#region - getSeriesDetail
    gsd_data,
    gsd_error,
    gsd_loading,

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
    imdbID,
    trailer,
    isYTPopUp,

    /* actions */
    open_YTPopUp,
    close_YTPopUp,
    //#endregion
  } = Hook(seriesId);

  return (
    <>
      <DetailHero
        data={gsd_data}
        error={gsd_error}
        loading={gsd_loading}
        isSeries={true}
        title={title}
        backgroundImage={heroBackground}
        poster={poster}
        releasedYear={releasedYear}
        contentRating={contentRating}
        genres={genres}
        runtime={runtime}
        status={status}
        tagline={tagline}
        overview={overview}
        rating={rating}
        popularity={popularity}
        imdbID={imdbID}
        isYTPopUp = {isYTPopUp}

        /* actions */
        open_YTPopUp ={open_YTPopUp}
      />

      <YTPopUp
        trailer={trailer}
        isYTPopUp={isYTPopUp}
        close_YTPopUp={close_YTPopUp}
      />
    </>
  );
};

export default SeriesDetail;
