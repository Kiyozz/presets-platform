import { DateTime } from 'luxon'
import { BaseModel, column, BelongsTo, belongsTo, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import UserAccount from 'App/Models/UserAccount'
import PresetDependency from 'App/Models/PresetDependency'

export default class Preset extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public mainImage: string

  @column()
  public createdById: number

  @belongsTo(() => UserAccount, { foreignKey: 'createdById' })
  public createdBy: BelongsTo<typeof UserAccount>

  @column()
  public views: number

  @column()
  public race: string

  @column()
  public status: 'published' | 'draft' | 'deleted' | 'disabled'

  @column()
  public downloads: number

  @column()
  public version: string

  @hasMany(() => PresetDependency)
  public dependencies: HasMany<typeof PresetDependency>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
