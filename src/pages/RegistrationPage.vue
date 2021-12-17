
<template>
  <div class="registration flex-item item-2">
    <form @submit.prevent="onFormSubmit" class="registration-form auth-form">
      <ul>
        <li class="form-field info-2">
          <!-- ({email}) -->
          <label for="email">Почта</label>
          <input v-model="email" id="email" type="text" placeholder="Введите почту" class="input-info" required>
        </li>
        <li class="form-field info-2">
          <!-- ({login}) -->
          <label for="login">Логин</label>
          <input v-model="login" id="login" type="text" placeholder="Введите логин" class="input-info" required>
        </li>
        <li class="form-field info-2">
          <!-- ({password}) -->
          <label for="password">Пароль</label>
          <input v-model="password" id="password" type="password" placeholder="Введите пароль" class="input-info" required>
        </li>
        <button class="submit-btn reg-btn" type="submit">Зарегистрироваться</button>
        <li class="action-link info-2">
          <span>Уже есть аккаунт?</span> <br>
          <a @click="redirect" class="link-btn">Войти</a>
        </li>
      </ul>
    </form>
  </div>
</template>

<script>
import { doRegister } from '@/netClient/authService'
export default {
  name: 'RegistrationPage',
  data: () => ({
    email: '',
    login: '',
    password: ''
  }),
  methods: {
    async onFormSubmit () {
      try {
        const data = await doRegister(
          this.login.trim(), // trim убирает пробелы слева и справа
          this.password.trim(),
          this.email.trim()
        )
        console.warn({ data })
      } catch (error) {
        // console.error ({ error })
        // throw error
      }
      this.$router.push('/login')
    },
    redirect () {
      this.$router.push('/login')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
