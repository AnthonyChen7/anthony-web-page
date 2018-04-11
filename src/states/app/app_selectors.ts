import { createStateSelector } from '../../utils/redux';

export const getApp = createStateSelector((state) => state.appState);