<template lang="pug">
div
  .d-none.d-lg-block
    ul.barra-pasos
      li(v-for="item of lista" :key="'lg-'+item" :class="{'barra-pasos--activo': item === activo}")
        span {{item}}
  
  .d-none.d-md-block.d-lg-none
    ul.barra-pasos(v-for="list of listasComputadas.md")
      li(v-for="item of list" :key="'lg-'+item" :class="{'barra-pasos--activo': item === activo}")
        span {{item}}

  .d-md-none
    ul.barra-pasos(v-for="list of listasComputadas.sm")
      li(v-for="item of list" :key="'lg-'+item" :class="{'barra-pasos--activo': item === activo}")
        span {{item}}

</template>

<script>
export default {
  name: 'BarraPasos',
  props: {
    activo: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    lista: ['FIBRAS', 'HILOS', 'TEJIDOS', 'TELAS', 'ACABADOS', 'CONFECCIÓN'],
  }),
  computed: {
    listasComputadas() {
      const listaMd = [...this.lista]
      const md = new Array(Math.ceil(this.lista.length / 3))
        .fill()
        .map(_ => listaMd.splice(0, 3))
      const listaSm = [...this.lista]
      const sm = new Array(Math.ceil(this.lista.length / 2))
        .fill()
        .map(_ => listaSm.splice(0, 2))
      return {
        md,
        sm,
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.barra-pasos
  display: flex
  list-style: none
  overflow: hidden
  padding: 0
  padding-right: 25px
  margin-bottom: 5px

  li
    padding: 15px 15px 15px 45px
    background-color: #895CD8
    position: relative
    flex: 1

    span
      display: block
      text-align: center
      color: #D2BEF6
      position: relative
      z-index: 3

    &:after, &:before
      content: ""
      display: block
      width: 0
      height: 0
      border-top: 40px solid transparent
      border-bottom: 40px solid transparent
      border-left: 40px solid #895CD8
      position: absolute
      top: 50%
      transform: translate(-40%,-50%)
      left: 100%
      z-index: 2

    &:before
      border-left: 40px solid white
      margin-left: 5px
      z-index: 1

    &:first-child
      span
        &:before
          content: ""
          display: block
          width: 0
          height: 0
          border-top: 40px solid transparent
          border-bottom: 40px solid transparent
          border-left: 40px solid #fff
          position: absolute
          top: 50%
          transform: translate(-40%,-50%)
          right: 100%
          z-index: 2

  &--activo
    background-color: #FFD54F !important
    &:after
      border-left-color: #FFD54F !important
    span
      color: #361274 !important
      font-size: 18px
      font-weight: bold

  @media screen and (max-width: 576px)
    li
      padding: 10px 15px 10px 45px
      span
        font-size: 10px !important
</style>
