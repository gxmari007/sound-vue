<template lang="html">
  <div class="player-control">
    <div class="player-button" @click="changeSong(CHANGE_TYPES.PREV)">
      <i class="icon-fast-backward"></i>
    </div>
    <div class="player-button" @click="togglePlay">
      <i v-show="isPlaying" class="icon-pause"></i>
      <i v-else class="icon-play"></i>
    </div>
    <div class="player-button" @click="changeSong(random ? CHANGE_TYPES.RANDOM : CHANGE_TYPES.NEXT)">
      <i class="icon-fast-forward"></i>
    </div>
  </div>
</template>

<script>
import { changeSong, CHANGE_TYPES } from '../vuex/actions/player';

export default {
  props: {
    isPlaying: {
      type: Boolean,
      default: false,
    },
    random: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return { CHANGE_TYPES };
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
  vuex: {
    actions: {
      changeSong,
    },
  },
};
</script>
