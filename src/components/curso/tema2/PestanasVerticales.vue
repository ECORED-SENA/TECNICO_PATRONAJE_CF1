<template lang="pug">
.pestanas-vert
  .row.align-items-center
    .col-lg-3
      .d-flex.d-lg-block
        .pestanas-vert__pestana__contenedor
          .pestanas-vert__pestana(
            @mouseover="indicador = false",
            @click="seleccionado = 'f1'"
            :class="{'pestanas-vert__pestana--activo': seleccionado === 'f1'}"
          )
            span.h2 FASE 1
            IndicadorInteraccion(v-if="indicador")
        
        .pestanas-vert__pestana__contenedor
          .pestanas-vert__pestana(
            @mouseover="indicador = false",
            @click="seleccionado = 'f2'"
            :class="{'pestanas-vert__pestana--activo': seleccionado === 'f2'}"
          )
            span.h2 FASE 2
        .pestanas-vert__pestana__contenedor
          .pestanas-vert__pestana(
            @mouseover="indicador = false",
            @click="seleccionado = 'f3'"
            :class="{'pestanas-vert__pestana--activo': seleccionado === 'f3'}"
          )
            span.h2 FASE 3

    .col-lg-9
      .tarjeta--gris.pestanas-vert__texto
        p(v-if="seleccionado === 'f1'") La primera fase es realizada por programas llamados spider, robot o crawler. Escanean la web de forma metódica y automatizada. Sus resultados crean el índice general de Internet.
        p(v-else-if="seleccionado === 'f2'") Las páginas seleccionadas por los rastreadores se guardan, y se analiza la parte textual, que se toma como base para proporcionar la respuesta a los usuarios. Este último paso requiere la capacidad de los motores de búsqueda, para ordenar los sitios, con base en los datos por relevancia.
        p(v-else-if="seleccionado === 'f3'") Aquí entra en juego la palabra clave, utilizada por el usuario, junto con los criterios únicos para cada motor de búsqueda, tales como: cuántas veces se repite la palabra clave, la cantidad y la calidad de los enlaces entrantes y también el número de usuarios que visitan la página. Comprender cómo funcionan los motores de búsqueda y mejorar el posicionamiento en la SERP (página de resultados de motores de búsqueda), es uno de los objetivos del SEO, uno de los principales métodos de medición del marketing en línea.

</template>

<script>
import IndicadorInteraccion from '../../IndicadorInteraccion'
export default {
  name: 'PestanasVerticales',
  components: {
    IndicadorInteraccion,
  },
  data: () => ({
    indicador: true,
    seleccionado: 'f1',
  }),
}
</script>

<style lang="sass" scoped>
.pestanas-vert
  &__pestana
    padding: 0 25px
    background-color: #DADADA
    position: relative
    height: 60px
    display: flex
    align-items: center
    justify-content: center
    transition: background-color 0.3s ease-in-out
    cursor: pointer

    &::before
      content: ''
      display: block
      position: absolute
      background-color: #DADADA
      right: 15px
      top: 0
      width: 60px
      height: 60px
      transform-origin: center
      transform: rotate(45deg)
      transition: background-color 0.3s ease-in-out, right 0.3s ease-in-out

    &--activo
      background-color: #FFA900
      &::before
        background-color: #FFA900
        right: -20px

    &__contenedor
      margin-bottom: 15px
      padding-right: 50px
      overflow: hidden

    span
      position: relative
      margin: 0
      color: #fff

  &__texto
    p
      text-align: left
      margin: 0


  @media screen and (max-width: 992px)
    &__pestana
      &__contenedor
        margin-bottom: 15px
        padding-right: 0px
        flex: 1
      span
        text-align: center
</style>
