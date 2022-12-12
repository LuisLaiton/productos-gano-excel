<script>
import Navegacion from './components/Navegacion.vue'
import Productos from './components/Productos.vue'

export default {
  name: 'App',
  components: {
    Navegacion,
    Productos
  }
}
</script>

<template>
  <Navegacion/>
  <Productos/>
</template>