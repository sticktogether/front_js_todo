<template>
    <div class="auth-layout">
        <h2 class="page-title">
            {{$route.meta.title}}
        </h2>
        <div class="page-container">
            <router-view/>
        </div>
    </div>
</template>

<script>
export default {
  name: 'AuthLayout'
}
</script>

<style lang="scss" scoped>
  .auth-layout {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
</style>
