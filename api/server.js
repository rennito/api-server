// See https://github.com/typicode/json-server#module
const jsonServer = require('json-server')
const cors = require('cors');
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
// Add this before server.use(router)

// Configurar CORS para permitir todas las solicitudes
server.use(cors({
    origin: 'https://proyecto-react-red.vercel.app',  // Permitir todos los orígenes. Para mayor seguridad, especifica el origen exacto.
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));

server.use(jsonServer.rewriter({
    '/api/*': '/$1',
    '/product/:resource/:id/show': '/:resource/:id'
}))
server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})

// Export the Server API
module.exports = server