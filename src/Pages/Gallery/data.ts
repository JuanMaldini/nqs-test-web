export type GalleryNote = {
  title: string;
  description: string;
};

export const galleryNotes: GalleryNote[] = [
  {
    title: "Arcware Pixel Streaming",
    description: "El web SDK manda textos a Unreal; con F12 podés ver cada uno que manda, en base a cada texto, se decide en la app que hacer.",
  },
  {
    title: "Project Cleaner + plugins NVIDIA",
    description: "Uso Project Cleaner para borrar arhivos sin uso y el zip del repo trae los plugins de NVIDIA. Si el proyecto no compila, reemplazá la carpeta Plugins por ese paquete.",
  },
  {
    title: "Master Material",
    description: "Reutilicé mi master material que mezcla hasta 5 materiales y agrega nieve con displacement o lluvia. Y se puede incorporar también Flakes o Clear Coat; el resto de blueprints y lógica se hizo desde 0.",
  },
  {
    title: "Web app",
    description: "El frontend con React + Vite (páginas, control horario y galería) utilicé el tiempo de unas 8 horas aproximadamente para armar la web.",
  },
  {
    title: "Cinematic Assembly Tools",
    description: "Organizo los shots con Cinematic Assembly Tools y en la raíz de Unreal hay un production.json que inportándolo estable algunas reglas globales.",
  },
  {
    title: "Nombre del template",
    description: "El template C++ de Arcware conserva su nombre original porque renombrarlo implica tocar unos nombres en Source; preferí mantener la estabilidad.",
  },
  {
    title: "Ruta del screenshot",
    description: "El botón web manda un texto desde la web, a travez de un SDK, llegando hasta la app, un blueprint  de c++ responde y envía la imagen al navegador para descargarla.",
  }
];

export const galleryItems = [
  "https://placehold.co/640x360/png?text=Concept+01",
  "https://placehold.co/640x360/png?text=UI+02",
  "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  "https://placehold.co/640x360/png?text=Setup",
] as const;
