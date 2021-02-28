<template lang="pug">
.barra-busqueda
  .barra-busqueda__icono-menu
    img(src="@/assets/images/pages/tema2/ico6.svg")
  .barra-busqueda__texto
    VueTyper.h3(
      :text="[texto]"
      :repeat="0"
      :shuffle="false"
      initial-action="typing"
      :pre-type-delay="70"
      :type-delay="70"
      :erase-delay="250"
      :erase-on-complete="false"
      caret-animation="blink"
    )
  .barra-busqueda__icono-lupa
    img(src="@/assets/images/pages/tema2/ico7.svg")
</template>

<script>
import { VueTyper } from 'vue-typer'
export default {
  name: 'BarraBusqueda',
  components: {
    VueTyper,
  },
  props: {
    texto: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="sass" scoped>

.barra-busqueda
  display: flex
  background-color: #EBEBEB
  padding: 10px 0
  border-radius: 5px
  align-items: center
  &__icono-menu
    padding: 0 20px
    img
      width: 25px
  &__texto
    background-color: #fff
    flex-grow: 1
    border-radius: 5px
    padding: 8px 20px 5px
  &__icono-lupa
    padding: 0 30px
    img
      width: 25px
.vue-typer
  padding: 0
</style>
