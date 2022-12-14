<script setup>
import { ref } from 'vue'
let buscar = '',
    listaTestimonios = [{
        multimedia: '<video src="imagenes/testimonios/tAlopecia-LuisLaiton.mp4" controls poster="imagenes/testimonios/tAlopecia-LuisLaiton.png" class="img_card"></video>',
        texto: 'Con tan solo un mes usando el Shampoo es inevitable notar la disminucion en la caidad del cabello y el aumento de la sedosidad, asi como el crecimiento de nuevo cabello',
        nombre: 'Luis Felipe Laiton',
        etiquetas: ['Alopesia', 'Cabello', 'Shampoo']
    },
    {
        multimedia: '<video src="imagenes/testimonios/tDermatitis-AnaCano.mp4" controls poster="imagenes/testimonios/tDermatitis-AnaCano.png" class="img_card"></video>',
        texto: 'A lo largo de mi vida había sufrido de dermatitis atópica en la piel, lo cual provocaba resequedad, ronchas y picazón; inicie tomando al rededor de 3 tasas de café (3 en 1) al día, después de 5 meses disminuyo considerablemente, ya no me salían ronchas y las manchas en la piel habían desaparecido sin dejar cicatriz',
        nombre: 'Ana Maria Cano',
        etiquetas: ['Dermatitis atópica', 'Dermatitis atopica', 'Dermatitis', 'Resequedad de la piel', 'Ronchas']
    },
    {
        multimedia: '<video src="imagenes/testimonios/tEstreñimiento-AnaCano.mp4" controls poster="imagenes/testimonios/tEstreñimiento-AnaCano.png" class="img_card"></video>',
        texto: 'Me ha ayudado en problemas de colon irritable y estreñimiento. Ya que el café y en chocolate vienen con crema NO láctea puedo consumirlos todos los días evitando la pesadez y llenura',
        nombre: 'Ana Maria Cano',
        etiquetas: ['Colon irritable', 'Colon', 'Estreñimiento', 'Pesadez', 'Llenura']
    },
    {
        multimedia: '<video src="imagenes/testimonios/tMascota-Apolo.mp4" controls poster="imagenes/testimonios/tMascota-Apolo.png" class="img_card"></video>',
        texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At enim praesentium aperiam, eum, quaerat laudantium nostrum maxime ut ducimus totam eligendi sunt nihil nam architecto beatae ea earum doloremque veniam!',
        nombre: 'Apolo',
        etiquetas: ['Mascotas']
    },
    ],
    listaMostrar = ref([])

function mostrarTestimonios(todo) {
    listaMostrar.value = []
    if (todo) listaMostrar.value = listaTestimonios
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
    <section id="testimonios" class="bg-dark">
        <div class="container py-4">
            <nav class="navbar navbar-dark bg-dark">
                <div class="container-fluid text-white">
                    <h2>Testimonios</h2>
                    <div class="d-flex">
                        <a class="mx-2 text-info" @click="mostrarTestimonios(true)">Mostrar todos</a>
                        <input class="form-control me-2" type="search" placeholder="Ingresa una etiqueta"
                            v-model="buscar">
                        <button class="btn btn-outline-info" @click="mostrarTestimonios(false)">Buscar</button>
                    </div>
                </div>
            </nav>
            <div>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col " v-if="listaMostrar != 0" v-for="item in listaMostrar">
                        <div class="card h-100 bg-white bg-opacity-75">
                            <span v-html="item.multimedia"></span>
                            <div class="card-body">
                                <h5 class="card-title">{{ item.etiquetas[0] }}</h5>
                                <p class="card-text">{{ item.texto }}</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">{{ item.nombre }}</small>
                            </div>
                        </div>
                    </div>
                    <div v-if="listaMostrar == 0" class="card bg-white bg-opacity-50">
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
        </div>
    </section>
</template>

<style>
.img_card {
    display: block;
    max-height: 400px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
}

#testimonios{
    background-image: url("imagenes/fondo.png");
}
</style>