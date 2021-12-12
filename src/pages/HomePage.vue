<template>
  <div class="home-page">
    <section class="create-todo">
      <!-- Верстка добавления TODO -->
    </section>
    <section class="todo-list">
      <h2>TODO LIST:</h2>
      <ul v-for="todoItem in todoList" :key="todoItem.id">
        <li>
          <div class="title">{{ todoItem.title }}</div>
          <div class="checkbox">
            <input type="checkbox" :checked="todoItem.isCompleted">
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { fetchTodoList } from '@/netClient/dataService'
export default {
  name: 'HomePage',
  data: () => ({
    todoList: []
  }),
  created () {
    this.fetchTodoList()
  },
  methods: {
    async fetchTodoList () {
      try {
        this.todoList = await fetchTodoList()
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
