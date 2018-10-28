<template>
<div>
  <v-layout>
    <v-flex md6 class="mr-2">
      <songs-bookmarks />
    </v-flex>
    <v-flex md6>
      <songs-search-panel />
    </v-flex>

  </v-layout>
   <v-layout class="mt-4">
    <v-flex md6 class="mr-2">
      <recently-viewed-songs />
    </v-flex>
    <v-flex md6>
      <songs-panel />
    </v-flex>
  </v-layout>
</div>
</template>

<script>
import SongsSearchPanel from '@/components/Songs/SongsSearchPanel'
import SongsPanel from '@/components/Songs/SongsPanel'
import SongsBookmarks from '@/components/Songs/SongsBookmarks'
import RecentlyViewedSongs from '@/components/Songs/RecentlyViewedSongs'
import SongsService from '@/services/SongsService'
export default {
  components: {
    SongsPanel, SongsSearchPanel, SongsBookmarks, SongsService, RecentlyViewedSongs
  },
  data () {
    return {
      songs: null
    }
  },
  methods: {

  },
  async mounted () {
    this.songs = (await SongsService.index1()).data
    console.log('songs', this.songs)
  }
}
</script>

<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.song-title {
  font-size: 30px;
}
.song-artist {
  font-size: 24px;
}
.song-genre {
  font-size: 18px;
}
.album-image {
  width: 70%;
  margin: 0 auto;
}

</style>
