export const projects = [
  {
    title: "Cochest",
    subtitle: "NextJS,React and TypeScript",
    description:
      "Como parte del proyecto Cochest, he desarrollado una aplicación en la cual los usuarios podrán repasar el apartado teórico del examen para obtener el carnet. De momento, solo cuenta con tests del carnet tipo B, pero en un futuro se ampliará a otros tipos de carnets, así como la cantidad de tests disponibles. Además, la aplicación cuenta con un sistema de recopilación de resultados para ofrecer al usuario las métricas de su progreso en función de los tests que realiza. El acceso a los tests es totalmente gratuito, tan solo es necesario registrarse.  La aplicación está desarrollada con React y TypeScript, utilizando el framework de Next.js y Tailwind CSS para los estilos. También aprovecho los server components que ofrece Next.js para llevar toda la parte de consultas y peticiones a la API hacia el servidor, aliviando así la carga del cliente y acelerando todo lo posible el rendimiento en la interfaz de usuario, la web esta alojada en la capa gratuita de vercel.  En cuanto al apartado del back-end, está manejado por la API que ya comenté. Next.js ofrece una forma de tratar con el back-end de un proyecto gracias a sus server components, lo cual te evita tener una API para gestionar tu back-end, aunque puedes trabajar con una si así lo deseas. En mi caso, la idea de este proyecto es poner en práctica mis conocimientos, habilidades y, sobre todo, aprender cosas nuevas, por lo que opté por desarrollar yo mismo la API y construir lo más posible por mí mismo.  Es un proyecto full-stack en el cual seguiré trabajando y ampliando para optimizar su funcionamiento y mejorar su estética. Te invito a que le des un vistazo y me des feedback si te animas, ¡será más que bienvenido!",
    image: "./cochest.png",
    link: "https://cochest.vercel.app",
  },
  {
    title: "API-REST Cochest",
    subtitle: "NodeJS and Express",
    description:
      "Es una API Rest desarrollada con Node y Express que forma parte de un proyecto full-stack que estoy desarrollando. La idea general es crear una aplicación web en la que los usuarios puedan realizar test con una recopilación de las preguntas más frecuentes en los exámenes de la DGT para obtener el carnet. Los recursos se almacenan en una base de datos con SQLite usando el servicio de Turso. La API servirá los recursos a la parte del frontend, que estará desarrollada con Next.js.  Entre las herramientas que uso para la API están: Node.js con Express, arquitectura MVC (Modelo Vista Controlador), Zod para las validaciones en el CRUD de los recursos, ESModules para la modularización del código, JWT (JSON Web Token) y cookies para la gestión de sesiones de usuario, Nodemailer para la verificación del correo electrónico, Turso y SQLite para la base de datos, y Render para el despliegue, aprovechando su capa gratuita.",
    image: "./API.PNG",
    link: "https://github.com/JhonatanT2/API-REST",
  },
  {
    title: "Hlanz Social",
    subtitle: "PHP and JavaScript",
    description:
      "Se trata de una red social básica orientada hacia el instituto en el que estudie, en esta plataforma se puede interactuar con otras personas mediante la creacion de publicaciones o reaccionando al de otros mediante 'likes' o comentandolos, en principio esta orientada para tratar temas del instituto. Esta desarrollada principalmente con PHP, JavaScript, boostrap y Twig, para la base de datos se uso MySQL, esta fue una gran oportunidad para profundisar mi aprendisaje en la arquitectura Modelo Vista Controlador(MVC).",
    image: "./hlanzSocial.png",
    link: "https://github.com/JhonatanT2/HlanzSocial/tree/master",
  },
  {
    title: "StarWars Api",
    subtitle: "React",
    description:
      "Es una pequeña aplicación que realice para ampliar mis conocimientos en el uso de APIS, se trata de una especie de wiki sobre las peliculas de StarWars, en esta podemos obtener información tanto de personajes, vehículos, planetas y de las mismas peliculas entre otras cosas",
    image: "./starwarsApi.PNG",
    link: "https://github.com/JhonatanT2/React/tree/master/React-StarWars/starwars-jhonatan",
  },
];

export const skills = [
    "JavaScript",
    "PHP",
    "React",
    "MySQL",
    "Docker",
    "HTML",
    "Node.js",
    "Git"      
];