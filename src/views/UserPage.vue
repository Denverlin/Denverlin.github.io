<template>
  <div>
    <div class="user-page">
      <div class="user-page__card">
        <UserCard :id="id"></UserCard>
      </div>
      <div class="user-page__media">
        <div style="display:flex; flex-direction: column; gap: 100px">

          <UserAlbums :id="id"></UserAlbums>
        </div>
        <div style="display:flex; flex-direction: column; gap: 100px">

          <UserPosts :id="id"></UserPosts>
        </div>
      </div>
    </div>
    <button class="back-button" @click="backToMenu">Back</button>
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

.back-button {
  margin-top: 100px;
  height: 50px;
  width: 150px;
}
</style>