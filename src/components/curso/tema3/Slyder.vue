<template lang="pug">
.row.justify-content-center
  .col-lg-8
    .slyder__container
      .slyder(:style="{width: data.length *100+'%',transform: `translate(${scrollVal}px,0px)`, height:containerHeight+'px'}")
        .slyder__item.tarjeta--gris.p-4.p-md-5(
          v-for="(item,index) of data", 
          :key="`slyde-${index}`", 
          :ref="`slyde-${index}`"
          :style="{opacity: selected === index ? 1 : 0}"
        )
          .slyder__item__img
            img(:src="item.img")

          .slyder__controls.my-5
            .slyder__controls__l(@click="selected = index === 0 ? index : index -1")
            .slyder__controls__dot(
              v-for="(itemDot,indexDot) of data",
              :key="`dot-${indexDot}`",
              :class="{'slyder__controls--sel': indexDot === index }"
              @click="selected = indexDot"
            )
            .slyder__controls__r(@click="selected = index === data.length-1 ? index : index +1")

          .slyder__item__title.mb-4
            .tarjeta--azul-b.p-4
              .h1.mb-0(v-html="item.title")
          .slyder__item__text
            p.mb-0(v-html="item.text")

</template>

<script>
export default {
  name: 'Slyder',
  data: () => ({
    data: [
      {
        // img: require('@/assets/images/pages/tema3/img_17.svg'),
        title: '1. Suplantación de identidad digital',
        text:
          'Suplantar la identidad, en las redes sociales, se presenta cuando un usuario toma el nombre, cuentas o la información personal de otro usuario, para hacerse pasar por él.<br>Estos son delincuentes que utilizan perfiles falsos, con el nombre y fotografía del perjudicado, con el objetivo de realizar delitos como la estafa, la extorsión, el chantaje, entre otros.',
      },
      {
        // img: require('@/assets/images/pages/tema3/img_17.svg'),
        title: '2. Fraude, phishing y malware',
        text:
          'Los cibercriminales usan mensajes directos o publicaciones tentadoras con enlaces maliciosos o de phishing que, a su vez, contienen malware. Incluso, teniendo las configuraciones de seguridad pertinentes, no estamos 100 % seguros de estas amenazas. Lo mejor es verificar la veracidad del mensaje, observando al remitente, así como tener presente que las entidades bancarias no solicitan información personal, ni de cuentas, por medio de correos electrónicos.',
      },
      {
        // img: require('@/assets/images/pages/tema3/img_17.svg'),
        title: '3. Ciberbullying o acoso cibernético',
        text:
          'Este delito es uno de los más peligrosos; llega a maltrato o agresión a través de texto, voz o fotos, en formatos de video y audio, subidos a las redes sociales. Afecta a millones de personas (especialmente a los jóvenes) alrededor del mundo y preocupa a profesionales de la salud.',
      },
      {
        // img: require('@/assets/images/pages/tema3/img_17.svg'),
        title:
          '4. Violaciones, secuestros o raptos <br><div class="h3 mb-0">con fines de explotación sexual (Grooming)</div>',
        text:
          'Millones de personas son víctimas de delitos cibernéticos, siendo los niños los más vulnerables, cuando se encuentran solos en casa y tienen acceso a Internet desde su celular, computadora, o hasta una consola de videojuegos, porque estos medios pueden ser utilizados por delincuentes para ganarse la confianza de los niñosa través de un perfil falso en las redes, para entablar conversaciones y luego pedirles fotografías o videos, violentando así la inocencia de los niños. Esta problemática resulta muy preocupante y peligrosa, por lo que es importante saber tomar las medidas necesarias y evitar los riesgos de esta situación.<br><br>De acuerdo con las cifras del Centro Cibernético de la Policía (2020), en promedio, seis menores al día, son víctimas de ciberdelitos en el país. Las cifras van así: en Colombia, 18 personas fueron condenadas por el delito de pornografía infantil entre el 01 de enero y el 10 de julio del 2020, según cifras recientes de la Fiscalía General de la Nación. A esto, se suma que durante ese mismo período se realizaron 656 investigaciones por parte del ente acusador y se recibieron 550 denuncias.',
      },
      {
        // img: require('@/assets/images/pages/tema3/img_17.svg'),
        title: '5. Problemas legales',
        text:
          'Internet y, especialmente, las redes sociales, nos permiten expresarnos libremente. Sin embargo, algunas personas no se dan cuenta que cualquier cosa que se diga o publique en las redes sociales, puede tener implicaciones legales. Por esta razón, debemos tener mucho cuidado con insultar, difamar o difundir falsos rumores. Dichos contenidos pueden generar problemas relacionados con la protección de datos personales (Habeas Data), propiedad industrial e intelectual, derecho penal y derechos de la personalidad, derecho laboral y la publicidad, entre otros.',
      },
    ],
    scrollVal: 0,
    containerHeight: 0,
    selected: 0,
  }),
  watch: {
    selected() {
      this.getScrollValue()
    },
  },
  mounted() {
    window.addEventListener('resize', this.getScrollValue)
    this.getScrollValue()
    setTimeout(() => {
      this.getScrollValue()
    }, 1000)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.getScrollValue)
  },
  methods: {
    getScrollValue() {
      const selectedRef = this.$refs[`slyde-${this.selected}`][0]
      this.scrollVal = -selectedRef.offsetLeft
      this.containerHeight = selectedRef.offsetHeight
    },
  },
}
</script>

<style lang="sass" scoped>
.tarjeta--azul-b
  text-align: center
.tarjeta--gris
  text-align: left
  height: fit-content

.slyder
  display: flex
  align-items: center
  transition: transform 0.5s ease-in-out, height 0.5s ease-in-out
  &__container
    overflow: hidden
  &__item
    width: 100%
    transition: opacity 0.5s ease-in-out
  &__controls
    display: flex
    align-items: center
    justify-content: center
    &__l, &__r
      cursor: pointer
      width: 20px
      height: 26px
      background-size: 20px 26px
      margin: 0 10px
    &__l
      // background-image: url("../../../assets/images/pages/tema3/arrowl.svg")
    &__dot
      cursor: pointer
      margin: 0 10px
      width: 20px
      height: 20px
      border-radius: 50%
      background-color: #AAAAAA
    &__r
      // background-image: url("../../../assets/images/pages/tema3/arrowr.svg")
    &--sel
      background-color: #FFCB00

  @media screen and (max-width: 576px)
    &__controls
      &__l, &__r
        margin: 0 5px
        width: 15px
        height: 20px
        background-size: 15px 20px
      &__dot
        margin: 0 5px
        width: 10px
        height: 10px
</style>
