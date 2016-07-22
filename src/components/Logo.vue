<template lang="html">
  <div class="logo">
    <i class="icon-soundcloud"></i>
    <a class="title" v-link="{ path: '/' }">soundvue</a>
  </div>
</template>

<style lang="less" scoped>
.logo {
  display: flex;
  align-items: center;
  height: 100%;
}

.icon-soundcloud {
  display: block;
  font-size: 2rem;
}

.title {
  color: inherit;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 2px;
  margin: 0 30px;
}
</style>
