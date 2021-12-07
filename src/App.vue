<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
// import NavBar from '@/components/NavBar'
import AuthLayout from '@/layouts/AuthLayout'
import MainLayout from '@/layouts/MainLayout'
export default {
  name: 'App',
  components: {
    AuthLayout,
    MainLayout
  },
  computed: {
    layout () {
      return this.$route.meta?.layout || 'main-layout'
    }
  }
}
</script>

<style lang="scss">

</style>
