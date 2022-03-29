import { DateTime } from 'luxon'
import { BaseModel, column, BelongsTo, belongsTo } from '@ioc:Adonis/Lucid/Orm'
import UserAccount from 'App/Models/UserAccount'

export default class Preset extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({})
  public name: string

  @column({})
  public mainImage: string

  @column()
  public createdById: number

  @belongsTo(() => UserAccount, { foreignKey: 'createdById' })
  public createdBy: BelongsTo<typeof UserAccount>

  @column()
  public views: number

  @column()
  public characterName: string

  @column()
  public race: string

  @column()
  public status: 'published' | 'draft' | 'deleted' | 'disabled'

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
