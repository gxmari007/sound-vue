<template lang="html">
  <div class="play-button" @click="togglePlay">
    <i v-show="isPlaying" class="icon-soundcloud"></i>
    <i v-else class="icon-play"></i>
  </div>
</template>

<script>
export default {
  methods: {
    togglePlay() {
      const audio = document.getElementById('audio');

      if (!audio) return;
      if (this.isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
    },
  },
  vuex: {
    getters: {
      isPlaying: state => state.player.isPlaying,
    },
  },
};
</script>

<style lang="less" scoped>
.icon-soundcloud,
.icon-play {
  font-size: 2rem;
  color: #a6d2a5;
}
</style>
