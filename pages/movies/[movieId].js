import React from "react";
import Head from "next/head";

/* Constants */
import { MOVIE_DETAIL } from "../../constants/apiLinks";
import { API_KEY } from "../../constants/common";

/* Components */
import { MovieDetailPage } from "../../components";

const MovieDetail = ({ id, movie }) => {
  const media_type = 'movie';

  const title = movie.original_title;
  const backdrop_path = `https://www.themoviedb.org/t/p/original${movie.backdrop_path}`;
  const overview = movie.overview;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={overview} />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://cine.tenyain.com/movies/${movie.id}`}
        />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={overview} />
        <meta property="og:image" content={backdrop_path} />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`https://cine.tenyain.com/movies/${movie.id}`}
        />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={overview} />
        <meta property="twitter:image" content={backdrop_path} />
      </Head>
      {/* className="mt-[70px] lg:mt-[60px]" */}
      <section>
        <MovieDetailPage
          movieId = {id}
        />
      </section>
    </>
  );
};

export async function getServerSideProps(context) {
  const { movieId } = context.params;

  const getMovie = await fetch(`${MOVIE_DETAIL}${movieId}?api_key=${API_KEY}`)
    .then((res) => res.json())
    .then((data) => data);

  return {
    props: {
      id: movieId,
      movie: getMovie,
    }, // will be passed to the page component as props
  };
}

export default MovieDetail;
