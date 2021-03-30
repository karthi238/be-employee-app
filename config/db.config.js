'use strict';
const mysql = require('mysql');

//local mysql db connection
const dbConn = mysql.createConnection({
  host: 'sql6.freemysqlhosting.net',
  user: 'sql6402401',
  password: 'WCm8jI5gyH',
  database: 'sql6402401'
});

dbConn.connect(function (err) {
  if (err) throw err;
  // const createQuery = "CREATE  TABLE IF NOT EXISTS `employees` (`id` BIGINT UNSIGNED AUTO_INCREMENT,`first_name` VARCHAR(255) NOT NULL,`last_name` VARCHAR(255) NOT NULL,`email` VARCHAR(255) NOT NULL,`phone` VARCHAR(50) NOT NULL,`organization` VARCHAR(255) NOT NULL,`designation` VARCHAR(100) NOT NULL,`salary` DECIMAL(11,2) UNSIGNED DEFAULT 0.00,`status` TINYINT UNSIGNED DEFAULT 0,`is_deleted` TINYINT UNSIGNED DEFAULT 0,`created_at` DATETIME NOT NULL,`updated_at` DATETIME NOT NULL,PRIMARY KEY (`id`))ENGINE = InnoDB;"
  console.log("Database Connected!");

  // dbConn.query(createQuery, function (err, results, fields) {
  //   if (err) {
  //     console.log(err.message);
  //   }
  // });

});
module.exports = dbConn;


// {
//   host: 'db4free.net',
//   port: 3306,
//   user: 'employee123',
//   password: 'Number@123',
//   database: 'db_employee',
//   connectionLimit: 100,
//   multipleStatements: true
// }