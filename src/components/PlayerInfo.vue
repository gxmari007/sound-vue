<template lang="html">
  <div class="player-info">
    <img :src="songImg" class="image" alt="Song image">
    <div class="details">
      <a class="title text-overflow">{{ songTitle }}</a>
      <a class="name text-overflow">{{ username }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    songImg: String,
    songTitle: String,
    username: String,
  },
};
</script>

<style lang="less" scoped>
.player-info {
  display: flex;
  width: 140px;
  height: 34px;
}

.image {
  display: block;
  width: 34px;
  min-width: 34px;
  height: 34px;
  margin-right: 8px;
}

.details {
  overflow: hidden;
  a {
    display: block;
  }
}

.title {
  color: #222;
}

.name {
  margin-right: 30px;
}
</style>
