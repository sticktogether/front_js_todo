<template>
  <div class="home-page">
    <CreateTodo @todo-created='onTodoCreated' />
    <ul class="todo-list flex-item">
      <div v-for="todoItem in todoList" :key="todoItem.id">
        <TodoItem :todo="todoItem" @todo-deleted="fetchTodoList" @todo-done="fetchTodoList" />
      </div>
    </ul>
  </div>
</template>

<script>
import CreateTodo from '@/components/CreateTodo'
import TodoItem from '@/components/TodoItem'
import { fetchTodoList } from '@/netClient/todoService'
export default {
  name: 'HomePage',
  data: () => ({
    todoList: [],
    todoName: ''
  }),
  components: {
    CreateTodo,
    TodoItem
  },
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
    },
    onTodoCreated (createdTodo) {
      this.todoList.unshift(createdTodo)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
