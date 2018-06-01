<template>
  <div>
    <card></card>
    <v-menu></v-menu>
    <profile></profile>
    <v-link></v-link>
  </div>
</template>

<script>
import Card from './introduction/Card'
import VMenu from './introduction/VMenu'
import Profile from './introduction/Profile'
import VLink from './introduction/VLink'

export default {
  name: 'Introduction',
  components: {VLink, Profile, VMenu, Card}
}
</script>

<style scoped>

</style>
