<template lang="pug">
.tablet
  .tablet__fondo
    img(src="@/assets/images/pages/tema1/img4.svg")

  .tablet__contenido
    .row.align-items-center
      .col-6.left-fade-in--stand(:class="{'left-fade-in--active': android}")
        p.mb-0.text-end
          strong Android
          br
          | Samsung, Huawei, Motorola, LG (…)
      .col-6(@mouseover="android = true" @mouseleave="android = false")
        img.btn-img(src="@/assets/images/pages/tema1/ico4.svg")
      .col-6(@mouseover="ios = true" @mouseleave="ios = false")
        img.btn-img(src="@/assets/images/pages/tema1/ico5.svg")
      .col-6.right-fade-in--stand(:class="{'right-fade-in--active': ios}")
        p.mb-0
          strong iOS
          br
          | Apple iPhone, iPad, iWatch (…)
      .col-6.left-fade-in--stand(:class="{'left-fade-in--active': windows}")
        p.mb-0.text-end
          strong Windows
          br
          | Tabletas, celulares, ordenadores Windows.
      .col-6.position-relative(@mouseover="windows = true; indicador = false" @mouseleave="windows = false")
        IndicadorInteraccion(v-if="indicador")
        img.btn-img(src="@/assets/images/pages/tema1/ico3.svg")

</template>

<script>
import IndicadorInteraccion from '../../IndicadorInteraccion'
export default {
  name: 'Tablet',
  components: {
    IndicadorInteraccion,
  },
  data: () => ({
    android: false,
    ios: false,
    windows: false,
    indicador: true,
  }),
}
</script>

<style lang="sass" scoped>
.tablet
  position: relative

.text-end
  text-align: right

.tablet__contenido
  padding: 20% 12% 0 8%
  position: absolute
  top: 0

.btn-img
  cursor: pointer

.left-fade-in
  &--stand
    opacity: 0
    transform: translateX(50px)
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out
  &--active
    opacity: 1
    transform: translateX(0)

.right-fade-in
  &--stand
    opacity: 0
    transform: translateX(-50px)
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out
  &--active
    opacity: 1
    transform: translateX(0)
</style>
