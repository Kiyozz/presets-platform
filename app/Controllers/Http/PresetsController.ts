import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import PresetService from 'App/Services/PresetService'

export default class PresetsController {
  public async index({ view, logger, request }: HttpContextContract) {
    logger.debug('presets index')
    const page = request.input('page', 1)
    const limit = 10

    const presets = await PresetService.forList(page, limit)

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
    const preset = await PresetService.forShow(presetId)

    return view.render('presets/show', { preset })
  }

  public async edit({ view, params, logger }: HttpContextContract) {
    logger.debug('presets edit')
    logger.debug('params', params)

    const presetId = params.id as number
    const preset = await PresetService.forEdit(presetId)

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
