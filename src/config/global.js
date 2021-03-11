export const global = {
  programaFormacion: 'Técnico en patronaje industrial de prendas de vestir',
  componenteFormativo: 'Características de diseño y fundamentación textil',
  descripcionCurso:
    'En este componente formativo aprenderá a identificar las características, partes, composición, categorización y detalles en el análisis y comprensión de prendas de vestir. Dentro del proceso se hace una contextualización del lenguaje técnico empleado en el diseño de modas, con el fin de apoyar una parte del proceso en la construcción de prendas de vestir.',
  imagenPortada: require('@/assets/images/pages/tema1/img10.svg'),
  resultadosAprendizaje: [
    'Reconocer estructura corporal acorde a criterios de patronaje industrial de prendas de vestir.',
  ],
  palabrasClave: ['Diseño', 'moda', 'textil', 'fichaTécnica'],
}

export const menuPrincipal = {
  menu: [
    {
      routeName: 'inicio',
      icon: 'fa fa-home',
      title: 'Volver al inicio',
    },
    {
      routeName: 'introduccion',
      icon: 'fa fa-file-text',
      title: 'Introducción',
      desarrolloContenidos: {
        icono: 'fa fa-file-text',
        titulo: 'Introducción',
      },
    },
    {
      routeName: 'tema1',
      icon: 'fa fa-file-text',
      title: '1. Diseño y moda',
      desarrolloContenidos: {
        icono: 1,
        titulo: 'Diseño y moda',
      },
      subMenu: [
        {
          icon: 'fa fa-file-text',
          title: '1.1. Fundamentación de moda',
          hash: 't_1_1',
        },
        {
          icon: 'fa fa-file-text',
          title: '1.2. Universos de vestuario',
          hash: 't_1_2',
        },
        {
          icon: 'fa fa-file-text',
          title: '1.3. Perfil y estilo de consumidor',
          hash: 't_1_3',
        },
        {
          icon: 'fa fa-file-text',
          title: '1.4. Tendencias',
          hash: 't_1_4',
        },
        {
          icon: 'fa fa-file-text',
          title: '1.5. Moodboard - Cuadro metamórfico',
          hash: 't_1_5',
        },
      ],
    },
    {
      routeName: 'tema2',
      icon: 'fa fa-file-text',
      title: '2. Ficha técnica de diseño (software de diseño)',
      desarrolloContenidos: {
        icono: 2,
        titulo: 'Ficha técnica de diseño (software de diseño)',
      },
      subMenu: [
        {
          icon: 'fa fa-file-text',
          title: '2.1 Conceptos de dibujo plano',
          hash: 't_2_1',
        },
        {
          icon: 'fa fa-file-text',
          title: '2.2. Categorización de prendas',
          hash: 't_2_2',
        },
        {
          icon: 'fa fa-file-text',
          title: '2.3. Técnica de achurados y acabados',
          hash: 't_2_3',
        },
        {
          icon: 'fa fa-file-text',
          title: '2.4 Dibujo de bitácora de formas',
          hash: 't_2_4',
        },
        {
          icon: 'fa fa-file-text',
          title: '2.5. Dibujo plano de prendas',
          hash: 't_2_5',
        },
        {
          icon: 'fa fa-file-text',
          title:
            '2.6. Análisis de proporciones prendas superiores e inferiores',
          hash: 't_2_6',
        },
        {
          icon: 'fa fa-file-text',
          title: '2.7 Interfaz programa CAD',
          hash: 't_2_7',
        },
        {
          icon: 'fa fa-file-text',
          title: '2.8. Ficha técnica',
          hash: 't_2_8',
        },
      ],
    },
    {
      routeName: 'tema3',
      icon: 'fa fa-file-text',
      title: '3. Fundamentación Textil',
      desarrolloContenidos: {
        icono: 3,
        titulo: 'Fundamentación Textil',
      },
      subMenu: [
        {
          icon: 'fa fa-file-text',
          title:
            '3.1 Clasificación y conceptualización de las fibras naturales, químicas (artificiales y sintéticas).',
          hash: 't_3_1',
        },
        {
          icon: 'fa fa-file-text',
          title: '3.2. Identificación fibras por combustión',
          hash: 't_3_2',
        },
        {
          icon: 'fa fa-file-text',
          title: '3.3. Clasificación de los hilos',
          hash: 't_3_3',
        },
        {
          icon: 'fa fa-file-text',
          title: '3.4. Clasificación de tejidos',
          hash: 't_3_4',
        },
        {
          icon: 'fa fa-file-text',
          title: '3.5 Caracterización de los tejidos',
          hash: 't_3_5',
        },
        {
          icon: 'fa fa-file-text',
          title: '3.6 Procesos textiles',
          hash: 't_3_6',
        },
      ],
    },
    // {
    // routeName: 'actividad',
    // icon: 'fa fa-question-circle',
    // title: 'Actividad didáctica',
    // desarrolloContenidos: true,
    // },
  ],
  subMenu: [
    {
      routeName: 'glosario',
      icon: 'fa fa-sort-alpha-asc',
      title: 'Glosario',
    },
    // {
    //   routeName: 'complementario',
    //   icon: 'fa fa-folder-open',
    //   title: 'Material complementario',
    // },
    {
      icon: 'fa fa-book',
      title: 'Referencias bibliográficas',
      routeName: 'referencias',
    },
    {
      icon: 'fa fa-download',
      title: 'Descargar material',
      download: 'downloads/material.zip',
    },
  ],
}

