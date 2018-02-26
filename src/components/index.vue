<template>
  <div>
    <ul>
      <router-link :to="{path:'/repository'}">
        <md-button href="#/repository"  class="md-raised md-primary">
          View your repositories
        </md-button>
      </router-link> 
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        msg: ''
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
