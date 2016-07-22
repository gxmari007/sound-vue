<template lang="html">
  <div class="navbar">
    <div class="container">
      <a
        :class="['item', 'genre', { active: playlist === item }]"
        v-for="item in genres"
        track-by="$index"
        @click="handleGenre(item)">{{ item }}</a>
      <div class="filter item">
        <i class="icon-filter"></i>
        <a
          :class="['time', { active: time == item }]"
          v-for="item in filters"
          track-by="$index"
          @click="handleTime(item)">{{ item }} days</a>
      </div>
    </div>
  </div>
</template>

<script>
import { genres, filters } from '../locales/music';
import { getPlaylist, getPlaylistTime } from '../helpers/songs';
import { selectPlaylist } from '../vuex/actions/playlists';

export default {
  data() {
    return {
      genres,
      filters,
      genresActive: 0,
    };
  },
  computed: {
    playlist: getPlaylist,
    time: getPlaylistTime,
  },
  methods: {
    handleGenre(genre) {
      this.selectPlaylist(this.makePlaylist(genre, this.time));
      this.$router.go({
        query: {
          q: genre,
          t: this.time,
        },
      });
    },
    handleTime(time) {
      if (this.time && ~~this.time === time) {
        time = null;
      }
      this.selectPlaylist(this.makePlaylist(this.playlist, time));
      this.$router.go({
        query: {
          q: this.playlist,
          t: time,
        },
      });
    },
    makePlaylist(playlist, time) {
      return `${playlist}${time ? ` - ${time}` : ''}`;
    },
  },
  ready() {
    this.selectPlaylist(this.makePlaylist(this.playlist, this.time));
  },
  vuex: {
    actions: {
      selectPlaylist,
    },
  },
};
</script>

<style lang="less" scoped>
@border-color: #e3e3e3;

.navbar {
  background-color: #fff;
  border-bottom: 1px solid @border-color;
}

.container {
  display: flex;
  height: 40px;
}

.genre {
  text-transform: uppercase;
  box-shadow: inset 0 -2px 0 transparent;
  transition: all .2s ease-in-out;
  cursor: pointer;
  &.active,
  &:hover {
    color: #2d2d11;
    box-shadow: inset 0 -2px 0 #a6d2a5;
  }
}

.item {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 1.2rem;
  font-weight: 300;
  color: #adadad;
  text-decoration: none;
  border-left: 1px solid @border-color;
  &:last-child {
    border-right: 1px solid @border-color;
  }
}

.filter {
  width: 234px;
  flex: none;
}

.icon-filter {
  font-size: 1.4rem;
  color: #ddd;
  margin-right: 20px;
}

.time {
  display: flex;
  align-items: center;
  height: 100%;
  color: #adadad;
  text-decoration: none;
  margin-right: 20px;
  cursor: pointer;
  &:hover {
    color: #3381b7;
  }
  &.active {
    color: #3381b7;
    box-shadow: inset 0 -1px 0 #3381b7;
  }
  &:last-child {
    margin-right: 0;
  }
}
</style>
