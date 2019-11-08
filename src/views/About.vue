<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script lang='ts'>
import { Vue } from 'vue-property-decorator';

export default class Home extends Vue {
  private city: string = '上海';
}

</script>