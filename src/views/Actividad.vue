<template lang="pug">
.container

  .header-ecored
    h1 Actividad didáctica

  .row.align-items-center.justify-content-center.my-5
    .col-8.col-md-5.col-xl-4.mb-5
      figure
        img(src="@/assets/images/pages/actividad/img_actividad.svg", alt="")
    
    .col-12.col-md-7
      hr.line-100.bg-orange
      .text-center.p-2
        h2 ¡Ponga a prueba su conocimiento! 
        p La siguiente actividad tiene como propósito validar los conocimientos relacionados con el tema 
          strong {{selectedActivity.title}}
        a.btn.btn-colour-Orange(href="" @click.prevent="abrirActividades") Iniciar
      hr.line-100.bg-orange
    
</template>

<script>
import { menuPrincipal } from '../config/global'
export default {
  name: 'Actividad',
  data: () => ({
    menuData: menuPrincipal.menu,
  }),
  computed: {
    selectedActivity() {
      return this.menuData.find(menuItem => menuItem.actividad)
    },
  },
  methods: {
    abrirActividades() {
      let url = window.location.href.replace(window.location.hash, '')
      if (url.includes('index.html')) {
        url = url.replace('index.html', '') + 'actividad/index.html'
      } else {
        url = url + 'actividad/'
      }
      window.open(url, '_blank')
      this.$router.push({ name: this.$route.name })
    },
  },
}
</script>

<style lang="scss" scoped></style>
