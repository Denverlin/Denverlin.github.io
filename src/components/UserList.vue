<template>
  <div>
    <div class="user-list">
      <div v-for="user in users" :key="user.id" class="user-list__user" @click="openProfile(user.id)">
        <div class="user-list__name">{{ user.name }}</div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserList",
  props: {}, mounted() {
    this.$store.dispatch("fetchUsers")
  },
  methods: {

    openProfile(id) {
      this.$router.push({name: "UserPage", params: {id: id}})
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
.user-list {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  gap: 10px;
  align-items: stretch;
  margin: 0 auto;
  background: white;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 20px;

  :hover {
    cursor: pointer;
    background: aqua;
  }

  &__user {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 30px;

  }

}

</style>