var { createDatabase, createTable, createTable2 } = require('./Task2-1');

const databaseName = 'chandudatabase';


createDatabase(databaseName);


createTable();
//one more function for creating table in our database with static connection object
// createTable2(databaseName)