<template lang="pug">
.cuadro-pasos.mb-6
  .row.justify-content-center
    .col-md-10.py-5
      .cuadro-pasos__paso
        .cuadro-pasos__paso__cabeza
          span.h1.mb-0 PASO 1

        .cuadro-pasos__paso__contenido
          P Lo primero que se hace es escribir en la caja de búsqueda lo que se desea encontrar; en este caso se trata de salud mental en tiempos de Covid-19.

          img.mb-4(src="@/assets/images/pages/tema2/img_28.svg")

          .h2.mb-0.text-center Aparecen unos resultados que coinciden con lo introducido en la búsqueda.

    .col-md-10.py-5
      .cuadro-pasos__paso
        .cuadro-pasos__paso__cabeza
          span.h1.mb-0 PASO 2

        .cuadro-pasos__paso__contenido
          P Lo segundo que se hace es presionar la opción de 
            strong filtrar.

          img.mb-4(src="@/assets/images/pages/tema2/img_29.jpg")

          .h2.mb-0.text-center En esta ventana de opciones, se elige, en la categoría de características, la opción Creative Commons.

    .col-md-10.py-5
      .cuadro-pasos__paso
        .cuadro-pasos__paso__cabeza
          span.h1.mb-0 PASO 3

        .cuadro-pasos__paso__contenido
          .h2 Como tercer paso, se elige el video que se quiere dentro de los que se filtraron en la búsqueda, y que cumpla con la característica CC.



</template>

<script>
export default {
  name: 'CuadroPasosB',
  data: () => ({
    showModal: false,
  }),
}
</script>

<style lang="sass" scoped>
.cuadro-pasos
  padding: 50px
  background-color: #F6F6F6
  position: relative

  &__paso
    padding: 40px 20px 20px
    height: 100%
    background-color: #fff
    border-radius: 15px
    position: relative
    &__cabeza
      position: absolute
      padding: 10px
      width: 50%
      background-color: #FFCB00
      left: 50%
      transform: translate(-50%,-70%)
      top: 0
      text-align: center
      color: #fff
      &::before
        content: ''
        position: absolute
        left: 50%
        top: 100%
        width: 20px
        height: 20px
        transform-origin: center
        transform: translate(-50%,-50%) rotate(45deg)
        background-color: #FFCB00
    &__contenido

  &__cuotacion
    position: absolute
    transform: translateX(-50%)
    left: 50%
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

  &__modal
    position: absolute
    top: 50%
    left: 50%
    width: 95%
    padding: 50px
    max-height: 95vh
    overflow: auto
    background-color: #fff
    box-shadow: 5px 5px 10px 5px rgba(0,0,0,0.2)
    transform: translate(-50%,-50%)

    &__cerrar
      cursor: pointer
      position: absolute
      top: 10px
      right: 10px
      width: 20px
      height: 20px

  &__data-table

    &__header
      display: flex
      border-radius: 10px
      overflow: hidden
      .cuadro-pasos__data-table__columna
        background-color: #00D1E3
        color: #fff
        text-align: center

    &__row
      display: flex
      border-radius: 10px
      overflow: hidden
      &:nth-child(odd)
        .cuadro-pasos__data-table__columna
          background-color: #EFEFEF

    &__columna
      flex: 1
      padding: 10px 15px
      display: flex
      align-items: center
      justify-content: center
      span
        display: block
        text-align: center
        line-height: 1.2em
  @media screen and (max-width: 768px)
    padding: 25px
</style>
