import React from "react";
import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
/* Constants */
import { MOVIE_DETAIL } from "../../constants/apiLinks";
import { API_KEY } from "../../constants/common";

/* Components */
import { MovieDetailPage } from "../../components";

const MovieDetail = () => {
  const [movieData, setMovieData] = useState(null);
  const router = useRouter();
  const movieId = router.query.movieId;

  useEffect(() => {
    if (movieId) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
        )
        .then(function (response) {
          // handle success
          console.log(response.data);
          setMovieData(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    }
  }, [movieId, router]);

  const media_type = "movie";

  // const title = movieData?.original_title || 'Loading...';
  // const backdrop_path = `https://www.themoviedb.org/t/p/original${movieData?.backdrop_path}`;
  // const overview = movieData?.overview;

  // console.log({ title, backdrop_path, overview });

  return (
    <>
      {movieData != null && (
        <>
          <Head>
            <title>{movieData?.original_title || 'Loading...'}</title>
            <meta name="title" content={movieData?.original_title || 'Loading...'} />
            <meta name="description" content={movieData?.overview} />
            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:type" content="website" />
            <meta
              property="og:url"
              content={`https://cine.tenyain.com/movies/${movieId}`}
            />
            <meta property="og:title" content={movieData?.original_title || 'Loading...'} />
            <meta property="og:description" content={movieData?.overview} />
            <meta property="og:image" content={`https://www.themoviedb.org/t/p/original${movieData?.backdrop_path}`} />

            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta
              property="twitter:url"
              content={`https://cine.tenyain.com/movies/${movieId}`}
            />
            <meta property="twitter:title" content={movieData?.original_title || 'Loading...'} />
            <meta property="twitter:description" content={movieData?.overview} />
            <meta property="twitter:image" content={`https://www.themoviedb.org/t/p/original${movieData?.backdrop_path}`} />
          </Head>
          {/* className="mt-[70px] lg:mt-[60px]" */}
          <section>
            <MovieDetailPage movieId={movieId} />
            {/* <h1>{movieData?.original_title || 'Loading...'}</h1> */}
          </section>
        </>
      )}
    </>
  );
};

export default MovieDetail;
