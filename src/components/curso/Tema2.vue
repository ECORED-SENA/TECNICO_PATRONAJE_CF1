<template lang="pug">
#mainContent.main-content
  .container
    #t_2.header-ecored
      h1 2. Empezando el aprendizaje, dispositivos y TIC
    .tarjeta
      section
        #t_2_1.header-ecored.title-full-width
          h1 2.1 Internet
        p.mb-5 En la actualidad, Internet es una herramienta fundamental para que las personas realicen diversas tareas, las cuales pueden ir desde consultar una receta, hasta acceder a una reunión de trabajo. Sin embargo, muchos desconocen la evolución que ha tenido, su origen y la forma en que se utilizó desde su inicio.
          br
          br
          | El siguiente video nos presenta un resumen sobre qué es la Internet y para qué se utiliza.

        iframe(
          width='100%', 
          height='600', 
          src='https://www.youtube.com/embed/-JVdH8ne-2s', 
          frameborder='0', 
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', 
          allowfullscreen=''
        )
        .mb-6
          i Educar Portal. (julio 11 de 2019). Microaprendizaje: ¿Qué es Internet? (Video). Disponible en: 
            a(href="https://youtu.be/-JVdH8ne-2s", target="_blank") https://youtu.be/-JVdH8ne-2s
    

        p Luego de conocer qué es la Internet, lo invitamos a hacer un viaje por la historia de la Internet.

        iframe(
          width='100%', 
          height='600', 
          src='https://www.youtube.com/embed/HsoGxPvsm1Y', 
          frameborder='0', 
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', 
          allowfullscreen=''
        )
        .mb-5
          i Castellanos, U. (julio 16 de 2017). Historia de Internet Ilustrado (Video). Disponible en:
            a(href="https://www.youtube.com/watch?v=HsoGxPvsm1Y&ab_channel=UrielCastellanos", target="_blank") https://www.youtube.com/watch?v=HsoGxPvsm1Y&ab_channel=UrielCastellanos
        
        p.mb-5 Ahora, vamos a llevar a cabo un breve recorrido, para conocer algunos datos importantes sobre la historia de la Internet, a través de la siguiente línea de tiempo.

        LineaTiempo.mb-6

        #t_2_1_1.header-ecored--b.mb-5
          h2 2.1.1 ¿Qué son los navegadores?

        .tarjeta--azul.mb-6
          .row.align-items-center
            .col-lg-5.mb-4.mb-lg-0
              img(src="@/assets/images/pages/tema2/img_21.svg")
            .col-lg-7
              p Internet aporta un amplio mundo de conocimiento y de entretenimiento debido a que, en 1 (un) minuto, se crean más de 600 páginas web, lo que hace que este universo sea cada vez más y más vasto.
                br
                br
                | Para poder acceder a estas páginas web y ver la información que contienen, es necesario hacerse de una herramienta digital llamada Navegador, que interpreta el código de la página que se visita y lo trae a la pantalla para poder <strong>navegar</strong> e interactuar.
                br
                br
                | Un navegador es una herramienta que permite a los usuarios de Internet, encontrar lo que desean con facilidad y realizar diferentes tareas como ver documentos, videos o el correo electrónico, entre otros.
                br
                br
                | Es una interfaz gráfica que permite a los internautas visualizar cualquier tipo de archivo multimedia, sin importar su localización o formato. Se encuentra un navegador en todo tipo de sistemas operativos, lo que permite que, sin ser expertos, podamos navegar por el interesante mundo de la red (computadores conectados entre sí) de Internet.


        iframe.mb-6(
          width='100%', 
          height='600', 
          src='https://www.youtube.com/embed/eml0Tx', 
          frameborder='0', 
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', 
          allowfullscreen=''
        )
        
        #t_2_2.header-ecored.title-full-width
          h1 2.2 Navegadores

        #t_2_2_1.header-ecored--b.mb-5
          h2 2.2.1 ¿Cuáles son los navegadores más utilizados en Internet?

        p Las personas utilizan diferentes navegadores, de acuerdo con sus características.
          br
          | ¿Cuáles son los más utilizados? ¿Por qué los usuarios los eligen? 
          br
          | Recuerde que un un navegador es una herramienta que permite acceder a la información alojada en Internet, que permite agregar, intercambiar y distribuir información. Esta data se puede manejar a través de multimedia, textos, imágenes, videos y música.
          br
          br
          Los navegadores más conocidos para realizar estas acciones son:

        .row.justify-content-center
          .col-lg-10
            .navegadores.mb-4
              .navegadores__item(v-for="(item,index) of navedadoresData", @mouseover="mostrarIndicadorNavegadores = false")
                .navegadores__item__icono
                  img(:src="item.img")
                  IndicadorInteraccion(v-if="mostrarIndicadorNavegadores && index === 0")
                .navegadores__item__texto
                  span
                    strong {{item.titulo}}
                    br
                    | {{item.texto}}
        
        p.h2.mb-4 Algunos de estos navegadores vienen instalados con el sistema operativo del computador, puesto que son herramientas esenciales para el acceso a Internet. Cada usuario puede sentirse libre de utilizar el que más le guste.

        p.mb-5 El siguiente video nos presenta un instructivo sobre cómo se trabaja en un navegador.

        iframe.mb-6(
          width='100%', 
          height='600', 
          src='https://www.youtube.com/embed/2L91WMqw96A', 
          frameborder='0', 
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', 
          allowfullscreen=''
        )

        .row.mb-4
          .col-md-6
            p.h1 Cuando haya estudiado lo enseñado sobre el navegador, es indispensable que tenga en cuenta las siguientes 
              span.texto-azul variables: 
              | seguridad, rapidez, funcionalidad y consumo.
          .col-md-6
            p Otro aspecto importante que debe conocer es que, para poder utilizar motores de búsqueda y tener acceso a las direcciones URL, los navegadores se comunican con servidores web a través de un 
              strong protocolo de transferencia de hipertextos.

        p.mb-5 Por su parte, el 
          strong https:// 
          | es un protocolo seguro para transferir hipertexto y viene de las siglas Hypertext Transfer Protocol Secure (en español, Protocolo Seguro de Transferencia de Hipertexto); es un sistema de organización de datos basado en la vinculación de fragmentos textuales o gráficos de estos fragmentos, y todos ellos incluyen la mayor parte de las siguientes características:

        PartesNavegador.mb-5

        
        p.mb-6 Un factor importante para conocer es que, para mantener la privacidad, por lo general los navegadores tienen formas precisas de almacenar: cookies, enlaces web y el historial, que son los datos que, para optimizar el funcionamiento de los equipos, se pueden eliminar. También se cuenta con un tipo de navegación privada, conocida como 
          strong modo incognito
          |, que es una función de privacidad que se encuentra en algunos navegadores. Cuando se navega en este 
          strong modo
          |, se crea una sesión provisional que no se vincula a la sesión principal del navegador, ni a los datos del usuario.
          br
          br
          | Cuando se tengan claros los aspectos anteriores, usted 
          strong cuenta, entonces, con la capacidad para seleccionar qué navegador es el que va a utilizar para que le cumpla con sus necesidades. 
          | Para aprender a configurar su navegador, lo invitamos a ver el video a continuación.

        iframe.mb-6(
          width='100%', 
          height='600', 
          src='https://www.youtube.com/embed/2L91WMqw96A', 
          frameborder='0', 
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', 
          allowfullscreen=''
        )

        #t_2_3.header-ecored.title-full-width
          h1 2.3 Buscadores

        p.mb-5 Siempre estamos buscando diferentes tipos de información por Internet, como por ejemplo: textos, audios, videos o imágenes, entre muchos otros; para llevar a cabo esta búsqueda, vamos a necesitar un buscador de Internet. 

        .row.mb-4
          .col-md-6
            p.h1 ¿Qué es un buscador o motor de búsqueda? 

          .col-md-6
            p Es un mecanismo que permite acceder a distintos tipos de información a partir de palabras clave.


        .header-ecored--b.mb-5
          h2 ¿Cómo funciona un buscador o motor de búsqueda?

        p.mb-6 De acuerdo con lo descrito por Simone Catania (2019): el trabajo de los motores de búsqueda se puede dividir en tres fases: 
          strong análisis, catalogación y respuesta.

        PestanasVerticales.mb-6

        #t_2_3_1.header-ecored--b.mb-5
          h2 2.3.1 ¿Cuáles son los buscadores más utilizados?

        p.mb-6 En Internet se puede encontrar una gran variedad de buscadores pero, para ser más puntuales, se mencionan algunos de los más usados en Colombia para el año 2020, donde, según el portal web NETMARKETSHARE, el servicio online de estadísticas sobre la distribución y el reparto del mercado de navegadores, sistemas operativos y buscadores, en ordenadores personales, tabletas y teléfonos móviles, Google es el navegador más utilizado por los colombianos, seguido de Baidu, DuckDuckGo, AOL, Bing, Ask, Yahoo!, Yandex, Qwant, Ecosia.
        
        .row.justify-content-center.mb-6
          .col-8
            img(src="@/assets/images/pages/tema2/img_23.svg")

        p.mb-5 De acuerdo con lo anterior, existen varias opciones de motores de búsqueda, y cada uno de ellas cuenta con características y opciones que permiten acceder, a la información solicitada, de manera efectiva. Elija el buscador que mejor se adapte al contenido que desea encontrar.
          br
          br
          | A continuación, vamos a aprender cómo se realiza una búsqueda exitosa a través de uno de los navegadores estudiados anteriormente.

        iframe(
          width='100%', 
          height='600', 
          src='https://www.youtube.com/embed/zWM2HoncrVk', 
          frameborder='0', 
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', 
          allowfullscreen=''
        )
        .mb-6
          i Ministerio TIC Colombia. (julio 31 de 2013). ¿Cómo realizar una búsqueda exitosa en Google?(Video). Disponible en: 
            a(href="https://www.youtube.com/watch?v=zWM2HoncrVk&ab_channel=MinisterioTICColombia", target="_blank") https://www.youtube.com/watch?v=zWM2HoncrVk&ab_channel=MinisterioTICColombia
        
        #t_2_3_2.header-ecored--b.mb-5
          h2 2.3.2 Truncamientos y operadores booleanos

        .row.justify-content-between.align-items-center.mb-6
          .col-lg-5
            p.h1 
              strong Todos, en algún momento hemos deseado saber cómo llevar a cabo 
                span.texto-azul búsquedas más eficientes 
                | o cómo filtrar la información en las búsquedas que realizamos.
            p Cuando se utilizan motores de búsqueda para lo que sea que se necesite buscar (investigación, curiosidades, elaborar un documento, encontrar una herramienta digital para satisfacer una necesidad), siempre, en los resultados de la búsqueda, se encontrará información extra; por ejemplo, si se busca la palabra 
              strong gatos
              | , en menos de 1 segundo pueden aparecer cerca de 412.000.000 resultados; entonces, existe la posibilidad de utilizar una técnica para encontrar la información correcta, en bases de datos y en sitios web, obteniendo resultados que sean más exactos, y es aquí donde entran a cooperar, el truncamiento y los operadores booleanos.
          .col-lg-6
            img(src="@/assets/images/pages/tema2/img_1.svg")

        .header-ecored--b.mb-5
          h2 ¿Qué es truncamiento?

        p.mb-6 Son operadores que, al hacer uso de ellos, permiten ampliar una búsqueda; se ubican a la derecha o a la izquierda de un término, sustituyendo uno o varios caracteres; se utilizan cuando sea necesario localizar los términos derivados de la palabra a buscar: prefijos, sufijos, variantes léxicas, etc.

        CuadrosTruncamiento.mb-6

        BarraBusqueda.mb-5(texto="Truncamiento derecho (fortalece*) le permite recuperar variaciones a la derecha de un término.")
        
        BarraBusqueda.mb-5(texto="Truncamiento izquierdo (*fortalece) le permite recuperar variaciones a la izquierda de un término.")
        
        BarraBusqueda.mb-5(texto="“?” representa un solo carácter en una palabra con el objetivo de obtener varias formas de esta.")

        p.mb-6 Por ejemplo, el término 
          strong escue?a 
          | utilizado en una búsqueda de la palabra clave bibliográfica, obtiene bibliografías que contienen tanto el término 
          strong escuela 
          | como 
          strong escueta
          |; y por ejemplo 
          strong polig???a
          |, permite encontrar bibliografías que contienen 
          strong poligamia 
          | o 
          strong políglota
          |, pero no 
          strong poligráfica.
          br
          br
          i Tomado de la biblioteca digital de la Universidad de Alcalá (s.f.).

        .header-ecored--b.mb-5
          h2 ¿Qué son los operadores booleanos?

        p.mb-6 Los operadores booleanos (también conocidos como 
          strong operadores lógicos
          | ), son palabras o símbolos que se utilizan para crear estrategias de búsqueda en bases de datos y buscadores; permiten ser eficientes y filtrar los resultados de búsqueda solamente a la información relevante, bajo el contexto de la búsqueda. Sus estrategias sirven para conectar palabras o frases dentro de un contexto. 
          br
          br
          | Como ejemplo, vamos a ver lo que se obtiene en una búsqueda con operadores booleanos como 
          strong AND, OR 
          | o 
          strong NOT.
        
        .row.justify-content-center.mb-5
          .col-10
            p 
              i Al combinar las palabras clave para la búsqueda con los operadores, ya sea con uno o más, se puede restringir o ampliar el rango de la búsqueda.
        
        Boleanos.mb-2

        p Se puede utilizar 
          strong AND 
          | para buscar varios términos y que el resultado de la búsqueda, incluya ambos términos así:

        BarraBusqueda.mb-5(texto="Arquitectura AND diseño")

        p El operador 
          strong OR 
          | se puede utilizar si se quiere encontrar relación entre varios términos que se desconocen, como por ejemplo:

        BarraBusqueda.mb-5(texto="Café OR salud")

        p El operador 
          strong NOT 
          | reduce considerablemente los resultados de la búsqueda, porque excluye un término, como por ejemplo:

        BarraBusqueda.mb-6(texto="América NOT fútbol")

        .tarjeta-borde-amarillo.mb-5
          p.mb-0
            strong Nota: 
            | se debe tener presente que, los anteriores, no son los únicos operadores y que también se utilizan símbolos para mejorar la búsqueda.
            br
            br
            | Ahora ya conoce algunos de los operadores, recuerde que tiene a la mano unos operadores muy sencillos que le permitirán realizar consultas más precisas. Ya no tendrá que hacerlo como antes, escribir la consulta y filtrar entre los millones de páginas, la información que necesitaba.

        p.mb-5 El siguiente video le va a despejar las dudas que le hayan quedado durante el estudio de la temática sobre los buscadores.

        iframe.mb-6(
          width='100%', 
          height='600', 
          src='https://www.youtube.com/embed/2L91WMqw96A', 
          frameborder='0', 
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', 
          allowfullscreen=''
        )

        #t_2_3_3.header-ecored--b.mb-5
          h2 2.3.3 Recomendaciones para la búsqueda de recursos

        BarraBusqueda(texto="¿Alguna vez le ha sucedido que ha intentado buscar una información muy específica,")
        .mb-5
          .cuadro-dialogo--azul
            p.mb-0 pero los resultados obtenidos son muy diferentes a lo que realmente esperaba encontrar? 
              strong realmente esperaba encontrar?

        p.mb-5 Cuando se realizan búsquedas por Internet, es importante tomar en cuenta algunas recomendaciones que permitan obtener el resultado esperado y que sean realmente exitosas. 
          br
          br
          | ¿Cuáles son estas recomendaciones que se deben tener en cuenta? Se pueden resumir en pocos pasos.


        CuadroPasosA.mb-7

        .tarjeta-borde-amarillo.pb-5.mb-7
          p.mb-0 Lo invitamos a conocer el Sistema de Bibliotecas SENA, un sitio muy completo donde se pueden encontrar recursos digitales en línea suscritos por el SENA, de libre acceso, en diferentes disciplinas (salud, agricultura, biología, legislatura, administración, emprendimiento, entre otros) y en diferentes formatos (texto, audio, video, imagen). 
            br
            br
            | Recuerde que las consultas solo estarán disponibles para la comunidad SENA y que, para ingresar, se debe incluir su usuario y su contraseña. Si lo desea, también puede consultarlos a través de la plataforma de descubrimiento IRIS, donde, de manera centralizada, encontrará infinidad de recursos con información que le será útil y podrá practicar las estrategias de búsqueda que quiera. 

          .boton-spbresale
            .boton-spbresale__icono
              img(src="@/assets/images/pages/tema2/img_24.svg")

            a.h1(href="") Sistema de 
              strong Bibliotecas SENA

        #t_2_3_4.header-ecored--b.mb-5
          h2 2.3.4 Tipos de licencia, referencias y recomendaciones para el uso de recursos

        p.mb-6 Las páginas web que encontramos alojadas en Internet, están compuestas por imágenes, texto, animaciones, videos, sonidos, entre otros formatos. Todos estos contenidos digitales son creaciones de terceras personas y están sujetos a unas condiciones o limitaciones de uso, los que son definidos, por su autor, con la licencia elegida para ser publicada posteriormente. Esta licencia en su expresión básica la conoceremos como 
          strong Copyright y como Copyleft.


        .row.align-items-end.justify-content-around.d-none.d-md-flex
          .col-md-6.col-4.pb-4
            img(src="@/assets/images/pages/tema2/img_25.svg")
          .col-md-6.col-4.pb-4
            img(src="@/assets/images/pages/tema2/img_26.svg")
        
        .row.justify-content-around.mb-5
          .col-sm-8.col-md-6.col-lg-4.mb-4.mb-md-0
            img.d-md-none.mb-4(src="@/assets/images/pages/tema2/img_25.svg")
            .d-flex.justify-content-center.mb-4
              span.title-bg-yellow.h1.mb-0 Copyright
            p Este tipo de licencia limita la utilización del contenido digital, como también su modificación y distribución. Es una licencia restringida; si un tercero desea utilizar el contenido, requiere de la autorización del autor y, en la mayoría de los casos, se paga por su uso.

          .col-sm-8.col-md-6.col-lg-4.mb-4.mb-md-0
            img.d-md-none.mb-4(src="@/assets/images/pages/tema2/img_26.svg")
            .d-flex.justify-content-center.mb-4
              span.title-bg-yellow.h1.mb-0 Copyleft
            p Los contenidos digitales que tienen este tipo de licencia, permiten usar, copiar y redistribuir una obra y sus versiones derivadas simplemente reconociendo su autoría. En esencia, es el sistema opuesto al Copyright y no exige autorización del autor para su uso.

        .row.justify-content-center.align-items-center.mb-5
          .col-2.col-lg-1
            img(src="@/assets/images/pages/tema2/img_27.svg")
          .col-10.col-md-8.col-lg-6
            p.fs-6
              i Una de las licencias derivadas de Copyleft es la conocida como Creative Commons, se utiliza en todo tipo de contenidos en internet y la podemos identificar con el símbolo CC dentro de un círculo.

        .barra-completa-azul.mb-5
          span.h2.mb-0 Realicemos un ejemplo en el que se aplique lo estudiado

        p.mb-5 Suponer que se necesita un video sobre salud mental en tiempos de Covid-19 y que sea de distribución gratuita. Para obtenerlo, se accesa a YouTube y se realizan los siguientes pasos: 

        CuadroPasosB

        .tarjeta-borde-amarillo.pb-5.mb-7
          p.mb-0 Es importante hacer el reconocimiento de la autoría del video y de cualquier contenido que se encuentre ligado a la licencia CC; si es posible, se puede hacer una donación a los creadores del contenido y agradecer por los recursos digitales que aportan.


