import { useEffect } from "react";
import { useDispatch } from "react-redux";

/* intensions */
import {
  getTrendingAllDay,
  getTrendingMoviesDay,
  getTrendingSeriesDay,
} from "../../intensions";

/* Actions */
import { activeNavItem } from "../../modules/reducer.nav";

/* Constants */
import { navItems } from "../../constants/uiData";

const Hook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(activeNavItem(navItems[0]));
  }, []);

  const {
    gta_data,
    gta_error,
    gta_loading,

    homeHeroSlideItemData,
  } = getTrendingAllDay();

  const {
    gtm_data,
    gtm_error,
    gtm_loading,
  } = getTrendingMoviesDay();

  const {
    gts_data,
    gts_loading,
    gts_error
  } = getTrendingSeriesDay();

  return {
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
  };
};

export default Hook;
