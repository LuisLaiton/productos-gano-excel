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
]
</script>

<template>
   <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#productos">Productos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">¿Como actua?</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Testimonios
          </a>
          <ul class="dropdown-menu">
            <li v-for="item in testimonios">
                <a class="dropdown-item" :href="item.href">{{ item.texto }}</a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Documentos</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>