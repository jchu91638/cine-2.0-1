import React from 'react';

/* intensions */
import { getTrendingAllDay } from '../../intensions';

const Hook = () => {

    const {
        gta_data,
        gta_error,
        gta_loading,

        homeHeroSlideItemData
    } = getTrendingAllDay();

    return {
        //#region - getTrendingAllDay
        gta_data,
        gta_error,
        gta_loading,

        homeHeroSlideItemData
        //#endregion
    }
}

export default Hook;
