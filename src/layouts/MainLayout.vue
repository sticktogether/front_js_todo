<template>
    <div class="main-layout">
        <NavBar class="NavBar"/>
        <h2 class="page-title">
            {{$route.meta.title}}
        </h2>
        <div class="page-container">
            <router-view/>
        </div>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar'
export default {
  name: 'MainLayout',
  components: {
    NavBar
  }
}
</script>

<style lang="scss" scoped>

</style>
