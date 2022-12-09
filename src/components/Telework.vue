<template>
    <div class="hello flex flex-col w-5/6 m-auto">
        <h1 class="mb-11 font-bold mt-11">Aujourd’hui, 
je travaille en </h1>
        <fieldset class="grid grid-cols-2 gap-4">
  <legend class="sr-only">Delivery</legend>
  <div>
    <input
      type="radio"
      name="DeliveryOption"
      value=1
      id="DeliveryStandard"
      class="peer hidden"
      v-model="form.telework"
      checked
    />

    <label
      for="DeliveryStandard"
      class="block cursor-pointer bg-white rounded-lg border border-gray-100 p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
    >
      <p class="mt-1 text-gray-900">Télétravail</p>
    </label>
  </div>

  <div>
    <input
      type="radio"
      name="DeliveryOption"
      value=0
      id="DeliveryPriority"
      class="peer hidden"
      v-model="form.telework"
    />

    <label
      for="DeliveryPriority"
      class="block cursor-pointer rounded-lg bg-white border border-gray-100 p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
    >
      <p class="mt-1 text-gray-900">Présentiel</p>
    </label>
  </div>
</fieldset>
<label for="default" class="block mt-11 mb-2 text-sm font-medium text-dark">Default select</label>
<select id="default" class=" mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" v-model="form.location" >
  <option v-for="location in locations" :value="location._id" :key="location._id">{{location.district}}</option>
</select>
<button class="inline-block rounded border btn px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-blue-900 focus:outline-none focus:ring active:text-blue-900 mx-auto" @click="register">Voir les statistiques</button>
<div v-if="loaded" class="flex flex-col items-center mt-11">
  <div class="max-w-sm bg-white rounded-md overflow-hidden shadow-2xl mx-2 mb-11">
    <div class="px-6 py-4 text-center yellow">
      <Vue3autocounter ref='counter' :startAmount='0' :endAmount='form.telework == 1 ? teletravail : presentiel' :duration='1.5' separator="" decimalSeparator="" :decimals="0" :autoinit='true'/> 
      <p>Employés en {{ form.telework == 1 ? "teletravail" : "presentiel" }}</p>
    </div>
  </div>
  <Graph :toto="chart" :title="text" ></Graph>
</div>

<!-- <button @click="register">test</button>
<div v-show="store.state.users">
<div id="toto">
  <Vue3autocounter ref='counter' :startAmount='0' :endAmount='store.state.users.teletravail' :duration='1.5' separator="" decimalSeparator="" :decimals="0" :autoinit='true'/> 
</div>
</div> -->
    </div>
  </template>
  
<script>

import axios from 'axios'
import Graph from './Graph.vue'
import Vue3autocounter from 'vue3-autocounter';

export default {
  components: {
    Graph,
    Vue3autocounter
  },
  data() {
    return {
      locations: [],
      form: {
      telework: 1,
      location: null,
      },
      loaded: false,
      chart: null,
      text: null,
      presentiel: null,
      teletravail: null,
    }
  },
  async mounted() {
    axios
      .get("http://localhost:3001/location")
      .then((response) => {
        console.log(response.data);
        this.locations = response.data
      })
  },
  methods: {
    register() {
      const mode = this.form.telework == 1 ? 'teletravail' : 'presentiel'
      console.log(this.form);
      axios
      .put(`http://localhost:3001/location/${mode}`, this.form)
      .then((response) => {
        console.log(response.data);
        // this.locations = response.data
        this.display()
      })
    },
    async display() {
      this.loaded = false

    try {
      // console.log(this.form);
      const response = await axios.post("http://localhost:3001/location/loc", this.form);
      const { presentiel, teletravail } = response.data
      this.text = "My journey with Vue";
      this.presentiel = presentiel;
      this.teletravail = teletravail;
      console.log(this.presentiel, this.teletravail);
      this.chart = {
        labels: [
          'Télétravail',
          'Présentiel'
        ],
        datasets: [{
          label: 'Nombre de personnes',
          data: [teletravail, presentiel],
          backgroundColor: [
            'rgb(255, 157, 86)',
            'rgb(166, 220, 123)',
          ],
          hoverOffset: 4
        }]
      }

      this.loaded = true
    } catch (e) {
      console.error(e)
    }
    }
  }
}
  </script>
  <style scoped>
 .active {
  display: block;
 }
 .notActive {
  display: none;
 }
 .yellow {
  color: #E7E247;
  font-size: xx-large;
  font-weight: bold;
 }
 .btn {
  background-color: #080357;
 }
  </style>