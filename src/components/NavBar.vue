<template>
  <div class="nav">
    <div class="link-wrapper">
      <div class="nav-links">
        <router-link class="nav-link" exact to="/">Список дел</router-link>
        <router-link class="nav-link" to="/info">Информация (инсайдерская)</router-link>
      </div>
      <a @click="onLogoutClicked" class="logout nav-link">Выйти</a>
    </div>
  </div>
</template>

<script>
import { doLogout } from '@/netClient/dataService'
export default {
  name: 'NavBar',
  methods: {
    async onLogoutClicked () {
      try {
        await doLogout()
        this.$router.push('/login')
      } catch (error) {
        console.error({ error })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
