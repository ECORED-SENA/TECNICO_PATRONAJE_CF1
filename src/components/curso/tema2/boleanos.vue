<template lang="pug">
.boleanos
  .row.justify-content-center.mb-3
    .col-sm-8.col-lg-4.mb-4.mb-lg-0(
      @mouseover="seleccionado = 1; indicador = false",
      @mouseleave="seleccionado = 0"
    )
      .tarjeta--gris
        IndicadorInteraccion(v-if="indicador")
        .boleanos__img(:class="{'boleanos__img--seleccionado': seleccionado === 1}")
          img(src="@/assets/images/pages/tema2/img_7.svg")
        .boleanos__texto
          .boleanos__texto__titulo
            span AND
          .boleanos__texto__contenido
            span TEXTO1 <strong>AND</strong> TEXTO2 
            span Quiere decir que incluya los dos términos.

    .col-sm-8.col-lg-4.mb-4.mb-lg-0(
      @mouseover="seleccionado = 2; indicador = false",
      @mouseleave="seleccionado = 0"
    )
      .tarjeta--gris
        .boleanos__img(:class="{'boleanos__img--seleccionado': seleccionado === 2}")
          img(src="@/assets/images/pages/tema2/img_2.svg")
        .boleanos__texto
          .boleanos__texto__titulo
            span OR
          .boleanos__texto__contenido
            span TEXTO1 <strong>OR</strong> TEXTO2 
            span Esta estrategia muestra los resultados que incluyan cualquiera de los dos términos o los dos a la vez.
      
    .col-sm-8.col-lg-4.mb-4.mb-lg-0(
      @mouseover="seleccionado = 3; indicador = false",
      @mouseleave="seleccionado = 0"
    )
      .tarjeta--gris
        .boleanos__img(:class="{'boleanos__img--seleccionado': seleccionado === 3}")
          img(src="@/assets/images/pages/tema2/img_6.svg")
        .boleanos__texto
          .boleanos__texto__titulo
            span NOT
          .boleanos__texto__contenido
            span TEXTO1 <strong>NOT</strong> TEXTO2 
            span Esta estrategia excluye el segundo término y muestra resultados del primero.
      
  .row
    .col-4
      .boleanos__tips(:class="{'boleanos__tips--seleccionado': seleccionado === 1}")
        p <strong>AND (Y):</strong> recupera las referencias que incluyan ambos términos.
    .col-4
      .boleanos__tips(:class="{'boleanos__tips--seleccionado': seleccionado === 2}")
        p <strong>OR (O):</strong> recupera las referencias que incluyan cualquiera de los términos, o los dos a la vez.
    .col-4
      .boleanos__tips(:class="{'boleanos__tips--seleccionado': seleccionado === 3}")
        p <strong>NOT (NO):</strong> recupera las referencias donde aparezca solo el primer término.

</template>

<script>
import IndicadorInteraccion from '../../IndicadorInteraccion'
export default {
  name: 'Boleanos',
  components: {
    IndicadorInteraccion,
  },
  data: () => ({
    indicador: true,
    seleccionado: 0,
  }),
}
</script>

<style lang="sass" scoped>
.tarjeta--gris
  height: 100%
  padding: 40px
  cursor: pointer

.boleanos
  &__img
    width: 60%
    margin-bottom: 30px
    transition: transform 0.3s ease-in-out
    transform-origin: top left
  &__img--seleccionado
    transform: scale(1.3)
  &__texto
    text-align: left
    &__titulo
      font-size: 40px
      color: #606060
    &__contenido
      line-height: 1.1em
      span
        display: block
        &:first-child
          margin-bottom: 10px
  &__tips
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out
    transform: translateY(25px)
    opacity: 0
    p
      line-height: 1.1em
    &--seleccionado
      transform: translateY(0)
      opacity: 1
</style>
