<template>
  <div id="farm" class="pt-5">
    <h2>Farm</h2>
    <h3>Hold vault tokens and Earn 11.</h3>
    <div class="container">
        <FarmList></FarmList>
    </div>
  </div>
</template>

<script>
import FarmList from '@/components/FarmList'
export default {
  name: "Farm",
  components:{
    FarmList
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>
