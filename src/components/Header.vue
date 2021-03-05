<template lang="pug">
.curso-portada
  .container
    .row.align-items-center
      .col-12.col-lg-6

        h3#curso-titulo-componente.curso-subtitulo {{globalData.programaFormacion}}
        h1#curso-titulo-tema.curso-titulo {{globalData.componenteFormativo}}

        .brand-line-primary

        template(v-if="$route.path.includes('curso')")
          .keywords
            span.badge.badge-pill.badge-dark.mr-2(
              v-for="tag of globalData.palabrasClave", 
              :ref="'tag-'+tag"
            ) {{'#'+tag}}

          .barra-dots.mt-5
            img.img-fluid(src='@/assets/images/header/icon_dots.svg', alt='alt')

        template(v-else)
          p.curso-descripcion.mb-4(v-html="globalData.descripcionCurso")

        template(v-if="$route.name === 'inicio'")
          router-link.curso-btn-iniciar.btn.btn-light(:to="{name: 'curso'}")
            span Iniciar curso

      .col-12.col-lg-6.text-center
        .d-none.d-lg-block
          img.curso-imagen(:src="globalData.imagenPortada")

</template>

<script>
import { global } from '../config/global'
export default {
  name: 'HeaderComponent',
  data: () => ({
    globalData: global,
    imagen: require('@/assets/images/pages/ilustraciones/group16263.svg'),
  }),
}
</script>
<style scoped lang="sass">
.curso-portada
  padding: 2rem 0 2rem
  background: url(../assets/images/header/header_pattern.svg) scroll bottom center repeat

.curso-subtitulo
  color: $white

.curso-titulo
  color: $white

.curso-descripcion
  color: $white

.badge
  background-color: $tags-bg-color
</style>
