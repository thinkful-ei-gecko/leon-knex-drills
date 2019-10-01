require('dotenv').config();
const knex = require('knex');


const knexInstance = knex({
  client: 'pg',
  connection: process.env.DB_URL,
});

function showTerm(term) {
  knexInstance('shopping_list')
    .select('*')
    .where('name', 'ILIKE',`%${term}%`)
    .then(res => console.log(res));
}

showTerm('chil');