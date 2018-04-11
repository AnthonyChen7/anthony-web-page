import { actionType, createActionConstantsMap } from '../../utils/redux';
import { MenuOptionsEnum } from '../../widgets/models/menu-options-enum';

export default createActionConstantsMap('App', {
  SET_CURR_MENU_OPTION: actionType<MenuOptionsEnum>()
});