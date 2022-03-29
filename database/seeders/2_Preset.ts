import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Preset from 'App/Models/Preset'

export default class PresetSeeder extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method

    await Preset.createMany([
      {
        name: 'First preset',
        mainImage: '/presets/1.png',
        createdById: 1,
        status: 'published',
      },
      {
        name: 'Second preset',
        mainImage: '/presets/1.png',
        createdById: 1,
        status: 'published',
      },
      {
        name: 'Third preset',
        mainImage: '/presets/1.png',
        createdById: 2,
        status: 'published',
      },
      {
        name: 'Fourth preset',
        mainImage: '/presets/1.png',
        createdById: 2,
        status: 'published',
      },
    ])
  }
}
