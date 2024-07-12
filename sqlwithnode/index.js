let {faker} = require("@faker-js/faker");

function createRandomUser() {
    return {
      userId: faker.string.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
  }
  console.log(createRandomUser());