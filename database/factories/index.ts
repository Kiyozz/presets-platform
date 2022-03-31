import Factory from '@ioc:Adonis/Lucid/Factory'
import UserAccount from 'App/Models/UserAccount'
import Preset from 'App/Models/Preset'
import { DateTime } from 'luxon'
import PresetDependency from 'App/Models/PresetDependency'

export const UserFactory = Factory.define(UserAccount, ({ faker }) => {
  const userName = faker.internet.userName()

  return {
    username: userName,
    email: faker.internet.email(),
    password: 'secret_password',
    status: faker.random.arrayElement(['active', 'deleted', 'disabled']),
    createdAt: DateTime.fromJSDate(faker.date.past()),
    updatedAt: DateTime.fromJSDate(faker.date.recent()),
  }
})
  .relation('presets', () => PresetFactory)
  .build()

export const PresetFactory = Factory.define(Preset, ({ faker }) => ({
  name: faker.name.firstName(),
  mainImage: '/presets/1.jpeg',
  createdById: 1,
  status: faker.random.arrayElement(['published', 'draft', 'deleted', 'disabled']),
  views: faker.datatype.number(),
  race: faker.random.arrayElement([undefined, 'nord', 'breton', 'elven']),
  downloads: faker.datatype.number(),
  version: faker.random.arrayElement(['1.0.0', '1.0.1', '2.0.0']),
}))
  .relation('dependencies', () => PresetDependencyFactory)
  .build()

export const PresetDependencyFactory = Factory.define(PresetDependency, ({ faker }) => ({
  comment: faker.lorem.sentence(),
  url: faker.internet.url(),
})).build()
