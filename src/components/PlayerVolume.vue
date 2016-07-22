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
      <i v-show="musicMute" class="icon-volume-off"></i>
    </div>
    <div class="player-volume">
      <progress-bar></progress-bar>
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
