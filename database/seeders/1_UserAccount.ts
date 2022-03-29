import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import UserAccount from 'App/Models/UserAccount'
import Hash from '@ioc:Adonis/Core/Hash'

export default class UserAccountSeeder extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method

    await UserAccount.createMany([
      {
        id: 1,
        username: 'local',
        email: 'localhost@localhost.com',
        password: await Hash.make('secret_password'),
      },
      {
        id: 2,
        username: 'other',
        email: 'other@localhost.com',
        password: await Hash.make('secret_password'),
      },
    ])
  }
}
