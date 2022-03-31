import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Preset from 'App/Models/Preset'

export default class PresetDependency extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public presetId: number

  @belongsTo(() => Preset)
  public preset: BelongsTo<typeof Preset>

  @column()
  public url: string

  @column()
  public comment: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
