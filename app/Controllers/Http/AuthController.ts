import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Hash from '@ioc:Adonis/Core/Hash'
import UserAccount from 'App/Models/UserAccount'

export default class AuthController {
  public async login({ view }: HttpContextContract) {
    return view.render('auth/login')
  }

  public async attempt({ view, request, response, session, auth }: HttpContextContract) {
    const email = request.input('email') as string
    const password = request.input('password') as string
    const user = await UserAccount.query().where('email', email).where('status', 'active').first()

    if (!user || !(await Hash.verify(user.password, password))) {
      session.flash('email', email)

      return view.render('auth/login')
    }

    await auth.use('web').login(user)

    return response.redirect().toRoute('PresetsController.index')
  }

  public async logout({ auth, response }: HttpContextContract) {
    if (!auth.user) {
      return response.status(401)
    }

    await auth.use('web').logout()

    return response.redirect().toRoute('PresetsController.index')
  }
}
