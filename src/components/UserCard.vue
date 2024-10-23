<template>
  <div>
    <div v-for="user in users" v-if="user.id === id" class="user-card">
      <div class="user-card__background"></div>
      <div class="user-card__photo"></div>
      <div class="user-card__info">
        <div class="user-card__info__name">{{ user.name }}</div>
        <div class="user-card__info__username">{{ user.username }}</div>
        <div class="user-card__info__email">{{ user.email }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserCard",
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  computed: {
    users() {
      return this.$store.state.users
    }
  }
}
</script>

<style lang="scss" scoped>
.user-card {
  background: white;
  border-radius: 20px;

  &__info {
    height: 300px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  &__background {

  }
}
</style>