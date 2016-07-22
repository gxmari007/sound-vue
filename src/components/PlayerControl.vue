<template lang="html">
  <div class="player-control">
    <div class="player-button">
      <i class="icon-fast-backward"></i>
    </div>
    <div class="player-button" @click="togglePlay">
      <i v-show="isPlaying" class="icon-pause"></i>
      <i v-else class="icon-play"></i>
    </div>
    <div class="player-button">
      <i class="icon-fast-forward"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isPlaying: {
      type: Boolean,
      default: false,
    },
  },
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
};
</script>
