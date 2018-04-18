import { actionType, createActionConstantsMap } from '../../utils/redux';
import { MenuOptionsEnum } from '../../widgets/models/menu-options-enum';

/**
 * Create map of action constants that declare the type of payload it takes in
 */

export default createActionConstantsMap('App', {
  SET_CURR_MENU_OPTION: actionType<MenuOptionsEnum>(),
  SET_SIDE_BAR_VISIBILITY: actionType<boolean>(),
});