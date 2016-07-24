<template lang="html">
  <div class="player-control">
    <div :class="['player-button', { active: refresh }]" @click="toggleRefresh">
      <i class="icon-refresh"></i>
    </div>
    <div :class="['player-button', { active: random }]" @click="toggleRandom">
      <i class="icon-random"></i>
    </div>
    <div class="player-button">
      <i class="icon-list"></i>
    </div>
    <div class="player-button" @click="toggleMute">
      <i v-if="musicMute || volume === 0" class="icon-volume-off"></i>
      <template v-else>
        <i v-if="volume > 0.6" class="icon-volume-up"></i>
        <i v-else class="icon-volume-down"></i>
      </template>
    </div>
    <div class="player-volume">
      <progress-bar
        :now="formatVolume"
        :callback="changeVolume"></progress-bar>
    </div>
  </div>
</template>

<script>
import ProgressBar from './ProgressBar';

export default {
  props: {
    refresh: {
      type: Boolean,
      default: false,
    },
    random: {
      type: Boolean,
      default: false,
    },
    musicMute: {
      type: Boolean,
      default: false,
    },
    volume: {
      type: Number,
      default: 0,
    },
    changeVolume: {
      type: Function,
      default() {},
    },
    toggleRefresh: {
      type: Function,
      default() {},
    },
    toggleRandom: {
      type: Function,
      default() {},
    },
    toggleMute: {
      type: Function,
      default() {},
    },
  },
  computed: {
    formatVolume() {
      return this.musicMute ? 0 : this.volume * 100;
    },
  },
  components: {
    ProgressBar,
  },
};
</script>

<style lang="less" scoped>
.player-volume {
  width: 100px;
  margin-left: 30px;
}
</style>
