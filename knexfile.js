
module.exports = {

  development: {
    client: 'pg',
    connection: {
      host     : 'localhost',
      user     : 'seb',
    //   password : process.env.DB_PASS,
    //   database : process.env.DB_NAME,
      port     : 5432,
      ssl      : true,
      database: 'seb'
    }
    // migrations: {
    //   directory: './db/migrations',
    //   tableName: 'migrations'
    // },
    // seeds: {
    //   directory: './db/seeds'
    // }
  }

//   production: {
//     client: 'postgresql',
//     connection: process.env.DATABASE_URL + '?ssl=true',
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'migrations'
//     }
//   }

};