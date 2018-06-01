<template>
  <div>
    <card></card>
    <v-menu></v-menu>
    <profile></profile>
  </div>
</template>

<script>
import Card from './introduction/Card'
import VMenu from './introduction/VMenu'
import Profile from './introduction/Profile'

export default {
  name: 'Introduction',
  components: {Profile, VMenu, Card}
}
</script>

<style scoped>

</style>
