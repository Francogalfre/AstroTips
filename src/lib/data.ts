export interface Tip {
  id: number;
  title: string;
  content: string;
  example: string;
}

export const TIPS: Tip[] = [
  {
    id: 1,
    title: "Optimiza el rendimiento con islas de Javascript",
    content: `
      Una de las características clave de Astro es la arquitectura de islas, que permite mejorar el rendimiento cargando JavaScript solo cuando es necesario.\n
      Puedes usar directivas como client:load, client:idle y client:visible para especificar cuándo y cómo cargar los componentes interactivos en el cliente.\n
      Esto significa que puedes tener una página que se carga rápidamente y solo carga el JavaScript necesario cuando el usuario interactúa con partes específicas de la página.\n
      Por ejemplo, si tienes un slider o un formulario dinámico, puedes cargar el código JavaScript solo cuando el usuario vea o interactúe con ese componente en particular.
    `,
    example: `
      <script type="module" client:visible>\n
        import Slider from './Slider.astro';\n
        const slider = new Slider();\n
        slider.init();\n
      </script>
    `,
  },
  {
    id: 2,
    title: "Utiliza componentes SFC (Single File Components)",
    content: `
      Astro permite utilizar componentes de un solo archivo (SFC) para mantener tu código modular y organizado.\n
      Puedes definir la estructura HTML, el CSS y la lógica de un componente en un solo archivo, lo que facilita la gestión y reutilización de componentes.
      Esto es especialmente útil para crear componentes reutilizables como botones, tarjetas y modales.\n
      Los componentes SFC también pueden ser utilizados en combinación con bibliotecas de terceros para un desarrollo más eficiente.
    `,
    example: `
      <button class="my-button" on:click="handleClick()">Click</button>\n
      <style>\n
        .my-button {\n
          background-color: blue;\n
          color: white;\n
        }\n
      </style>\n
      <script>\n
        function handleClick() {\n
          alert('Button clicked');\n
        }\n
      </script>
    `,
  },
  {
    id: 3,
    title: "Gestiona contenido con archivos Markdown",
    content: `
      Si tu sitio web contiene contenido que cambia frecuentemente, como un blog o una lista de tips, es una buena práctica almacenar ese contenido en archivos Markdown.\n
      Astro tiene una integración nativa con Markdown, lo que te permite procesar los archivos Markdown durante la compilación y mostrarlos como HTML en la página.
      Esto es especialmente útil si deseas manejar el contenido fuera del código y hacer que sea fácilmente editable sin necesidad de interactuar con el código fuente.\n
      Usar Markdown también mejora la legibilidad del contenido y lo hace más accesible para los editores no técnicos.
    `,
    example: `
      --- \n
      title: "Welcome to My Blog"\n
      ---\n
      # Hello, world!\n
      This is a blog post written in Markdown.
    `,
  },
  {
    id: 4,
    title: "Uso de componentes de otros frameworks",
    content: `
      Astro permite integrar componentes de otros frameworks como React, Vue o Svelte.\n
      Esta capacidad te permite aprovechar la rica funcionalidad de estos frameworks sin tener que escribir código adicional o comprometer el rendimiento de tu sitio.
      Por ejemplo, si ya tienes un componente en React que maneja una funcionalidad compleja, como un gráfico interactivo o un formulario avanzado, puedes integrarlo en tu proyecto de Astro y solo cargarlo cuando sea necesario.\n
      Esto mantiene la página rápida y eficiente sin perder la interactividad que ofrecen otros frameworks.
    `,
    example: `
      <script type="module">\n
        import { MyComponent } from './MyComponent.js';\n
        MyComponent.load();\n
      </script>
    `,
  },
  {
    id: 5,
    title: "Renderizado estático de páginas dinámicas",
    content: `
      Astro permite renderizar contenido dinámico de forma estática utilizando datos externos, como archivos JSON, CMS o cualquier otra fuente de datos.\n
      Puedes usar la función Astro.fetchContent() para importar estos datos y luego generar páginas estáticas basadas en ellos.
      Este enfoque mejora significativamente el rendimiento porque el contenido dinámico se convierte en HTML estático durante la compilación, lo que significa que los usuarios reciben contenido renderizado en el servidor sin necesidad de realizar solicitudes adicionales.\n
      Esto es ideal para sitios como blogs, listados de productos o cualquier página que necesite generar contenido en función de los datos.
    `,
    example: `
      const posts = await Astro.fetchContent('/posts.json');\n
      posts.forEach(post => {\n
        console.log(post.title);\n
      });
    `,
  },
  {
    id: 6,
    title: "Usa rutas dinámicas para páginas personalizadas",
    content: `
      Astro te permite crear rutas dinámicas para manejar contenido personalizado.\n
      Por ejemplo, si estás creando un blog, puedes configurar una ruta dinámica para mostrar diferentes publicaciones basadas en el ID de la publicación.
      Esto facilita la creación de sitios web donde el contenido varía según la URL y permite manejar grandes cantidades de contenido de forma estructurada.\n
    `,
    example: `
      <Route path="/posts/:id" component={PostDetail} />
    `,
  },
  {
    id: 7,
    title: "Optimiza imágenes automáticamente",
    content: `
      Astro incluye soporte integrado para la optimización de imágenes.\n
      Puedes aprovechar esta funcionalidad para reducir el tamaño de las imágenes y mejorar los tiempos de carga.
      La optimización automática de imágenes asegura que tus imágenes se carguen de manera eficiente sin sacrificar la calidad visual.\n
    `,
    example: `
      <img src="/assets/image.jpg" width="500" height="300" alt="Optimized image" />
    `,
  },
  {
    id: 8,
    title: "Implementa estilos CSS Scoped",
    content: `
      Astro permite usar estilos CSS scoped para que los estilos sean específicos de un componente.\n
      Esto previene conflictos de estilo entre componentes y asegura que los estilos sean aplicados únicamente al componente al que pertenecen.
      Los estilos scoped hacen que el mantenimiento del código sea más sencillo y organizado.\n
    `,
    example: `
      <style scoped>\n
        .component {\n
          background-color: lightblue;\n
        }\n
      </style>
    `,
  },
  {
    id: 9,
    title: "Configura el SSR (Server-Side Rendering)",
    content: `
      Astro soporta renderizado del lado del servidor (SSR), lo que permite generar contenido dinámico en el servidor antes de enviarlo al cliente.\n
      Esto es útil para mejorar el SEO y proporcionar una experiencia de usuario más rápida, especialmente en sitios con contenido dinámico o personalizado.
    `,
    example: `
      export async function getServerSideProps() {\n
        const data = await fetchData();\n
        return { props: { data } };\n
      }
    `,
  },
  {
    id: 10,
    title: "Utiliza scripts externos con cuidado",
    content: `
      Cuando necesites usar scripts externos, asegúrate de cargarlos de forma asincrónica o diferida para no bloquear el renderizado de la página.\n
      Esto ayuda a mejorar el tiempo de carga y el rendimiento general del sitio.
    `,
    example: `
      <script src="https://example.com/script.js" async></script>
    `,
  },
  {
    id: 11,
    title: "Aprovecha el Build System integrado",
    content: `
      Astro incluye un sistema de compilación integrado que te permite manejar tareas como la optimización de CSS y JavaScript, generación de imágenes y más.\n
      Esto simplifica el flujo de trabajo de desarrollo y asegura que tu proyecto esté optimizado para producción.
    `,
    example: `
      astro build --optimizes-css
    `,
  },
  {
    id: 12,
    title: "Configura alias para rutas de importación",
    content: `
      Puedes configurar alias para rutas de importación en Astro, lo que facilita la importación de módulos y componentes.\n
      Esto mejora la legibilidad del código y reduce errores relacionados con rutas incorrectas.
    `,
    example: `
      import Button from '@components/Button';
    `,
  },
  {
    id: 13,
    title: "Usa variables de entorno para configuraciones",
    content: `
      Astro permite el uso de variables de entorno para manejar configuraciones sensibles y específicas del entorno.\n
      Esto es útil para almacenar claves API, configuraciones de base de datos y otros valores que pueden cambiar entre entornos de desarrollo y producción.
    `,
    example: `
      const apiKey = process.env.API_KEY;
    `,
  },
  {
    id: 14,
    title: "Implementa Lazy Loading para imágenes",
    content: `
      Implementa lazy loading para imágenes en tu proyecto de Astro para mejorar los tiempos de carga y la experiencia del usuario.\n
      Esto significa que las imágenes solo se cargarán cuando estén cerca de entrar en la vista del usuario, reduciendo la carga inicial de la página.
    `,
    example: `
      <img src="image.jpg" loading="lazy" alt="Lazy loaded image" />
    `,
  },
  {
    id: 15,
    title: "Usa Astro Components para reutilización",
    content: `
      Crea componentes reutilizables en Astro para evitar duplicación de código y facilitar el mantenimiento.\n
      Puedes definir componentes para elementos comunes como botones, encabezados y tarjetas, y reutilizarlos en todo el proyecto.
    `,
    example: `
      <Button text="Click Me" />
    `,
  },
  {
    id: 16,
    title: "Configura redirecciones en astro",
    content: `
      Astro te permite configurar redirecciones en tu proyecto para manejar rutas obsoletas o incorrectas.\n
      Esto mejora la experiencia del usuario al asegurarse de que siempre sean dirigidos a la página correcta.
    `,
    example: `
      <Route path="/old-page" to="/new-page" />
    `,
  },
  {
    id: 17,
    title: "Monitorea el rendimiento con Lighthouse",
    content: `
      Usa herramientas como Lighthouse para monitorear y optimizar el rendimiento de tu sitio construido con Astro.\n
      Lighthouse proporciona métricas detalladas sobre el rendimiento, accesibilidad y mejores prácticas para ayudarte a mejorar continuamente tu proyecto.
    `,
    example: `
      lighthouse --view mysite.com
    `,
  },
  {
    id: 18,
    title: "Configura páginas 404 personalizadas",
    content: `
      Puedes configurar una página 404 personalizada para tu proyecto de Astro para mejorar la experiencia de usuario cuando accedan a una página inexistente.\n
      Esto proporciona una experiencia más profesional y consistente en todo tu sitio.
    `,
    example: `
      <Route path="*" component={NotFoundPage} />
    `,
  },
  {
    id: 19,
    title: "Optimize your build with custom directives",
    content: `
      Astro allows you to define custom build directives that can optimize your project by handling specific requirements or behaviors.\n
      This is useful for advanced optimizations or specific use cases like conditional rendering or environment-specific configurations.
    `,
    example: `
      <script client:only="react" src="react.js"></script>
    `,
  },
  {
    id: 20,
    title: "Aprovecha el sistema de plugins de astro",
    content: `
      Astro tiene un sistema de plugins que te permite extender la funcionalidad de tu proyecto fácilmente.\n
      Puedes agregar nuevos comportamientos, optimizaciones o integraciones con herramientas de terceros mediante plugins. Estos pueden ayudar con tareas como la minificación de código, la gestión de imágenes, la integración de CMS y más.\n
      Utilizar plugins adecuados puede mejorar la productividad y la calidad de tu proyecto sin necesidad de crear todo desde cero.
    `,
    example: `
      import { defineConfig } from 'astro/config';
      import myPlugin from '@astro/plugin';
      
      export default defineConfig({
        integrations: [myPlugin()],
      });
    `,
  },
];
