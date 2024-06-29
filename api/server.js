const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Middlewares por defecto de json-server (logger, static, etc.)
server.use(middlewares);

// Habilitar CORS con configuración específica
server.use(cors({
  origin: 'https://proyecto-react-red.vercel.app', // Permitir solo este origen
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
}));

// Rutas personalizadas o reescrituras de URL
server.use(jsonServer.rewriter({
  '/api/*': '/$1', // Reescribe /api/* a /*
  '/product/:resource/:id/show': '/:resource/:id', // Ejemplo de reescritura
}));

// Montar el enrutador JSON
server.use(router);

// Iniciar el servidor en el puerto 3000
server.listen(3000, () => {
  console.log('JSON Server is running');
});