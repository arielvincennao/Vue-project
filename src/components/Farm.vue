<template>
  <div id="farm" class="pt-5">
    <h2>Farm</h2>
    <h3>Hold vault tokens and Earn 11.</h3>
    <div class="container pt-5">
      <div class="row">
        <div class="col-md-4 col-sm-12">
          <div class="card farm-card" style="width: 20rem">
            <div class="card-body">
              <img src="https://eleven.finance/static/media/11SWIRL-logo.ede85ab3.svg" class="rounded">
              <h5 class="card-title">Card title</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button type="button" class="btn btn-info">Mine</button>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-12">
          <div class="card farm-card" style="width: 20rem">
            <div class="card-body">
              <img src="https://eleven.finance/static/media/11BFI-logo.8982757f.svg" class="rounded">
              <h5 class="card-title">Card title</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
                <button type="button" class="btn btn-info">Mine</button>
                <button type="button" class="btn btn-danger">Get LP token</button>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-12">
          <div class="card farm-card" style="width: 20rem">
            <div class="card-body">
              <img src="https://eleven.finance/static/media/11EPS-logo.c1373872.svg" class="rounded">
              <h5 class="card-title">Card title</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
                <button type="button" class="btn btn-info">Mine</button>
                <button type="button" class="btn btn-danger">Get LP token</button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "Farm",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img{
    height: 5em;
  }

  .farm-card{
    background-color: #2D3140;
    color: white;
  }
</style>
