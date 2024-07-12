let {faker} = require("@faker-js/faker");
let joke = "https://v2.jokeapi.dev/joke/Any?safe-mode";
fetch(joke).then((data)=>{
  data.json().then((data)=>{
    console.log(data.setup);
    console.log(data.delivery);
  })
})
// function createRandomUser() {
//     return {
//       userId: faker.string.uuid(),
//       username: faker.internet.userName(),
//       email: faker.internet.email(),
//       password: faker.internet.password(),
//     };
//   }
//   console.log(createRandomUser());

  // console.log(joke);