<template lang="pug">
.linea-tiempo
  .linea-tiempo__row(v-for="(item,index) of datosLineaTiempo", :ref="'linea-tiempo-item-'+index" @mouseover="mostrarIndicador = false")
    .linea-tiempo__content
      .linea-tiempo__text
        span.h1.mb-2 {{item.titulo}}
        span(v-html="item.texto")

    .linea-tiempo__content
      .linea-tiempo__icon
        .linea-tiempo__icon__container
          span.h2 {{item.ano}}
          //- img(:src="item.img")
          //- IndicadorInteraccion(v-if="mostrarIndicador && index === 0")
</template>

<script>
// import IndicadorInteraccion from '../../IndicadorInteraccion'
export default {
  name: 'LineaTiempo',
  components: {
    // IndicadorInteraccion,
  },
  data: () => ({
    mostrarIndicador: true,
    datosLineaTiempo: [
      {
        ano: '100.000 - 10.000 A.C.',
        titulo: 'Período Paleolítico',
        texto: 'Pieles, pelo de animales, hojas, huesos y conchas.',
      },
      {
        ano: '10.000 - 5.000 A.C.',
        titulo: 'Periodo Mesolítico',
        texto:
          'Broches hechos con hueso, abrigos, gorros, botas y zapatillas de cuero.',
      },
      {
        ano: '10.000 - 5.000 A.C.',
        titulo: 'Periodo Neolítico',
        texto: 'Vestimenta de fibras animales y vegetales, pulseras de marfil.',
      },
      {
        ano: '4.000 A.C.',
        titulo: 'Egipcios',
        texto:
          'Shenti, con un cinturón de cuero, falda larga. Las sirvientas iban desnudas, calzado de fibras vegetales, cuero trenzado y papiro.',
      },
      {
        ano: '2500 A.C.',
        titulo: 'Sumerios',
        texto: 'Traje de lujo, faldón, chal, kaunake, traje militar.',
      },
      {
        ano: '2105 A.C.',
        titulo: 'Babilonia',
        texto:
          'Tejedores de lana y de lino, túnica de talle recto y bordes con flecos, larga o corta, borlas y flecos.',
      },
      {
        ano: '1700 A.C.',
        titulo: 'Creta',
        texto:
          'Primer corsé, falda sujeta con un cinturón metal cubierto con un delantal, mangas ceñidas, anillos, pulseras y collares.',
      },
      {
        ano: 'Siglo VI A.C.',
        titulo: 'Persas ',
        texto:
          'La prenda típica era una túnica, ropa interior y el bordado de aplicación, calzado anatómico, atados a los tobillos con correas y botones.',
      },
      {
        ano: 'Siglo I A.C.',
        titulo: 'Romanos',
        texto:
          'Túnica que los hombres usaban hasta las rodillas y las mujeres hasta los pies, bordados en hilos de oro.',
      },
      {
        ano: 'Siglos V - XV',
        titulo: 'Edad Media',
        texto:
          'Zapatos a la polonesa, doble túnica hasta los pies, manto con broche en el centro, y un velo cubriendo la cabeza.',
      },
      {
        ano: 'Siglos XV - XVIII',
        titulo: 'Edad Moderna',
        texto:
          'Prendas confeccionadas por sastres, faldas acampanadas, cuellos de encaje, crinolina, gorguera, prendas ajustadas, corsé desde el busto hasta la cadera.',
      },
      {
        ano: 'Siglos XIX',
        titulo: 'Edad Contemporánea',
        texto:
          'Silueta imperio, vestidos delgados y vaporosos, vuelos y encajes en forma de cascada, vestido línea princesa, hombreras. cuello solapa.',
      },
      {
        ano: 'Siglo XX',
        titulo: 'Edad Contemporánea',
        texto:
          'Silueta reloj de arena, el corsé de metal o de ballenas, faldas largas o blazers, sujetador, estética flapper, traje de baño, el uso del pantalón.',
      },
      {
        ano: 'Siglo XXI',
        titulo: 'Edad Contemporánea',
        texto:
          'Jeans de tiro bajo, minifaldas, shorts, zuecos o sandalias, estampados animal print, Fast fashion, pantalón pitillo, escote en V, supraciclaje, pantalón tiro alto, blusas campesinas.',
      },
    ],
  }),
}
</script>

