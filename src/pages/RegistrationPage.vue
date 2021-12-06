<template>
  <form class="registration-form auth-form">
    <div v-if="false">
        зависит от бэка, если емайл и логин - одно и тоже,
        то можно не указывать
    </div>
    <div class="form-field">
      <label for="email">Почта</label>
      <input id="email" type="text" required>
    </div>
    <div class="form-field">
      <label for="login">Логин</label>
      <input id="login" type="text" required>
    </div>
    <div class="form-field">
      <label for="password">Пароль</label>
      <input id="password" type="text" required>
    </div>
    <button class="submit-btn" type="submit">Зарегистрироваться</button>
    <div class="action-link">
      <span>Уже есть аккаунт?</span>
      <a @click="redirect" class="link-btn">Войти</a>
    </div>
  </form>
</template>

<script>
export default {
  name: 'RegistrationPage',
  async mounted () {

  },
  methods: {
    redirect () {
      this.$router.push('/login')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
