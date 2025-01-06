export interface Tip {
  id: number;
  title: string;
  content: string;
}

export const TIPS: Tip[] = [
  {
    id: 1,
    title: "Optimización Automática de Imágenes en Astro",
    content:
      "La velocidad de carga de tu sitio web es fundamental para ofrecer una buena experiencia de usuario. Uno de los aspectos clave para mejorar la velocidad es la optimización de imágenes. Utilizar formatos modernos como WebP te permitirá reducir el tamaño de las imágenes sin comprometer la calidad. Además, herramientas de compresión como ImageOptim o TinyPNG son esenciales para minimizar el peso de las imágenes antes de subirlas a tu sitio.No solo mejorarás el tiempo de carga, sino que también reducirás el consumo de datos para los visitantes, algo especialmente importante para usuarios móviles o con conexiones lentas. La combinación de formatos modernos y compresión eficiente puede hacer una gran diferencia en el rendimiento de tu sitio.",
  },
  {
    id: 2,
    title: "Tip 2",
    content: "Description 2",
  },
  {
    id: 3,
    title: "Tip 3",
    content: "Description 3",
  },
  {
    id: 4,
    title: "Tip 4",
    content: "Description 4",
  },
];
