<template>
  <div class="login flex-item item-2">
    <form @submit.prevent="onFormSubmit" class="login-form auth-form">
      <ul>
        <li class="form-field info-2">
          <label for="login">Логин</label>
          <input v-model="login" id="login" type="text" placeholder="Введите логин" class="input-info" required>
        </li>
        <li class="form-field info-2">
          <label for="password">Пароль</label>
          <input v-model="password" id="password" type="password" placeholder="Введите пароль" class="input-info" required>
        </li>
        <button class="submit-btn" type="submit">Войти</button>
        <li class="action-link info-2">
          <span>Нет аккаунта?</span>
          <a @click="redirect" class="link-btn">Зарегистрироваться</a>
        </li>
      </ul>
    </form>
  </div>
</template>

<script>
import { doLogin } from '@/netClient/authService'
export default {
  name: 'LoginPage',
  data: () => ({
    login: '',
    password: ''
  }),
  async mounted () {

  },
  methods: {
    async onFormSubmit () {
      try {
        const token = await doLogin(
          this.login.trim(), // trim убирает пробелы слева и справа
          this.password.trim()
        )
        console.warn({ token })
        if (token) {
          this.$router.push('/')
        }
      } catch (error) {
        console.error({ error })
      }
    },
    redirect () {
      this.$router.push('/registration')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
