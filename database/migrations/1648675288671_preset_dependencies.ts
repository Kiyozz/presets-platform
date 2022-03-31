import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class PresetDependencies extends BaseSchema {
  protected tableName = 'preset_dependencies'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()

      table.text('url')
      table.text('comment')

      // Preset
      table.integer('preset_id').unsigned().notNullable().references('presets.id')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
