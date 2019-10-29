<template>
  <div class="home">
    <button @click="handleToken">改变token</button>
    <!-- <button @click="handleClickInterface">handleClickInterface</button> -->
    <div>version: {{version}}</div>
    <div>stateToken: {{token}}</div>
    <div>globalState: {{globalState}}</div>
    <div>computedToken: {{computedToken}}</div>
    <div>getterVersion: {{getterVersion}}</div>
    <HelloWorld :msg='city'></HelloWorld>
  </div>
</template>

<script lang="ts">
import {
  State,
  Getter,
  Action,
  Mutation,
} from 'vuex-class';
import { Component, Vue, Watch } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
// import mixins from '../mixins/mixins';
import { RootState } from '../store/types';
const namespace: string = 'global';
import jquery from 'jquery';

@Component({
  components: {
    HelloWorld,
  },
})

export default class Home extends Vue {
  // data
  private city: string = '上海';

  @State('version') private version!: string;
  @State('global') private globalState!: RootState;
  @State('token', { namespace }) private token!: string;
  @Getter('getVersion', { namespace }) private getterVersion!: string;
  @Action('actionToken', { namespace }) private actionToken!: any;
  // created
  private created() {
    this.actionToken('createChangeToken');
    const reset: JQuery = jquery('#app');
    // console.log(reset);
  }

  // mounted
  private mounted() {
    this.actionToken('mountChangeToken');
    this.$loading({text: 'aaas'});
  }

  // computed
  get computedToken() {
    return this.token;
  }

  // methods
  private handleToken() {
    this.actionToken('methodschangeToken');
    this.city = '北京';
  }

  @Watch('city')
  private watchCity(newVal: string, oldVal: string): void {
    // console.log(newVal, oldVal);
  }
}
</script>
