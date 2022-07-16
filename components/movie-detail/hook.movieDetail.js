import React from 'react';

import { getMovieDetail } from '../../intensions';

const Hook = (id) => {

    const {
        gmd_data,
        gmd_error,
        gmd_loading,

        title
    }  = getMovieDetail(id)

    return {
        //#region - getMovieDetail
        gmd_data,
        gmd_error,
        gmd_loading,

        title
        //#endregion
    }
}

export default Hook;
