require('dotenv').config();
const knex = require('knex');

const knexInstance = knex({
  client: 'pg',
  connection: process.env.DB_URL,
});

knexInstance.from('amazong_products')
  .select('product_id','name', 'price', 'category')
  .from('amazong_products')
    .where({ name: 'Point of view gun'})
    .then(result => {
    console.log(result);
  })
  .then(() => { 
    console.log('yeah boy');
  });

console.log('knex and driver installed properly');