<template>
    <div class="main-layout">
        <NavBar/>
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
    .main-layout {
        width: 100%;
        max-width: 700px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

</style>
