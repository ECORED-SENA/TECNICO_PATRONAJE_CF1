<template lang="pug">
#app
  .curso-contenedor(:class="showMenu && ['curso-contenedor--menu-abierto']")
    header.page-header
      OverHeader(:show-menu.sync="showMenu")
      Header
    
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

.h11
  font-weight: bold
  font-size: 40px
  line-height: 1.1em
  @media screen and (max-width: 768px)
    font-size: 35px

.fw-normal
  font-weight: 400 !important

h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6, .h11
  color: #361274
  font-weight: bold

.titulo-tema, .titulo-subtema, .titulo-tema-b
  h1, h2, h3, h4, h5, h6
    margin: 0

.full-height
  height: 100%

.video
  width: 100%
  height: 600px
  @media screen and (max-width: 992px)
    height: 350px
  @media screen and (max-width: 768px)
    height: 280px
  @media screen and (max-width: 576px)
    height: 230px


.titulo-tema
  padding: 50px 0
  width: fit-content

  h1, h2, h3, h4, h5, h6
    padding: 0 10px

  &::after
    content: ''
    display: block
    width: 100%
    height: 6px
    background-color: #D2BEF6
    margin-top: 5px
    border-radius: 3px

.titulo-subtema

.titulo-tema-b
  width: fit-content
  position: relative
  &::before
    content: ''
    display: block
    width: 60%
    height: 80%
    background-color: #FFE695
    border-radius: 10px
    position: absolute
    left: 0
    bottom: 0

  h1, h2, h3, h4, h5, h6
    position: relative
    padding-bottom: 15%
    left: 30px


.tarjeta
  background-color: #fff
  border-radius: 25px
  padding: 50px
  position: relative

  &--numerada
    padding-left: 75px !important
    position: relative
    margin-left: 50px
    &__numero
      position: absolute
      left: 0
      top: 50%
      transform: translate(-50%, -50%)
      width: 100px
      height: 100px
      font-size: 85px
      font-weight: bold
      border: 5px solid #361274
      background-color: #fff
      border-radius: 50%
      color: #361274
      display: flex
      justify-content: center
      align-items: center
    @media screen and (max-width: 768px)
      padding-left: 55px !important
      margin-left: 40px
      &__numero
        width: 80px
        height: 80px
        font-size: 60px
    @media screen and (max-width: 576px)
      padding-left: 40px !important
      margin-left: 30px
      &__numero
        width: 60px
        height: 60px
        font-size: 40px


  &--comillas
    &::after
      content: ''
      display: block
      width: 65px
      height: 65px
      background-image: url('./assets/images/pages/tema1/img11.svg')
      position: absolute
      right: 30px
      top: -30px
      background-size: 65px 65px

      @media screen and (max-width: 768px)
        width: 50px
        height: 50px
        background-size: 50px 50px

  &--pregunta, &--admiracion
    padding-left: 85px !important
    margin-left: 60px !important
    &::after
      content: ''
      display: block
      width: 120px
      height: 120px
      background-image: url('./assets/images/pages/tema1/img27.svg')
      position: absolute
      left: 0
      top: 50%
      transform: translate(-50%,-50%)
      background-size: 120px 120px

    @media screen and (max-width: 768px)
      margin-left: 40px !important
      padding-left: 55px !important
      &::after
        width: 80px
        height: 80px
        background-size: 80px 80px

    @media screen and (max-width: 576px)
      margin-left: 30px !important
      padding-left: 45px !important
      &::after
        width: 60px
        height: 60px
        background-size: 60px 60px

  &--admiracion
    &::after
      background-image: url('./assets/images/pages/tema1/img72.svg')

  &--amarillo
    background-color: #FFD54F !important

    h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6, p, span
      color: #673AB7 !important

    &--pregunta


  &--amarillo-claro
    background-color: #FCF0C9
    color: #361274

    &__titulo
      position: absolute
      top: 0
      transform: translateY(-25px)


  &--lavanda
    background-color: #F1F3FF

    .tarjeta
      padding: 25px
      background-color: #E2E6FF

  &--lavanda-claro
    background-color: #EBE1FF

  &--azul-obscuro
    background-color: #7986CB
    h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6, p, span
      color: #fff

  &--azul-claro
    background-color: #BBDEFB
    a
      color: #0D47A1

  &--crema
    background-color: #F8F8F8 !important

  &--blanca
    background-color: #fff !important

  &--gris
    background-color: #EAEAEA

  &--borde-azul-obscuro
    border: 3px solid #7986CB

  &--borde-violeta
    position: relative
    border: 3px solid #673AB7

    &__titulo
      width: 70%
      border: 3px solid #673AB7
      border-radius: 15px
      padding: 10px 20px
      position: absolute
      top: 0
      left: 50%
      background-color: white
      transform: translate(-50%, -50%)
      text-align: center

  @media screen and (max-width: 768px)
    padding: 25px 15px

.img
  width: 100%
</style>
