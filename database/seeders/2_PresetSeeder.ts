import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Preset from 'App/Models/Preset'

function range(index: number): number[] {
  return new Array(index).fill(undefined)
}

export default class PresetSeeder extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method

    await Preset.createMany(
      range(12).map((_, index) => {
        return {
          name: `Preset ${index + 1}`,
          mainImage: '/presets/1.png',
          createdById: index % 2 === 0 ? 1 : 2,
          status: 'published' as const,
          views: Math.ceil(Math.random() * 100),
        }
      })
    )
  }
}
