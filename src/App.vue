<template lang="pug">
#app
  .curso-contenedor(:class="showMenu && ['curso-contenedor--menu-abierto']")
    header#CursoPresentacion.curso-presentacion.page-header
      .page-textura
        OverHeader(:show-menu.sync="showMenu")
        Header(:selected-menu-item="selectedMenuItem")
    
    router-view
  AsideMenu(:showMenu.sync="showMenu")
</template>

<script>
import { menuPrincipal } from './config/global'
import OverHeader from './components/OverHeader'
import Header from './components/Header'
import AsideMenu from './components/AsideMenu'

export default {
  name: 'App',
  components: { Header, OverHeader, AsideMenu },
  data() {
    return {
      showMenu: false,
      menuPrincipalData: menuPrincipal.menu,
    }
  },
  computed: {
    selectedMenuItem() {
      return this.menuPrincipalData.find(
        item => item.routeName === this.$route.name,
      )
    },
  },
}
</script>

<style lang="sass">
@import "./assets/scss/main.scss"

img
  width: 100%

.page-header
  margin-bottom: 50px

a
  cursor: pointer

.curso-contenedor
  margin-left: 0
  transition: margin-left 0.5s ease-in-out
  &--menu-abierto
    margin-left: 320px
</style>
