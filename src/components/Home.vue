<template>
  <div id="home" class="pt-5">

    <div class="container pt-5">
      <div class="row">
        <VaultList/>
      </div>
    </div>
  </div>
</template>

<script>
import VaultList from  '@/components/VaultList'
export default {
  components:{
    VaultList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#home {
  color: white;
}

</style>
