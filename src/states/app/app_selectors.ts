import { createStateSelector } from '../../utils/redux';

export const getCurrMenuOption = createStateSelector((state) => state.appState.currMenuOption);