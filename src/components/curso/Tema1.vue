<template lang="pug">
#mainContent.main-content
  .container
    #t_1.header-ecored
      h1 1. Empezando el aprendizaje, dispositivos y TIC
    .tarjeta
      section
        #t_1_1.header-ecored.title-full-width
          h1 1.1 Dispositivos
        #t_1_1_1.header-ecored--b
          h2 1.1.1 Reconocimiento de dispositivos
        
        p Seguramente, en este momento estarán conectados desde un dispositivo móvil, un computador o una tableta, entre otros, sin embargo, ¿realmente conocemos qué componentes básicos tienen estos dispositivos? Con el siguiente video podrán comprender aspectos relevantes que les ayudarán a dar respuesta a este interrogante:
        
        iframe.mb-6(
          width='100%', 
          height='600', 
          src='https://www.youtube.com/embed/OUA-M4LqynA', 
          frameborder='0', 
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', 
          allowfullscreen=''
        )

        #t_1_1_2.header-ecored--b
          h2 1.1.2 Tipos de dispositivos para conectarse a internet

        p.mb-6 Navegar en internet abre un abanico de oportunidades para buscar y difundir información, conectarse con personas y realizar diversas tareas que hoy se han convertido en necesidades de la población en general.

        .row.align-items-center.justify-content-around.mb-6
          .col-sm-8.col-md-5.mb-4.mb-md-0
            img.img(src="@/assets/images/pages/tema1/img2.svg")
          .col-md-7.col-lg-5
            .tarjeta--gris
              p.mb-0 Para poder acceder a internet las personas requieren una conexión, pero también
                strong.h3 dispositivos que permitan conectarse y ser usados para 
                strong.h3.texto-amarillo navegar en la red.

        p.mb-6 Como ya se mencionó en el video anterior, uno de los más utilizados son los computadores, sin embargo, hoy en día también son muy usados los teléfonos móviles, debido a la facilidad de llevarlos en el bolsillo y la integración de varios servicios dentro de un mismo dispositivo.

        .row.align-items-center.justify-content-around.mb-4.mb-lg-0
          .col-lg-8.col-xl-6
            .tarjeta--azul
              p.mb-0 Con los teléfonos móviles se puede acceder a internet usando wifi proveniente de un módem casero o de una red pública en una institución o sitio público, pero también usando un paquete de datos contratado con el operador móvil.
            .tarjeta--overlay
              .tarjeta--blanco
                .comillas
                  img(src="@/assets/images/pages/tema1/ico1.svg")
                p.mb-2.h1 Para acceder a internet basta con habilitar la 
                  span.texto-amarillo conexión wifi 
                  | en el menú del teléfono.
                p.mb-0 Cuya ubicación depende del modelo, sistema operativo, entre otros.

          .col-8.col-lg-4.col-xl-6
            img(src="@/assets/images/pages/tema1/img1.svg")

        .row.align-items-center.justify-content-around.mb-4.mb-lg-6
          .col-8.col-lg-5.mb-4.mb-lg-0
            Tablet
          .col-lg-6
            p.h1.mb-5 También están las tabletas, que suelen ser de mayor tamaño que los teléfonos móviles y cuyo sistema operativo se puede variar según el fabricante, los más conocidos son 
              span.texto-azul Android, IOS y Windows.
            p Normalmente, las tabletas no traen consigo teclado o ratón, pero tienen puertos en los que se pueden conectar estos elementos. La conexión a internet normalmente es por wifi, pero hay modelos que permiten insertar una tarjeta sim con datos de navegación.

        p.mb-6 Otros dispositivos permiten la conexión a internet como, por ejemplo, placas embebidas de bajo consumo para procesos educativos y empresariales como Arduino, Raspberry, Udoo, entre otros. Hoy en día también existen 
          strong electrodomésticos que se conectan a internet 
          | como neveras inteligentes y televisores, entre otros, permitiendo acceder a páginas web, reproductores de video y demás, usando una 
          strong conexión wifi.

        
        #t_1_2.header-ecored.title-full-width
          h1 1.2 Impacto de las TIC

        .row.align-items-center.justify-content-around.mb-6
          .col-4
            p.h1 
              span.texto-azul.mr-1.d-inline-block Las Tecnologías de Información y Comunicación
              span están presentes en aspectos cotidianos de la vida.
            p ¿Cuántos tienen un dispositivo móvil en las manos en este momento?

          .col-8
            p Ahora piense que desea comunicarse con alguien al otro lado del mundo, ¿qué necesita?: un dispositivo, una aplicación de comunicación y un paquete de datos o Wifi. Pero, devuélvase unos 30 años y piense en lo que tenían que hacer las personas para hablar con un primo en España, por ejemplo. Seguramente debían preparar muy bien lo que iban a decir porque la llamada tenía un costo elevado otra posibilidad era enviar una carta que podía demorar más de una semana en llegar. Hoy basta con enviar un emoticón por una app de mensajería y llega en instantes.
            | ¿Qué impactos puede tener esto en la vida de las personas? ¿Podrá agilizar tiempos? ¿Podrá hacer crecer un negocio?
        
        #t_1_2_1.header-ecored--b
          h2 1.2.1 Impacto Académico
        
        p.mb-6 Lo mismo pasa con la educación, por eso lo reto a tomar nota de lo que va a ver y pensar si el algún momento tuvo que usar lo que verá a continuación:

        .row.align-items-center.justify-content-around.mb-6
          .col-xl-10.position-relative
            .lagarto.d-none.d-md-block
              img(src="@/assets/images/pages/tema1/lagarto.png")
            .contenido-tarjeta
              .tarjeta--gris
                p.mb-0 Imagine que se encuentra en los 30 años atrás ya mencionados y desea buscar información sobre el Dragón de Komodo. Seguramente utilizaría una enciclopedia de varios tomos y ubicaría en la letra D, Dragón de Komodo. ¿Pero cuánto tiempo se tomaría? Hoy puede encontrar en segundos imágenes de este animal con su buscador favorito o incluso hablándole a su teléfono.
              .tarjeta--overlay
                .tarjeta--blanco.pb-3
                  .comillas
                    img(src="@/assets/images/pages/tema1/ico1.svg")
                  p.mb-2.h1 Es así como las herramientas TIC llegaron para quedarse e 
                    span.texto-amarillo impactar vidas.


        #t_1_2_2.header-ecored--b.mb-4
          h2 1.2.2 Impacto Social

        
        iframe.mb-4(
          width='100%', 
          height='600', 
          src='https://www.youtube.com/embed/Hw6TzcBSsRg', 
          frameborder='0', 
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', 
          allowfullscreen=''
        )

        
        .row.mb-6
          .col-md-4
            p.h2 Yul, el cocinero llanero que con tecnología ha dado a conocer sus recetas.
          .col-md-8
            p 
              strong.mr-1 Yulián Tellez
              | es un chef nacido en el municipio de Guamal que ha logrado compartir muchos de sus platos vía internet y, gracias a esa herramienta, su negocio ha empezado a ver los resultados.

        #t_1_2_3.header-ecored--b.mb-4
          h2 1.2.3 Impacto Emprendimiento

        iframe.mb-4(
          width='100%', 
          height='600', 
          src='https://www.youtube.com/embed/mxic99aIV_s', 
          frameborder='0', 
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', 
          allowfullscreen=''
        )

        .row
          .col-md-4
            p.h2 Domit Express: una aplicación que promociona el comercio local y vincula al 'mototaxismo'
          .col-md-8
            p Mathew y Manuel, sabanalargueros, crearon Domit Express, la app en la que los negocios locales presentan productos para los consumidores y que a la vez son transportados por "mototaxistas" organizados a través de una cooperativa de transporte.

</template>

<script>
import Tablet from './tema1/Tablet'
export default {
  name: 'Tema1',
  components: {
    Tablet,
  },
}
</script>

<style lang="sass" scoped></style>
