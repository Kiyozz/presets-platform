import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Preset from 'App/Models/Preset'

export default class PresetsController {
  public async index({ view, logger, request }: HttpContextContract) {
    logger.debug('presets index')
    const page = request.input('page', 1)
    const limit = 10

    const presets = await Preset.query()
      .where('status', 'published')
      .preload('createdBy', (query) => {
        query.select('username')
      })
      .orderBy('updatedAt', 'desc')
      .paginate(page, limit)

    presets.baseUrl('/presets')

    return view.render('presets/index', { presets })
  }

  public async create({ view, logger }: HttpContextContract) {
    logger.debug('presets create')

    return view.render('presets/create')
  }

  public async store({ view, request, logger }: HttpContextContract) {
    logger.debug('presets store', request.all())

    return view.render('presets/index')
  }

  public async show({ view, params, logger }: HttpContextContract) {
    logger.debug('presets show')
    logger.debug('params', params)

    const presetId = params.id as number
    const preset = await Preset.query()
      .where('status', 'published')
      .where('id', presetId)
      .firstOrFail()

    return view.render('presets/show', { preset })
  }

  public async edit({ view, params, logger }: HttpContextContract) {
    logger.debug('presets edit')
    logger.debug('params', params)

    const presetId = params.id as number
    const preset = await Preset.query()
      .where('status', 'published')
      .where('id', presetId)
      .firstOrFail()

    return view.render('presets/edit', { preset })
  }

  public async update({ view, params, logger }: HttpContextContract) {
    logger.debug('presets update')
    logger.debug('params', params)

    return view.render('presets/index')
  }

  public async destroy({ view, params, logger }: HttpContextContract) {
    logger.debug('presets destroy')
    logger.debug('params', params)

    return view.render('presets/index')
  }
}
