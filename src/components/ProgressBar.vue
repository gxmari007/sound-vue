<template lang="html">
  <div
    v-el:progress
    class="progress"
    @click="handleChangeProgress">
    <div class="progress-wrap">
      <div class="progress-bar" :style="styles">
        <div class="progress-handle"></div>
      </div>
    </div>
  </div>
</template>

<script>
import getOffset from 'dom-helpers/query/offset';

export default {
  props: {
    now: {
      type: Number,
      default: 0,
    },
    callback: {
      type: Function,
      default() {},
    },
  },
  computed: {
    styles() {
      return { width: `${this.now}%` };
    },
  },
  methods: {
    handleChangeProgress(e) {
      const { left, width } = getOffset(this.$els.progress);
      let now = Math.floor((e.clientX - left) / width * 100);
      if (now < 0) {
        now = 0;
      }
      if (now > 100) {
        now = 100;
      }
      this.now = now;
      this.callback(now);
    },
  },
};
</script>

<style lang="less">
.progress {
  padding: 6px 0;
  cursor: pointer;
}

.progress-wrap {
  height: 2px;
  background-color: #ddd;
}

.progress-bar {
  position: relative;
  height: 100%;
  background-color: #a6d2a5;
  transition: width .1s;
}

.progress-handle {
  position: absolute;
  top: -5px;
  right: -5px;
  width: 12px;
  height: 12px;
  background-color: #fff;
  border: 1px solid #e3e3e3;
  border-radius: 50%;
}
</style>
