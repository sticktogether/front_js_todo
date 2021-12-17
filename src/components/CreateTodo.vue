<template>
  <section class="create-todo">
    <input v-model="name" type="text" placeholder="Задача" />
    <button @click="onCreateTodoClicked">Создать</button>
  </section>
</template>

<script>
import { createTodo } from '@/netClient/todoService'
export default {
  name: 'CreateTodo',
  data: () => ({
    name: ''
  }),
  methods: {
    async onCreateTodoClicked () {
      try {
        const newTodo = await createTodo({ title: this.name })
        if (newTodo) {
          this.name = ''
        }
        this.$emit('todo-created', newTodo)
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
