const HashMap = require('../src/HashMap');
const test = require('unit.js');
const faker = require('faker');

const userData = [];
const numberElement = 1000000;

// Logs
Log = (...args) => console.log('LOG ', ...args);

for (let x = 0; x < 100; x++) {
  let data = {
    _id: faker.random.uuid(),
    name: `${faker.name.findName()} ${faker.name.lastName()}`,
    phone: faker.phone.phoneNumber(),
    age: faker.random.number(),
    address: faker.address.streetAddress(),
    company: faker.company.companyName(),
    email: faker.internet.email(),
  }
  
  userData.push(data);
}



hashTableWithManyData = new HashMap();
hashTable = new HashMap();

for (x = 0; x < numberElement; x++) {
  hashTableWithManyData.insert(`element${x}`, x)
};

describe('HashMapTest', function () {
  before('populate hash table', function() {
    userData.forEach(function(user){
      let key = user.name;
      hashTable.insert(key, user)
    });

  });
  

  it('Is there data in the repository?', function () {
    test
      .number(hashTable.getAllKeys().length).is(userData.length);
  });


  it('Can i get a non-existent key?', function () {
    const r = hashTable.get("Doesn't exist this User")
    test
      .undefined(r).undefined();

  });

  it(`Can I get a random user?`, function () {
    const randomId = Math.floor(Math.random() * userData.length) + 1;
    const randomUser = userData[randomId];
    const r = hashTable.get(randomUser.name);
    // Log(r.data.name, r.data.key)
    test
      .string(r.key)
      .string(randomUser.name).is(r.data.name)
      .string(randomUser._id).is(r.data._id)
      .string(randomUser.phone).is(r.data.phone);
  });

   it(`Can I Find the last user ${userData[userData.length-1].name}`, function () {
     const lastElement = userData[userData.length - 1];
     const r = hashTable.get(lastElement.name)

     test
       .string(lastElement.name).is(r.data.name)
       .string(lastElement._id).is(r.data._id)
       .string(lastElement.phone).is(r.data.phone);
   });

   it(`find element into ${numberElement} elements`, function () {
      const randomId = Math.floor(Math.random() * userData.length) + 1;
      const r = hashTableWithManyData.get(`element${randomId}`);
      test
        .number(r.data).is(randomId)

   });

});