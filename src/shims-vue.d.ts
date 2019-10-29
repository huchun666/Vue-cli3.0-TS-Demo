import Vue from 'vue';
import { LoadingServiceOptions, ElLoadingComponent } from "element-ui/types/loading";
declare module '*.vue' {
  export default Vue;
}
declare module "vue/types/vue" {
  interface Vue {
    $loading(options: LoadingServiceOptions): ElLoadingComponent;
  }
}
