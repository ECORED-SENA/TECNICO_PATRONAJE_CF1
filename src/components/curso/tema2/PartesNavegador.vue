<template lang="pug">
.partes-navegador
  .partes-navegador__fondo
    img(src="@/assets/images/pages/tema2/img_22.svg")
  .partes-navegador__btn-contenedor
    .partes-navegador__btn.partes-navegador__btn--flechas(@mouseover="indicador = false")
      .partes-navegador__btn__texto
        span Retroceder / Avanzar pág.
    .partes-navegador__btn.partes-navegador__btn--actualizar(@mouseover="indicador = false")
      .partes-navegador__btn__texto
        span Actualizar página
    .partes-navegador__btn.partes-navegador__btn--home(@mouseover="indicador = false")
      .partes-navegador__btn__texto
        span Home
    .partes-navegador__btn.partes-navegador__btn--busqueda(@mouseover="indicador = false")
      .partes-navegador__btn__texto
        span Barra de búsqueda
    .partes-navegador__btn.partes-navegador__btn--marcadores(@mouseover="indicador = false")
      .partes-navegador__btn__texto
        span Marcadores
    .partes-navegador__btn.partes-navegador__btn--descargas(@mouseover="indicador = false")
      .partes-navegador__btn__texto
        span Gestor de descargas
    .partes-navegador__btn.partes-navegador__btn--pestana(@mouseover="indicador = false")
      .partes-navegador__btn__texto
        span Navegación por pestañas
    .indicador(v-if="indicador")
      IndicadorInteraccion

</template>
<script>
import IndicadorInteraccion from '../../IndicadorInteraccion'
export default {
  name: 'PartesNavegador',
  components: {
    IndicadorInteraccion,
  },
  data: () => ({
    indicador: true,
  }),
}
</script>

<style lang="sass" scoped>
.indicador
  position: absolute
  top: 28%
  left: 2.5%
  width: 100px
  height: 100px
.partes-navegador
  position: relative
  &__fondo

  &__btn-contenedor
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%

  &__btn
    width: 20px
    height: 20px
    background-color: black
    border-radius: 50%
    position: absolute
    cursor: pointer
    transform: translate(-50%,-50%)
    transition: width 0.2s ease-in-out, height 0.2s ease-in-out

    &::before
      content: ''
      display: block
      width: 100%
      height: 100%
      background-color: black
      border-radius: 50%
      animation: pulse 2s ease-in-out infinite
      transition: transform 0.3s ease-in-out

    &:hover
      &::before
        animation: none
        transform: scale(1.4)
        opacity: 1

      .partes-navegador__btn__texto
        opacity: 1

    @for $i from 1 through 10
      &:nth-of-type(#{$i})
        &::before
          animation-delay: $i * 0.4s

    &__texto
      position: absolute
      top: 30px
      left: 10px
      padding: 25px
      background-color: #fff
      opacity: 0
      transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out
      box-shadow: 5px 5px 20px -5px rgba(0,0,0,0.3)
      border-radius: 5px
      pointer-events: none

      span
        color: #6f6f6f
        font-size: 21px
        line-height: 1.1em
        display: block
        white-space: nowrap
        &::after
          content: ''
          display: block
          margin-top: 10px
          width: 50%
          height: 5px

    &--flechas
      top: 38%
      left: 6.1%
      background-color: #5ea599
      &::before
        background-color: #5ea599
      span::after
        background-color: #5ea599

    &--actualizar
      top: 38%
      left: 12.9%
      background-color: #579ae4
      &::before
        background-color: #579ae4
      span::after
        background-color: #579ae4

    &--home
      top: 38%
      left: 17.7%
      background-color: #75cfe0
      &::before
        background-color: #75cfe0
      span::after
        background-color: #75cfe0

    &--busqueda
      top: 30%
      left: 24%
      background-color: #e9a627
      &::before
        background-color: #e9a627
      span::after
        background-color: #e9a627

    &--pestana
      top: 13%
      left: 55%
      background-color: #f0c92f
      &::before
        background-color: #f0c92f
      span::after
        background-color: #f0c92f
      .partes-navegador__btn__texto
        transform: translate(-50%)

    &--marcadores
      top: 38%
      left: 87.5%
      background-color: #75cfe0
      &::before
        background-color: #75cfe0
      span::after
        background-color: #75cfe0
      .partes-navegador__btn__texto
        left: auto
        right: 10px

    &--descargas
      top: 38%
      left: 96.4%
      background-color: #3965bf
      &::before
        background-color: #3965bf
      span::after
        background-color: #3965bf
      .partes-navegador__btn__texto
        left: auto
        right: 10px

    @media screen and (max-width: 992px)
      &--flechas, &--actualizar, &--home, &--marcadores, &--descargas
        top: 41%

      &__texto
        span
          font-size: 18px

    @media screen and (max-width: 768px)
      width: 15px
      height: 15px

      &__texto
        padding: 15px

    @media screen and (max-width: 768px)
      &--flechas, &--actualizar, &--home, &--marcadores, &--descargas
        top: 43%

@for $i from 1 through 10
  .partes-navegador:nth-of-type(#{$i})
    &::before
      transition-delay: $i * 0.25s

@keyframes pulse
  0%
    opacity: 1
    transform: scale(1)
  100%
    opacity: 0
    transform: scale(2)
</style>
