<template>
  <div class="page-404">
    <h1>Page not found</h1>
    <router-link to="/">Go to homepage</router-link>
  </div>
</template>

<script>
export default {
  name: 'Page404'
}
</script>

<style lang="sass" scoped>

.page-404
  display: flex
  align-items: center
  justify-content: center
  min-height: 100vh
  flex-direction: column

h1
  color: $main
  font-size: 39px
  font-family: 'Khand', sans-serif
  text-align: center

a
  font-size: 16px
  line-height: 22px
  margin: 0
  color: $black
  font-family: 'Roboto', sans-serif
  text-decoration: none

</style>