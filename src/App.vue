<script>
import Navegacion from './components/Navegacion.vue'
import Productos from './components/Productos.vue'
import Proceso from './components/Proceso.vue'

export default {
  name: 'App',
  components: {
    Navegacion,
    Productos,
    Proceso
  }
}
</script>

<template>
  <Navegacion/>
  <body class="bg-light pt-5">
    <Productos/>
    <Proceso/>
  </body>
</template>