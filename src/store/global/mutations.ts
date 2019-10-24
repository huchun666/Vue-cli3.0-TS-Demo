import { MutationTree } from 'vuex';
import { GlobalState } from './types';

export const mutations: MutationTree<GlobalState> = {
    setVersion: (state: GlobalState, payload: string): void => {
      state.version = payload;
    },
    setToken(state: GlobalState, payload: string): void {
      state.token = payload;
    },
};
