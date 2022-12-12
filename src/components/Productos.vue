<script setup>
let productos = [{
        nombre: '3_en_1',
        precioXMayor: 0,
        precioXMenor: 0,
        beneficios: ['',
            '',
            ''],
        },
        {
            nombre: 'Shocolate',
            precioXMayor: 0,
            precioXMenor: 0,
            beneficios: ['',
                '',
                ''],
        },
        {
            nombre: 'Clasico',
            precioXMayor: 0,
            precioXMenor: 0,
            beneficios: ['',
                '',
                ''],
        },
        {
            nombre: 'Clasico',
            precioXMayor: 0,
            precioXMenor: 0,
            beneficios: ['',
                '',
                ''],
        },
        {
            nombre: 'Clasico',
            precioXMayor: 0,
            precioXMenor: 0,
            beneficios: ['',
                '',
                ''],
        },
        {
            nombre: 'Clasico',
            precioXMayor: 0,
            precioXMenor: 0,
            beneficios: ['',
                '',
                ''],
        },
        {
            nombre: 'Clasico',
            precioXMayor: 0,
            precioXMenor: 0,
            beneficios: ['',
                '',
                ''],
        },
        {
            nombre: 'Clasico',
            precioXMayor: 0,
            precioXMenor: 0,
            beneficios: ['',
                '',
                ''],
        },
        {
            nombre: 'Clasico',
            precioXMayor: 0,
            precioXMenor: 0,
            beneficios: ['',
                '',
                ''],
        },
        {
            nombre: 'Clasico',
            precioXMayor: 0,
            precioXMenor: 0,
            beneficios: ['',
                '',
                ''],
        },
        {
            nombre: 'Clasico',
            precioXMayor: 0,
            precioXMenor: 0,
            beneficios: ['',
                '',
                ''],
        },
        {
            nombre: 'Clasico',
            precioXMayor: 0,
            precioXMenor: 0,
            beneficios: ['',
                '',
                ''],
        },
        {
            nombre: 'Clasico',
            precioXMayor: 0,
            precioXMenor: 0,
            beneficios: ['',
                '',
                ''],
        },
        {
            nombre: 'Clasico',
            precioXMayor: 0,
            precioXMenor: 0,
            beneficios: ['',
                '',
                ''],
        },
        {
            nombre: 'Clasico',
            precioXMayor: 0,
            precioXMenor: 0,
            beneficios: ['',
                '',
                ''],
        },
]
</script>

<template>
<nav aria-label="..."  class="scroll_horizontal">
  <ul class="pagination pagination-sm">
    <li v-for="item in productos" class="page-item">
        <a class="page-link" href="#">{{item.nombre}}</a>
    </li>
  </ul>
</nav>
</template>


<style>
.scroll_horizontal {
	overflow: auto;
}
</style>