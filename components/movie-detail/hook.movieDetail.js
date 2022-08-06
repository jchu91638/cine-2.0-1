import { getMovieDetail } from '../../intensions';
import { useDispatch } from 'react-redux';

/* Action */
import { activeNavItem } from '../../modules/reducer.nav';

/* Constant */
import { navItems } from '../../constants/uiData';

const Hook = (id) => {

    const dispatch = useDispatch();
    dispatch(activeNavItem(navItems[1]))

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
        imdbID
    }  = getMovieDetail(id)

    return {
        //#region - getMovieDetail
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
        imdbID
        //#endregion
    }
}

export default Hook;
