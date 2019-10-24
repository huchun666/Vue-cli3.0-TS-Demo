import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import { global } from './global';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: '1.1.0',
    city: '上海',
  },
  modules: {
    global,
  },
};

export default new Vuex.Store<RootState>(store);
