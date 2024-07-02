const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// Middlewares por defecto de json-server (logger, static, etc.)
server.use(middlewares);

// Habilitar CORS con configuración específica
/*server.use(cors({
    origin: ['http://localhost:3000', 'https://proyecto-react-git-master-rennitos-projects.vercel.app'], // Permitir solo este origen
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
}));*/

server.use(jsonServer.rewriter({
    '/api/*': '/$1',
    '/product/:resource/:id/show': '/:resource/:id'
}))
server.use(router)
server.listen(5000, () => {
    console.log('JSON Server is running')
})

// Export the Server API
module.exports = server