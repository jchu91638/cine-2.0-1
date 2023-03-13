import React from "react";
import Head from "next/head";

/* Constants */
import { SERIES_DETAIL } from "../../constants/apiLinks";
import { API_KEY } from "../../constants/common";

/* Components */
import { SeriesDetailPage } from "../../components";

export async function getStaticPaths() {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}`
  );

  const data = await res.json();

  return {
    paths: data?.results?.map((d) => ({
      params: { seriesId: d.id.toString() },
    })),
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { seriesId } = context.params;

  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${seriesId}?api_key=${API_KEY}&language=en-US&append_to_response=videos,releases,content_ratings`
  );

  const data = await res.json();

  return {
    props: {
      id: seriesId,
      series: data,
    },
  };
}

const SeriesDetail = ({ id, series }) => {
  const media_type = "series";

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
      <section>
        <SeriesDetailPage seriesId={id} />
      </section>
    </>
  );
};

export default SeriesDetail;
