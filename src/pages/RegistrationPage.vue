<template>
  <form @submit.prevent="onFormSubmit" class="registration-form auth-form">
    <div v-if="false">
        зависит от бэка, если емайл и логин - одно и тоже, то можно не указывать.
        добавить возможность ввести имя пользаку. /v-model
    </div>
    <div class="form-field">
      <!-- ({email}) -->
      <label for="email">Почта</label>
      <input v-model="email" id="email" type="text" required>
    </div>
    <div class="form-field ">
      <!-- ({login}) -->
      <label for="login">Логин</label>
      <input v-model="login" id="login" type="text" required>
    </div>
    <div class="form-field">
      <!-- ({password}) -->
      <label for="password">Пароль</label>
      <input v-model="password" id="password" type="text" required>
    </div>
    <button class="submit-btn" type="submit">Зарегистрироваться</button>
    <div class="action-link">
      <span>Уже есть аккаунт?</span>
      <a @click="redirect" class="link-btn">Войти</a>
    </div>
  </form>
</template>

<script>
import { doRegister } from '@/netClient/dataService'
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
