<template>
  <div id="app">
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",

}
</script>
<style lang="scss">
body {
  margin: 0;
  background: #e4e5e9;
}

.container {
  margin: 20px auto;
  max-width: 80%;
}
</style>
