<template lang="pug">
.indicador-interaccion
  .indicador-interaccion__icon
    img(src="@/assets/images/pages/tema1/ico6.svg")
</template>

<script>
export default {
  name: 'IndicadorInteraccion',
}
</script>

<style lang="sass" scoped>
.indicador-interaccion
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%,-50%)
  pointer-events: none


.indicador-interaccion__icon
  animation: hand-fade-in 3s ease-in-out 3s infinite

@keyframes hand-fade-in
  0%
    opacity: 0
    transform: translate(100px)
  35%
    opacity: 1
    transform: translate(0)
  100%
    opacity: 1
    transform: translate(0)
</style>
