<template>
  <q-page class="flex flex-center">
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <card-chart
          title="Total Graph"
          :data="dataForGraph"
        ></card-chart>
      </div>
    </div>
  </q-page>
</template>

<script>
import cardChart from '../components/cardChart'
export default {
  name: 'PageIndex',
  mounted () {
    // Axios.all not working
    Promise.all([
      this.$axios.get('https://jsonplaceholder.typicode.com/posts'),
      this.$axios.get('https://jsonplaceholder.typicode.com/comments'),
      this.$axios.get('https://jsonplaceholder.typicode.com/todos')
    ])
      .then(response => {
        // this.setPosts(response[0].data)
        this.totalPosts = response[0].data.length
        this.totalComments = response[1].data.length
        this.totalTodos = response[2].data.length
      })
  },
  data () {
    return {
      totalPosts: 0,
      totalComments: 0,
      totalTodos: 0
    }
  },
  computed: {
    dataForGraph () {
      return {
        posts: this.totalPosts,
        todos: this.totalTodos,
        comments: this.totalComments
      }
    }
  },
  components: {
    cardChart
  }
}
</script>
