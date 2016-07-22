<template lang="html">
  <div class="search">
    <i class="icon-search"></i>
    <input
      v-el:search
      type="search"
      class="search-input"
      placeholder="SEARCH"
      @keypress.enter="handleKeyPress">
  </div>
</template>

<script>
export default {
  methods: {
    handleKeyPress() {
      const value = this.$els.search.value.trim();
      if (value !== '') {
        this.$route.router.go({
          query: { q: value },
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.search {
  position: relative;
}

.icon-search {
  position: absolute;
  top: 6px;
  left: 10px;
  font-size: 1.2rem;
  color: gray;
}

.search-input {
  display: block;
  width: 290px;
  line-height: normal;
  padding: 6px 10px 6px 30px;
  background-color: #2b2b2b;
  border: none;
  border-radius: 3px;
  outline: none;
  font-size: 1.2rem;
  font-weight: 300;
  color: #e3e3e3;
}
</style>
