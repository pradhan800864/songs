<template>
    <panel title="Song Info">
        <v-layout>
            <v-flex xs6>
                <div class="song-title">
                    {{song.title}}
               </div>
               <div class="song-artist">
                    {{song.artist}}
               </div>
               <div class="song-genre">
                    {{song.genre}}
               </div>
                <v-btn
                    dark
                    class="cyan"
                    :to="{
                    name: 'song-edit',
                    params () {
                        return { songId: song.id }
                    }
                    }">
                    Edit Song
                </v-btn>
                <v-btn
                    v-if="isUserLoggedIn && !bookmark"
                    dark
                    class="cyan"
                    @click="setAsBookmark">
                        Set As Bookmark
                </v-btn>
                <v-btn
                    v-if="isUserLoggedIn && bookmark"
                    dark
                    class="cyan"
                    @click="unsetAsBookmark">
                      Unset As Bookmark
                </v-btn>
            </v-flex>
            <v-flex xs6>
                <img class="album-image" :src="song.albumImageUrl" /><br>
                {{song.album}}
            </v-flex>
      </v-layout>
    </panel>
</template>

<script>
import {mapState} from 'vuex'
import BookmarksService from '@/services/BookmarksService'
export default {
  props: [
    'song'
  ],
  data () {
    return {
      bookmark: null
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn', 'user'
    ])
  },
  watch: {
    async song () {
      if (!this.isUserLoggedIn) {
        return
      }

      try {
        const bookmarks = (await BookmarksService.index({
          songId: this.$store.state.route.params.songId,
          userId: this.user.id
        })).data
        if (bookmarks.length) {
          this.bookmark = bookmarks[0]
        }
      }
      catch (err) {
        console.log(err)
      }
    }
  },
  methods: {
    async setAsBookmark () {
      try {
        const songId = this.song.id
        const userId = this.user.id
        this.bookmark = (await BookmarksService.post(songId, userId)).data
        console.log('BOOKMARK ID IS : ', this.bookmark.id)
      } catch (err) {
        console.log(err)
      }
    },
    async unsetAsBookmark () {
      try {
        const bookmarkId = this.bookmark.id
        console.log('this is the bookmark id dsFdfdSDGVSD', bookmarkId)
        await BookmarksService.delete(this.bookmark.id)
        this.bookmark = null
      } catch (err) {
        console.log(err)
      }
    }

  }
}
</script>

<style>
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
  width: 100%;
  margin: 0 auto;
}
</style>
