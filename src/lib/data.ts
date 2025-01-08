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
    title: "Utiliza Componentes SFC (Single File Components)",
    content: `
      Astro permite utilizar componentes de un solo archivo (SFC) para mantener tu código modular y organizado.\n
      Puedes definir la estructura HTML, el CSS y la lógica de un componente en un solo archivo, lo que facilita la gestión y reutilización de componentes.\n
      Esto es especialmente útil para crear componentes reutilizables como botones, tarjetas y modales.\n
      Los componentes SFC también pueden ser utilizados en combinación con bibliotecas de terceros para un desarrollo más eficiente.\n
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
    title: "Usa Rutas Dinámicas para Páginas Personalizadas",
    content: `
      Astro te permite crear rutas dinámicas para manejar contenido personalizado.\n
      Por ejemplo, si estás creando un blog, puedes configurar una ruta dinámica para mostrar diferentes publicaciones basadas en el ID de la publicación.\n
      Esto facilita la creación de sitios web donde el contenido varía según la URL y permite manejar grandes cantidades de contenido de forma estructurada.\n
    `,
  },
  {
    id: 7,
    title: "Optimiza Imágenes Automáticamente",
    content: `
      Astro incluye soporte integrado para la optimización de imágenes.\n
      Puedes aprovechar esta funcionalidad para reducir el tamaño de las imágenes y mejorar los tiempos de carga.\n
      La optimización automática de imágenes asegura que tus imágenes se carguen de manera eficiente sin sacrificar la calidad visual.\n
    `,
  },
  {
    id: 8,
    title: "Implementa Estilos CSS Scoped",
    content: `
      Astro permite usar estilos CSS scoped para que los estilos sean específicos de un componente.\n
      Esto previene conflictos de estilo entre componentes y asegura que los estilos sean aplicados únicamente al componente al que pertenecen.\n
      Los estilos scoped hacen que el mantenimiento del código sea más sencillo y organizado.\n
    `,
  },
  {
    id: 9,
    title: "Configura el SSR (Server-Side Rendering)",
    content: `
      Astro soporta renderizado del lado del servidor (SSR), lo que permite generar contenido dinámico en el servidor antes de enviarlo al cliente.\n
      Esto es útil para mejorar el SEO y proporcionar una experiencia de usuario más rápida, especialmente en sitios con contenido dinámico o personalizado.\n
    `,
  },
  {
    id: 10,
    title: "Utiliza Scripts Externos con Cuidado",
    content: `
      Cuando necesites usar scripts externos, asegúrate de cargarlos de forma asincrónica o diferida para no bloquear el renderizado de la página.\n
      Esto ayuda a mejorar el tiempo de carga y el rendimiento general del sitio.\n
    `,
  },
  {
    id: 11,
    title: "Aprovecha el Build System Integrado",
    content: `
      Astro incluye un sistema de compilación integrado que te permite manejar tareas como la optimización de CSS y JavaScript, generación de imágenes y más.\n
      Esto simplifica el flujo de trabajo de desarrollo y asegura que tu proyecto esté optimizado para producción.\n
    `,
  },
  {
    id: 12,
    title: "Configura Alias para Rutas de Importación",
    content: `
      Puedes configurar alias para rutas de importación en Astro, lo que facilita la importación de módulos y componentes.\n
      Esto mejora la legibilidad del código y reduce errores relacionados con rutas incorrectas.\n
    `,
  },
  {
    id: 13,
    title: "Usa Variables de Entorno para Configuraciones",
    content: `
      Astro permite el uso de variables de entorno para manejar configuraciones sensibles y específicas del entorno.\n
      Esto es útil para almacenar claves API, configuraciones de base de datos y otros valores que pueden cambiar entre entornos de desarrollo y producción.\n
    `,
  },
  {
    id: 14,
    title: "Implementa Lazy Loading para Imágenes",
    content: `
      Implementa lazy loading para imágenes en tu proyecto de Astro para mejorar los tiempos de carga y la experiencia del usuario.\n
      Esto significa que las imágenes solo se cargarán cuando estén cerca de entrar en la vista del usuario, reduciendo la carga inicial de la página.\n
    `,
  },
  {
    id: 15,
    title: "Usa Astro Components para Reutilización",
    content: `
      Crea componentes reutilizables en Astro para evitar duplicación de código y facilitar el mantenimiento.\n
      Puedes definir componentes para elementos comunes como botones, encabezados y tarjetas, y reutilizarlos en todo el proyecto.\n
    `,
  },
  {
    id: 16,
    title: "Configura Redirecciones en Astro",
    content: `
      Astro te permite configurar redirecciones en tu proyecto para manejar rutas obsoletas o incorrectas.\n
      Esto mejora la experiencia del usuario al asegurarse de que siempre sean dirigidos a la página correcta.\n
    `,
  },
  {
    id: 17,
    title: "Monitorea el Rendimiento con Lighthouse",
    content: `
      Usa herramientas como Lighthouse para monitorear y optimizar el rendimiento de tu sitio construido con Astro.\n
      Lighthouse proporciona métricas detalladas sobre el rendimiento, accesibilidad y mejores prácticas para ayudarte a mejorar continuamente tu proyecto.\n
    `,
  },
  {
    id: 18,
    title: "Configura Paginas 404 Personalizadas",
    content: `
      Configura una página 404 personalizada en Astro para manejar errores de navegación de manera elegante.\n
      Esto mejora la experiencia del usuario al proporcionar información útil y opciones de navegación cuando encuentran una página no disponible.\n
    `,
  },
  {
    id: 19,
    title: "Utiliza Componentes de Diseño Responsivo",
    content: `
      Asegúrate de que tus componentes en Astro sean responsivos para ofrecer una buena experiencia en dispositivos de diferentes tamaños.\n
      Usa media queries y unidades relativas para asegurar que tu diseño se adapte bien a diferentes resoluciones de pantalla.\n
    `,
  },
  {
    id: 20,
    title: "Implementa Funcionalidades de Accesibilidad",
    content: `
      Prioriza la accesibilidad en tu proyecto de Astro para asegurarte de que sea usable por personas con diferentes capacidades.\n
      Usa etiquetas semánticas, descripciones de imágenes (alt text) y controles de navegación accesibles para mejorar la experiencia del usuario.\n
    `,
  },
];
