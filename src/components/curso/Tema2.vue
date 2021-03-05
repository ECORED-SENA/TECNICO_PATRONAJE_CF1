<template lang="pug">
section.container.pt-4
  .tarjeta
    
    #t_2.titulo-tema.mt-0.mb-5.p-0
      h1 2. Ficha técnica de diseño (software de diseño)

    #t_2_1.titulo-subtema.mb-5
      .h1 2.1 Conceptos de dibujo plano

    iframe.video(
      src='https://www.youtube.com/embed/OUA-M4LqynA', 
      frameborder='0', 
      allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', 
      allowfullscreen=''
    )
    .h3.small.mb-5 Conceptos de Dibujo Plano.

    p.mb-6 El dibujo plano es una composición de formas bidimensionales que dan o proyectan el prototipo “sketch” de lo que se quiere elaborar, es una técnica implementada en infinidad de áreas; desde la parte productiva permite visualizar lo que busca o quiere la parte creativa desde el desarrollo funcional y de concepto.

    .h1.mb-5 Dibujo técnico - Dibujo bidimensional de prendas de vestir

    .row.align-items-center.justify-content-around.mb-4
      .col-4.col-md-2.mb-5
        img(src="@/assets/images/pages/tema1/img74.svg")
      .col-md-8.mb-5
        .h1 ¿Qué es el dibujo técnico? 
        p Conocido como el sistema que representa gráficamente uno o más objetos, con el fin de otorgar información útil para un posible y consecuente análisis que permitirá una próxima construcción o ejecución de un objeto.

      .w-100

      .col-4.col-md-2.mb-5
        img(src="@/assets/images/pages/tema1/img73.svg")
      .col-md-8.mb-5
        .h1 ¿Qué es el término bidimensional?
        p Es toda aquella figura que está compuesta por dos dimensiones, ancho y largo. El cuadrado, el triángulo, el rectángulo, el círculo, no tienen profundidad, son formas que cuando se trazan no involucran ningún tipo de volumen en su diseño.

    .tarjeta.tarjeta--crema.mb-6
      .h11.mb-5.text-center Tipos de línea
      .row.justify-content-center.justify-content-md-between
        .col-8.col-sm-5.col-md-4.col-lg-3.mb-5.mb-md-0
          img.mb-3(src="@/assets/images/pages/tema1/img75.svg")
          .h1.text-center Línea guía:
          p.mb-0.text-center Ejes de simetría

        .col-8.col-sm-5.col-md-4.col-lg-3.mb-5.mb-md-0
          img.mb-3(src="@/assets/images/pages/tema1/img76.svg")
          .h1.text-center Línea sólida:
          p.mb-0.text-center Croquis de prenda

        .col-8.col-sm-5.col-md-4.col-lg-3
          img.mb-3(src="@/assets/images/pages/tema1/img77.svg")
          .h1.text-center Línea intermitente:
          p.mb-0.text-center Pespuntes o costuras


    .h1.mb-5 Canon de belleza – proporciones

    .tarjeta.tarjeta--lavanda.mb-6
      .h1.text-center Diferencias entre: 
        span.fw-normal figurín, ilustración, dibujo plano.

      
      Slyder(clase-tarjeta="tarjeta--blanca")
        .row.justify-content-between.align-items-center
          .col-3.d-none.d-sm-block
            img(src="@/assets/images/pages/tema1/img78.svg")
          .col-sm-8
            .h11.mb-3 Figurín
            p.mb-0 Representar gráficamente el cuerpo y las prendas, con una expresión viva, un trazo fresco, un movimiento dinámico, una pose elegante y una expresión adecuada al tipo de vestimenta propuesto.


        .row.justify-content-between.align-items-center
          .col-3.d-none.d-sm-block
            img(src="@/assets/images/pages/tema1/img79.svg")
          .col-sm-8
            .h11.mb-3 Ilustración
            p.mb-0 Son dibujos, esquemas, bosquejos, bocetos o pinturas que se hacen relacionados a la moda, pueden ser de modelos, ropa o accesorios, prácticamente cualquier objeto o situación relacionada a la industria.


        .row.justify-content-between.align-items-center
          .col-3.d-none.d-sm-block
            img(src="@/assets/images/pages/tema1/img80.svg")
          .col-sm-8
            .h11.mb-3 Dibujo plano
            p.mb-0 representación detallada de una prenda, es decir, se deben identificar todas las características técnicas de la prenda, pespuntes, botones, costuras, pinzas, acabados. No tiene movimiento y se debe identificar delantero y posterior.

    .h1.mb-5 Tipos de trazos - ejercicios de aprestamiento

    .tarjeta.tarjeta--borde-azul-obscuro.mb-4
      .row.justify-content-center.justify-content-sm-between.align-items-center
        .col-4.col-sm-3.col-lg-2.mb-4.mb-sm-0
          img(src="@/assets/images/pages/tema1/img83.svg")
        .col-sm-9
          .h11.mb-3 Posición de escritura
          p.mb-0 Para hacer los ejercicios, trabaje siempre con el lápiz en posición de escritura.

    .tarjeta.tarjeta--borde-azul-obscuro.mb-4
      .row.justify-content-center.justify-content-sm-between.align-items-center
        .col-4.col-sm-3.col-lg-2.mb-4.mb-sm-0
          img(src="@/assets/images/pages/tema1/img84.svg")
        .col-sm-9
          .h11.mb-3 Horizontales
          p.mb-0 Alternando de izquierda a derecha y de derecha a izquierda.

    .tarjeta.tarjeta--borde-azul-obscuro.mb-4
      .row.justify-content-center.justify-content-sm-between.align-items-center
        .col-4.col-sm-3.col-lg-2.mb-4.mb-sm-0
          img(src="@/assets/images/pages/tema1/img85.svg")
        .col-sm-9
          .h11.mb-3 Verticales
          p.mb-0 Alternando de arriba hacia abajo y de abajo hacia arriba.

    .tarjeta.tarjeta--borde-azul-obscuro.mb-4
      .row.justify-content-center.justify-content-sm-between.align-items-center
        .col-4.col-sm-3.col-lg-2.mb-4.mb-sm-0
          img(src="@/assets/images/pages/tema1/img86.svg")
        .col-sm-9
          .h11.mb-3 Diagonales
          p.mb-0  Alternando de izquierda a derecha y de derecha a izquierda.

    .tarjeta.tarjeta--borde-azul-obscuro.mb-5
      .row.justify-content-center.justify-content-sm-between.align-items-center
        .col-4.col-sm-3.col-lg-2.mb-4.mb-sm-0
          img(src="@/assets/images/pages/tema1/img87.svg")
        .col-sm-9
          .h11.mb-3 Círculos
          p.mb-0 Recuerde no apoyar la muñeca ni la mano.

    hr.mb-5

    .row.justify-content-center.mb-6
      .col-lg-6
        .tarjeta.tarjeta--azul-claro.p-4
          .h2.mb-3 Anexo 5
          a.lnk.d-flex.align-items-center.justify-content-center(href="")
            img.mr-3(style="width: 35px" src="@/assets/images/pages/tema1/img18.svg")
            span 1.5 MOODBOARD TABLEROS CREATIVOS Y CUADRO METAMÓRFICO.

    #t_2_2.titulo-subtema.mb-5
      .h1 2.2. Categorización de prendas

    iframe.video(
      src='https://www.youtube.com/embed/OUA-M4LqynA', 
      frameborder='0', 
      allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', 
      allowfullscreen=''
    )
    .h3.small.mb-5 Categorización de prendas.

    p.mb-6 En la segmentación de productos se implementa el término tipología, el cual sirve para categorizar de manera básica, “lógica” por tipo los productos, lo que se busca es identificar características similares que componen el producto y así ir categorizando para facilitar todo el proceso, desde la parte creativa hasta la parte operativa.

    .tarjeta.tarjeta--amarillo-claro.mb-6
      .tarjeta--amarillo-claro__titulo
        .h11 ¿Qué es una <br>tipología? 
      .row
        .col-lg-4.mb-5
        .col-lg-8
          p.mb-0 Es el estudio de los tipos o modelos que se usan para clasificar diversas cosas.
    
    img.mb-6(src="@/assets/images/pages/tema1/img81.png")

    .h1.mb-5 División del cuerpo

    .row.categorias-prendas.align-items-center.align-items-sm-stretch.mb-6
      .col-6.col-sm-3
        img(src="@/assets/images/pages/tema1/img82.svg")
      .col-6.col-sm-9.d-flex.flex-column.justify-content-around
        .row.justify-content-sm-around.align-items-center.pt-md-5
          .col.flex-sm-grow-0
            .h11.mb-3 Superior:
            p.mb-3 de la cintura hacia abajo.
          .col.flex-sm-grow-0.d-none.d-sm-block
            img.categorias-prendas__arrow(src="@/assets/images/pages/tema1/iconr.svg")
          .col.flex-sm-grow-0
            .h11.mb-3 Prendas superiores:
            p.mb-3  de la cintura hacia arriba.

        .row.justify-content-sm-around.align-items-center
          .col.flex-sm-grow-0
            .h11.mb-3 Inferior:
            p.mb-3 de la cintura hacia abajo.
          .col.flex-sm-grow-0.d-none.d-sm-block
            img.categorias-prendas__arrow(src="@/assets/images/pages/tema1/iconr.svg")
          .col.flex-sm-grow-0
            .h11.mb-3 Prendas inferiores:
            p.mb-3 pantalones, faldas, shorts.

    .h1.mb-5 Bitácora de formas 
      span.fw-normal - Glosario técnico


    .tarjeta.tarjeta--lavanda-claro.tarjeta--numerada.py-4.mb-4
      .tarjeta--numerada__numero 
        span 1
      .h1 Pinzas:
      .h2.mb-0 pinza sencilla, doble pinza, pinza por sisa corte diagonal, pinza por escote.

    .tarjeta.tarjeta--lavanda-claro.tarjeta--numerada.py-4.mb-4
      .tarjeta--numerada__numero 
        span 2
      .h1 Cortes
      .h2.mb-0 princesas, francés, corte horizontal y vertical, canesú con corte vertical.


    .tarjeta.tarjeta--lavanda-claro.tarjeta--numerada.py-4.mb-4
      .tarjeta--numerada__numero 
        span 3
      .h1 Talles
      .h2.mb-0 talle alto, talle medio, talle bajo.


    .tarjeta.tarjeta--lavanda-claro.tarjeta--numerada.py-4.mb-6
      .tarjeta--numerada__numero 
        span 4
      .h2.mb-0 Cuellos - puños - bolsillos de parche - bolsillos de ribete - pantalón - largos - bolsillos - talles – detalles.

    #t_2_3.titulo-subtema.mb-5
      .h1 2.3. Técnica de achurados y acabados

    iframe.video(
      src='https://www.youtube.com/embed/OUA-M4LqynA', 
      frameborder='0', 
      allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', 
      allowfullscreen=''
    )
    .h3.small.mb-5 Técnica de achurados y acabados.

    hr.mb-5

    .row.justify-content-center.mb-6
      .col-lg-6
        .tarjeta.tarjeta--azul-claro.p-4
          .h2.mb-3 Anexo 6
          a.lnk.d-flex.align-items-center.justify-content-center(href="")
            img.mr-3(style="width: 35px" src="@/assets/images/pages/tema1/img18.svg")
            span 2.3 DIBUJO PLANO - TIPOLOGÍAS.

    #t_2_4.titulo-subtema.mb-5
      .h1 2.4 Dibujo de bitácora de formas

    iframe.video(
      src='https://www.youtube.com/embed/OUA-M4LqynA', 
      frameborder='0', 
      allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', 
      allowfullscreen=''
    )
    .h3.small.mb-5 Dibujo de bitácora de formas.

    hr.mb-5

    .row.justify-content-center.mb-6
      .col-lg-6
        .tarjeta.tarjeta--azul-claro.p-4
          .h2.mb-3 Anexo 7
          a.lnk.d-flex.align-items-center.justify-content-center(href="")
            img.mr-3(style="width: 35px" src="@/assets/images/pages/tema1/img18.svg")
            span 2.4 PLANTILLAS DE FIGURIN PARA DIBUJO PLANO.


    #t_2_5.titulo-subtema.mb-5
      .h1 2.5. Dibujo plano de prendas

    iframe.video(
      src='https://www.youtube.com/embed/OUA-M4LqynA', 
      frameborder='0', 
      allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', 
      allowfullscreen=''
    )
    .h3.small.mb-5 Dibujo plano de prendas.

    iframe.video(
      src='https://www.youtube.com/embed/OUA-M4LqynA', 
      frameborder='0', 
      allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', 
      allowfullscreen=''
    )
    .h3.small.mb-5 Interpretación prenda inferior.

    iframe.video(
      src='https://www.youtube.com/embed/OUA-M4LqynA', 
      frameborder='0', 
      allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', 
      allowfullscreen=''
    )
    .h3.small.mb-5 Interpretación prenda enteriza.

    hr.mb-5

    .row.justify-content-center.mb-6
      .col-lg-6
        .tarjeta.tarjeta--azul-claro.p-4
          .h2.mb-3 Anexo 8
          a.lnk.d-flex.align-items-center.justify-content-center(href="")
            img.mr-3(style="width: 35px" src="@/assets/images/pages/tema1/img18.svg")
            span 2.5 DIBUJO PLANO DE PRENDAS.

    #t_2_6.titulo-subtema.mb-5
      .h1 2.6. Análisis de proporciones prendas superiores e inferiores

    iframe.video(
      src='https://www.youtube.com/embed/OUA-M4LqynA', 
      frameborder='0', 
      allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', 
      allowfullscreen=''
    )
    .h3.small.mb-5 Análisis de proporciones prendas superiores e inferiores.

    iframe.video(
      src='https://www.youtube.com/embed/OUA-M4LqynA', 
      frameborder='0', 
      allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', 
      allowfullscreen=''
    )
    .h3.small.mb-5 Análisis de proporciones prendas inferiores.

    hr.mb-5

    .row.justify-content-center.mb-6
      .col-lg-6
        .tarjeta.tarjeta--azul-claro.p-4
          .h2.mb-3 Anexo 9
          a.lnk.d-flex.align-items-center.justify-content-center(href="")
            img.mr-3(style="width: 35px" src="@/assets/images/pages/tema1/img18.svg")
            span 2.6 ANÁLISIS DE PROPORCIONES PRENDAS SUPERIORES E INFERIORES

    #t_2_7.titulo-subtema.mb-5
      .h1 2.7 Interfaz programa CAD

    p.mb-5 Para el desarrollo de dibujos planos, se implementa software que permite agilizar y detallar de manera más certera un producto. Para el uso de los programas se hace necesario contar con la licencia que autoriza la implementación legal del mismo. El SENA cuenta con las licencias requeridas para el acceso del aprendiz sin ningún inconveniente. 

    iframe.video(
      src='https://www.youtube.com/embed/OUA-M4LqynA', 
      frameborder='0', 
      allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', 
      allowfullscreen=''
    )
    .h3.small.mb-5 Interfaz programa CAD

    iframe.video(
      src='https://www.youtube.com/embed/OUA-M4LqynA', 
      frameborder='0', 
      allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', 
      allowfullscreen=''
    )
    .h3.small.mb-5 Interfaz programa CAD

    hr.mb-5

    .row.justify-content-center.mb-6
      .col-lg-6
        .tarjeta.tarjeta--azul-claro.p-4
          .h2.mb-3 Anexo 10
          a.lnk.d-flex.align-items-center.justify-content-center(href="")
            img.mr-3(style="width: 35px" src="@/assets/images/pages/tema1/img18.svg")
            span 2.3 DIBUJO PLANO - TIPOLOGÍAS.

    #t_2_8.titulo-subtema.mb-5
      .h1 2.8. Ficha técnica

    p.mb-5 Son documentos en los cuales se describe de manera detallada la información técnica de un producto, por lo general se documenta la información operativa de cada uno de los procesos por los que pasa el producto, dichos documentos serán consultados de manera constante para validar que el proceso si corresponde al requerimiento.

    iframe.video(
      src='https://www.youtube.com/embed/OUA-M4LqynA', 
      frameborder='0', 
      allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', 
      allowfullscreen=''
    )
    .h3.small.mb-6 Interfaz programa CAD

    .tarjeta.tarjeta--amarillo-claro.mb-6
      .tarjeta--amarillo-claro__titulo
        .h11 ¿Qué es ficha<br>técnica?
      .row
        .col-lg-4.mb-5
        .col-lg-8
          p.mb-0 Son documentos que contienen la información necesaria para la fabricación de un producto. dichos documentos serán consultados en los distintos procesos de producción. Los datos para incluir deben ser detallados.

    .h1.mb-5 Tipos

    p.mb-6 Según el volumen, la cantidad y rigurosidad de la producción en cumplir parámetros de calidad se decide los diferentes requerimientos técnicos que debe llevar la ficha técnica.

    img.mb-6( src="@/assets/images/pages/tema1/img88.svg")

    .tarjeta.tarjeta--lavanda.mb-5

      Acordion
        .row.justify-content-around.align-items-center(titulo="Especificaciones técnicas de diseño")
          .col-6.col-sm-2.mb-5
            img(src="@/assets/images/pages/tema1/img89.svg")
          .col-sm-9.mb-5
            ul
              li Dibujo plano.
              li Proporción.
              li Dimensión.
              li Lupas.
              li Acotaciones (cotas).
        .row.justify-content-around.align-items-center(titulo="Especificaciones técnicas de patronaje")
          .col-6.col-sm-2.mb-5
            img(src="@/assets/images/pages/tema1/img90.svg")
          .col-sm-9.mb-5
            p.mb-0
              strong Medidas bases: 
              | bases para la construcción de la moldería, dependiendo del requerimiento antropométrico (prendas inferiores o superiores).
              br
              br
              strong Básico: 
              | moldería BASE de construcción, superiores o inferiores. Punto de partida para la construcción del plano.
              br
              br
              strong Interpretación: 
              | modificaciones al patrón base para la correcta lectura del diseño o prenda a trabajar.
              br
              br
              strong Señalización: 
              | convenciones o marcación para la correcta lectura del plano.

        .row.justify-content-around.align-items-center(titulo="Especificaciones técnicas de escalado")
          .col-6.col-sm-2.mb-5
            img(src="@/assets/images/pages/tema1/img91.svg")
          .col-sm-9.mb-5
            p.mb-0
              strong Despiece de moldería: 
              | juego de piezas para la construcción de una prenda o producto en una talla o modelo específico
              br
              br
              strong Proporciones: 
              | diferencia entre talla y talla para el incremento o disminución entre la talla base y los requerimientos de producción.
              br
              br
              strong Nido de escalado: 
              | malla o nido de la diferencia entre talla y talla del trazo o plano.
        .row.justify-content-around.align-items-center(titulo="Especificaciones técnicas de trazo y corte")
          .col-6.col-sm-2.mb-5
            img(src="@/assets/images/pages/tema1/img92.svg")
          .col-sm-9.mb-5
            p Para realizar el corte de una prenda o producto es necesario identificar por talla, referencia, material, color y demás instrucciones de corte.
            ul
              li Cantidad de corte por talla.
              li Cantidad de corte por pieza.
              li Referencia por color.

    .h1.mb-5 Ficha técnica – requerimientos

    p.mb-6 Los formatos de ficha técnica no tienen un esquema definido, por el contrario, son completamente ajustables al tipo de información que se considere necesaria para el tipo de producción a realizar.

    .h1.mb-5 Socialización de formatos

    .tarjeta.tarjeta--amarillo.tarjeta--pregunta
      .h2.mb-0 Nota: todo el texto tiene imágenes visuales de ref., las cuales complementan la información entregada - Anexar imágenes ppt de referencia.

</template>

<script>
import Slyder from '../Slyder'
export default {
  name: 'Tema2',
  components: {
    Slyder,
  },
}
</script>

<style lang="sass" scoped>
.categorias-prendas

  &__arrow
    width: 25px

  @media screen and (max-width: 992px)
    .h11
      font-size: 25px
  @media screen and (max-width: 768px)

    &__arrow
      width: 20px
  @media screen and (max-width: 576px)
    .h11
      font-size: 18px
    p
      font-size: 12px
    &__arrow
      width: 15px
  @media screen and (max-width: 425px)
    // &__arrow
    //   display: none
</style>
