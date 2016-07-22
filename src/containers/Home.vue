<template lang="html">
  <div>
    <affix class="navbar-affix" :callback="handleAffix">
      <navbar></navbar>
    </affix>
    <song-list :class="{ 'songs-affix': affix }"></song-list>
  </div>
</template>

<script>
import Affix from '../components/Affix';
import Navbar from '../components/Navbar';
import SongList from '../components/SongList';

export default {
  data() {
    return {
      affix: false,
    };
  },
  components: {
    Affix,
    Navbar,
    SongList,
  },
  methods: {
    handleAffix(affix) {
      this.affix = affix;
    },
  },
};
</script>

<style lang="less" scoped>
.navbar-affix {
  z-index: 1;
}
</style>
