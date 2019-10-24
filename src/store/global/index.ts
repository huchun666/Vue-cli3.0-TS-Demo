import { Module } from 'vuex';
import { GlobalState } from './types';
import { RootState } from '../types';
import { actions } from './actions';
import { getters } from './getters';
import { mutations } from './mutations';

export const state: GlobalState = {
    version: '1.0.2',
    token: 'globalStateToken',
};

const namespaced: boolean = true;

export const global: Module<GlobalState, RootState> = {
    namespaced,
    state,
    getters,
    mutations,
    actions,
};
