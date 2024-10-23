<template>
  <div>
    <div class="album-list">
      <div v-for="album in albums" class="album">
        <div>
          <div class="album__title">
      <span>
    {{ album.title }}
      </span>
          </div>
          <UserPhotos :albumId="album.id" class="album__carousel"></UserPhotos>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserPhotos from "@/components/UserPhotos";

export default {
  name: "UserAlbums",
  components: {UserPhotos},
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  mounted() {
    console.log(this.id)
    this.$store.dispatch("fetchAlbums", this.id)
  },
  computed: {
    albums() {
      return this.$store.state.albums
    }
  }
}
</script>

<style lang="scss" scoped>
.album-list {

  padding: 20px;
  border-radius: 20px;
  background: white;
}

.album {
  max-width: 700px;
  display: flex;
  flex-direction: column;

  &__title {
    font-weight: bolder;
    font-size: 20px;
  }

  &__carousel {
    margin-top: 20px;
  }
}
</style>