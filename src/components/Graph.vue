<template>
  <div class="w-96">
    <Doughnut :data="toto" />
    <button @click="toutou">{{title}}</button>
  </div>
</template>

<script>
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'BarChart',
  components: { Doughnut },
  // computed: {
  //     chartData() { return /* mutable chart data */ },
  //     chartOptions() { return /* mutable chart options */ }
  //   },
  props: {
    toto: {
        type: Object,
        required: true
      },
  },
  methods: {
    toutou() {
      console.log(this.toto);
    }
  }
}
</script>