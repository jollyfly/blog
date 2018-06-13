<template>
  <div id="introduction">
    <profile></profile>
    <v-link></v-link>
  </div>
</template>

<script>
import VMenu from './VMenu'
import Profile from './introduction/Profile'
import VLink from './introduction/VLink'

export default {
  name: 'Introduction',
  components: {VLink, Profile, VMenu}
}
</script>

<style scoped>

</style>
