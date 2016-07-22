<template lang="html">
  <div :class="{ affix: affix }" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
import EventListener from '../helpers/EventListener';
import getScrollTop from 'dom-helpers/query/scrollTop';
import getOffset from 'dom-helpers/query/offset';

export default {
  props: {
    offset: {
      type: Number,
      default: 0,
    },
    callback: {
      type: Function,
      default() {},
    },
  },
  data() {
    return {
      affix: false,
      styles: {},
      top: 0,
    };
  },
  ready() {
    this.top = getOffset(this.$el).top;
    this.scrollEvent = EventListener.listen(window, 'scroll', this.scrolling);
  },
  beforeDestroy() {
    if (this.scrollEvent) {
      this.scrollEvent.remove();
    }
  },
  methods: {
    scrolling() {
      const scrollTop = getScrollTop(window);
      const { top, width } = getOffset(this.$el);
      if (!this.affix && scrollTop >= top - this.offset) {
        this.affix = true;
        this.styles = {
          top: `${this.offset}px`,
          width: `${width}px`,
        };
        this.callback(this.affix);
      } else if (this.affix && scrollTop < this.top - this.offset) {
        this.affix = false;
        this.styles = {};
        this.callback(this.affix);
      }
    },
  },
};
</script>

<style lang="less">
.affix {
  position: fixed;
}
</style>
