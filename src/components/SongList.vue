<template lang="html">
  <div class="container">
    <div
      v-if="lists.items && lists.items.length > 0"
      v-for="item in lists.items"
      track-by="$index"
      class="item">
      <song-card
        :song="item"
        :song-index="$index"
        :is-active="item.id === playingSongId"></song-card>
    </div>
    <div v-if="lists.isFetching" class="loading">
      <fetching></fetching>
    </div>
  </div>
</template>

<script>
import SongCard from './SongCard';
import Fetching from './Fetching';
import { getPlaylistsByPlaylist, getPlayingSongId } from '../vuex/getters';
import { fetchSongsIfNeeded } from '../vuex/actions/playlists';

export default {
  ready() {
    this.fetchSongsIfNeeded(this.playlist);
  },
  components: {
    SongCard,
    Fetching,
  },
  vuex: {
    getters: {
      playlist: state => state.playlist,
      playingSongId: getPlayingSongId,
      lists: getPlaylistsByPlaylist,
    },
    actions: {
      fetchSongsIfNeeded,
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 80px;
}

.songs-affix {
  margin-top: 81px;
}

.item {
  width: 212px;
  margin-bottom: 20px;
}

.loading {
  width: 100%;
  padding: 20px 0;
}
</style>
