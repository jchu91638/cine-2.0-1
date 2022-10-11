import React from "react";
import Head from "next/head";

/* Constants */
import { SERIES_DETAIL } from "../../constants/apiLinks";
import { API_KEY } from "../../constants/common";

/* Components */
import { SeriesDetailPage } from "../../components";

const SeriesDetail = ({ id, series }) => {

    const media_type = 'series';

    const title = series.name;
    const backdrop_path = `https://www.themoviedb.org/t/p/original${series.backdrop_path}`;
    const overview = series.overview;

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
          content={`https://cine.tenyain.com/series/${series.id}`}
        />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={overview} />
        <meta property="og:image" content={backdrop_path} />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`https://cine.tenyain.com/series/${series.id}`}
        />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={overview} />
        <meta property="twitter:image" content={backdrop_path} />
      </Head>
      {/* className="mt-[70px] lg:mt-[60px]" */}
      <section >
        <SeriesDetailPage
          seriesId = {id}
        />
      </section>
    </>
  );
};

export default SeriesDetail;

export async function getServerSideProps(context) {
  const { seriesId } = context.params;

  const setSeries = await fetch(`${SERIES_DETAIL}${seriesId}?api_key=${API_KEY}`)
    .then((res) => res.json())
    .then((data) => data);

  return {
    props: {
      id: seriesId,
      series: setSeries,
    }, // will be passed to the page component as props
  };
}
