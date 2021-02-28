<template lang="pug">
.cuadros-truncamiento
  .row
    .col-lg-4.mb-4.mb-lg-0
      .cuadros-truncamiento__item(@mouseover="indicador = false",)
        .cuadros-truncamiento__item__icono
          span *
          IndicadorInteraccion(v-if="indicador")
        .cuadros-truncamiento__item__texto
          p.mb-0 
            strong El asterisco (*) 
            | representa a cualquier grupo de caracteres, incluida la ausencia de caracteres.

    .col-lg-4.mb-4.mb-lg-0
      .cuadros-truncamiento__item(@mouseover="indicador = false",)
        .cuadros-truncamiento__item__icono
          span ?
        .cuadros-truncamiento__item__texto
          p.mb-0
            strong El signo de interrogación (?) 
            | representa a cualquier caracter único.

    .col-lg-4.mb-4.mb-lg-0
      .cuadros-truncamiento__item(@mouseover="indicador = false",)
        .cuadros-truncamiento__item__icono
          span $
        .cuadros-truncamiento__item__texto
          p.mb-0 
            strong El signo ($) 
            | representa la presencia de un caracter o la ausencia de caracteres.

</template>

<script>
import IndicadorInteraccion from '../../IndicadorInteraccion'
export default {
  name: 'CuadrosTruncamiento',
  components: {
    IndicadorInteraccion,
  },
  data: () => ({
    indicador: true,
  }),
}
</script>

<style lang="sass" scoped>
.cuadros-truncamiento
  &__item
    display: flex
    justify-content: flex-end
    height: 100%
    position: relative
    cursor: pointer

    &:hover
      .cuadros-truncamiento
        &__item__icono
            transform: translateY(-100%)


    &__icono
      position: absolute
      width: 100px
      height: 100px
      left: 0
      top: 50%
      padding: 30px
      transform: translateY(-50%)
      background-color: #FFA900
      font-size: 60px
      font-weight: bold
      transition: transform 0.3s ease-in-out
      span
        display: flex
        line-height: 1em
        position: absolute
        left: 50%
        top: 50%
        transform: translate(-50%,-50%)
        color: #fff
    &__texto
      padding: 30px 15px 30px 80px
      margin-left: 50px
      background-color: #EBEBEB
      border-radius: 10px
      display: flex
      align-items: center
</style>
