/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.group(() => {
  // Orders
  Route.get('/orders', 'OrdersController.index').middleware('auth')
  Route.get('/orders/:id', 'OrdersController.show').middleware('auth')
  Route.post('/orders', 'OrdersController.store')
  Route.put('/orders/:id', 'OrdersController.update').middleware('auth')
  Route.delete('/orders/:id', 'OrdersController.destroy').middleware('auth')
  // Services
  Route.get('/services', 'ServicesController.index')
  Route.get('/services/:id', 'ServicesController.show')
  Route.post('/services', 'ServicesController.store')
  Route.put('/services/:id', 'ServicesController.update')
  Route.delete('/services/:id', 'ServicesController.destroy')
}).prefix('api/v1')
