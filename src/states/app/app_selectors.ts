import { createStateSelector } from '../../utils/redux';

// export const getApp = createStateSelector((state) => state.appState);
export const getCurrMenuOption = createStateSelector((state) => state.appState.currMenuOption);