</template>

<script>
import IndicadorInteraccion from '../IndicadorInteraccion'
import LineaTiempo from './tema2/LineaTiempo'
import PartesNavegador from './tema2/PartesNavegador'
import PestanasVerticales from './tema2/PestanasVerticales'
import CuadrosTruncamiento from './tema2/CuadrosTruncamiento'
import BarraBusqueda from './tema2/BarraBusqueda'
import Boleanos from './tema2/boleanos'
import CuadroPasosA from './tema2/CuadroPasosA'
import CuadroPasosB from './tema2/CuadroPasosB'
export default {
  name: 'Tema2',
  components: {
    IndicadorInteraccion,
    LineaTiempo,
    PartesNavegador,
    PestanasVerticales,
    CuadrosTruncamiento,
    BarraBusqueda,
    Boleanos,
    CuadroPasosA,
    CuadroPasosB,
  },
  data: () => ({
    mostrarIndicadorNavegadores: true,
    navedadoresData: [
      {
        img: require('@/assets/images/pages/tema2/ico4.png'),
        titulo: 'Google Chrome',
        texto: '1997',
      },
      {
        img: require('@/assets/images/pages/tema2/ico5.png'),
        titulo: 'Mozilla Firefox',
        texto: '2002',
      },
      {
        img: require('@/assets/images/pages/tema2/ico1.png'),
        titulo: 'Microsoft Edge',
        texto: '2015',
      },
      {
        img: require('@/assets/images/pages/tema2/ico2.png'),
        titulo: 'Safari',
        texto: '1997',
      },
      {
        img: require('@/assets/images/pages/tema2/ico3.png'),
        titulo: 'Opera',
        texto: '1995',
      },
    ],
  }),
}
</script>

