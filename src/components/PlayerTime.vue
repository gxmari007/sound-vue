<template lang="html">
  <div class="player-time">
    <progress-bar></progress-bar>
    <div class="time">
      <span>00:00</span>
      <span class="divider">/</span>
      <span>00:00</span>
    </div>
  </div>
</template>

<script>
import ProgressBar from './ProgressBar';

export default {
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
  color: #ccc;
  margin-left: 30px;
}

.divider {
  margin: 0 10px;
}
</style>
