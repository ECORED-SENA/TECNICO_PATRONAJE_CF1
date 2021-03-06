<template lang="pug">
footer
  #Creditos.footer
    .container

      h1 Créditos               
      .brand-line-primary

      .row.mb-4
        .col-12.col-md-5
          h3.footer-subtitulo.mb-4 ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES

          p.footer-texto
            strong Maria Camila Garcia Santamaria
            br
            span.text-small Líder del equipo

      .row.mb-4
        .col-12.col-md-6
          h4.footer-subtitulo-2.mt-0
            .fa.fa-caret-right.mr-2 
            | Contenido Instruccional

          p.footer-texto.mb-3
            strong Rafael Neftalí Lizcano Reyes
            br
            span.text-small Asesor metodologógico y pedagógico
            br
            span.text-small.text-uppercase Centro Industrial Del Diseño Y La Manufactura
            br
            span.text-small Regional Santander


          p.footer-texto.mb-3
            strong Lizeth Maritza Rodríguez Beltrán
            br
            span.text-small Instructora Técnica
            br
            strong Natalia Andrea Bueno Pizarro
            br
            span.text-small Diseñador Instruccional
            br
            span.text-small.text-uppercase Centro de Manufactura en Textil y Cuero
            br
            span.text-small Regional Distrito Capital

          p.footer-texto
            strong Adriana Lozano Zapata
            br
            span.text-small Revisora de estilo
            br
            strong Martha Isabel Martínez Vargas
            br
            span.text-small Revisora de estilo
            br
            span.text-small.text-uppercase Centro Industrial Del Diseño Y La Manufactura
            br
            span.text-small Regional Santander

        .col-12.col-md-6
          h4.footer-subtitulo-2.mt-0
            .fa.fa-caret-right.mr-2
            | Diseño y desarrollo de recursos educativos digitales

          p.footer-texto
            strong Francisco José Lizcano Reyes
            br
            span.text-small Responsable del equipo

          p.footer-texto
            strong Leyson Fabian Castaño Perez
            br
            span.text-small Integración de recursos y pruebas

          p.footer-texto
            strong Jesus Antonio Vecino Valero
            br
            strong Juan Daniel Polanco Muñoz
            br
            strong María Natalia Maldonado Delgado
            br
            strong Wilson Andres Arenales Cáceres
            br
            strong Yuly Andrea Rey Quiñonez
            br
            span.text-small Diseño web & producción audiovisual<br/>

          p.footer-texto
            strong Andres Mauricio Santaella Ochoa
            br
            strong Lizeth Karina Manchego Suarez
            br
            strong Luis Gabriel Urueta Alvarez
            br
            span.text-small Desarrollo front-end
            br
            span.text-small.text-uppercase CENTRO INDUSTRIAL DEL DISEÑO Y LA MANUFACTURA
            br
            span.text-small Regional Santander

          p.footer-texto
            strong Jhon Jairo Urueta Alvarez
            br
            span.text-small Desarrollo front-end
            br
            span.text-small.text-uppercase CENTRO DE COMERCIO Y SERVICIOS
            br
            span.text-small Regional Tolima

          h4.footer-subtitulo-2
            .fa.fa-caret-right.mr-2
            | Gestores de repositorio

          p.footer-texto
            strong Alvaro Andres Angarita Ramirez
            br
            strong Daniel Felipe Varon Molina
            br
            span.text-small Validación de recursos
            br
            span.text-small.text-uppercase CENTRO DE COMERCIO Y SERVICIOS
            br
            span.text-small Regional Tolima

      .row.justify-content-center.align-items-center
        img(src="@/assets/images/logos/senaLogo.svg", style="max-width:100px")

  section#cc
    .container
      .d-flex.flex-column.flex-sm-row
        span.pr-3
          i.icon.cc

        span
          | Este material puede ser distribuido, copiado y exhibido por terceros si se muestra en los créditos. No se puede obtener ningún beneficio comercial y las obras derivadas tienen que estar bajo los mismos términos de la licencia que
          | el trabajo original.

</template>

<script>
export default {
  name: 'Creditos',
}
</script>

<style lang="scss" scoped></style>
