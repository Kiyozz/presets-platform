import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Presets extends BaseSchema {
  protected tableName = 'presets'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
      table.string('name', 50).notNullable()
      table.string('main_image').notNullable()
      table.enum('status', ['published', 'draft', 'deleted', 'disabled']).notNullable()
      table.integer('views').defaultTo(0)

      // UserAccount
      table.integer('created_by_id').unsigned().notNullable().references('user_accounts.id')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
