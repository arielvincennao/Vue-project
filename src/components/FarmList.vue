<template>
  <div class="row">
    <div v-for="(value, key) in list" class="col-4 p-2" :key="key">
      <div class="card farm-card">
        <div class="card-body">
          <img
            src="https://www.suzukijember.com/gallery/gambar_product/default.jpg"
            class="rounded"
          />
          <h5 class="card-title">{{ key }}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
             <p class="card-text" v-if="value.vault">
                APRD: {{ value.farm.aprd }} %
              </p>
          <button type="button" class="btn btn-info">Mine</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
export default {
  name: "FarmList",
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
img {
  height: 5em;
}

.farm-card {
  background-color: #2d3140;
  color: white;
}
</style>