
import { GetterTree } from 'vuex';
import { GlobalState } from './types';
import { RootState } from '../types';

export const getters: GetterTree<GlobalState, RootState> = {
    getVersion: (state: GlobalState): string => {
      return state.version;
    },
    getToken(state: GlobalState): string {
      return state.token;
    },
};
