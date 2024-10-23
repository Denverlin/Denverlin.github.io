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
  &__info {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  &__background {
    height: 50px;
    background-image: url("https://images.unsplash.com/photo-1579547621706-1a9c79d5c9f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  }
}
</style>