<template>
  <div>
    <header
      class="masthead"
      style="background-image: url('/assets/img/chevrolet-blazer.jpg');"
    >
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-lg-8 mx-auto">
            <div class="post-heading">
              <h1>
                <strong>Chevrolet presenta la totalmente nueva Blazer</strong>
              </h1>
              <h2 class="subheading">
                <strong>Llega como la primera SUV deportiva de la marca</strong>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </header>
    <h1 v-if="id === 'simple'" class="simple">
      <strong>
        Bienvenido a la página de Administración
      </strong>
    </h1>
    <h1 v-if="id === 'avanzado'" class="advanced">
      <strong>
        Esta página de administración está en construcción. Intente como
        administrador simple
      </strong>
    </h1>
  </div>
</template>
<script>
export default {
  name: "Administrador",
  props: {
    id: {
      type: String,
    },
  },
};
</script>
<style scoped>
.simple, .advanced {
    text-align: center;
}
</style>
