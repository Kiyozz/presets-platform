import type { ModelPaginatorContract } from '@ioc:Adonis/Lucid/Orm'
import Preset from 'App/Models/Preset'

export default class PresetService {
  public static async forList(page: number, limit: number): Promise<ModelPaginatorContract<Preset>> {
    const presets = await Preset.query()
      .where('status', 'published')
      .preload('createdBy', (query) => {
        query.select('username').where('status', 'active')
      })
      .orderBy('updatedAt', 'desc')
      .paginate(page, limit)

    if (presets.find((p) => p.createdBy !== null)) {
      console.log(presets.find((p) => p.createdBy !== null))
    }

    presets.baseUrl('/presets')

    return presets
  }

  public static async forShow(presetId: number) {
    return await Preset.query()
      .where('status', 'published')
      .where('id', presetId)
      .preload('createdBy', (query) => {
        query.select('username')
      })
      .firstOrFail()
  }

  public static async forEdit(presetId: number) {
    return await Preset.query()
      .where('status', 'published')
      .where('id', presetId)
      .preload('createdBy', (query) => {
        query.select('username')
      })
      .firstOrFail()
  }

  public static async update(presetId: number) {
    return await Preset.query().where('id', presetId).update({})
  }
}
