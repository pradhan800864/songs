<template>
<div>
  <v-layout row>
    <v-flex md6 offset-xs3>
      <songs-search-panel />
    </v-flex>
    
  </v-layout>
   <v-layout row class="mt-4">
    <v-flex md6 offset-xs3>
      <songs-panel />
    </v-flex>
    
  </v-layout>
</div>
</template>

<script>
import SongsSearchPanel from '@/components/Songs/SongsSearchPanel'
import SongsPanel from '@/components/Songs/SongsPanel'
import SongsService from '@/services/SongsService'
export default {
  components: {
    SongsPanel, SongsSearchPanel
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