<style lang="sass" scoped>

.linea-tiempo
  position: relative
  padding: 30px 0

  &__row
    display: flex
    align-items: center
    margin-bottom: 90px
    position: relative
    cursor: pointer

    &::before, &::after
      content: ''
      display: block
      top: 50%
      left: 50%
      width: 40px
      height: 40px
      border-radius: 50%
      position: absolute
      background: #B492F1
      transform: translate(-50%,-50%)

    &::after
      width: 20px
      height: 20px
      background: #361274

    &:nth-child(even)
      flex-direction: row-reverse

      .linea-tiempo

        &__content
          text-align: left

        &__text
          align-items: flex-start
          margin-right: 0
          margin-left: 80px

        &__icon
          justify-content: flex-end

          &__container
            margin-left: 0
            margin-right: 50px

            &::before
              left: auto
              right: 0
              transform: translate(35%,-50%) rotate(45deg)

      &:hover
        .linea-tiempo__icon__container
          transform: scale(1.3) translateX(-15px)
        .linea-tiempo__text
          transform: translateX(-30px)

    &:hover
      .linea-tiempo__icon__container
        transform: scale(1.3) translateX(15px)
      .linea-tiempo__text
        transform: translateX(30px)

    &:last-child
      margin-bottom: 0

  &__content
    width: 50%
    text-align: right

    span
      display: block
      margin: 0
      max-width: 250px
      line-height: 1.1em

  &__text
    display: flex
    flex-direction: column
    align-items: flex-end
    margin-right: 80px
    transition: transform 0.3s ease-in-out

  &__icon
    display: flex

    &__container
      position: relative
      width: 130px
      height: 130px
      background: #B492F1
      border-radius: 50%
      margin-left: 50px
      transition: transform 0.3s ease-in-out
      display: flex
      justify-content: center
      align-items: center

      &::before
        content: ''
        display: block
        top: 50%
        left: 0
        width: 30px
        height: 30px
        position: absolute
        background: #B492F1
        transform: translate(-35%,-50%) rotate(45deg)

      // &::after
      //   content: ''
      //   display: block
      //   position: absolute
      //   top: 50%
      //   left: 50%
      //   transform: translate(-50%,-50%)
      //   width: 90px
      //   height: 90px
      //   background: #fff
      //   border-radius: 50%
      //   box-shadow: 4px 4px 3px 0px rgba(0,0,0,0.3)
      span
        position: relative
        text-align: center
        font-weight: 900

    img
      width: 60px
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%,-50%)


  &::before
    content: ''
    display: block
    top: 0
    left: 50%
    width: 10px
    height: 100%
    border-radius: 5px
    position: absolute
    background: #361274
    transform: translate(-50%,0)

  @media screen and (max-width: 768px)
    &__row
      &:nth-child(even)
        .linea-tiempo
          &__text
            margin-left: 40px
        &:hover
          .linea-tiempo__icon__container
            transform: scale(1.3) translateX(-5px)
          .linea-tiempo__text
                transform: translateX(-10px)
      &:hover
        .linea-tiempo__icon__container
          transform: scale(1.3) translateX(5px)
        .linea-tiempo__text
          transform: translateX(10px)
    &__text
      margin-right: 40px

  @media screen and (max-width: 450px)
    &__content
      span
        font-size: 16px
    &__icon

      &__container
        width: 100px
        height: 100px

        span
          font-size: 16px

      &__inner
        width: 100%
        height: 100%

        &::after
          width: 70px
          height: 70px

      img
        width: 40px
</style>
