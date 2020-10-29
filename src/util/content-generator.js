const faker = require('faker')


const length = 5

const content = Array.from({length}, () => {
  return {
    author: {
      publishedDate: faker.date.past(), 
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      jobType: faker.name.jobType(),
      jobTitle: faker.name.jobTitle(),
      avatar: faker.internet.avatar(),
    },
    content: {
      title: faker.random.words(4),
      description: Array
        .from({length:Math.ceil(Math.random() * 5)}, () => {
          const asta = faker.random.words(24)
          return asta
        }),
    }
  }
})

console.log(JSON.stringify({content}, null, 2))