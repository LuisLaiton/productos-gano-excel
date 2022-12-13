<script setup>
import { ref } from 'vue'
let etapas = [
    // Exploración
    {
        titulo: 'Exploración',
        orden: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-1-square-fill" viewBox="0 0 16 16"><path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm7.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z"/></svg>',
        tiempo: '1 a 30 días',
        info: 'Los ingredientes activos de Ganoderma Lucidum comienzan a regular las funciones corporales. En esta etapa, la persona experimentará los sutiles pero evidentes efectos del Ganoderma Lucidum a medida que detecta toxinas y enfermedades ocultas en el cuerpo.',
    },
    // Limpieza - desintoxicación
    {
        titulo: 'Limpieza - desintoxicación',
        orden: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-2-square-fill" viewBox="0 0 16 16"><path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm4.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306Z"/></svg>',
        tiempo: '1 a 30 semanas',
        info: 'En esta etapa, el Ganoderma Lucidum conocido como el ”Rey de los eliminadores de toxinas”, actúa eliminando el exceso de ácido úrico, ácido láctico, colesterol, depósitos de grasa, tejido muerto y las toxinas acumuladas en el cuerpo.<br>Estas toxinas entonces son eliminadas a través del sistema circulatorio, por medio de la orina, la defecación y el sudor; o son manifestadas en forúnculos, erupciones, flema y mucosidad. Éstos son signos del proceso de desintoxicación que se da en el cuerpo.',
    },
    // Regulación
    {
        titulo: 'Regulación',
        orden: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-3-square-fill" viewBox="0 0 16 16"><path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm5.918 8.414h-.879V7.342h.838c.78 0 1.348-.522 1.342-1.237 0-.709-.563-1.195-1.348-1.195-.79 0-1.312.498-1.348 1.055H5.275c.036-1.137.95-2.115 2.625-2.121 1.594-.012 2.608.885 2.637 2.062.023 1.137-.885 1.776-1.482 1.875v.07c.703.07 1.71.64 1.734 1.917.024 1.459-1.277 2.396-2.93 2.396-1.705 0-2.707-.967-2.754-2.144H6.33c.059.597.68 1.06 1.541 1.066.973.006 1.6-.563 1.588-1.354-.006-.779-.621-1.318-1.541-1.318Z"/></svg>',
        tiempo: '1 a 12 meses',
        info: 'Durante este periodo los componentes activos del Ganoderma Lucidum actúan en el sistema inmunológico y éste a su vez en el cuerpo para sanarlo.<br>Este proceso es visible y tangible. Por lo tanto, si la reacción resulta demasiado fuerte, debería reducirse la cantidad de consumo. Se recomienda en esta etapa tomar abundante agua.',
    },
    // Construcción
    {
        titulo: 'Construcción',
        orden: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-4-square-fill" viewBox="0 0 16 16"><path d="M6.225 9.281v.053H8.85V5.063h-.065c-.867 1.33-1.787 2.806-2.56 4.218Z"/><path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm5.519 5.057c.22-.352.439-.703.657-1.055h1.933v5.332h1.008v1.107H10.11V12H8.85v-1.559H4.978V9.322c.77-1.427 1.656-2.847 2.542-4.265Z"/></svg>',
        tiempo: '6 a 24 meses',
        info: 'Aquí el Ganoderma Lucidum continúa regenerando el cuerpo por medio del fortalecimiento del sistema inmunológico, y reparando los órganos y sistemas afectados.<br>En esta etapa, el Ganoderma Lucidum también proporciona las vitaminas y los minerales esenciales para acelerar el proceso de recuperación.',
    },
    // Regeneración
    {
        titulo: 'Regeneración',
        orden: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-5-square-fill" viewBox="0 0 16 16"><path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm5.994 12.158c-1.57 0-2.654-.902-2.719-2.115h1.237c.14.72.832 1.031 1.529 1.031.791 0 1.57-.597 1.57-1.681 0-.967-.732-1.57-1.582-1.57-.767 0-1.242.45-1.435.808H5.445L5.791 4h4.705v1.103H6.875l-.193 2.343h.064c.17-.258.715-.68 1.611-.68 1.383 0 2.561.944 2.561 2.585 0 1.687-1.184 2.806-2.924 2.806Z"/></svg>',
        tiempo: '1 a 3 años en adelante',
        info: 'En esta etapa, el Ganoderma Lucidum continúa manteniendo las funciones corporales en su máximo nivel. La persona experimentará una salud óptima y disfrutará de los beneficios de una nueva juventud.',
    }],
    mostrar = ref({})

function mostrarEtapa(etapa) {
    mostrar.value = etapa
}
</script>
<template>
    <section class="container my-4" id="etapas">
        <h2>¿Cómo actúa?</h2>
        <div class="btn-group-vertical" role="group" aria-label="Vertical button group" style="width:100%">
            <!-- Button trigger modal -->
            <button type="button" class="d-flex justify-content-between px-5 py-2 btn btn-dark bg-primary  bg-gradient"
                data-bs-toggle="modal" data-bs-target="#exampleModal" v-for="item in etapas"
                @click="mostrarEtapa(item)">
                <div>
                    <span v-html="item.orden"></span>
                    {{ item.titulo }}
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                        class="bi bi-plus" viewBox="0 0 16 16">
                        <path
                            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                </div>
            </button>

            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header bg-info">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">{{ mostrar.titulo }}</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <h5>{{ mostrar.tiempo }}</h5>
                            <p>{{ mostrar.info }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>