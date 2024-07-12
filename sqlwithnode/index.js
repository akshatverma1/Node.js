let {faker} = require("@faker-js/faker");
try{
let {joke} = require("https://v2.jokeapi.dev/joke/Any?safe-mode");
throw err;
}catch(err){
console.log(err);
}
function createRandomUser() {
    return {
      userId: faker.string.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
  }
  console.log(createRandomUser());

  console.log(joke);