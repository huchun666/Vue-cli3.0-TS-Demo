import { ActionTree } from 'vuex';
import { GlobalState } from './types';
import { RootState } from '../types';

export const actions: ActionTree<GlobalState, RootState> = {
    actionVersion: ({ commit }, payload: string): void => {
      // http请求
      commit('setVersion', payload);
    },
    actionToken({ commit }, payload: string) {
      commit('setToken', payload);
    },
};
