export interface Tip {
  id: number;
  title: string;
  content: string;
}

export const TIPS: Tip[] = [
  {
    id: 1,
    title: "Optimiza el Rendimiento con Islas de JavaScript",
    content: `
    Una de las características clave de Astro es la arquitectura de islas, que permite mejorar el rendimiento cargando JavaScript solo cuando es necesario.\n
    Puedes usar directivas como client:load, client:idle y client:visible para especificar cuándo y cómo cargar los componentes interactivos en el cliente.\n
    Esto significa que puedes tener una página que se carga rápidamente y solo carga el JavaScript necesario cuando el usuario interactúa con partes específicas de la página.\n
    Por ejemplo, si tienes un slider o un formulario dinámico, puedes cargar el código JavaScript solo cuando el usuario vea o interactúe con ese componente en particular.\n
    `,
  },

  {
    id: 2,
    title: "Carga Automática y Eficiente de Imágenes",
    content: `
    Astro facilita la optimización de imágenes automáticamente a través del componente <Image />.\n
    Este componente es ideal para manejar imágenes de diferentes tamaños y resoluciones dependiendo del dispositivo y el ancho de pantalla.\n
    Si bien puedes controlar los tamaños de las imágenes de forma manual utilizando srcset y sizes, el componente de Astro lo hace por ti de manera eficiente.\n
    Esto significa que las imágenes se sirven correctamente dependiendo de la pantalla del usuario, mejorando el tiempo de carga de la página y la experiencia general del usuario.\n
    `,
  },

  {
    id: 3,
    title: "Gestiona Contenido con Archivos Markdown",
    content: `
    Si tu sitio web contiene contenido que cambia frecuentemente, como un blog o una lista de tips, es una buena práctica almacenar ese contenido en archivos Markdown.\n
    Astro tiene una integración nativa con Markdown, lo que te permite procesar los archivos Markdown durante la compilación y mostrarlos como HTML en la página.\n
    Esto es especialmente útil si deseas manejar el contenido fuera del código y hacer que sea fácilmente editable sin necesidad de interactuar con el código fuente.\n
    Usar Markdown también mejora la legibilidad del contenido y lo hace más accesible para los editores no técnicos.\n
    `,
  },

  {
    id: 4,
    title: "Uso de Componentes de Otros Frameworks",
    content: `
    Astro permite integrar componentes de otros frameworks como React, Vue o Svelte.\n
    Esta capacidad te permite aprovechar la rica funcionalidad de estos frameworks sin tener que escribir código adicional o comprometer el rendimiento de tu sitio.\n
    Por ejemplo, si ya tienes un componente en React que maneja una funcionalidad compleja, como un gráfico interactivo o un formulario avanzado, puedes integrarlo en tu proyecto de Astro y solo cargarlo cuando sea necesario.\n
    Esto mantiene la página rápida y eficiente sin perder la interactividad que ofrecen otros frameworks.\n
    `,
  },

  {
    id: 5,
    title: "Renderizado Estático de Páginas Dinámicas",
    content: `
    Astro permite renderizar contenido dinámico de forma estática utilizando datos externos, como archivos JSON, CMS o cualquier otra fuente de datos.\n
    Puedes usar la función Astro.fetchContent() para importar estos datos y luego generar páginas estáticas basadas en ellos.\n
    Este enfoque mejora significativamente el rendimiento porque el contenido dinámico se convierte en HTML estático durante la compilación, lo que significa que los usuarios reciben contenido renderizado en el servidor sin necesidad de realizar solicitudes adicionales.\n
    Esto es ideal para sitios como blogs, listados de productos o cualquier página que necesite generar contenido en función de los datos.\n
    `,
  },

  {
    id: 6,
    title: "Renderizado Estático de Páginas Dinámicas",
    content: `
    Astro permite renderizar contenido dinámico de forma estática utilizando datos externos, como archivos JSON, CMS o cualquier otra fuente de datos.\n
    Puedes usar la función Astro.fetchContent() para importar estos datos y luego generar páginas estáticas basadas en ellos.\n
    Este enfoque mejora significativamente el rendimiento porque el contenido dinámico se convierte en HTML estático durante la compilación, lo que significa que los usuarios reciben contenido renderizado en el servidor sin necesidad de realizar solicitudes adicionales.\n
    Esto es ideal para sitios como blogs, listados de productos o cualquier página que necesite generar contenido en función de los datos.\n
    `,
  },

  {
    id: 7,
    title: "Renderizado Estático de Páginas Dinámicas",
    content: `
    Astro permite renderizar contenido dinámico de forma estática utilizando datos externos, como archivos JSON, CMS o cualquier otra fuente de datos.\n
    Puedes usar la función Astro.fetchContent() para importar estos datos y luego generar páginas estáticas basadas en ellos.\n
    Este enfoque mejora significativamente el rendimiento porque el contenido dinámico se convierte en HTML estático durante la compilación, lo que significa que los usuarios reciben contenido renderizado en el servidor sin necesidad de realizar solicitudes adicionales.\n
    Esto es ideal para sitios como blogs, listados de productos o cualquier página que necesite generar contenido en función de los datos.\n
    `,
  },

  {
    id: 8,
    title: "Renderizado Estático de Páginas Dinámicas",
    content: `
    Astro permite renderizar contenido dinámico de forma estática utilizando datos externos, como archivos JSON, CMS o cualquier otra fuente de datos.\n
    Puedes usar la función Astro.fetchContent() para importar estos datos y luego generar páginas estáticas basadas en ellos.\n
    Este enfoque mejora significativamente el rendimiento porque el contenido dinámico se convierte en HTML estático durante la compilación, lo que significa que los usuarios reciben contenido renderizado en el servidor sin necesidad de realizar solicitudes adicionales.\n
    Esto es ideal para sitios como blogs, listados de productos o cualquier página que necesite generar contenido en función de los datos.\n
    `,
  },

  {
    id: 9,
    title: "Renderizado Estático de Páginas Dinámicas",
    content: `
    Astro permite renderizar contenido dinámico de forma estática utilizando datos externos, como archivos JSON, CMS o cualquier otra fuente de datos.\n
    Puedes usar la función Astro.fetchContent() para importar estos datos y luego generar páginas estáticas basadas en ellos.\n
    Este enfoque mejora significativamente el rendimiento porque el contenido dinámico se convierte en HTML estático durante la compilación, lo que significa que los usuarios reciben contenido renderizado en el servidor sin necesidad de realizar solicitudes adicionales.\n
    Esto es ideal para sitios como blogs, listados de productos o cualquier página que necesite generar contenido en función de los datos.\n
    `,
  },

  {
    id: 10,
    title: "Renderizado Estático de Páginas Dinámicas",
    content: `
    Astro permite renderizar contenido dinámico de forma estática utilizando datos externos, como archivos JSON, CMS o cualquier otra fuente de datos.\n
    Puedes usar la función Astro.fetchContent() para importar estos datos y luego generar páginas estáticas basadas en ellos.\n
    Este enfoque mejora significativamente el rendimiento porque el contenido dinámico se convierte en HTML estático durante la compilación, lo que significa que los usuarios reciben contenido renderizado en el servidor sin necesidad de realizar solicitudes adicionales.\n
    Esto es ideal para sitios como blogs, listados de productos o cualquier página que necesite generar contenido en función de los datos.\n
    `,
  },
];
