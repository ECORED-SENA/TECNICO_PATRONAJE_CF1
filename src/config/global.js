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
      icon: 'fa fa-play-circle',
      title: 'Introduccion',
      desarrolloContenidos: true,
    },
    {
      routeName: 'tema1',
      icon: 'fa fa-play-circle',
      title: '1. Diseño y moda',
      desarrolloContenidos: true,
      actividad: true,
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
      icon: 'fa fa-play-circle',
      title: '2. Ficha técnica de diseño (software de diseño)',
      desarrolloContenidos: true,
      actividad: true,
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
      ],
    },
    {
      routeName: 'tema3',
      icon: 'fa fa-play-circle',
      title: '3. Fundamentación Textil',
      desarrolloContenidos: true,
      actividad: true,
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
    {
      routeName: 'actividad',
      icon: 'fa fa-question-circle',
      title: 'Actividad didáctica',
      desarrolloContenidos: true,
    },
  ],
  subMenu: [
    {
      routeName: 'glosario',
      icon: 'fa fa-sort-alpha-asc',
      title: 'Glosario',
    },
    {
      routeName: 'complementario',
      icon: 'fa fa-folder-open',
      title: 'Material complementario',
    },
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
      'Atzori, L., Iera, A. y Morabito, G., (2017) Understanding the internet of things: Definition, Potentials, And Societal Role of a Fast Evolving Paradigm',
    enlace: 'https://doi.org/10.1016/j.adhoc.2016.12.004',
    tituloenlace: 'Ad Hoc Networks, 56, 122-140.',
  },
  {
    referencia:
      'Castro, S., Medina, B. y Camargo, L., (2016) Supervisión y Control Industrial a través de Teléfonos Inteligentes Usando un Computador de Placa Única Raspberry Pi',
    enlace: 'http://dx.doi.org/10.4067/S0718-07642016000200015',
    tituloenlace: 'Inf. Tecnol. 27(2), 121-130.',
  },
  {
    referencia:
      'Eines, Mónica E.; Aranda, Nélida Inés y Amilivia, Luis Alberto. (2018) Las Píldoras de Contenidos. Rev. iberoam. tecnol. educ. educ. tecnol. [online]., n.21 [citado 2020-12-18], pp.15-23. Disponible en:',
    enlace:
      'http://www.scielo.org.ar/scielo.php?script=sci_arttext&pid=S1850-99592018000100003&lng=es&nrm=iso',
    tituloenlace: 'ISSN 1851-0086',
  },
  {
    referencia:
      'Moreira, Gislene (2011). Democracia WiFi: Dinámicas de la política y la comunicación en la era digital. Quórum Académico, 8(2),183-208. [fecha de Consulta 18 de diciembre de 2020]. ISSN: 1690-7582. Disponible en:',
    enlace: 'https://www.redalyc.org/articulo.oa?id=1990/199020215002',
    tituloenlace: '',
  },
]

export const glosario = [
  {
    termino: 'Android',
    significado:
      'Sistema operativo que usan teléfonos móviles usa como base Linux.',
  },
  {
    termino: 'Raspberry',
    significado:
      'Dispositivo embebido con una placa base emulando un computador de bajo costo para aplicaciones específicas.',
  },
  {
    termino: 'TIC',
    significado: 'Acrónimo de tecnologías de la información y comunicación.',
  },
  {
    termino: 'Wifi',
    significado:
      'Es una marca comercial que también es usada para designar a las tecnologías de red sin cable (Moreira, 2011).',
  },
]
