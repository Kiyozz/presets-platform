import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ProfileController {
  public async show({ view }: HttpContextContract) {
    return view.render('profile/show')
  }
}
