<template>
  <div id="vault" class="pt-5">
      <h2 class="text-center">Deposit to Earn</h2>
      <Home></Home>
  </div>
</template>

<script>
import Home from '@/components/Home'

export default {
  name: 'Vault',
  components: {
      Home
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h2{
    color: #3C4858;
  }
</style>
