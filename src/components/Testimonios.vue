<script setup>
import { ref } from 'vue'
let buscar = '',
    listaTestimonios = [{
        img: '',
        texto: '',
        nombre: '',
        etiquetas: []

    }]

function mostrarTestimonios() {
    console.log(buscar)
}
</script>
<template>
    <section id="testimonios" class="container">
        <nav class="navbar bg-light">
            <div class="container-fluid">
                <h2>Testimonios</h2>
                <div class="d-flex">
                    <a class="mx-2" href="">Mostrar todos</a>
                    <input class="form-control me-2" type="search" placeholder="Ingresa una etiqueta" v-model="buscar">
                    <button class="btn btn-outline-primary" @click="mostrarTestimonios">Buscar</button>
                </div>
            </div>
        </nav>
        <div>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div v-if="buscar != ''" class="col">
                    <div class="card h-100">
                        <img src="..." class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div v-if="buscar == ''" class="card">
                    <img src="..." class="card-img-top img_card" alt="...">
                    <div class="card-body">
                        <h5 class="card-title placeholder-glow">
                            <span class="placeholder col-6"></span>
                        </h5>
                        <p class="card-text placeholder-glow">
                            <span class="placeholder col-7"></span>
                            <span class="placeholder col-4"></span>
                            <span class="placeholder col-4"></span>
                            <span class="placeholder col-6"></span>
                            <span class="placeholder col-8"></span>
                        </p>
                        <a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-6"></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
.img_card {
    max-height: 400px;
}
</style>