<template lang="html">
  <div class="search">
    <i class="icon-search"></i>
    <input class="search-input" type="text" placeholder="SEARCH">
  </div>
</template>

<style lang="less" scoped>
.search {
  position: relative;
}

.icon-search {
  position: absolute;
  top: 8px;
  left: 10px;
  font-size: 1.2rem;
  color: gray;
}

.search-input {
  display: flex;
  width: 290px;
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
