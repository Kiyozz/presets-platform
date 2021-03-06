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
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('login', 'AuthController.login')
Route.post('login', 'AuthController.attempt')
Route.get('logout', 'AuthController.logout')

Route.resource('presets', 'PresetsController').middleware({
  create: 'auth',
  edit: 'auth',
  destroy: 'auth',
  store: 'auth',
  update: 'auth',
})

Route.get('/', ({ response }) => {
  return response.redirect().status(301).toPath('/presets')
})

Route.get('profile', 'ProfileController.show').middleware('auth')
