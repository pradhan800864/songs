import Api from '@/services/Api'

export default {
  index (search) {
    return Api().get('songs', {
      params: {
        search: search
      }
    })
  },
  post (song) {
    return Api().post('songs', song)
  },
  put (song) {
    return Api().put(`songs/${song.id}`, song)
  },
  show (songId) {
    return Api().get(`songs/${songId}`)
  },
  index1 () {
    return Api().get('songs')
  }
}
