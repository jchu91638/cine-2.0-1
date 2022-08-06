import { useEffect } from "react";
import { getSeriesDetail } from "../../intensions";
import { useDispatch } from "react-redux";

/* Action */
import { activeNavItem } from "../../modules/reducer.nav";

/* Constant */
import { navItems } from "../../constants/uiData";

const Hook = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(activeNavItem(navItems[2]));
  }, []);

  const {
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
    imdbID,
  } = getSeriesDetail(id);

  return {
    //#region - getSeriesDetail
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
    imdbID,
    //#endregion
  };
};

export default Hook;
