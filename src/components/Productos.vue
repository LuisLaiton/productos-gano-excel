<script setup>
import { ref } from 'vue'

let productos = [
    // 3_en_1
    {
    id: '3_en_1',
    nombre: 'Ganocafe 3 en 1',
    img: 'src/components/imagenes/productos/ItemPic_11501.jpg',
    sachets: 20 + ' sachets',
    precioXMayor: '$87.800',
    precioXMenor: '$115.700',
    beneficios: ['Destruye <strong>células cancerigenas</strong>',
        'Potencializa el <strong>sistema inmunológico</strong>',
        'Mejora la <strong>circulación sanguínea</strong>',
        'Efectivo contra la <strong>ansiedad</strong>',
        'Ayuda a evitar <strong>hepatitis, bronquitis, asma, gripa e insomnio</strong>',
        '<strong>Anti-inflamatorio, anti-bacterial, anti-viral, anti-tumoral</strong>',
        'Relaja el <strong>sistema nervioso y muscular</strong>',
        'Disminuye el <strong>colesterol</strong>',
        'Limpia los <strong>riñones</strong>',
        'Combate los <strong>mareos y fatiga</strong>',
    ],
},
// Chocolate
{
    id: 'Chocolate',
    nombre: 'Gano Schokolade',
    img: 'src/components/imagenes/productos/ItemPic_11502.jpg',
    sachets: 20 + ' sachets',
    precioXMayor: '$95.800',
    precioXMenor: '$123.700',
    beneficios: ['Mejora el <strong>estado de ánimo y los problemas de ansiedad</strong>',
        'Desarrolla <strong>claridad mental</strong>',
        'Propiedades <strong>antioxidantes</strong> y aporte de <strong>vitamias E, B1, B2, hierro y calcio</strong>',
        '<strong>Anticelilítico</strong>',
        'Elimina <strong>grasas</strong> y aporta <strong>fósforo, potasio y magnesio</strong>',
        'Utilizado cosméticamente para tratar la <strong>piel</strong>',
        'Beneficia el <strong>tránsito intestinal</strong>',
        'Previene la <strong>arterioesclerosis</strong>',
        'Previene algunos tipos de <strong>cáncer</strong>',
        'Ayuda al <strong>estado animico</strong> en periodo <strong>pre-menstrual</strong>',
    ],
},
// Te
{
    id: 'Te',
    nombre: 'Oleaf Gano Rooibos Drink',
    img: 'src/components/imagenes/productos/ItemPic_11504.jpg',
    sachets: 20 + ' sachets',
    precioXMayor: '$95.800',
    precioXMenor: '$123.700',
    beneficios: ['Regula <strong>desórdenes metabólicos</strong>',
        'Controla el <strong>sobrepeso</strong>',
        'Mejora la <strong>calidad de sueño</strong>',
        'Regula las funciones del <strong>hígado</strong>',
        'Retarda el <strong>envejecimiento</strong>',
        '<strong>Anti-inflamatorio</strong>',
        '<strong>Diurético</strong>',
        '<strong>Analgésico</strong>',
        'Reduce los niveles de <strong>grucosa</strong>',
    ],
},
// Tinto
{
    id: 'Tinto',
    nombre: 'Ganocafe Classic',
    img: 'src/components/imagenes/productos/ItemPic_11505.jpg',
    sachets: 30 + ' sachets',
    precioXMayor: '$87.800',
    precioXMenor: '$115.700',
    beneficios: ['Regula <strong>desórdenes metabólicos</strong>',
        'Efectivo contra los efectos de la <strong>intoxicación</strong>',
        'Regula las funciones hepáticas <strong>(hígado)</strong>',
        'Regula el sistema renal <strong>(Riñones)</strong>',
        'Actúa eficazmente en los <strong>intestinos</strong>',
        'Mejora <strong>problemas cardíacos</strong>',
        'Mejora la <strong>circulación</strong>',
        '<strong>Anti-inflamatorio y analgésico</strong> (efectivo contra el <strong>dolor</strong>)',
        'Diurético (eficaz contra la <strong>retención de líquidos</strong>)',
        'Efectivo contra la <strong>diabetes</strong>',
    ],
},
// Cereal
{
    id: 'Cereal',
    nombre: 'Gano C`Real Spirulina',
    img: 'src/components/imagenes/productos/ItemPic_11507.jpg',
    sachets: 15 + ' sachets',
    precioXMayor: '$95.800',
    precioXMenor: '$123.700',
    beneficios: ['Aumenta la <strong>fortaleza y resistencia</strong>',
        'Aumenta los niveles de <strong>energía corporal</strong>',
        'Estimula la <strong>desintoxicación renal</strong>',
        'Ayuda en el control de niveles elevados de <strong>colesterol</strong>',
        'Promueve un <strong>sistema inmunológico saludable</strong>',
        'Fortalece la <strong>flora intestinal</strong>',
        'Ayuda a la <strong>digestión</strong> y a un <strong>movimiento intestinal saludable</strong>',
        'Contiene <strong>carbohidratos complejos</strong>',
        'Contiene vitaminas <strong>A, K y vitaminas del complejo B</strong>',
    ],
},
// Crema_dental
{
    id: 'Crema_dental',
    nombre: 'Gano Fresh Toothpaste',
    img: 'src/components/imagenes/productos/ItemPic_11302.jpg',
    sachets: 1,
    precioXMayor: '$59.900',
    precioXMenor: '79.800',
    beneficios: ['Previene la <strong>caries</strong>',
        'Previene la <strong>placa dental</strong> y la <strong>alitosis</strong> (mal aliento)',
        'Previene la <strong>gingivitis</strong> (sangrado de las encias)',
        'Fortalece las <strong>encias</strong> y el <strong>esmalte dental</strong>',
        'Trata los <strong>dientes sensibles</strong>',
        '<strong>Antioxidante</strong>',
        'Ayuda en el proceso de <strong>cicatrización</strong>',
        '<strong>Anti-microbiano</strong>',
        '<strong>Anti-tumoral</strong>',
        'Efectivo para trabajar <strong>quemaduras en la piel</strong>',
    ],
},
// Jabon
{
    id: 'Jabon',
    nombre: 'Gano Transparent Soap',
    img: 'src/components/imagenes/productos/ItemPic_11303.jpg',
    sachets: 1,
    precioXMayor: '$67.900',
    precioXMenor: '$87.800',
    beneficios: ['Rejuvenece la <strong>piel</strong>',
        '<strong>Hidrata</strong> y <strong>limpia</strong> profundamente',
        '<strong>Antioxidante</strong> y <strong>blanqueador</strong>',
        'Elimina el <strong>exceso de grasa</strong>',
        'Contiene <strong>vitamina E</strong>',
        'Equilibra el <strong>PH</strong>',
        'Adecuado incluso para la <strong>piel de bebés</strong>',
        'Acción efectiva contra el <strong>acné</strong>',
        'Previene y actúa contra la <strong>psoriasis, dermatitis y dermatofitosis</strong>',
        'Trata eficientemente la <strong>icitiosos congénita, vitiligo y eczemas</strong>',
    ],
},
// Shampoo
{
    id: 'Shampoo',
    nombre: 'Piel&Brillo Shampoo',
    img: 'src/components/imagenes/productos/ItemPic_11305.jpg',
    sachets: 300 + 'ml',
    precioXMayor: '$63.900',
    precioXMenor: '$83.800',
    beneficios: ['<strong>Limpia, protege, nutre y fortalece el cuero cabelludo</strong>',
        ' Restaura el <strong>cabello dañado</strong>',
        'Repara <strong>puntas abiertas</strong>',
        'Otorga <strong>brillo y sedosidad</strong>',
        'Disminuye la <strong>caspa</strong>',
        'Previene enfermedades del cuero cabelludo',
        '<strong>Evita la caída</strong> y promueve el nacimiento de <strong>cabello nuevo</strong>',
        'Contiene <strong>vitamina B5 y vitamina E</strong>',
        '<strong>Protege el color</strong> natural y artificial',
        '<strong>No contiene sal</strong>',
    ],
},
// Acondicionador
{
    id: 'Acondicionador',
    nombre: 'Piel&Brillo Acondicionador',
    img: 'src/components/imagenes/productos/ItemPic_11306.jpg',
    sachets: 300 + 'ml',
    precioXMayor: '$63.900',
    precioXMenor: '$83.800',
    beneficios: ['<strong>Limpia, protege, nutre y fortalece el cuero cabelludo</strong>',
        ' Restaura el <strong>cabello dañado</strong>',
        'Repara <strong>puntas abiertas</strong>',
        'Otorga <strong>brillo y sedosidad</strong>',
        'Disminuye la <strong>caspa</strong>',
        'Previene enfermedades del cuero cabelludo',
        '<strong>Evita la caída</strong> y promueve el nacimiento de <strong>cabello nuevo</strong>',
        'Contiene <strong>vitamina B5 y vitamina E</strong>',
        '<strong>Protege el color</strong> natural y artificial',
        '<strong>No contiene sal</strong>',
    ],
},
// Exfoliante
{
    id: 'Exfoliante',
    nombre: 'Piel&Brillo Exfoliante Corporal',
    img: 'src/components/imagenes/productos/ItemPic_11307.jpg',
    sachets: 300 + 'ml',
    precioXMayor: '$63.900',
    precioXMenor: '$83.800',
    beneficios: ['Retira <strong>células muertas</strong>',
        'Estimula la <strong>regeneración de la piel</strong>',
        '<strong>Despigmenta y humecta</strong>',
        '<strong>Desimflama la piel</strong>',
        'Auemnta la producción de <strong>colageno</strong>',
        '<strong>Desintoxica la piel</strong>',
        'Activa la <strong>microcirculación</strong>',
        '<strong>Con vitamina E</strong>',
        'Elimina exceso de <strong>melanina</strong>',
        'Aumenta <strong>firmeza y elasticidad de la piel</strong>',
    ],
},
// Ganoderma
{
    id: 'Ganoderma',
    nombre: 'Ganoderma Capsulas',
    img: 'src/components/imagenes/productos/ItemPic_11801.jpg',
    sachets: 90 + 'capsulas',
    precioXMayor: '$231.500',
    precioXMenor: '$279.300',
    beneficios: ['Promueve la <strong>longevidad</strong>',
        'Reduce la <strong>fatiga física y mental</strong>',
        'Ayuda al <strong>sistema inmune</strong>',
        'Reduce el riesgo y ayuda a combatir el <strong>cáncer</strong>',
        'Ayuda a evitar la <strong>gripe y resfriados</strong>',
        'Previene <strong>enfermedades del corazon y derrame cerebral</strong>',
        'Estimula el <strong>metabolismo</strong> para <strong>regular el peso corporal</strong>',
        'Protege la <strong>piel</strong> de <strong>radicales libres</strong>',
        'Mejora la función de los <strong>riñones</strong>',
        'Previene y combate de <strong>artritis reumatoide</strong>',
    ],
},
// Excellium
{
    id: 'Excellium',
    nombre: 'Excellium Capsulas',
    img: 'src/components/imagenes/productos/ItemPic_11803.jpg',
    sachets: 90 + 'capsulas',
    precioXMayor: '$231.500',
    precioXMenor: '$279.300',
    beneficios: ['Ayuda a mantener los <strong>niveles normales de azúcares</strong>',
        'Ayuda a fortalecer el <strong>sistema gástrico</strong>',
        'Ayuda a reducir los niveles de <strong>colesterol</strong>',
        'Previene la formación de <strong>placa en las arterias</strong>',
        'Contiene <strong>vitaminas, minerales, proteínas, enzimas y aminoácidos</strong>',
        'Excelente para <strong>niños y adultos</strong>',
        'Especial para resistir <strong>largas horas de trabajo</strong>',
    ],
},
// CordyGold
{
    id: 'CordyGold',
    nombre: 'CordyGold Capsulas',
    img: 'src/components/imagenes/productos/ItemPic_11805.jpg',
    sachets: 60 + 'capsulas',
    precioXMayor: '$291.300',
    precioXMenor: '$351.100',
    beneficios: ['Fortalece el <strong>sistema inmune</strong>',
        'Potente <strong>afrodisíaco</strong>',
        'Mejora la <strong>circulación</strong>',
        'Estimula el <strong>riego sanguíneo</strong> en los <strong>genitales</strong>',
        'Aumenta el <strong>placer sexual</strong> y los <strong>niveles de testosterona</strong>',
        'Favorece el <strong>rendimiento sexual</strong> en <strong>hombres y mujeres</strong>',
        'Protege los <strong>riñones</strong> y regula el <strong>cortisol</strong>',
        'Mejora la <strong>resistencia</strong> y la <strong>energía</strong>',
        'Recomendado para la <strong>fibromialgia</strong> y los <strong>altos niveles de estrés</strong>',
        'Estimula la <strong>memoria</strong>',
    ]
},
],
    mostrar = ref(productos[0])


