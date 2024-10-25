<template>
  <div>
    <div v-for="user in users" v-if="user.id == id" class="user-card">
      <!--      <div class="user-card__background"></div>-->
      <div class="user-card__photo"><img alt="" src="https://ex-beton.ru/images/home/client-say/00.jpg"></div>
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
      type: [String, Number],
      required: true
    }
  },
  computed: {
    users() {
      return this.$store.state.users
    },
  },
  created() {
    this.$store.dispatch("fetchUsers")
  }
}
</script>

<style lang="scss" scoped>
.user-card {
  background: white;
  justify-content: space-evenly;
  border-radius: 20px;
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  gap: 50px;
  align-items: center;

  &__info {
    height: 300px;
    display: flex;
    flex-direction: column;
    padding: 20px 0 20px 0;
    justify-content: space-around;

    &__name {
      font-weight: bold;
      font-size: 40px;
    }
  }

  &__background {

  }

  &__photo img {
    max-width: 200px;
    border-radius: 100px;
  }
}
</style>