<template lang="html">
  <div>
    <sound-header></sound-header>
    <router-view></router-view>
    <music-player v-if="hasSongPlay"></music-player>
  </div>
</template>

<script>
import SoundHeader from '../components/SoundHeader';
import MusicPlayer from '../components/MusicPlayer';

export default {
  components: {
    SoundHeader,
    MusicPlayer,
  },
  vuex: {
    getters: {
      hasSongPlay: state => state.player.songIndex !== null,
    },
  },
};
</script>
