import Factory from '@ioc:Adonis/Lucid/Factory'
import UserAccount from 'App/Models/UserAccount'
import Preset from 'App/Models/Preset'
import { DateTime } from 'luxon'

export const UserFactory = Factory.define(UserAccount, ({ faker }) => {
  const userName = faker.internet.userName()

  return {
    username: userName,
    email: faker.internet.email(),
    password: userName,
    status: faker.random.arrayElement(['active', 'deleted', 'disabled']),
    createdAt: DateTime.fromJSDate(faker.date.past()),
    updatedAt: DateTime.fromJSDate(faker.date.recent()),
  }
})
  .relation('presets', () => PresetFactory)
  .build()

export const PresetFactory = Factory.define(Preset, ({ faker }) => {
  return {
    name: faker.name.lastName(),
    mainImage: faker.image.unsplash.imageUrl(),
    createdById: 1,
    status: faker.random.arrayElement(['published', 'draft', 'deleted', 'disabled']),
    views: faker.datatype.number(),
    characterName: faker.name.firstName(),
    race: faker.random.arrayElement([undefined, 'nord', 'breton']),
  }
}).build()
