<template>
    <panel title="Recently Viewed Songs">
        <v-data-table
        :headers="headers"
        :pagination.sync="pagination"
        :items="histories">
        <template slot="items" scope="props">
            <td>{{props.item.title}}</td>
            <td>{{props.item.artist}}</td>
            <td>{{props.item.genre}}</td>

        </template>
        </v-data-table>
    </panel>
</template>

<script>
import {mapState} from 'vuex'
import SongHistoryService from '@/services/SongHistoryService'
export default {
  data () {
    return {
      headers: [
        {
          text: 'Title',
          value: 'title'
        },
        {
          text: 'Artist',
          value: 'artist'
        },
        {
          text: 'Genre',
          value: 'genre'
        }
      ],
      pagination: {
        sortBy: 'createdAt',
        descending: true
      },
      histories: []
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn', 'user'
    ])
  },
  async mounted () {
    if (this.isUserLoggedIn) {
      this.histories = (await SongHistoryService.index({
        userId: this.user.id
      })).data
    }
  }
}
</script>

<style>

</style>
