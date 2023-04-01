<script>
import Navegacion from './components/Navegacion.vue'
import Productos from './components/Productos.vue'
import Proceso from './components/Proceso.vue'
import Testimonios from './components/Testimonios.vue'
import Final from './components/Final.vue'

export default {
  name: 'App',
  components: {
    Navegacion,
    Productos,
    Proceso,
    Testimonios,
    Final
  }
}
</script>

<template>
  <Navegacion/>
  <body class="bg-light pt-5">
    <Productos/>
    <Proceso/>
    <!-- <Testimonios/> -->
  </body>
  <footer>
    <Final/>
  </footer>
</template>