function infoProducto(producto) {
    mostrar.value = producto
}
</script>

<template>
    <section id="productos" class="container">
        <h2>Productos</h2>
        <div class="card">
            <div class="scroll_horizontal">
                <ul class="pagination card-header-pills">
                    <li v-for="item in productos">
                        <button class="page-link" @click="infoProducto(item)">{{ item.id }}</button>
                    </li>
                </ul>
            </div>
            <div class="card-body row g-4">
                <div class="col-md-6">
                    <img :src="mostrar.img" class="img-fluid rounded-start" :alt="mostrar.nombre">
                </div>
                <div class="col-md-6">
                    <h3 class="card-title">
                        {{ mostrar.nombre }} <sub>x {{ mostrar.sachets }}</sub>
                    </h3>
                    <ul class="card-text">
                        <li v-for="texto in mostrar.beneficios">
                            <span v-html="texto"></span>
                        </li>
                    </ul>
                    <p class="card-text">{{ mostrar.precioXMayor }} / <small class="text-muted">{{ mostrar.precioXMenor
                    }}</small></p>
                </div>
            </div>
        </div>
    </section>
</template>


<style>
.scroll_horizontal {
    overflow: auto;
    width: 95%;
    margin: 1% auto;
}

.img_producto {
    width: 80%;
}
</style>