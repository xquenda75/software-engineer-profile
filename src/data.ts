export interface Persona {
  nombre: string
  titulo: string
  subtitulo: string
  roles: string[]
  email: string
  telefono: string
  ubicacion: string
  linkedin: string
  linkedinLabel: string
  github: string
  githubLabel: string
}

export interface Formacion {
  titulo: string
  periodo: string
  institucion: string
}

export interface Proyecto {
  nombre: string
  descripcion: string
}

export interface Experiencia {
  cargo: string
  empresa: string
  periodo: string
  ubicacion?: string
  destacada?: boolean
  resumen?: string
  descripcion?: string
  proyectos?: Proyecto[]
  responsabilidades?: string[]
}

export interface Competencias {
  frontend: string[]
  backend: string[]
  apis: string[]
  basesDeDatos: string[]
  cloud: string[]
  contenedores: string[]
  infraestructura: string[]
  observabilidad: string[]
  cicd: string[]
  arquitectura: string[]
}

export interface Idioma {
  nombre: string
  nivel: string
}

export interface NavLink {
  id: string
  label: string
}

export const persona: Persona = {
  nombre: 'Jorge Alfonso López Alcántara',
  titulo: 'Software Engineer',
  subtitulo: 'Full Stack Developer · Cloud & Backend',
  roles: ['.NET','React', 'TypeScript', 'Node.js','Go', 'AWS'],
  email: 'xquenda14@yahoo.com.mx',
  telefono: '52 55 2493 8104',
  ubicacion: 'CDMX, México',
  linkedin: 'https://www.linkedin.com/in/jorge-alfonso-lopez-alcantara-a7666816b',
  linkedinLabel: 'linkedin.com/in/jorge-alfonso-lopez-alcantara-a7666816b',
  github: 'https://github.com/',
  githubLabel: 'github.com/',
}

export const perfil: string[] = [
  'Software Engineer con más de 20 años de experiencia en desarrollo de software y una trayectoria especializada en el diseño, desarrollo e implementación de soluciones empresariales.',
  'Experiencia como Full Stack Developer y Backend Engineer, participando en proyectos fintech de alta escala y en la construcción e integración de sistemas utilizando React, TypeScript, Node.js, Go, .NET, GraphQL y APIs REST.',
  'Experiencia en arquitecturas basadas en microservicios, procesamiento asíncrono y eventos, así como en el diseño, desarrollo y despliegue de soluciones utilizando servicios de AWS, incluyendo Lambda, SQS, EventBridge, EKS, S3, RDS, EC2, API Gateway e IAM.',
  'Experiencia en automatización y administración de infraestructura mediante Terraform, así como en despliegues utilizando Docker, Kubernetes y Helm.',
  'Orientado a la resolución de problemas, integración de sistemas, modernización de aplicaciones y desarrollo de soluciones robustas, mantenibles y escalables.',
]

export const formacion: Formacion[] = [
  {
    titulo: 'Ingeniería en Computación',
    periodo: '1994 - 1999',
    institucion: 'Universidad Nacional Autónoma de México, CDMX',
  },
]

