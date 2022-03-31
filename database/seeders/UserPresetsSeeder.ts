import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { UserFactory } from '../factories/index'

export default class UserPresetsSeeder extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method

    await UserFactory.with('presets', 3, (factory) => {
      factory.with('dependencies', 1)
    }).createMany(30)
  }
}
