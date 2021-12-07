<template>
  <div class="hone-page"></div>
</template>

<script>
export default {
  name: 'HomePage',
  async mounted () {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    console.warn({ response })
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
