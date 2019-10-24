<template>
  <div class="home">
    <button @click="handleToken">改变token</button>
    <!-- <button @click="handleClickInterface">handleClickInterface</button> -->
    <div>version: {{version}}</div>
    <div>stateToken: {{token}}</div>
    <div>globalState: {{globalState}}</div>
    <div>computedToken: {{computedToken}}</div>
    <div>getterVersion: {{getterVersion}}</div>
  </div>
</template>

<script lang="ts">
import {
  State,
  Getter,
  Action,
  Mutation,
} from 'vuex-class';
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
// import mixins from "../mixins/mixins";
import { RootState } from '../store/types';
const namespace: string = 'global';

@Component({
  components: {
    HelloWorld,
  },
})

export default class Home extends Vue {
  // data
  public city: string = '上海';
  @State('version') private version!: string;
  @State('global') private globalState!: RootState;
  @State('token', { namespace }) private token!: string;
  @Getter('getVersion', { namespace }) private getterVersion!: string;
  @Action('actionToken', { namespace }) private actionToken!: any;

  // created
  public created() {
    this.actionToken('createChangeToken');
  }

  // mounted
  public mounted() {
    this.actionToken('mountChangeToken');
  }

  // computed
  get computedToken() {
    return this.token;
  }

  // methods
  public handleToken() {
    this.actionToken('methodschangeToken');
  }

}
</script>
