import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import UserAccount from 'App/Models/UserAccount'

export default class UserAccountSeeder extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method

    await UserAccount.createMany([
      {
        id: 1,
        username: 'local',
        email: 'localhost@localhost.com',
        password: 'secret_password',
        status: 'active',
      },
      {
        id: 2,
        username: 'other',
        email: 'other@localhost.com',
        password: 'secret_password',
        status: 'active',
      },
    ])
  }
}