export const experiencia: Experiencia[] = [
  {
    cargo: 'Senior Software Engineer',
    empresa: 'Dock Tech',
    periodo: 'jun 2023 - jul 2025',
    ubicacion: 'Fintech · CDMX, México',
    destacada: true,
    resumen:
      'Participación en el desarrollo y evolución de soluciones fintech orientadas a procesamiento de tarjetas, migración de plataformas, gestión de claims y chargebacks, trabajando con arquitecturas modernas basadas en microservicios, APIs, procesamiento asíncrono y servicios cloud de AWS.',
    proyectos: [
      {
        nombre: 'Migración de tarjetas',
        descripcion:
          'Participación en el equipo encargado del desarrollo de una solución para la migración de tarjetas, contribuyendo al desarrollo de componentes backend y frontend involucrados en el proceso de transición.',
      },
      {
        nombre: 'Integración PayCard / Dock One',
        descripcion:
          'Desarrollo de la integración de PayCard con Dock One, implementando una solución de transición que permitió que los clientes existentes de PayCard continuaran operando sin realizar modificaciones inmediatas en sus sistemas, haciendo transparente la integración durante el periodo de migración hacia una conexión directa con Dock One.',
      },
      {
        nombre: 'Claims México',
        descripcion:
          'Desarrollo de funcionalidades para la gestión y procesamiento de reclamaciones relacionadas con operaciones de tarjetas.',
      },
      {
        nombre: 'Chargebacks Global',
        descripcion:
          'Contribución al desarrollo de una plataforma para la administración y procesamiento de disputas y contracargos a nivel global.',
      },
    ],
    responsabilidades: [
      'Desarrollo de aplicaciones y servicios utilizando React, TypeScript, Node.js, GraphQL, Go y .NET.',
      'Desarrollo e integración de APIs REST y GraphQL, incluyendo la implementación de un BFF (Backend for Frontend) para facilitar la comunicación entre aplicaciones frontend y diferentes servicios backend.',
      'Desarrollo de componentes orientados a arquitecturas de microservicios y procesamiento basado en eventos.',
      'Implementación e integración de servicios de AWS, incluyendo IAM, Lambda, SQS, EventBridge, RDS, EC2, EKS, S3 y API Gateway.',
      'Implementación y administración de infraestructura como código utilizando Terraform.',
      'Despliegue y administración de aplicaciones utilizando Docker, Kubernetes/EKS y Helm.',
      'Participación en procesos de integración y despliegue continuo mediante herramientas de CI/CD.',
      'Implementación de mecanismos de observabilidad y monitoreo utilizando herramientas como OpenTelemetry.',
    ],
  },
  {
    cargo: 'Especialista de desarrollo de software',
    empresa: 'Asociación de Normalización y Certificación de Producto A.C.',
    periodo: 'feb 2017 - feb 2023',
    ubicacion: 'CDMX',
    descripcion:
      'Análisis, diseño, desarrollo e implementación de diversos proyectos alineados con los objetivos anuales de la empresa.',
    responsabilidades: [
      'Mantenimiento y soporte a los diferentes sistemas en operación.',
      'Administración de base de datos y de los diferentes sitios web.',
      'Seguimiento a proyectos contratados con proveedores.',
    ],
  },
  {
    cargo: 'Programador Analista',
    empresa: 'Centro de Desarrollo de Competencias Normativas',
    periodo: 'feb 2012 - feb 2017',
    ubicacion: 'CDMX',
    descripcion:
      'Análisis, diseño, desarrollo e implementación de proyectos anuales, mantenimiento y soporte de sistemas en operación y administración de sitios web.',
  },
  {
    cargo: 'Programador Analista',
    empresa: 'CEXTI',
    periodo: 'jun 2007 - feb 2012',
    ubicacion: 'CDMX',
    descripcion:
      'Análisis, diseño, desarrollo e implementación de proyectos anuales, así como mantenimiento y soporte de sistemas en operación.',
  },
  {
    cargo: 'Programador Analista',
    empresa: 'Grupo Gastronómico Marte S.A de C.V.',
    periodo: 'ene 2001 - abr 2007',
    ubicacion: 'CDMX',
    descripcion:
      'Optimización de procesos con levantamiento de requerimientos, análisis y desarrollo de soluciones en Visual Basic 6 y Access.',
  },
  {
    cargo: 'Programador Analista',
    empresa: 'Jafif & Levy Arquitectos S.A. de C.V.',
    periodo: 'may 2000 - ene 2001',
    ubicacion: 'CDMX',
    descripcion:
      'Programador independiente para la administración de la empresa con Visual Basic 6 y MS Access.',
  },
]

export const competencias: Competencias = {
  frontend: ['React', 'TypeScript', 'JavaScript', 'Vite', 'Telerik', 'Bootstrap', 'jQuery', 'HTML', 'CSS'],
  backend: ['Go', 'Node.js', '.NET Core', '.NET Framework', 'C#', 'VB .NET'],
  apis: ['REST', 'GraphQL', 'SOAP'],
  basesDeDatos: ['PostgreSQL', 'SQL Server'],
  cloud: [
    'AWS IAM',
    'AWS Lambda',
    'AWS SQS',
    'AWS EventBridge',
    'AWS RDS',
    'AWS EC2',
    'AWS EKS',
    'AWS S3',
    'AWS API Gateway',
  ],
  contenedores: ['Docker', 'Kubernetes', 'EKS', 'Helm'],
  infraestructura: ['Terraform', 'AWS'],
  observabilidad: [ 'OpenTelemetry'],
  cicd: ['Git', 'Jenkins'],
  arquitectura: ['Microservicios', 'APIs', 'Eventos', 'Integración de sistemas', 'BFF'],
}

export const idiomas: Idioma[] = [
  { nombre: 'Español', nivel: 'Nativo' },
  { nombre: 'Inglés', nivel: 'Lectura' },
]

export const navLinks: NavLink[] = [
  { id: 'perfil', label: 'Sobre mí' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'tecnologias', label: 'Tecnologías' },
  { id: 'aws', label: 'AWS' },
  { id: 'formacion', label: 'Formación' },
  { id: 'contacto', label: 'Contacto' },
]
