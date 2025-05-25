<script setup>

</script>

<template>
  <ul class="menu">
  </ul>
  <router-view></router-view>
</template>

<style scoped>
.menu li {
  display: inline-block;
  & + li {
    margin-left: 10px;
  }
}
</style>

