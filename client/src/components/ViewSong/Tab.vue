<template>
  <v-layout>

    <v-flex xs6 class="ml-4">
        <panel title="Tab">
            <textarea readonly v-model="song.tab">
            </textarea>
        </panel>
    </v-flex>

  </v-layout>
</template>
<script>
import Panel from '@/components/Panel'


export default {
    props: [
        'song'
    ],
  components: {
      Panel
  }

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
