module.exports = {
  dialect: 'postgres',
  host: process.env.DB_URL ? `${process.env.DB_URL}` : '127.0.0.1',
  username: 'docker',
  password: 'docker',
  database: 'gonodemodule2',
  operatorAliases: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}
