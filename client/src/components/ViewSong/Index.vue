<template>
<div>
  <v-layout>
    <v-flex xs6>
        <song-metadata :song="song" />
    </v-flex>
    <v-flex xs6 class="ml-4">
        <you-tube :youtubeId="song.youtubeId" />
    </v-flex>

  </v-layout>

    <v-layout>
          <v-flex xs6 class="mt-4">
        <tab :song="song"/>

        </v-flex>
        <v-flex xs6 class="ml-4 mt-4">
            <lyrics :song="song"/>
        </v-flex>
    </v-layout>
</div>
</template>
<script>
import SongsService from '@/services/SongsService'
import SongMetadata from '@/components/ViewSong/SongMetadata'
import YouTube from '@/components/ViewSong/YouTube'
import Lyrics from '@/components/ViewSong/Lyrics'
import Tab from '@/components/ViewSong/Tab'
import SongHistoryService from '@/services/SongHistoryService'
import {mapState} from 'vuex'

export default {
  data () {
    return {
      song: {}
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn', 'user'
    ])
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
    if (this.isUserLoggedIn) {
      SongHistoryService.post({
        songId: songId,
        userId: this.user.id
      })
    }
  },
  components: {
    SongMetadata, YouTube, Lyrics, Tab
  }

}

</script>

<style scoped>

</style>
