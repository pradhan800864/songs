<template>
    <panel title="YouTube">
        <youtube :video-id="youtubeId"
                 :player-width=600
                 :player-height=300>
        </youtube>
    </panel>
</template>

<script>
import VueYouTubeEmbed from 'vue-youtube-embed'

export default {
    props: [
        'youtubeId'
    ],
    components: {
        VueYouTubeEmbed
    } 
}
</script>
<style scoped>

</style>
