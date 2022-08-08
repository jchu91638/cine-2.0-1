import React from "react";
import Link from "next/link";

/* Components */
import Hero from "./components/hero";
import SearchInput from "./components/search-input/SearchInput";
import PopularNow from "./components/popular-now/PopularNow";

/* Hook */
import Hook from "./hook.home";

const HomePage = () => {
  const {
    //#region - getTrendingAllDay
    gta_data,
    gta_error,
    gta_loading,

    homeHeroSlideItemData,
    //#endregion

    gtm_data,
    gtm_error,
    gtm_loading,

    gts_data,
    gts_loading,
    gts_error
  } = Hook();

  return (
    <>
      <Hero
        //#region - getTrendingAllDay
        data = {gta_data}
        error =  {gta_error}
        loading =  {gta_loading}
        slideItemData =  {homeHeroSlideItemData}
        //#endregion
      />

      <SearchInput/>

      <PopularNow
        moviesData = {gtm_data}
        moviesLoading = {gtm_loading}
        moviesError = {gtm_error}

        seriesData = {gts_data}
        seriesLoading = {gts_loading}
        seriesError = {gts_error}
      />
    </>
  );
};

export default HomePage;
