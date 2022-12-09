<script setup>
import Telework from '../components/Telework.vue'
import NavbarVue from '../components/Navbar.vue';

</script>

<template>
    <div class="header min-w-full">
      <NavbarVue />
      <Telework />
    </div>
</template>
<style scoped>
.header {
  height: 800px;
  width: 100%;
  background-image: linear-gradient(to top, rgba(235, 242, 250, 1), rgba(231, 226, 71, 1));
}
.yellow {
  background-color: #E7E247;
}

</style>
