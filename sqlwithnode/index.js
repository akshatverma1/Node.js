let {faker} = require("@faker-js/faker");
const mysql = require("mysql2");

const connection =  mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'newapps',
  password: "2424"
});


const iddd = "0001";
const idd2 = "0002";
let a ="INSERT INTO usertable (id,username,email,pass) VALUES ?";
let data = [[iddd,"akshatvermaasd","akshaverma2asda12","aasaddas"],
[idd2,"agfkshatsdasverma","akdfgsdfgshsadaaverma212","aafgsasdddas"]];

console.log("Akshat");
console.log("Akshat");
console.log("Akshat");
console.log("Akshat");
console.log("Akshat");
try{
connection.query(a,[data],(err,result)=>{
  console.log(result);
})} catch(errr){
  console.log(errr + "Error in Code");
}
connection.end();




// function createRandomUser() {
//     return {
//       userId: faker.string.uuid(),
//       username: faker.internet.userName(),
//       email: faker.internet.email(),
//       password: faker.internet.password(),
//     };
//   }
//   console.log(createRandomUser());