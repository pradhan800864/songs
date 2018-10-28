<template>
  <v-layout>

    <v-flex xs6 class="ml-4">
        <panel title="Lyrics">
            <textarea readonly v-model="song.lyrics">
            </textarea>
        </panel>
    </v-flex>

  </v-layout>
</template>
<script>

export default {
  props: [
    'song'
  ]
}

</script>

<style scoped>

textarea {
    width:100%;
    border:none;
    height:600px;
    overflow:auto;
    padding:10px;
    border-color:transparent;
    border-style: none;
}
</style>
