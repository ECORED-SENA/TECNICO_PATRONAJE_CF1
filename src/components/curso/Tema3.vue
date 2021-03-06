<template lang="pug">
section.container.pt-4
  .tarjeta
    
    #t_3.titulo-tema.mt-0.mb-5.p-0
      h1 3. Fundamentación Textil

    #t_3_1.titulo-subtema.mb-5
      .h1 3.1 Clasificación y conceptualización de las fibras naturales, químicas (artificiales y sintéticas).

    p.mb-5 Las fibras son una composición de filamentos que al entrelazarse componen los hilos, los hilos son el punto de partida para la producción de un textil; la composición unitaria de una materia sólida con cualquier estructura compone una fibra.

    iframe.video(
      src='https://www.youtube.com/embed/zjp1OL2DCug', 
      frameborder='0', 
      allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', 
      allowfullscreen=''
    )
    .h3.small.mb-5 Interfaz programa CAD


    .h1.mb-5 Proceso productivo textil

    BarraPasos.mb-6(activo="FIBRAS")


    .tarjeta.tarjeta--amarillo-claro.mb-6
      .tarjeta--amarillo-claro__titulo
        .h11 ¿Qué es <br>una fibra?
      .row
        .col-lg-3.mb-5
        .col-3.col-lg-1
          img(src="@/assets/images/pages/tema1/img93.png")
        .col-9.col-lg-8
          p.mb-0 Son documentos que contienen la información necesaria para la fabricación de un producto. dichos documentos serán consultados en los distintos procesos de producción. Los datos para incluir deben ser detallados.

    .row.mb-5
      .col-md-4
        .h1 Clasificación de las fibras textiles.

      .col-md-8
        p Se pueden clasificar de acuerdo con su
        ul
          li Origen.
          li Composición.
        p Esto nos permite identificar los procesos a los que son sometidas las fibras para la conformación de los productos textiles.

    .h2.mb-3 Naturales:
    p.mb-4 animales, minerales, vegetales.

    .tarjeta.tarjeta--lavanda.mb-4
      .row.align-items-center.justify-content-between
        .d-none.d-md-block.col-md-3.col-lg-2
          img(src="@/assets/images/pages/tema1/img94.svg")
        .col-md-9
          .h1 Fibras naturales. 
          p Son fibras que se extraen de los animales o de origen vegetal, se caracterizan por ser fragmentos, hebras o pelo y que pueden hilarse para dar lugar a hilos o cuerdas.
          ul.mb-0
            li Fibras animales.
            li Fibras vegetales.
            li Fibras minerales.

    .tarjeta.tarjeta--lavanda.mb-4
      .row.align-items-center.justify-content-between
        .d-none.d-md-block.col-md-3.col-lg-2
          img(src="@/assets/images/pages/tema1/img95.svg")
        .col-md-9
          .h1 Fibras animales. 
          p Las fibras de origen animal son de lana, pelo y secreciones, como la seda, folículos pilosos.
          .row
            .col-sm-6.col-lg-4
              ul.mb-0.mr-3
                li Oveja 
                li Alpaca
                li Vicuña
                li Camello 
            .col-sm-6.col-lg-4
              ul.mb-0
                li Cabra cachemira 
                li Mohair 
                li Pelo de yak 
                li Conejo angora

    .tarjeta.tarjeta--lavanda.mb-4
      .row.align-items-center.justify-content-between
        .d-none.d-md-block.col-md-3.col-lg-2
          img(src="@/assets/images/pages/tema1/img96.svg")
        .col-md-9
          .h1 Fibras vegetales
          p Entre las fibras de origen vegetal están las que se extraen:
          .row
            .col-sm-6.col-lg-3.mb-4.mb-lg-0
              .h3 De la semilla
              ul.mb-0
                li Algodón
                li Ceiba o Kapok
            .col-sm-6.col-lg-3.mb-4.mb-lg-0
              .h3 De la semilla
              ul.mb-0
                li Lino
                li Yute 
                li Bambú
                li Cáñamo
            .col-sm-6.col-lg-3.mb-4.mb-lg-0
              .h3 De la hoja
              ul.mb-0
                li Abacá
                li Cabuya
                li Esparto
            .col-sm-6.col-lg-3.mb-4.mb-lg-0
              .h3 Del fruto
              ul
                li Bonote (Coco)
              .h3 De la raíz
              ul.mb-0
                li Zacatón

    .tarjeta.tarjeta--lavanda.mb-6
      .row.align-items-center.justify-content-between
        .d-none.d-md-block.col-md-3.col-lg-2
          img(src="@/assets/images/pages/tema1/img97.svg")
        .col-md-9
          .h1 Fibras minerales
          p Las fibras de origen mineral se obtienen de minerales de estructura fibrosa.
          .row
            .col-sm-6.col-lg-4
              ul.mb-0.mr-3
                li Lana de roca
                li Amianto
            .col-sm-6.col-lg-4
              ul.mb-0
                li Fibra cerámica
                li Fibra asbesto



    img.mb-6(src="@/assets/images/pages/tema1/img98.png")

    .h2.mb-3 Químicas o intervenidas por el hombre
    p.mb-4 Las fibras que no se encuentran en la naturaleza como tales, deben ser manufacturadas por el hombre a través de procesos químicos. Se clasifican a su vez en: 
      strong fibras artificiales y fibras sintéticas.

    .tarjeta.tarjeta--lavanda.mb-4
      .row.align-items-center.justify-content-between
        .d-none.d-md-block.col-md-3.col-lg-2
          img(src="@/assets/images/pages/tema1/img94.svg")
        .col-md-9
          .h1 Fibras artificiales.
          p Son aquellas obtenidas a partir de fibras naturales, mediante un proceso químico de transformación; se logra transformar los polímeros naturales utilizados como materia prima en nuevas fibras artificiales con características propias y aplicaciones específicas
          ul.mb-0
            li Rayón o seda artificial.
            li Fibra de vidrio.

    .tarjeta.tarjeta--lavanda.mb-5
      .row.align-items-center.justify-content-between
        .d-none.d-md-block.col-md-3.col-lg-2
          img(src="@/assets/images/pages/tema1/img95.svg")
        .col-md-9
          .h1 Fibras sintéticas.
          p Fibras textiles que provienen de productos derivados del petróleo / polímeros sintéticos, son enteramente químicas; tanto la síntesis de la materia prima como la fabricación del filamento.
          ul.mb-0
            li Fibras de poliamida o nailon.
            li Nailon 6 y nylon 6-6.
            li Aramidas.
            li Elástano o spandex.

    .h2.mb-3 Inteligentes o técnicos
    p.mb-5 Pasivos, activos, de memora, ultrainteligentes, microcápsulas, nanotecnología.

    .h2.mb-3 Renovables o sostenibles
    p.mb-5 Pet reciclado, algodón orgánico, cuero vegetal, nylon regenerado, algas marinas.

    hr.mb-5

    .row.justify-content-center.mb-6
      .col-lg-6
        .tarjeta.tarjeta--azul-claro.p-4
          .h2.mb-3 Anexo 11
          a.lnk.d-flex.align-items-center.justify-content-center(href="")
            img.mr-3(style="width: 35px" src="@/assets/images/pages/tema1/img18.svg")
            span 3.1 CLASIFICACIÓN DE LAS FIBRA TEXTILES


    #t_3_2.titulo-subtema.mb-5
      .h1 3.2. Identificación fibras por combustión

    iframe.video(
      src='https://www.youtube.com/embed/xL89_BMN61I', 
      frameborder='0', 
      allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', 
      allowfullscreen=''
    )
    .h3.small.mb-5 Identificación de fibras

    p.mb-6 Conocer la composición de una fibra es la base de su utilidad, con la composición se logra identificar su comportamiento al ser manipuladas y permite garantizar la idoneidad en la elección frente a la función del diseño y del uso para el que están destinadas. La combustión es el proceso más común para la identificación de cada componente.



    .tarjeta.tarjeta--amarillo-claro.mb-6
      .tarjeta--amarillo-claro__titulo
        .h11 ¿Para qué?
      .row
        .col-lg-4.mb-3
        .col-lg-8
          p.mb-0 Los materiales textiles son los cimientos de la moda y elegir los adecuados es la clave de un proyecto con éxito.
            br
            br
            | Conocer su composición es muy útil para prever su comportamiento cuando se manipulan y para garantizar la idoneidad de su elección en función del diseño y del uso para el que están destinados.


    .h1.mb-5 Procedimiento

    p.mb-6 El procedimiento para identificar las fibras que componen una determinada tela depende de la naturaleza de la muestra, de la experiencia del analista y del equipo disponible. Para determinar de forma exacta su composición se deberán combinar varias pruebas de identificación. Una de las más sencillas es la prueba de identificación mediante el análisis por combustión.

    .tarjeta.tarjeta--amarillo.tarjeta--pregunta.mb-6
      p.mb-0 
        strong Análisis pirognóstico 
        | Definición etimológica: piro: fuego, gnosis: conocimiento.
        br
        br
        | Es un método muy simple que nos dará información sobre la naturaleza de las fibras que componen la tela con la que se está trabajando. Llamada también prueba de combustión.


    .h1.mb-5 Prueba de combustión

    p.mb-6 Esta prueba consiste en exponer a una llama, fibras o hilos de la materia textil que queremos identificar, analizando su forma de:

    .row.align-items-center.justify-content-center.mb-5
      .col-sm-6.col-lg-4.mb-4
        .row.align-items-center
          .col-3
            img(src="@/assets/images/pages/tema1/img99.svg")
          .col-9
            .h3.mb-0 Arder
      .col-sm-6.col-lg-4.mb-4
        .row.align-items-center
          .col-3
            img(src="@/assets/images/pages/tema1/img100.svg")
          .col-9
            .h3.mb-0 El olor desprendido
      .col-sm-6.col-lg-4.mb-4
        .row.align-items-center
          .col-3
            img(src="@/assets/images/pages/tema1/img101.svg")
          .col-9
            .h3.mb-0 El residuo que produce la combustión.


    .h1.mb-5 Materiales, equipos y útiles de trabajo

    ul.mb-6
      li.h3 Muestras textiles 5 cm x 5 cm.
      li.h3 Mechero o veladora.
      li.h3 Cenicero.
      li.h3 Papel aluminio.
      li.h3 Pinzas.
      li.h3 Tijeras.

    
    .tarjeta.tarjeta--lavanda.mb-6
      .h1.mb-4 Normas específicas de trabajo y seguridad
      .tarjeta.tarjeta--blanca.mb-4
        .row.justify-content-center.justify-content-sm-between.align-items-center
          .col-5.col-sm-3.mb-4.mb-sm-0
            img(src="@/assets/images/pages/tema1/img102.svg")
          .col-sm-9.col-lg-8
            .h1 Uso del mechero o veladora:
            p.mb-0 antes de encender el mechero o veladora, comprobar que no hay material inflamable a su alrededor. Para apagar el mechero o veladora, humedezca con un poco de agua, nunca soplar.

      .tarjeta.tarjeta--blanca
        .row.justify-content-center.justify-content-sm-between.align-items-center
          .col-5.col-sm-3.mb-4.mb-sm-0
            img(src="@/assets/images/pages/tema1/img99.svg")
          .col-sm-9.col-lg-8
            .h1 Uso del mechero o veladora:
            p.mb-0 antes de encender el mechero o veladora, comprobar que no hay material inflamable a su alrededor. Para apagar el mechero o veladora, humedezca con un poco de agua, nunca soplar.


    .h1.mb-5 Procedimiento experimental


    .tarjeta.tarjeta--lavanda-claro.tarjeta--numerada.py-4.mb-4
      .tarjeta--numerada__numero 
        span 1
      .h2.mb-0 Deshilachar y extraer varios hilos del tejido.
        br
        br
        | Verificar si aparentemente hay diferencias entre ellos con respecto al brillo, a la torsión o al color.
        br
        br
        | Separar los hilos, si hay diferencias evidentes entre ellos, esto indica que puede haber dos o más fibras en la muestra.

    .tarjeta.tarjeta--lavanda-claro.tarjeta--numerada.py-4.mb-4
      .tarjeta--numerada__numero 
        span 2
      .h2.mb-0 Sostener los hilos en forma horizontal con ayuda de una pinza.
        br
        br
        | Acercar los hilos lentamente al borde de la llama y observar su comportamiento.
        br
        br
        | Comprobar si se enroscan, si se encogen o si se alejan de la llama

    .tarjeta.tarjeta--lavanda-claro.tarjeta--numerada.py-4.mb-4
      .tarjeta--numerada__numero 
        span 3
      .h2.mb-0 Introducir el extremo de la muestra en la llama y observar su comportamiento.
        br
        br
        | Comprobar si se funde o si arde y si lo hace lentamente o con dificultad.
        br
        br
        | Analizar la llama que se produce durante la combustión.

    .tarjeta.tarjeta--lavanda-claro.tarjeta--numerada.py-4.mb-4
      .tarjeta--numerada__numero 
        span 4
      .h2.mb-0 Retirar la muestra de la llama y observar su comportamiento. Comprobar si continúa ardiendo con o sin fusión y si se autoextingue.
        br
        br
        | Analizar el humo que se desprende durante la combustión, determinando su color.
        br
        br
        | Analizar el olor que se desprende durante la combustión. Comprobar si el olor es a papel quemado, a pelo quemado, a vinagre, a apio cocido, a cera fundida, dulzón, aromático o desagradable.

    .tarjeta.tarjeta--lavanda-claro.tarjeta--numerada.py-4.mb-5
      .tarjeta--numerada__numero 
        span 5
      .h2.mb-0 Cuando la muestra esté fría, examinar las características de los residuos.
        br
        br
        | Comprobar la cantidad de ceniza y su forma, determinar también si es blanda, dura o quebradiza.
        br
        br
        | Repetir el proceso para verificar los resultados obtenidos.


    hr.mb-5

    .row.justify-content-center.mb-6
      .col-lg-6
        .tarjeta.tarjeta--azul-claro.p-4
          .h2.mb-3 Anexo 12
          a.lnk.d-flex.align-items-center.justify-content-center(href="")
            img.mr-3(style="width: 35px" src="@/assets/images/pages/tema1/img18.svg")
            span 3.2 IDENTIFICACIÓN DE FIBRAS


    #t_3_3.titulo-subtema.mb-5
      .h1 3.3. Clasificación de los hilos

    iframe.video(
      src='https://www.youtube.com/embed/qUdbl6B18Bg', 
      frameborder='0', 
      allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', 
      allowfullscreen=''
    )
    .h3.small.mb-5 Identificación de fibras

    p.mb-6 Los hilos son un conjunto de fibras textiles que son sometidas a un proceso de torsión, el cual permite que se genere un recorrido de gran longitud. Dentro de su clasificación se identifican elementos como los tipos de torsiones, titulación o numeración; la lectura de esta información es lo que permite determinar la idoneidad al momento de seleccionar los insumos para la elaboración de una prenda.


    BarraPasos.mb-6(activo="HILOS")


    .h1.mb-5 La hilatura:

    p.mb-5 consiste en elaborar o fabricar el hilo a partir de una mecha o cinta, puede realizarse en una variedad de máquinas que estira y confiere cohesión a la masa de fibras, obteniéndose el hilo.

    .row.align-items-center.mb-5
      .col-md-5
        .h1.mb-0 Hilatura manual Procedimiento de hilatura
      .col-1.mb-3.mb-md-0
        img.d-none.d-md-block(style="width: 50%" src="@/assets/images/pages/tema1/iconr.svg")
      .col-md-6
        p.mb-0 Con el huso - La rueca - Bergadana - El spinning Jenny. Anexar imagen.

    .row.align-items-center.mb-5
      .col-md-5
        .h1.mb-0 Hilatura mecánica Procedimiento de hilatura
      .col-1.mb-3.mb-md-0
        img.d-none.d-md-block(style="width: 50%" src="@/assets/images/pages/tema1/iconr.svg")
      .col-md-6
        p.mb-0 La mule - Jenny - Selfactina - Continuas de hilar - Máquinas más modernas. Anexar imagen.


    .h1.mb-5 Los hilos

    p.mb-5 los hilos tienen un papel muy importante en la determinación del tacto y el comportamiento de la tela, pueden forzar el buen comportamiento de la fibra o compensar algunas propiedades deficientes. La efectividad de un acabado depende de la selección adecuada del hilo.

    img.mb-6(src="@/assets/images/pages/tema1/img103.png")

    .tarjeta.tarjeta--amarillo-claro.mb-6.py-5.pt-md-6
      .tarjeta--amarillo-claro__titulo
        .h11 ¿Qué es<br>un hilo?
      .row
        .col-lg-4.mb-3
        .col-lg-8
          p.mb-0 Producto de longitud sustancial y corte seccional, relativamente pequeño, consistente de fibras o filamentos, con o sin torsión, es decir, un hilo es una hebra larga y delgada, elaborada con fibras de material textil. Un hilo está compuesto por 1,2 o más cabos torcidos entre sí.



    .h1.mb-5 La torsión

    p.mb-5 Se entiende por torsiones a la acción que sufre un conjunto de fibras, al proporcionarles cierta cantidad de giros en sentido de su eje longitudinal, y como consecuencia, la porción de fibras adquiere una cohesión y consistencia, provocando así mayor resistencia.
      br
      br
      | La cantidad de torsión de los hilos puede tener otras finalidades tales como: provocar determinados efectos en el teñido, producir reflejos en el tejido, flexibilidad o rigidez.

    .row
      .col-sm-6.mb-4
        .tarjeta.tarjeta--borde-violeta.full-height.p-4
          .row
            .col-lg-6
              .h1.mb-2.mb-lg-0 Resistencia
            .col
              p.mb-0 A mayor torsión, mayor resistencia.
      .col-sm-6.mb-4
        .tarjeta.tarjeta--borde-violeta.full-height.p-4
          .row
            .col-lg-6
              .h1.mb-2.mb-lg-0 Elasticidad
            .col
              p.mb-0 A mayor torsión, mayor elasticidad.
      .col-sm-6.mb-4
        .tarjeta.tarjeta--borde-violeta.full-height.p-4
          .row
            .col-lg-6
              .h1.mb-2.mb-lg-0 Aspecto
            .col
              p.mb-0 A mayor torsión menor diámetro aparente del hilo (por la mayor compacidad).
      .col-sm-6.mb-4
        .tarjeta.tarjeta--borde-violeta.full-height.p-4
          .row
            .col-lg-6
              .h1.mb-2.mb-lg-0 Tacto del tejido
            .col
              p.mb-0 Una torsión ligera proporciona telas de superficie suave, mientras que los hilos muy torcidos producen tejidos de superficie dura.
      .col-sm-6.mb-4
        .tarjeta.tarjeta--borde-violeta.full-height.p-4
          .row
            .col-lg-6
              .h1.mb-2.mb-lg-0 Arrugabilidad del tejido
            .col
              p.mb-0 A mayor torsión en el hilo, menor propensión de la tela a arrugarse.
      .col-sm-6.mb-4
        .tarjeta.tarjeta--borde-violeta.full-height.p-4
          .row
            .col-lg-6
              .h1.mb-2.mb-lg-0 Contracción
            .col
              p.mb-0 Los hilos elaborados muy torcidos encogen mucho más.


    .h1.mb-5 Tipos de torsión

    p.mb-5 El tipo de torsión la define el sentido de rotación del huso al momento en que se está hilando, existiendo dos tipos:

    .row.mb-3
      .col-lg-6.mb-5
        .row
          .col-2
            img(src="@/assets/images/pages/tema1/img104.svg")
          .col
            .h2 La torsión “Z” (derecha).
            p.mb-0 El huso en donde se está hilando gira en sentido a las manecillas del reloj.
      .col-lg-6.mb-5
        .row
          .col-2
            img(src="@/assets/images/pages/tema1/img105.svg")
          .col
            .h2 La torsión “S” (izquierda).
            p.mb-0 El huso donde se está hilando gira en sentido contrario a las manecillas del reloj.



    .h1.mb-5 Clasificación de los hilos

    .row.justify-content-center
      .col-sm-8.col-md-6.col-lg-4.mb-5
        .tarjeta.tarjeta--borde-violeta.full-height.pt-5
          .tarjeta--borde-violeta__titulo
            .h3.mb-0 Hilados (spun)
          img.mb-5(src="@/assets/images/pages/tema1/img106.svg")
          .d-flex.flex-column.align-items-center
            div
              .h2.mb-2 Sencillos
              ul
                li Cardados
                li Peinados
                li Con efecto
            div
              .h2.mb-2 Doblados
              ul.mb-0
                li 
                  strong Con torsión
                  br
                  | Retorcidos
                  br
                  | Cableados
                li Sin torsión
      .col-sm-6.col-lg-4.mb-5
        .tarjeta.tarjeta--borde-violeta.full-height.pt-5
          .tarjeta--borde-violeta__titulo
            .h3.mb-0 Filamentos
          img.mb-5(src="@/assets/images/pages/tema1/img107.svg")
          .d-flex.flex-column.align-items-center
            ul.mb-0
              li Monofilamentos, multifilamentos.
              li Lisos, texturizados.
              li Con o sin torsión.
      .col-sm-6.col-lg-4.mb-5
        .tarjeta.tarjeta--borde-violeta.full-height.pt-5
          .tarjeta--borde-violeta__titulo
            .h3.mb-0 Otros
          img.mb-5(src="@/assets/images/pages/tema1/img108.svg")
          .d-flex.flex-column.align-items-center
            ul.mb-0
              li Trenzados.
              li Coreply - corespun.
              li Fantasía.
              li Teñidos.


    .h1.mb-5 Caracterización - Título o numeración


    .tarjeta.tarjeta--amarillo.tarjeta--pregunta.mb-6
      .h1.mb-0 Método para expresar la longitud específica o la longitud por unidad de masa de un hilo.


    .h1.mb-5 Numeración

    p.mb-3 Los números que describen las características de un hilo se llaman título, y deben ir precedidos del símbolo del sistema que se haya empleado. El título propiamente dicho es la relación que existe entre la longitud y el peso.
      br
      br
      | Los sistemas de numeración se clasifican en dos grupos:
    
    ul.mb-5
      li.h3 Sistemas directos
      li.h3 Sistemas indirectos



    .h1.mb-5 Sistemas de numeración

    .row.justify-content-center.mb-3
      .col-sm-8.col-lg-6.mb-5
        .tarjeta.tarjeta--borde-violeta.full-height.pt-4
          .row.justify-content-center.mb-3
            .col-4
              img(src="@/assets/images/pages/tema1/img94.svg")
          
          .h1.text-center Sistemas directos 

          p (longitud constante y peso variable) Cuanto más elevado es el número, más grueso es el hilado o fibra.

          p Tex: peso en gramos de 1.000 metros de hilo. 

          p 
            strong 1Tex = 10D Tex - Decitex (D Tex): 
            br
            | es el peso en gramos de 10.000 metros de hilado. 

          p 
            strong 1 DTex = 0.9 Den - Denier (Den): 
            br
            | es el peso en gramos de 9000 metros de hilado o fibra. 

          p.mb-0 Esta medida está reservada para la seda y los hilos artificiales y sintéticos.



      .col-sm-8.col-lg-6.mb-5
        .tarjeta.tarjeta--borde-violeta.full-height.pt-4
          .row.justify-content-center.mb-3
            .col-4
              img(src="@/assets/images/pages/tema1/img95.svg")
          
          .h1.text-center Sistemas indirectos 

          p (Peso constante y longitud variable). Cuanto más elevado es el número, más fino es el hilado o fibra.

          p 
            strong Número métrico (Nm): 
            | número de metros que pesan un gramo o miles de metros por kilogramo. (el más utilizado).

          p 
            strong Número inglés (Ne): 
            | número de madejas de 840 yardas que pesan una libra, (el más habitual para el algodón).

          p 
            strong Número catalán (Na): 
            | número de madejas de 777,5 m que pesa 440 gramos.

          p Esta numeración describe el calibre o grosor.

          p 
            strong El primer número: 
            | representa los estirajes que ha recibido el hilo cuando se está elaborando. 

          p Así, entre más estirajes ha recibido, más delgado será.

          p.mb-0 El número que está después del slash (raya), representa el número de Hebra (cabos) que forman el hilo.




    .tarjeta.tarjeta--amarillo-claro.mb-5
      .tarjeta--amarillo-claro__titulo
        .h11 ¿Para qué elegir<br>el calibre?
      .row
        .col-lg-4.mb-5
        .col-lg-8.pt-3.pt-lg-0
          p.mb-0 La selección de calibre del hilo depende de la clase de tela y de prenda que va a coser.
            br
            br
            | El tipo de tejido a trabajar, según la necesidad.
            br
            br
            | El calibre de la aguja varía según el tejido e hilo.



    hr.mb-5

    .row.justify-content-center.mb-6
      .col-lg-6
        .tarjeta.tarjeta--azul-claro.p-4
          .h2.mb-3 Anexo 13
          a.lnk.d-flex.align-items-center.justify-content-center(href="")
            img.mr-3(style="width: 35px" src="@/assets/images/pages/tema1/img18.svg")
            span 3.3 CLASIFICACIÓN DE LOS HILOS

    #t_3_4.titulo-subtema.mb-5
      .h1 3.4. Clasificación de tejidos

    p.mb-5 Los tejidos son una composición de fibras o hilos que en su unión generan características como ancho, largo, grosor, resistencia, que permiten asignarle al tejido ciertas características, las cuales son primordiales en la segmentación o clasificación, como lo son los tejidos planos, tejidos de punto o aglomerados.

    img.mb-6(src="@/assets/images/pages/tema1/img109.png")

    BarraPasos.mb-6(activo="TEJIDOS")

    .tarjeta.tarjeta--amarillo-claro.mb-6.py-5.pt-md-6.py-lg-5
      .tarjeta--amarillo-claro__titulo
        .h11 ¿Qué son<br>los tejidos? 
      .row
        .col-lg-4.mb-3
        .col-lg-8
          p.mb-0 Manufacturado de fibras o hilos que tienen una relación sustancial entre su longitud, área y su espesor con suficiente resistencia mecánica para otorgarle una cohesión.


    .h1.mb-5 Clasificación de los tejidos

    .tarjeta.tarjeta--lavanda.mb-6

      Acordion
        .pl-5.pb-4(titulo="Telas tejidas")
          .h1 Plano
          .h2 Ligamentos fundamentales
          ul
            li Tafetán
            li Sarga (diagonal)
            li Raso
          .h2 Ligamentos derivados
          ul
            li Esterilla / panamá / canasta.
            li Espina / espiga.
            li Sarga interrumpida (broken twill).

          .h2 Otros
          ul
            li Dobby, jacquard, riso, afelpados, etc.

        .pl-5.pb-4(titulo="Telas no tejidas")
          .h2 Interlones – guatas.



    .h1.mb-5 Urdimbre y trama


    .tarjeta.fondo-tela.mb-6
      .row
        .col-lg-6.mb-5.mb-lg-0
          .tarjeta.tarjeta--lavanda.pt-5.full-height
            .row.justify-content-center.mb-4
              .col-6
                img(src="@/assets/images/pages/tema1/img110.svg")
            p.mb-0 La serie longitudinal de los hilos recibe el nombre de urdimbre y cada uno de los elementos que la constituyen se denomina hilo. Los hilos verticales son la urdimbre
        .col-lg-6
          .tarjeta.tarjeta--lavanda.pt-5.full-height
            .row.justify-content-center.mb-4
              .col-6
                img(src="@/assets/images/pages/tema1/img111.svg")
            p.mb-0 La serie transversal recibe el nombre de trama y cada una de sus unidades se denomina pasada. Las pasadas horizontales son la trama



    .h1.mb-5 Diferentes direcciones del hilo de la tela

    .row.justify-content-center
      .col-sm-6.col-lg-4.mb-5
        .tarjeta.tarjeta--lavanda.full-height
          .row.justify-content-center.mb-4
            .col-6.col-sm-8
              img(src="@/assets/images/pages/tema1/img112.svg")

          .h1 Urdimbre.
          p.mb-0 La dirección de los hilos verticales es la urdimbre, en la misma dirección en la que va el orillo de la tela. Es más fuerte, estable y no suele ceder.
      .col-sm-6.col-lg-4.mb-5
        .tarjeta.tarjeta--lavanda.full-height
          .row.justify-content-center.mb-4
            .col-6.col-sm-8
              img(src="@/assets/images/pages/tema1/img113.svg")

          .h1 Sesgo o bies.
          p.mb-0 Cuando se coloca el patrón a 45° grados con respecto a la dirección de la urdimbre de la tela, aportará mejor caída y cierta elasticidad.
      .col-sm-6.col-lg-4.mb-5
        .tarjeta.tarjeta--lavanda.full-height
          .row.justify-content-center.mb-4
            .col-6.col-sm-8
              img(src="@/assets/images/pages/tema1/img114.svg")

          .h1 Trama.
          p.mb-0 Es más fina y en ocasiones puede contener fibras elásticas, ya que estas fibras ceden al estirar la tela de orilla a orilla. Cortar en diferentes direcciones en la tela.


    .tarjeta.tarjeta--lavanda.p-4.mb-4
      .row.align-items-center
        .col-md-5.text-md-right
          .h2.mb-0 Tejido plano - Ligamentos fundamentales
        .col-1.mb-3.mb-md-0.d-flex.justify-content-center
          img.d-none.d-md-block(style="width: 50%" src="@/assets/images/pages/tema1/iconr.svg")
        .col-md-6
          p.mb-0 Tafetán - Sarga - Raso o Satín

    .tarjeta.tarjeta--lavanda.p-4.mb-4
      .row.align-items-center
        .col-md-5
          .h2.mb-0.text-md-right Tejido plano - Ligamentos Derivados
        .col-1.mb-3.mb-md-0.d-flex.justify-content-center
          img.d-none.d-md-block(style="width: 50%" src="@/assets/images/pages/tema1/iconr.svg")
        .col-md-6
          p.mb-0 Esterilla 2x1 - Espina - Broken- Esterilla 2x2 – Dobby

    .tarjeta.tarjeta--lavanda.p-4.mb-4
      .row.align-items-center
        .col-md-5
          .h2.mb-0.text-md-right Tejido plano - Otros ligamentos
        .col-1.mb-3.mb-md-0.d-flex.justify-content-center
          img.d-none.d-md-block(style="width: 50%" src="@/assets/images/pages/tema1/iconr.svg")
        .col-md-6
          p.mb-0 Corduroy – Terciopelo

    .tarjeta.tarjeta--lavanda.p-4.mb-4
      .row.align-items-center
        .col-md-5
          .h2.mb-0.text-md-right Tejido de punto 
        .col-1.mb-3.mb-md-0.d-flex.justify-content-center
          img.d-none.d-md-block(style="width: 50%" src="@/assets/images/pages/tema1/iconr.svg")
        .col-md-6
          p.mb-0 Proceso de fabricación de telas en que se utilizan agujas para formar una serie de mallas entrelazadas a partir de uno o más hilos, o bien, un conjunto de hilos. 

    .tarjeta.tarjeta--lavanda.p-4.mb-4
      .row.align-items-center
        .col-md-5
          .h2.mb-0.text-md-right Tejido de punto - Por trama 
        .col-1.mb-3.mb-md-0.d-flex.justify-content-center
          img.d-none.d-md-block(style="width: 50%" src="@/assets/images/pages/tema1/iconr.svg")
        .col-md-6
          p.mb-0 Sencillo, jersey, doble.

    .tarjeta.tarjeta--lavanda.p-4.mb-4
      .row.align-items-center
        .col-md-5
          .h2.mb-0.text-md-right Tejido de punto - Por urdimbre
        .col-1.mb-3.mb-md-0.d-flex.justify-content-center
          img.d-none.d-md-block(style="width: 50%" src="@/assets/images/pages/tema1/iconr.svg")
        .col-md-6
          p.mb-0 Tricot, raschell.

    .tarjeta.tarjeta--lavanda.p-4.mb-6
      .row.align-items-center
        .col-md-5
          .h2.mb-0.text-md-right No tejido
        .col-1.mb-3.mb-md-0.d-flex.justify-content-center
          img.d-none.d-md-block(style="width: 50%" src="@/assets/images/pages/tema1/iconr.svg")
        .col-md-6
          p.mb-0 Tipo de telas producidas al formar una red con fibra que se unen por procedimientos mecánicos, térmicos o químicos, pero sin ser tejidas. Fieltros o aglomerados - Películas – Espumas



    .h1.mb-5 Color de las telas

    p.mb-5 Crudo - Pre Teñido - Teñido en pieza - Blanco – Estampado.

    hr.mb-5

    .row.justify-content-center.mb-6
      .col-lg-6
        .tarjeta.tarjeta--azul-claro.p-4
          .h2.mb-3 Anexo 14
          a.lnk.d-flex.align-items-center.justify-content-center(href="")
            img.mr-3(style="width: 35px" src="@/assets/images/pages/tema1/img18.svg")
            span 3.4 LOS TEJIDOS


    #t_3_5.titulo-subtema.mb-5
      .h1 3.5 Caracterización de los tejidos

    iframe.video(
      src='https://www.youtube.com/embed/mc1kARHDHrs', 
      frameborder='0', 
      allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', 
      allowfullscreen=''
    )
    .h3.small.mb-5 Caracterización de los textiles

    p.mb-6 Los textiles suelen ser organizados en función de su comportamiento, esto permite que la idea o el desarrollo de producto sea mucho más certero y esté enfocado al requerimiento funcional del diseño.

    BarraPasos.mb-6(activo="TELAS")


    .h1.mb-5 Caracterización de los textiles
    
    p Se organizan en función de su comportamiento, está relacionado con el peso del material:

    .d-flex.mb-4
      ul.mb-0
        li Estructura
        li Fluidez
      ul.mb-0
        li Expansión
        li Compresión


    .tarjeta.tarjeta--lavanda.py-3.mb-6
      Slyder(clase-tarjeta="")
        .row.justify-content-between.align-items-center
          .col-3.mb-3.d-none.d-sm-block
            img(src="@/assets/images/pages/tema1/img115.svg")
          .col-sm-9.col-lg-8.mb-3
            .h11.mb-3 Estructura
            p.mb-0 Las telas estructuradas proporcionan el cuerpo de la prenda, dan forma por sí mismas.
              br
              strong Caída: 
              | la tela ha de mantenerse en su lugar y no caer cuando se le suelta. 
              br
              strong División de telas con estructura en diferentes áreas según su ocasión de uso: 
              | formal, informal, sport.
          .col-12
            .h1.mb-3 Textiles.
            p Paño - Tweed - Jacquard - Pana - Lino - Oxford - Faya - Shantung - Popelina - Tafetán - Bengalina – Satén.

            .h1.mb-3 Textiles plastificados - Recubiertos
            p Microfibras de nylon y poliester, algunas veces con propiedades hidrófugas.


        .row.justify-content-between.align-items-center
          .col-3.mb-3.d-none.d-sm-block
            img(src="@/assets/images/pages/tema1/img116.svg")
          .col-sm-9.col-lg-8.mb-3
            .h11.mb-3 Fluidez
            p.mb-0 Estas telas son suaves y con caída, no son capaces de aguantar su propio peso. La fluidez está directamente relacionada con el tipo de hilo utilizado en su fabricación, son hilos muy torsionados, tanto de hebras hiladas como de multifilamento. Caída: sobre el cuerpo suelen ser ligeras y de peso medio.
          .col-12
            .h1.mb-3 Textiles.
            p Chiffon - Gasa - Chalis - Interlock - Georgette - Crepé - Jersey - Malla - Encaje - Género – Velvet / terciopelo - Lamé - Crepé texturizado - Género de punto.



        .row.justify-content-between.align-items-center
          .col-3.mb-3.d-none.d-sm-block
            img(src="@/assets/images/pages/tema1/img117.svg")
          .col-sm-9.col-lg-8.mb-3
            .h11.mb-3 Expansión
            p.mb-0 En el grupo de textiles por expansión se incluye el concepto del plisado, este efecto permite expandir la silueta. El concepto de acolchado se incluye en esta categoría, este es un método natural para crear calidez mediante la combinación de capas de tela, se puede aplicar el acolchado medio y acolchado grueso.
          .col-12
            .h1.mb-3 Textiles.
            p Acolchado - Redecillas - Tarlatana - De piel o peluche - Tules - Organza - Plisados - Crepé de satén plisados.



        .row.justify-content-between.align-items-center
          .col-3.mb-3.d-none.d-sm-block
            img(src="@/assets/images/pages/tema1/img118.svg")
          .col-sm-9.col-lg-8.mb-3
            .h11.mb-3 Compresión
            p.mb-0 El objetivo principal de este es crear ajuste perfecto a la silueta humana. El grado de elasticidad, dependerá del tipo y cantidad de hilos elásticos.
              br
              strong Stretch confort: 
              | tejidos con un 2 % a 5 % de fibra de spandex, proporciona una compresión suave.
              br
              strong Stretch fuerte: 
              | contiene un 14 % a 20 % de fibra de spandex, proporciona una compresión continua que resta silueta al cuerpo.

          .col-12
            .h1.mb-3 Textiles.
            p Punto canalé - Pana stretch - Power lycra - Punto de algodón stretch - Doble punto - Power net.
  



    .h1.mb-5 Las entretelas
    
    p.mb-5 Son la estructura de nuestra ropa, ya que sostienen y refuerzan las áreas críticas. El tipo de entretela usada determina el tacto, la forma y la durabilidad de nuestra prenda, manteniendo su función y ayudando en el proceso productivo.


    .h1.mb-5 Tipos de entretelas
    
    p Estas pueden ser agrupadas de acuerdo con la tela, aplicación y estiraje, dentro de estas se encuentra:

    ul.mb-5
      li Entretelas tejidas
      li Entretelas no tejidas
      li Entretelas de punto

    .tarjeta.tarjeta--crema.mb-6.pb-4
      
      Acordion
        .pb-4(titulo="Entretelas tejidas")
          p Pueden ser de algodón, rayón, lana, poliéster o mezclas de fibras. Se tejen de la misma forma que las telas normales (urdimbre / trama). 
            br
            br
            | Usualmente, cuando se cortan al sesgo, estiran más y se utilizan entonces para dar forma.

        .pb-4(titulo="Entretelas NO tejidas")
          p Por lo general están hechas de poliéster, rayón, nylon o una mezcla de diferentes fibras.
            br
            br
            | Las fibras son distribuidas al azar y juntadas por acción química o térmica. Ya que no tienen una dirección de hilo o grano, no se desmechan y pueden ser cortadas en cualquier dirección o ángulo.

    .tarjeta.tarjeta--amarillo-claro.py-3.pt-md-3.pt-6.mb-6
      .tarjeta--amarillo-claro__titulo
        .h11 ¿Cómo elegir la <br>entretela adecuada?
      .row.justify-content-between
        .col
        .col-6.col-md-4
          img(src="@/assets/images/pages/tema1/img119.svg")



    .tarjeta.tarjeta--lavanda.mb-5
      
      Acordion
        .row.pb-4.justify-content-around(titulo="Fabricación y aplicación")
          .col-2
            img(src="@/assets/images/pages/tema1/img120.svg")
          .col-8
            p Las entretelas pueden ser tejidas, no tejidas o de punto. Pueden usarse fusionándose, cosiéndose

        .row.pb-4.justify-content-around(titulo="Elásticas o estables")
          .col-2
            img(src="@/assets/images/pages/tema1/img120.svg")
          .col-8
            p Las entretelas se catalogan bajo estas dos categorías:
              br 
              strong Las elásticas: 
              | donde se requiere dar forma.
              br
              strong Las estables: 
              | en sitios de la prenda donde se necesite fijar.


        .row.pb-4.justify-content-around(titulo="Cuidado")
          .col-2
            img(src="@/assets/images/pages/tema1/img120.svg")
          .col-8
            p La tela exterior debe tener características similares de la entretela.

        .row.pb-4.justify-content-around(titulo="Color")
          .col-2
            img(src="@/assets/images/pages/tema1/img120.svg")
          .col-8
            p El color se transparenta a través de algunas telas. Se debe seleccionar una entretela compatible con el color de la tela exterior.

        .row.pb-4.justify-content-around(titulo="Peso")
          .col-2
            img(src="@/assets/images/pages/tema1/img120.svg")
          .col-8
            p Los pesos de las entretelas varían desde las muy livianas hasta las muy pesadas. Se deben elegir de acuerdo con el material a trabajar.

        .row.pb-4.justify-content-around(titulo="Métodos de aplicación")
          .col-2
            img(src="@/assets/images/pages/tema1/img120.svg")
          .col-8
            p Existen entretelas en los diferentes tipos, se pueden encontrar:
              br
              strong Entretelas termoadhesivas. 
              br
              strong Entretelas cosibles.

        .row.pb-4.justify-content-around(titulo="Entretelas termoadhesivas")
          .col-2
            img(src="@/assets/images/pages/tema1/img120.svg")
          .col-8
            p Van cubiertas por uno de sus lados por un agente adhesivo sensible al calor; al someterlas a humedad y calor, el agente adhesivo se funde y se adhiere a la tela.

        .row.pb-4.justify-content-around(titulo="Fusionado mecánico")
          .col-2
            img(src="@/assets/images/pages/tema1/img120.svg")
          .col-8
            p Se requiere de una máquina en perfectas condiciones para obtener un buen resultado.
              br
              | Únicamente el balance exacto de temperatura, presión y tiempo pueden garantizar una adherencia perfecta.

        .row.pb-4.justify-content-around(titulo="Fusionado manual")
          .col-2
            img(src="@/assets/images/pages/tema1/img120.svg")
          .col-8
            p Debe tener en cuenta el tipo de entretela, algunas se fusionan con vapor y presión y otras con una plancha seca sin vapor.
              br
              | Debe tener una adecuada temperatura la plancha, vapor o sin vapor, húmedo o seco.

        .row.pb-4.justify-content-around(titulo="Entretelas cosibles")
          .col-2
            img(src="@/assets/images/pages/tema1/img120.svg")
          .col-8
            p Se cosen a la tela o a las costuras de una prenda, a mano o a máquina. Son útiles para textiles texturizados como el terciopelo y la plana o para textiles sensibles al calor y textiles metalizados o plastificados que no pueden soportar la presión o el calor de la plancha.


    hr.mb-5

    .row.justify-content-center.mb-6
      .col-lg-6
        .tarjeta.tarjeta--azul-claro.p-4
          .h2.mb-3 Anexo 15
          a.lnk.d-flex.align-items-center.justify-content-center(href="")
            img.mr-3(style="width: 35px" src="@/assets/images/pages/tema1/img18.svg")
            span 3.5 CARACTERIZACIÓN DE LOS  TEXTILES


    #t_3_6.titulo-subtema.mb-5
      .h1 3.6 Procesos textiles

    iframe.video(
      src='https://www.youtube.com/embed/RecKnCBkD5g', 
      frameborder='0', 
      allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', 
      allowfullscreen=''
    )
    .h3.small.mb-6 Caracterización de los textiles

    BarraPasos.mb-6(activo="ACABADOS")


    .tarjeta.tarjeta--amarillo-claro.mb-6
      .tarjeta--amarillo-claro__titulo
        .h11 Introducción
      .row
        .col-lg-4.mb-3
        .col-lg-8
          p.mb-0 Los tratamientos posteriores a las operaciones 
            strong de coloración tienen por objeto mejorar el aspecto y las propiedades de los materiales textiles antes de su comercialización, 
            | así como proporcionarles algunas cualidades que mejoren su comportamiento al uso y mantenimiento. También eliminar o minimizar algunas cualidades no deseables de los mismos.



    .h1.mb-5 Tipos de operaciones


    .row.justify-content-around.mb-3
      .col-md-6.col-lg-5.mb-5
        .tarjeta.tarjeta--borde-violeta.full-height
          .row.mb-3.justify-content-center
            .col-6
              img(src="@/assets/images/pages/tema1/img115.svg")
          .h1 Aprestos
          p.mb-0 Cuando los efectos conseguidos se deben a la aplicación de productos químicos, tales como: rigidez, estabilidad, tactosidad, impermeabilizar o aumentar su peso.


      .col-md-6.col-lg-5.mb-5
        .tarjeta.tarjeta--borde-violeta.full-height
          .row.mb-3.justify-content-center
            .col-6
              img(src="@/assets/images/pages/tema1/img116.svg")
          .h1 Acabados
          p.mb-0 Cuando los efectos conseguidos se deben a la aplicación de tratamientos físicos y/o mecánicos, tales como: calor, presión, humedad, etc.

    p.mb-6 Ambos tipos de operaciones no son incompatibles entre sí; más bien al contrario, se combinan con frecuencia para la obtención de los efectos perseguidos.


    .h1.mb-5 Tipos de operaciones

    p.mb-5 Proceso realizado sobre la fibra, el hilo, la tela o la prenda, con el fin de modificar alguna de sus características:

    .row.justify-content-center
      .col-sm-8.col-md-4.mb-4
        .row.justify-content-center.align-items-center
          .col-3.mb-3.mb-sm-0.mb-md-3.mb-lg-0
            img(src="@/assets/images/pages/tema1/img121.svg")
          .col-9.col-md-12.col-lg-8
            .h2.mb-0.text-md-center.text-lg-left Apariencia
      .col-sm-8.col-md-4.mb-4
        .row.justify-content-center.align-items-center
          .col-3.mb-3.mb-sm-0.mb-md-3.mb-lg-0
            img(src="@/assets/images/pages/tema1/img122.svg")
          .col-9.col-md-12.col-lg-8
            .h2.mb-0.text-md-center.text-lg-left Tacto
      .col-sm-8.col-md-4.mb-4
        .row.justify-content-center.align-items-center
          .col-3.mb-3.mb-sm-0.mb-md-3.mb-lg-0
            img(src="@/assets/images/pages/tema1/img123.svg")
          .col-9.col-md-12.col-lg-8
            .h2.mb-0.text-md-center.text-lg-left Comportamiento

    .row.mb-4
      .col-lg-4.mb-4
        .tarjeta.tarjeta--lavanda.full-height
          .h2 Acción que lo origine / modifica característica:
          .h3 Físico/estético
          p No modifica la estructura interna de la fibra, solo apariencia
          .h3 Químico/funcional
          p Modifica propiedades estéticas y/o funcionales de la estructura interna de la fibra
          .h3.mb-0 Químico-físico / estético- funcional
      .col-lg-4.mb-4
        .tarjeta.tarjeta--lavanda.full-height
          .h2 Duración
          .h3 Temporal
          p Algunas lavadas.
          .h3 Permanente
          p Acabados físicos, vida útil de la prenda.
          .h3 Renovable
          p.mb-0 Puede renovarse en el hogar o tintorería.
      .col-lg-4.mb-4
        .tarjeta.tarjeta--lavanda.full-height
          .h2 Limpieza
          .h3 Desgomado de la seda
          .h3 Descrude del algodón
          .h3.mb-0 Lavado de lana

      .col-lg-4.mb-4
        .tarjeta.tarjeta--lavanda.full-height
          .h3 Diseño y color
          p.mb-0 El uso de tintes que penetran y dan color a las fibras. Se usa para dar color y crear grafías.
      .col-lg-4.mb-4
        .tarjeta.tarjeta--lavanda.full-height
          .h3 Textura
          p.mb-0 Se utiliza para mejorar la textura de su superficie y el tacto.
      .col-lg-4.mb-4
        .tarjeta.tarjeta--lavanda.full-height
          .h3 Desempeño
          p.mb-0 Se utiliza para mejorar el desempeño y utilidad de la tela.



    .h1.mb-5 Diseño y color - teñido
    
    .h2.mb-2 Métodos
    p.mb-4 Fibras, hilos, teñir en solución, materia prima, piezas.

    .h1.mb-2 Diseño y color - estampado
    p.mb-4 Rotativa, serigrafía, sublimación, transfer digital.

    .h1.mb-2 Textura
    p.mb-4 Calandrar satinado, glaseado, afelpado o napping, mercerizado y sanforizado, reducción de brillo, grabado, gofrado, aumento de cuerpo - sizing, encerado ciré, moiré.

    .h1.mb-2 Desempeño
    p.mb-5 Resistencia a pliegues y arrugas, planchado durable, repelente al agua / impermeabilización, control de encogimiento, resistencia a la suciedad, antiestática, antibacterial, resistente a polillas, ignición retardada, resistencia al moho.


    hr.mb-5

    .row.justify-content-center
      .col-lg-6
        .tarjeta.tarjeta--azul-claro.p-4
          .h2.mb-3 Anexo 16
          a.lnk.d-flex.align-items-center.justify-content-center(href="")
            img.mr-3(style="width: 35px" src="@/assets/images/pages/tema1/img18.svg")
            span 3.6 ACABADOS

</template>

<script>
import LineaTiempo from './tema1/LineaTiempo'
import Acordion from '../Acordion'
import Slyder from '../Slyder'
import BarraPasos from './tema3/BarraPasos'
export default {
  name: 'Tema2',
  components: {
    LineaTiempo,
    Acordion,
    Slyder,
    BarraPasos,
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

.fondo-tela
  background-image: url('../../assets/images/pages/tema1/fondo1.png')
  background-size: cover
</style>
