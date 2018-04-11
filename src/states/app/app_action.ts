import { createActionCreator } from '../../utils/redux';
import actionTypes from './app_action_types';

export const setCurrMenuOption = createActionCreator(actionTypes.SET_CURR_MENU_OPTION);
