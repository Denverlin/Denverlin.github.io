<template>
  <div>
    <div class="user-page">
      <div class="user-page__card">
        <UserCard :id="id"></UserCard>
      </div>
      <div class="user-page__media">
        <div style="display:flex; flex-direction: column; gap: 100px">
          <span>Альбомы</span>
          <UserAlbums :id="id"></UserAlbums>
        </div>
        <div style="display:flex; flex-direction: column; gap: 100px">
          <span>Посты</span>
          <UserPosts :id="id"></UserPosts>
        </div>
      </div>
    </div>
    <button @click="backToMenu">Back</button>
  </div>
</template>

<script>
import UserAlbums from "@/components/UserAlbums";
import UserPosts from "@/components/UserPosts";
import UserCard from "@/components/UserCard";

export default {
  name: "UserPage",
  components: {UserCard, UserPosts, UserAlbums},
  computed: {
    id() {
      return this.$route.params.id;
    }
  },
  methods: {
    backToMenu() {
      this.$router.push("/")
    }
  }
}
</script>
<style lang="scss" scoped>
.user-page {

  &__media {
    margin-top: 50px;
    display: flex;
    justify-content: space-around;
  }
}
</style>