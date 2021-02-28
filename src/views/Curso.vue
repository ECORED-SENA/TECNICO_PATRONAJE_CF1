<template lang="pug">
.curso
  router-view
</template>
<script>
export default {
  name: 'Curso',
}
</script>

<style lang="sass" scoped>

::v-deep

  .header-ecored
    padding-top: 3rem
    margin: 0 0 3rem 0

    h1,h2,h3,h4,h5,h6
      margin-bottom: 0
  .title-full-width
    padding-top: 0
    h1,h2,h3,h4,h5,h6
      position: relative
      background-color: white
      display: inline-block
      padding-right: 20px
    &::before
      content: ''
      position: absolute
      left: 0
      top: 50%
      bottom: auto
      width: 100%
      height: 2px
      background-color: $base-color-highlight

    &::after
      display: none

  .main-content
    background-color: #F4F4F4

  .tarjeta
    background-color: white
    border-radius: 25px
    padding: 50px

    &--gris, &--azul, &--azul-b
      background-color: #EEEEEE
      padding: 50px
      border-radius: 10px
      text-align: right

    &--azul
      background-color: #E1F8FF
      text-align: left

    &--azul-b
      background-color: #00D1E3
      color: #fff

    &--blanco
      border-radius: 10px
      padding: 30px 50px
      background-color: #fff

    @media screen and (max-width: 768px)
      padding: 25px 15px

  .tarjeta--overlay
    position: relative
    padding-left: 75px
    top: -30px
    .tarjeta--blanco
      position: relative
      width: 90%
      padding-bottom: 0
    .comillas
      width: 100px
      position: absolute
      left: 0
      top: 50%
      transform: translate(-65%,-50%)


  .header-ecored--b
    &::after
      display: none


  .img
    width: 100%

  .texto-amarillo
    color: $dark-orange

  .texto-azul
    color: #00D1E3

  .lagarto
    width: 40%
    position: absolute
    right: 0
    top: 50%
    transform: translateY(-50%)

  .contenido-tarjeta
    position: relative
    width: 100%

    @media screen and (min-width: 576px)
      padding: 0
      width: 100%

    @media screen and (min-width: 768px)
      padding: 0
      width: 70%
      padding: 100px 0


  .tarjeta-borde-amarillo
    padding: 30px 50px
    border-radius: 15px
    border: 2px solid #FFA900
    position: relative

    &__cuotacion
      position: absolute
      transform: translateX(-50%)
      left: 50%
      width: fit-content
      padding-left: 50px
      &--top
        position: absolute
        transform: translate(-50%,-50%)
        left: 50%
        top: 0
        width: fit-content
        padding-left: 50px

      &__icono
        width: 100px
        position: absolute
        top: 50%
        transform: translate(-50%,-50%)

      &__texto
        padding: 20px 20px 20px 60px
        background-color: #fff

    @media screen and (max-width: 576px)
        &__cuotacion
          &--top
            padding: 0
            position: initial
            transform: translate(0, 0)
            width: 100%
            margin-bottom: 30px
          &__icono
            display: none
          &__texto
            padding: 0
</style>
