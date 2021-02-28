export const global = {
  programaFormacion: 'Investigación',
  componenteFormativo: 'Fundamentos de investigación',
  descripcionCurso:
    'La investigación formativa tiene como objetivo la apropiación de conocimientos técnicos y tecnológicos, para la identificación y solución de problemas   en contextos sociales y productivos del país. <br><br>En el desarrollo de la competencia “Orientar investigación formativa según referentes técnicos"  se pretende integrar en el proceso formativo los componentes metodológicos para la formulación básica de proyectos de investigación, partiendo desde la identificación de un problema, la generación de ideas, el planteamiento de la pregunta de investigación, la determinación de objetivos, el reconocimiento de un marco teórico y el desarrollo metodológico para un ejercicio básico de investigación.<br><br>Desde esta perspectiva la investigación se convierte en una herramienta de aprendizaje para el aprendizaje, no solo es el componente metodológico, es una forma sistemática de organizar el pensamiento hasta convertirlo en una disciplina   que facilita la construcción de nuevos conocimientos útiles en el hacer profesional.',
  imagenPortada: require('@/assets/images/header/header_ruta.svg'),
  resultadosAprendizaje: [
    'Analizar el contexto productivo según sus características y necesidades.',
    'Estructurar el proyecto de acuerdo a criterios de la investigación.',
    'Argumentar aspectos teóricos del proyecto según referentes nacionales e internacionales.',
    'Proponer soluciones a las necesidades del contexto según resultados de la investigación.',
  ],
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
      title:
        '3. Correo electrónico, redes sociales y almacenamiento en la nube',
      tags: ['investigacion', 'conocimiento', 'aprendizaje', 'metodología'],
      desarrolloContenidos: true,
      actividad: true,
      subMenu: [
        {
          icon: 'fa fa-file-text',
          title: '3.1 Cuentas de correo electrónico',
          hash: 't_3_1',
        },
        {
          icon: 'fa fa-file-text',
          title: '3.1.1 Cuentas y sincronización en equipos de cómputo',
          hash: 't_3_1_1',
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