export const referencias = [
  {
    referencia:
      'Blackman, C. (2012). 100 años de moda. Sistema de Bibliotecas SENA: ',
    enlace:
      'https://sena-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=sena_aleph000060086&vid=SENA&search_scope=sena_completo&tab=sena_completo&lang=es_ES&context=L',
    tituloenlace: '',
  },
  {
    referencia:
      'Castellanos, O., Fumeque A., y Ramirez D. (2011). Análisis de tendencias: de la información hacia la innovación. Universidad Nacional de Colombia. Sistema de Bibliotecas SENA: ',
    enlace:
      'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000007947',
    tituloenlace: '',
  },
  {
    referencia:
      'Harpersbazaar. (2019). La ropa que eliges afecta a tu estado de ánimo y cerebro, según expertos. En arpersbazaar.mx.',
    enlace:
      'https://www.harpersbazaar.mx/belleza/salud-y-bienestar/la-ropa-que-eliges-afecta-a-tu-estado-de-animo-y-cerebro-segun-expertos/',
    tituloenlace: '',
  },
  {
    referencia:
      'Lafuente M., Navarro J., y Navarro J. (2005). Ilustración de moda. Sistema de Bibliotecas SENA',
    enlace:
      'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000025549',
    tituloenlace: '',
  },
  {
    referencia:
      'Laver, J.,  Albizua, H., y Fortea, B. (1990). Breve historia del traje y la moda. Sistema de Bibliotecas SENA. ',
    enlace:
      'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000063748',
    tituloenlace: '',
  },
  {
    referencia:
      'Navarro, J.,  y Lafuente, M. (2010). Ilustración de moda: dibujo plano. Sistema de Bibliotecas SENA:',
    enlace:
      'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/q6j6k0/sena_aleph000023241',
    tituloenlace: '',
  },
  {
    referencia:
      'Sociedad Americana de Ensayos y Materiales (ASTM). (2003). Textiles. Editorial Staff. [Book]. Sistema de Bibliotecas SENA.',
    enlace:
      'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000051551',
    tituloenlace: '',
  },
  {
    referencia:
      'Szkutnicka, B., Cuenca, C., Koyama, A. (2010). El dibujo técnico de moda paso a paso. Sistema de Bibliotecas SENA.',
    enlace:
      'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000057728',
    tituloenlace: '',
  },
]

export const glosario = [
  {
    termino: 'Bidimensional',
    significado:
      'que se representa según su altura y su anchura y no su profundidad.',
  },
  {
    termino: 'Diseño',
    significado:
      'actividad creativa orientada a soluciones idóneas a ciertas problemáticas.',
  },
  {
    termino: 'Moda',
    significado:
      'hábito repetitivo que identifica a una persona, una especie de presión social, que debe consumir, utilizar o hacer.',
  },
  {
    termino: 'MoodBoard',
    significado:
      'su traducción literal es mapa de inspiración y aunque su uso está muy asociado al ámbito de la decoración de interiores o la moda, realmente se utiliza en entornos creativos muy diversos, desde el diseño de productos o servicios al audiovisual o el diseño gráfico.',
  },
  {
    termino: 'Pirognóstico',
    significado:
      'ensayo sin componentes reactivos, quiere decir, reconocimiento de los componentes, mediante la aplicación adecuada del fuego.',
  },
  {
    termino: 'Software',
    significado:
      'término informático que hace referencia a un programa o conjunto de programas de cómputo, así como datos, procedimientos y pautas que permiten realizar distintas tareas en un sistema informático.',
  },
  {
    termino: 'Tipología',
    significado:
      'estudio de los tipos o modelos que se usan para clasificar en diversas ciencias o disciplinas.',
  },
  {
    termino: 'Vectores',
    significado:
      'en software de diseño, son líneas que se crean y permiten, expandir, modificar, al tamaño que sea sin pixelarse porque se unen por coordenadas matemáticas del programa y no se generan por números fijos.',
  },
]
