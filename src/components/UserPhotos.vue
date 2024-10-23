<template>
  <div>
    <carousel :autoplay="true" :perPage="5">
      <slide v-for="photo in photos" :key="photo.id">
        <img :src="photo.url" alt="" style="">
      </slide>
    </carousel>
  </div>
</template>

<script>
import {Carousel, Slide} from 'vue-carousel';

export default {
  name: "UserPhotos",
  components: {
    Carousel,
    Slide
  },
  data() {
    return {}
  },

  props: {
    albumId: {
      type: Number,
      required: true
    },
  },
  created() {
    this.$store.dispatch("fetchPhotos", this.albumId)
  },
  computed: {
    photos() {
      return this.$store.state.photos
    }
  },
  methods: {}
}
</script>

<style scoped>
img {
  height: 100px;
}
</style>