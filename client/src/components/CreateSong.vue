<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Songs MetaData">
        <v-text-field label="Title" v-model="song.title" required :rules="[required]"/>
        <v-text-field label="Artist" v-model="song.artist" required :rules="[required]"/>
        <v-text-field label="Genre" v-model="song.genre" required :rules="[required]"/>
        <v-text-field label="Album" v-model="song.album" required :rules="[required]"/>
        <v-text-field label="Album Image URL" v-model="song.albumImageUrl" required :rules="[required]"/>
        <v-text-field label="Youtube ID" v-model="song.youtubeId" required :rules="[required]"/>
      </panel>
    </v-flex>
    <v-flex xs8>
      <panel title="Song Structure" class="ml-4">
        <v-text-field multi-line label="Lyrics" v-model="song.lyrics" required :rules="[required]"/>
        <v-text-field multi-line label="Tab" v-model="song.tab" required :rules="[required]"/>
      </panel>
    <div class="danger-alert" v-if="error">{{error}}</div>
    <v-btn class="cyan" @click="create" dark>Create Song</v-btn>

    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: (value) => !!value || 'Required!'

    }
  },

  methods: {
    async create () {
      try {
        await SongsService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>

</style>
