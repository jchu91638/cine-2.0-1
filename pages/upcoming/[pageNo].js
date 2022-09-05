import React from "react";
import Head from "next/head";

/* Components */
import { SearchHeader } from "../../components/common";
import { UpcomingPaginatePage } from "../../components";

const UpcomingPage = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#278EA5" />
        <meta name="title" content="Upcoming Movies | CINE" />
        <meta
          name="description"
          content="A website that provides you cinematic data with stunning UI. Torrents for movies are also available and just a touch to download them."
        />
        <meta
          name="keywords"
          content="cine, cinema, cinematic, information, movies, series, tv shows, tv, shows, torrents, tmdb, yts, download movies"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="TeNyain Moe Lwin" />

        {/* Primary Meta Tags */}
        <title>Upcoming Movies | CINE</title>
        <meta name="title" content="Upcoming Movies | CINE" />
        <meta
          name="description"
          content="A website that provides you cinematic data with stunning UI. Torrents for movies are also available and just a touch to download them."
        />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cine-ent.vercel.app/upcoming/" />
        <meta property="og:title" content="Upcoming Movies | CINE" />
        <meta
          property="og:description"
          content="A website that provides you cinematic data with stunning UI. Torrents for movies are also available and just a touch to download them."
        />
        <meta property="og:image" content="/meta.png" />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://cine-ent.vercel.app/upcoming/" />
        <meta
          property="twitter:title"
          content="Upcoming Movies | CINE"
        />
        <meta
          property="twitter:description"
          content="A website that provides you cinematic data with stunning UI. Torrents for movies are also available and just a touch to download them."
        />
        <meta property="twitter:image" content="/meta.png" />
      </Head>
      <SearchHeader query="" />
      <UpcomingPaginatePage />
    </>
  );
};

export default UpcomingPage;
