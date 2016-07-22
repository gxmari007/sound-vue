<template lang="html">
  <div class="player-time">
    <progress-bar :now="progress"></progress-bar>
    <div class="time">
      <span>{{ formatCurrentTime }}</span>
      <span class="divider">/</span>
      <span>{{ formatDuration }}</span>
    </div>
  </div>
</template>

<script>
import ProgressBar from './ProgressBar';
import { formatSeconds } from '../helpers/songs';

export default {
  props: {
    currentTime: {
      type: Number,
      default: 0,
    },
    duration: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    progress() {
      return this.duration === 0 ?
        0 : this.currentTime / this.duration * 100;
    },
    formatCurrentTime() {
      return formatSeconds(this.currentTime);
    },
    formatDuration() {
      return formatSeconds(this.duration);
    },
  },
  components: {
    ProgressBar,
  },
};
</script>

<style lang="less" scoped>
.player-time {
  display: flex;
  align-items: center;
  flex: auto;
  margin-left: 40px;
}

.progress {
  flex: auto;
}

.time {
  display: flex;
  font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
  color: #ccc;
  margin-left: 30px;
}

.divider {
  margin: 0 10px;
}
</style>
