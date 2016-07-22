<template lang="html">
  <header class="header">
    <div class="container">
      <logo></logo>
      <div class="blank"></div>
      <search></search>
    </div>
  </header>
</template>

<script>
import Logo from './Logo';
import Search from './Search';

export default {
  components: {
    Logo,
    Search,
  },
};
</script>

<style lang="less" scoped>
.header {
  height: 50px;
  color: #fff;
  background-color: #3a3f41;
}

.container {
  display: flex;
  align-items: center;
  height: 100%;
}

.blank {
  flex: auto;
}
</style>
