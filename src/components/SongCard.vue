<template lang="html">
  <div class="song-card" :class="{ active: isActive }">
    <div class="image" :style="styles">
      <toggle-play-button v-if="isActive"></toggle-play-button>
      <div v-else class="play-button" @click="handlePlaySong">
        <i class="icon-play"></i>
      </div>
    </div>
    <div class="user">
      <img :src="userAvatar" class="avatar" alt="User avatar">
      <div class="details">
        <a
          v-link="{ path: titleLink }"
          class="title text-overflow">{{ songTitle }}</a>
        <a
          v-link="{ path: nameLink }"
          class="name text-overflow"
          :title="song.user.username">{{ song.user.username }}</a>
      </div>
      <i class="icon-heart"></i>
    </div>
  </div>
</template>

<script>
import TogglePlayButton from './TogglePlayButton';
import { formatSongTitle, getImageUrl, IMAGE_SIZES } from '../helpers/songs';
import { playSong } from '../vuex/actions/player';

export default {
  props: {
    song: Object,
    songIndex: Number,
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    styles() {
      return {
        backgroundImage: `url(${getImageUrl(this.song.artwork_url, IMAGE_SIZES.LARGE)})`,
      };
    },
    userAvatar() {
      return getImageUrl(this.song.user.avatar_url);
    },
    titleLink() {
      return `/songs/${this.song.id}`;
    },
    songTitle() {
      return formatSongTitle(this.song.title);
    },
    nameLink() {
      return `/users/${this.song.user.id}`;
    },
  },
  methods: {
    handlePlaySong() {
      this.playSong(this.playlist, this.songIndex);
    },
  },
  components: {
    TogglePlayButton,
  },
  vuex: {
    getters: {
      playlist: state => state.playlist,
    },
    actions: {
      playSong,
    },
  },
};
</script>

<style lang="less" scoped>
.song-card {
  padding: 10px;
  background-color: #fff;
  border: 1px solid #e3e3e3;
  &.active {
    border-color: #a6d2a5;
  }
}

.image {
  height: 70px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-bottom: 10px;
}

.play-button {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  transition: background-color .2s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, .8);
    .icon-play {
      opacity: 1;
    }
  }
  .active & {
    background-color: rgba(0, 0, 0, .8);
  }
}

.icon-play {
  font-size: 2rem;
  color: #a6d2a5;
  opacity: 0;
  transition: opacity .2s ease-in-out;
}

.icon-soundcloud { opacity: 1; }

.user {
  position: relative;
  display: flex;
}

.avatar {
  display: block;
  width: 24px;
  min-width: 24px;
  height: 24px;
  margin-top: 2px;
  margin-right: 10px;
  border-radius: 50%;
}

.details {
  flex: auto;
  font-size: 1.2rem;
  overflow: hidden;
  a {
    display: block;
  }
}

.title {
  color: inherit;
}

.name {
  margin-right: 30px;
}

.icon-heart {
  position: absolute;
  right: 0;
  bottom: 3px;
  color: #ccc;
  font-size: 1.2rem;
  transition: color .2s ease-in-out;
  cursor: pointer;
  &:hover {
    color: #f9c5c5;
  }
}
</style>
