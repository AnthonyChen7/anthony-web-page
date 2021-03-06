import { createStateSelector } from '../../utils/redux';

// Retrieves specific variables from the state
export const getCurrMenuOption = createStateSelector((state) => state.appState.currMenuOption);
export const shouldShowSideBar = createStateSelector((state) => state.appState.showSideBar);