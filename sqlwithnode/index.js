let {faker} = require("@faker-js/faker");
const mysql = require("mysql2");

const connection =  mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'newapps',
  password: "2424"
});
try{
connection.query("SHOW TABLES",(err,result)=>{
  console.log(result);
})} catch(errr){
  console.log(errr + "Error in Code");
}
connection.end();




function createRandomUser() {
    return {
      userId: faker.string.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
  }
  console.log(createRandomUser());