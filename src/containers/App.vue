<template lang="html">
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import store from '../vuex/store';

export default {
  store,
};
</script>

<style lang="less">
.view-transition {
  transition: all .5s ease;
}

.view-enter,
.view-leave {
  opacity: 0;
  transform: translate3d(10px, 0, 0);
}

[v-cloak] {
  display: none;
}
</style>
