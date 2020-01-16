<template>
  <q-card class="chart-card">
    <q-card-section class="bg-primary text-white">
      <div class="text-h6">{{title}}</div>
    </q-card-section>
    <q-card-section>
      <canvas ref="chart"></canvas>
    </q-card-section>
  </q-card>
</template>
<script>
import Chart from 'chart.js'
export default {
  data () {
    return {
      type: 'bar',
      chart: ''
    }
  },
  props: {
    data: {
      type: Object,
      required: true
    },
    title: {
      default () { return 'Graph' }
    }
  },
  watch: {
    data () {
      this.startChart()
    },
    type () {
      this.chart.destroy()
      this.startChart()
    }
  },
  computed: {
    dataForChart () {
      return {
        labels: Object.keys(this.data),
        datasets: [{
          data: Object.values(this.data),
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
          ]
        }]
      }
    }
  },
  methods: {
    startChart () {
      // console.log(this.dataForChart)
      // eslint-disable-next-line no-unused-vars
      let axesStartFromZero = [{
        ticks: {
          beginAtZero: true
        }
      }]
      this.chart = new Chart(this.$refs.chart,
        {
          type: 'bar',
          data: {// this.dataForChart,
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        })
    },
    toImage () {
      window.open(this.chart.toBase64Image())
    }
  }
}
</script>
<style lang="scss" scoped>
.chart-card {
  width: 100%;
  min-height: 150px;
}
</style>