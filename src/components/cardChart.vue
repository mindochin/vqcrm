<template>
  <q-card class="chart-card">
    <q-card-section class="bg-blue-grey-1 text-white1 q-pa-sm">
      <div class="text-h6">{{title}}</div>
    </q-card-section>
    <q-card-section>
      <canvas
        ref="canvas"
        :id="safeId"
      ></canvas>
    </q-card-section>
  </q-card>
</template>
<script>
import Chart from 'chart.js'

export default {
  name: 'cardChart',
  props: {
    title: { type: String, default: 'График' },
    type: { type: String, default: 'line' },
    datasets: Object,
    labels: [Array, String],
    options: Object
  },
  data () {
    return {
      chart: null
    }
  },
  watch: {
    chartConfig () {
      this.updateChart()
    }
  },
  mounted () {
    this.renderChart()
  },
  beforeDestroy () {
    this.destroyChart()
  },
  computed: {
    safeId () {
      // as long as this._uid() works there is no need to generate the key
      const key = () => Math.random().toString(36).replace('0.', '')
      return 'chart-' + this._uid || key()
    },
    defaultOptions () {
      return {
        maintainAspectRatio: false,
        legend: {
          display: false
        }
      }
    },
    computedDatasets () {
      let data = []
      let backgroundColor = []
      for (let key in this.data) {
        data.push(this.data[key])
        backgroundColor.push('rgba(' + (Math.floor(Math.random() * (255 - 0 + 1))) + ', ' + (Math.floor(Math.random() * (255 - 0 + 1))) + ', ' + (Math.floor(Math.random() * (255 - 0 + 1))) + ', 0.2)')
      }
      return [{ 'data': data, 'backgroundColor': backgroundColor }]
    },
    computedLabels () {
      if (this.labels && typeof this.labels !== 'string') {
        return this.labels
      } else {
        return Object.keys(this.data)
      }
    },
    computedData () {
      return {
        datasets: this.computedDatasets,
        labels: this.computedLabels
      }
    },
    computedOptions () {
      return Object.assign({}, this.defaultOptions, this.options)
    },
    chartConfig () {
      return {
        type: this.type,
        data: this.computedData,
        options: this.computedOptions || this.options
      }
    }
  },
  methods: {
    renderChart () {
      console.log(this.chartConfig)
      this.destroyChart()
      this.chart = new Chart(
        this.$refs.canvas.getContext('2d'),
        this.chartConfig
      )
    },
    updateChart () {
      Object.assign(this.chart, this.chartConfig)
      this.chart.update()
    },
    destroyChart () {
      if (this.chart) {
        this.chart.destroy()
      }
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
