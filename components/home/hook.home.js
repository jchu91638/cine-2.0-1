import { useDispatch } from 'react-redux';

/* intensions */
import { getTrendingAllDay } from '../../intensions';

/* Actions */
import { activeNavItem } from '../../modules/reducer.nav';

/* Constants */
import { navItems } from '../../constants/uiData';

const Hook = () => {

    const dispatch = useDispatch();
    dispatch(activeNavItem(navItems[0]));

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
