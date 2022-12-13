<script setup>
import { ref } from 'vue'
let buscar = '',
    listaTestimonios = [{
        img: 'https://placeholder.com/400px',
        texto: 'Con tan solo un mes usando el Shampoo es inevitable notar la disminucion en la caidad del cabello y el aumento de la sedosidad',
        nombre: 'Luis Laiton',
        etiquetas: ['Alopesia', 'Cabello']
    },
    {
        img: 'https://placeholder.com/400px',
        texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At enim praesentium aperiam, eum, quaerat laudantium nostrum maxime ut ducimus totam eligendi sunt nihil nam architecto beatae ea earum doloremque veniam!',
        nombre: 'Ana Maria Cano',
        etiquetas: ['Dermatitis']
    },
    {
        img: 'https://placeholder.com/400px',
        texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At enim praesentium aperiam, eum, quaerat laudantium nostrum maxime ut ducimus totam eligendi sunt nihil nam architecto beatae ea earum doloremque veniam!',
        nombre: 'Apolo',
        etiquetas: ['Mascotas']
    },
    {
        img: 'https://placeholder.com/400px',
        texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At enim praesentium aperiam, eum, quaerat laudantium nostrum maxime ut ducimus totam eligendi sunt nihil nam architecto beatae ea earum doloremque veniam!',
        nombre: 'Agsfgdsfgdsfgdfsgfh',
        etiquetas: ['Dermatitis']
    },
    ],
    listaMostrar = ref([])

function mostrarTestimonios(todo) {
    listaMostrar.value = []
    if (todo)listaMostrar.value = listaTestimonios
    else {
        for (const i of listaTestimonios) {
            if (i.etiquetas.includes(buscar)) {
                listaMostrar.value.push(i)
            }
        }
        if (listaMostrar.value == 0) alert('Testimonio temporalmente no disponible, intentalo con otra palabra clave')
    }
}
</script>
<template>
    <section id="testimonios" class="container">
        <nav class="navbar bg-light">
            <div class="container-fluid">
                <h2>Testimonios</h2>
                <div class="d-flex">
                    <a class="mx-2" @click="mostrarTestimonios(true)">Mostrar todos</a>
                    <input class="form-control me-2" type="search" placeholder="Ingresa una etiqueta" v-model="buscar">
                    <button class="btn btn-outline-primary" @click="mostrarTestimonios(false)">Buscar</button>
                </div>
            </div>
        </nav>
        <div>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div v-if="listaMostrar != 0" class="col" v-for="item in listaMostrar">
                        <div class="card h-100">
                            <img :src="item.img" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">{{ item.etiquetas[0] }}</h5>
                                <p class="card-text">{{ item.texto }}</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">{{ item.nombre }}</small>
                            </div>
                        </div>
                </div>
                <div v-if="listaMostrar == 0" class="card">
                    <img src="https://via.placeholder.com/400" class="card-img-top img_card" alt="...">
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