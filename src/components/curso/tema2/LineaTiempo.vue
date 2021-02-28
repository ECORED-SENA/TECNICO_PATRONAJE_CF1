<template lang="pug">
.linea-tiempo
  .linea-tiempo__row(v-for="(item,index) of datosLineaTiempo", :ref="'linea-tiempo-item-'+index" @mouseover="mostrarIndicador = false")
    .linea-tiempo__content
      .linea-tiempo__text
        span.h1.mb-2 {{item.ano}}
        span(v-html="item.texto")

    .linea-tiempo__content
      .linea-tiempo__icon
        .linea-tiempo__icon__container
          .linea-tiempo__icon__inner
          img(:src="item.img")
          IndicadorInteraccion(v-if="mostrarIndicador && index === 0")
</template>

<script>
import IndicadorInteraccion from '../../IndicadorInteraccion'
export default {
  name: 'LineaTiempo',
  components: {
    IndicadorInteraccion,
  },
  data: () => ({
    mostrarIndicador: true,
    datosLineaTiempo: [
      {
        ano: '1971',
        texto: 'Este fue el mensaje del primer e-mail de la historia.',
        img: require('@/assets/images/pages/tema2/img_11.svg'),
      },
      {
        ano: '1993',
        texto:
          'WORLD WIDE WEB: primera página web. Se lanza MOSAIC, el primer navegador.',
        img: require('@/assets/images/pages/tema2/img_12.svg'),
      },
      {
        ano: '1994',
        texto:
          'Primera web de comercio electrónico: El Retailer Online Netmarket. ',
        img: require('@/assets/images/pages/tema2/img_13.svg'),
      },
      {
        ano: '1995',
        texto:
          'Se vende el primer libro de <strong>Amazon. Ebay</strong> vende su primer producto: un puntero láser.',
        img: require('@/assets/images/pages/tema2/img_14.svg'),
      },
      {
        ano: '1996',
        texto:
          'NOKIA 9000 COMUNICATOR Primer teléfono móvil con conexión a internet.',
        img: require('@/assets/images/pages/tema2/img_15.svg'),
      },
      {
        ano: '1998',
        texto: 'Primer DOODLE de <strong>Google</strong>.',
        img: require('@/assets/images/pages/tema2/img_8.png'),
      },
      {
        ano: '1999',
        texto:
          'PRIMERAS HERRAMIENTAS PARA LOS BLOGUEROS, Escritores con sus bolígrafos virtuales se comunican con amigos y familiares.',
        img: require('@/assets/images/pages/tema2/img_16.svg'),
      },
      {
        ano: '2001',
        texto: 'Nace <strong>WIKIPEDIA</strong>.',
        img: require('@/assets/images/pages/tema2/img_10.png'),
      },
      {
        ano: '2003',
        texto:
          '"TERE, KAS SA HUULED MENTE?" pronunciada vía <strong>SKYPE</strong>.',
        img: require('@/assets/images/pages/tema2/img_4.svg'),
      },
      {
        ano: '2004',
        texto: 'Primer usuario en <strong>FACEBOOK</strong>.',
        img: require('@/assets/images/pages/tema2/img_17.svg'),
      },
      {
        ano: '2005',
        texto: '"ME AT THE ZOO" Primer video de YOUTUBE.',
        img: require('@/assets/images/pages/tema2/img_18.svg'),
      },
      {
        ano: '2007',
        texto: 'Once años después surge el primer <strong>iPhone</strong>.',
        img: require('@/assets/images/pages/tema2/img_19.svg'),
      },
      {
        ano: '2009',
        texto: 'Primer tweet del espacio.',
        img: require('@/assets/images/pages/tema2/img_5.svg'),
      },
      {
        ano: '2015',
        texto:
          'WhatsApp lanza el servicio de llamadas gratuitas y ya son 800 millones de usuarios.',
        img: require('@/assets/images/pages/tema2/img_20.svg'),
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
      background: #00D1E3
      transform: translate(-50%,-50%)

    &::after
      width: 20px
      height: 20px
      background: #fff

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

          &__inner

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
      background: #00D1E3
      border-radius: 50%
      margin-left: 50px
      transition: transform 0.3s ease-in-out

    &__inner
      width: 100%
      height: 100%

      &::before
        content: ''
        display: block
        top: 50%
        left: 0
        width: 30px
        height: 30px
        position: absolute
        background: #00D1E3
        transform: translate(-35%,-50%) rotate(45deg)

      &::after
        content: ''
        display: block
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%,-50%)
        width: 90px
        height: 90px
        background: #fff
        border-radius: 50%
        box-shadow: 4px 4px 3px 0px rgba(0,0,0,0.3)

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
    background: #00D1E3
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
    &__icon

      &__container
        width: 100px
        height: 100px

      &__inner
        width: 100%
        height: 100%

        &::after
          width: 70px
          height: 70px

      img
        width: 40px
</style>
