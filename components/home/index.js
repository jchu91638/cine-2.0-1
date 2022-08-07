import React from "react";
import Link from "next/link";

/* Components */
import Hero from "./components/hero";
import SearchInput from "./components/search-input/SearchInput";

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
    </>
  );
};

export default HomePage;