<style lang="sass" scoped>
.navegadores
  display: flex
  padding-top: 50px
  &__item
    flex-grow: 1
    padding: 0 2%
    cursor: pointer

    &__icono
      position: relative
      padding: 15%
      border-radius: 50%
      background: rgb(226,225,230)
      background: linear-gradient(135deg, rgba(226,225,230,1) 0%, rgba(255,255,255,1) 85%, rgba(255,255,255,1) 100%)
      box-shadow: 15px 15px 25px -10px rgba(0,0,0,0.4)
      margin-bottom: 10%
      transition: transform 0.3s ease-in-out

    &__texto
      display: flex
      justify-content: center
      transform: translateY(20px)
      transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out
      opacity: 0

    &:hover
      .navegadores
        &__item
          &__icono
            transform: scale(1.2) translateY(-10%)
          &__texto
            transform: translateY(0)
            opacity: 1

.cuadro-dialogo
  &--azul
    width: fit-content
    padding: 10px 20px
    background-color: #35D2DF
    position: relative
    margin-top: 10px
    margin-left: 5%
    &::before
      content: ''
      position: absolute
      left: 60%
      top: -10px
      width: 20px
      height: 20px
      transform: rotate(45deg)
      background-color: #35D2DF

    span
      color: #fff

.boton-spbresale
  position: absolute
  bottom: 0
  left: 50%
  transform: translate(-50%,60%)
  background-color: #35D2DF
  width: fit-content
  padding: 15px 30px
  border-radius: 10px
  a
    color: #fff
  &__icono
    position: absolute
    width: 50px
    top: 80%
    left: 95%

.title-bg-yellow
  background-color: #FFA900
  padding: 10px 15px
  color: #fff

.barra-completa-azul
  padding: 15px 30px
  background-color: #35D2DF
  color: #fff
  text-align: center
</style>
