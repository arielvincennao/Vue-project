<template>
  <div>
    <h1>Vaults</h1>
    <h3>TVL: $5,852,066</h3>
    <table>
      <div class="col-12 pb-5" v-for="(value, key) in list" :key="key">
         <!--<li>{{ key }}: {{ value }}</li> -->
        <!-- <li v-if="value.vault">{{value.farm.apy}}</li> -->


          <div class="card">
            <div class="card-header">Featured</div>
            <div class="card-body row">
            <h5 class="card-title">{{ key }}</h5>
               <div class="col-12">
                   <p class="card-text" v-if="value.vault">
                     APY: {{value.farm.apy}} %
                   </p>
               </div>
               <br><br>
               <hr>
                <div class="col-12">
                   APRD: <p class="card-text" v-if="value.vault">
               {{value.farm.aprd}} %
              </p>
                </div>
                <a href="#" class="btn btn-primary">Deposit</a>
            </div>
          </div>



      </div>

    </table>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
export default {
  name: "VaultList",
  data() {
    return { list: undefined };
  },
  mounted() {
    Vue.axios.get("https://eleven.finance/api.json").then((resp) => {
      this.list = resp.data;
      console.warn(resp);
    });
  },
};
</script>

<style scoped>
    .card{
        color: black;
    }
</style>
