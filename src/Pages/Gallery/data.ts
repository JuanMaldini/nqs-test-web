export type GalleryNote = {
  title: string;
  description: string;
};

export const galleryNotes: GalleryNote[] = [
  {
    title: "Desarrollo Web (Frontend)",
    description:
      "Iniciado el jueves y terminado el viernes (2 jornadas de 4hs) más una actualización posterior (1h). Se utilizó React + Vite y el SDK de ArcWare priorizando la simplicidad y la comunicación de eventos hacia Unreal.",
  },
  {
    title: "Unreal Engine & Programación",
    description:
      "Aprox. 12hs (4hs/3d). Sin dificultades en lógica, Blueprints o C++ gracias a experiencia previa. Se implementaron triggers desde la web y respuestas en el motor sin contratiempos.",
  },
  {
    title: "Workflow 3ds Max & Datasmith",
    description:
      "Aprox. 8hs. Se mantuvo una prolijidad estricta en el renombrado y división por secciones para garantizar modularidad. Fundamental para evitar complicaciones de reimportación.",
  },
  {
    title: "Blueprint de Minimap",
    description:
      "Sistema diseñado para filtrar qué renderizar (plano vs jugador) y superponer ambas imágenes en la UI. Actualmente deshabilitado por cuestiones de tiempo, pero la lógica funcional ya existe.",
  },
  {
    title: "Integración C++ y Screenshot",
    description:
      "Se integró código C++ para habilitar la captura y descarga de imágenes desde la web. Se conservó el nombre original del template para mantener la estabilidad de las referencias del plugin de ArcWare.",
  },
  {
    title: "Desafíos y Hardware",
    description:
      "El equipo rindió bien en programación, pero las mayores dificultades fueron térmicas (calentamiento y ventiladores) durante la edición de materiales complejos y cinemáticas, ralentizando esas etapas específicas.",
  },
  {
    title: "Cinematic Assembly Tools",
    description:
      "Organización de shots con Cinematic Assembly Tools. En la raíz del proyecto se incluye un production.json que, al importarlo, establece reglas globales de forma estable.",
  },
  {
    title: "Master Material",
    description:
      "Reutilización de un material propio. Agilizó el proceso artístico, aunque su edición fue el punto de mayor carga para el hardware.",
  },
  {
    title: "Project Cleaner & Plugins",
    description:
      "Uso de Project Cleaner para optimización final y gestión de plugins de NVIDIA incluidos en el repositorio, asegurando que el proyecto compile correctamente en cualquier entorno.",
  },
  {
    title: "Limitaciones de Hardware",
    description:
      "Debido al hardware actual, el trabajo con ray tracing, cinemáticas y materiales de alto costo resulta exigente. Estas tareas generaron sobrecalentamiento y obligaron a realizar pausas frecuentes.",
  }
];


export const galleryItems = [
  "LS_CAMERA_01_639.0000.png",  
  "LS_CAMERA_02_735.0000.png",
  "LS_CAMERA_03_705.0000.png",
] as const;