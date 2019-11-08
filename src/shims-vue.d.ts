import Vue from 'vue';
import { LoadingServiceOptions, ElLoadingComponent } from "element-ui/types/loading";
import { ElMessage } from "element-ui/types/message";
import VueRouter, { Route } from "vue-router/types/index";
import { Store } from "vuex/types/index";
declare module '*.vue' {
  export default Vue;
}

// declare module 如果是需要扩展原有模块的话，需要在类型声明文件中先引用原有模块，再使用 declare module 扩展原有模块
// 给vue对象添加自定义方法
declare module "vue/types/vue" {
  interface Vue {
    $loading(options: LoadingServiceOptions): ElLoadingComponent;
    $message: ElMessage;
    $router: VueRouter;
    $route: Route;
    $store: Store<any>;
  }
}
