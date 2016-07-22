<template lang="html">
  <div class="player">
    <audio
      v-el:audio
      id="audio"
      :src="songUrl"
      @play="handlePlay"
      @pause="handlePause"
      @ended="handleEnded"
      @timeupdate="handleTimeUpdate"
      v-on:loadedmetadata="handleLoadedMetaData"></audio>
    <div class="container">
      <player-info
        :song-img="song.artwork_url"
        :song-title="songTitle"
        :username="song.user.username"></player-info>
      <player-control :is-playing="isPlaying"></player-control>
      <player-time
        :current-time="playTime"
        :duration="duration"></player-time>
      <player-volume
        :refresh="refresh"
        :random="random"
        :music-mute="muted"
        :toggle-refresh="toggleRefresh"
        :toggle-random="toggleRandom"
        :toggle-mute="toggleMute"></player-volume>
    </div>
  </div>
</template>

<script>
import PlayerInfo from './PlayerInfo';
import PlayerControl from './PlayerControl';
import PlayerTime from './PlayerTime';
import PlayerVolume from './PlayerVolume';
import { getPlayingSong } from '../vuex/getters';
import { formatStreamUrl, formatSongTitle } from '../helpers/songs';
import { togglePlaying, changePlayTime } from '../vuex/actions/player';

export default {
  data() {
    return {
      duration: 0,
      refresh: false,
      random: false,
      muted: false,
      volume: 1,
    };
  },
  computed: {
    songUrl() {
      return formatStreamUrl(this.song.stream_url);
    },
    songTitle() {
      return formatSongTitle(this.song.title);
    },
  },
  watch: {
    'song.id'() {
      this.$els.audio.play();
    },
  },
  ready() {
    this.$els.audio.play();
  },
  methods: {
    handlePlay() {
      this.togglePlaying(true);
    },
    handlePause() {
      this.togglePlaying(false);
    },
    handleEnded() {
      if (this.refresh) {
        this.$els.audio.play();
      }
    },
    handleLoadedMetaData() {
      this.duration = Math.floor(this.$els.audio.duration);
    },
    handleTimeUpdate() {
      const currentTime = Math.floor(this.$els.audio.currentTime);
      if (currentTime === this.playTime) return;
      this.changePlayTime(currentTime);
    },
    toggleRefresh() {
      this.refresh = !this.refresh;
    },
    toggleRandom() {
      this.random = !this.random;
    },
    toggleMute() {
      if (this.muted) {
        this.$els.audio.muted = false;
      } else {
        this.$els.audio.muted = true;
      }
      this.muted = !this.muted;
    },
  },
  components: {
    PlayerInfo,
    PlayerControl,
    PlayerTime,
    PlayerVolume,
  },
  vuex: {
    getters: {
      isPlaying: state => state.player.isPlaying,
      playTime: state => state.player.playTime,
      song: getPlayingSong,
    },
    actions: {
      togglePlaying,
      changePlayTime,
    },
  },
};
</script>

<style lang="less">
.player-control {
  display: flex;
  align-items: center;
  margin-left: 40px;
}

.player-button {
  display: flex;
  justify-content: center;
  width: 20px;
  font-size: 1.2rem;
  padding: 4px;
  margin-left: 30px;
  cursor: pointer;
  &:first-child {
    margin-left: 0;
  }
  & > i {
    display: block;
    color: #ccc;
  }
  &.active > i,
  & > .icon-pause {
    color: #a6d2a5;
  }
  &:hover > i {
    color: inherit;
    &.icon-pause {
      color: #86ab85;
    }
  }
  &.active:hover > i {
    color: #86ab85;
  }
}
</style>

<style lang="less" scoped>
.player {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  border-top: 1px solid #e3e3e3;
  background-color: #fff;
  font-size: 1.2rem;
}

.container {
  display: flex;
  padding-top: 8px;
  padding-bottom: 8px;
}
</style>
