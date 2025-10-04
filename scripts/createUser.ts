/* Quick script to add a user to the Juice Shop SQLite DB
 * Usage: npx ts-node scripts/createUser.ts
 */
import { sequelize } from '../models'
import { UserModel } from '../models/user'

async function run () {
  try {
    await sequelize.authenticate()
    console.log('Database connection OK')

    // Ensure models are synced (no destructive changes)
    await sequelize.sync()

    const username = 'bender_the_dev'
    const email = `${username}@example.com`
    const password = 'bender123'

    // Check if user exists
    const existing = await UserModel.findOne({ where: { username } })
    if (existing) {
      console.log('User already exists:')
      console.log({ id: existing.id, username: existing.username, email: existing.email })
      process.exit(0)
    }

    const created = await UserModel.create({ username, email, password })
    console.log('Created user:')
    console.log({ id: created.id, username: created.username, email: created.email, password: created.password })
    process.exit(0)
  } catch (err) {
    console.error('Error:', err)
    process.exit(1)
  }
}

run()
