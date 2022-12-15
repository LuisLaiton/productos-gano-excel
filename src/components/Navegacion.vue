<script setup>
let testimonios = [{
  href: '#cabello',
  texto: 'Cabello',
},
{
  href: '#dermatitis',
  texto: 'Dermatitis',
},
{
  href: '#peso',
  texto: 'Peso',
},
{
  href: '#mascotas',
  texto: 'Mascotas',
}
],
imagen = 'imagenes/logo.ico'
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <div class="container-fluid mx-md-5">
      <a class="navbar-brand" href="#">
        <img class="logo" :src="imagen" alt="logo">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#productos">Productos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#etapas">¿Cómo actúa?</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#testimonios">Testimonios</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
.logo{
  width: 20%;
}
</style>