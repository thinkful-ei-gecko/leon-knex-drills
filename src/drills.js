require('dotenv').config();
const knex = require('knex');


const knexInstance = knex({
  client: 'pg',
  connection: process.env.DB_URL,
});

//Drill #1
// function showTerm(term) {
//   knexInstance('shopping_list')
//     .select('*')
//     .where('name', 'ILIKE',`%${term}%`)
//     .then(res => console.log(res));
// }

// showTerm('chil');



//Drill #2

// function showPage(pageNumber) {
//   let itemsPerPage = 6;
//   let offset = (itemsPerPage * pageNumber) - itemsPerPage;
//   knexInstance('shopping_list')
//     .select('*')
//     .limit(itemsPerPage)
//     .offset(offset)
//     .then(res => console.log(res));
// }

// showPage(2);

//Drill #3
// function daysFunction(days) {
//   knexInstance('shopping_list')
//     .select('name','date_added')
//     .where(
//       'date_added',
//       '>',
//       knexInstance.raw(`now() - '?? days'::INTERVAL`,days)
//     )
//     .then(res => console.log(res));
// }


// daysFunction(3);

//Drill #4

// function totalCostPerCategory() {
//   knexInstance('shopping_list')
//     .select('category')
//     .sum('price')
//     .groupBy('category')
//     // .orderBy({column: 'total_price', order: 'desc'})
//     .then(res => console.log(res));
// }

// totalCostPerCategory();