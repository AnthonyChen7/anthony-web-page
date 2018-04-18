import { createActionHandler, createReducer } from '../../utils/redux';
import { AppState } from './app_state.interface';
import appActionTypes from './app_action_types';
import { MenuOptionsEnum } from '../../widgets/models/menu-options-enum';

// makes this reducer interact with the AppState
const handleAction = createActionHandler<AppState>();

const setCurrMenuOption = handleAction(appActionTypes.SET_CURR_MENU_OPTION, (state, action) => {
    const menuOption: MenuOptionsEnum = action.payload;
    return Object.assign({}, state, {
      currMenuOption: menuOption
    });
});

const _showSideBar = handleAction(appActionTypes.SET_SIDE_BAR_VISIBILITY, (state, action) => {
  const showSideBar: boolean = action.payload;
  return Object.assign({}, state, {
    showSideBar: showSideBar
  });
});

const initialState: AppState = {currMenuOption: MenuOptionsEnum.AboutMe, showSideBar: false};

export const appReducer = createReducer(initialState, [
  setCurrMenuOption,
  _showSideBar
]);
