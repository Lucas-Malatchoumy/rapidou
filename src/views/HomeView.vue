<script setup>
import Telework from '../components/Telework.vue'
import NavbarVue from '../components/Navbar.vue';
import Section2Vue from '../components/Section2.vue';
import Section3Vue from '../components/Section3.vue';

</script>

<template>
    <div class="header min-w-full">
      <NavbarVue />
      <div class="flex flex-col text-center mt-6 text-xl ">
        <p class="font-bold">Vous rêvez d’un monde dans lequel vous <br/> pourrez vous rendre sur votre lieu de travail <br/> sans grande difficulté ? </p>
        <img src="../assets/iphone1.png" class="mx-auto w-5/12"/>
        <p>Et si on vous disait que vous pouvez faire partie de la solution ?</p>
      </div>
      <div class="ml-12 flex flex-col mb-24 mt-24 text-xl">
        <p class="font-bold">Que faisons-nous ? </p>
        <div class="flex justify-center mt-10">
          <div class="max-w-sm rounded-md overflow-hidden shadow-2xl mx-2">
            <div class="px-6 py-4">
              <p class="text-gray-700 text-base">
                Une application qui gère l’affluence aussi bien dans les transports en commun que sur les axes routiers ! Sortez plus sereinement.
              </p>
            </div>
          </div>
          <div class="max-w-sm rounded-md overflow-hidden shadow-2xl mx-2">
            <div class="px-6 py-4">
              <p class="text-gray-700 text-base">
                Grâce à vous, et vos journées de télétravail, nous réalisons des statistiques sur l’affluence des voies routières et des transports.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Section2Vue />
      <Section3Vue />
      <div class="flex flex-col items-center mt-6 mb-11 pb-11 ">
        <p class="text-xl font-bold">Inscrivez-vous à notre newsletter  </p>
        <form action="" class="mr-11 mt-8">
    <div>
      <label for="email" class="sr-only">Email</label>

      <div class="relative">
        <input
          type="email"
          class="w-full rounded-full border-gray-200 p-4 pr-12 text-sm shadow-sm focus:outline-none"
          placeholder="Enter email"
        />
        <span class="absolute inset-y-0 right-0 grid w-10">
    <button
      type="button"
      class="rounded-r-full px-3 yellow text-white"
    >Envoyer
    </button>
  </span>
      </div>
    </div>
  </form>
      </div>
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
