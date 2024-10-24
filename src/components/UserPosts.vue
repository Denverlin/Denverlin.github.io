<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id" class="user-post">
      <div class="user-post__title">
        {{ post.title }}
      </div>
      <div class="user-post__body">
        {{ post.body }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserPosts",
  props: {
    id: {
      type: [String, Number],
      required: true
    }
  },
  mounted() {

    this.$store.dispatch("fetchPosts", this.id)
  },
  computed: {
    posts() {
      return this.$store.state.posts
    }
  }
}
</script>

<style lang="scss" scoped>
.post-list {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 700px;
  gap: 30px;
  padding: 20px;
  border-radius: 20px;
  background: white;

}

.user-post {

  &__title {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10px;
  }
}
</style>