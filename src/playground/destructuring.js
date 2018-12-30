//
// Object destructuring
//

const person = {
  //name: 'Andrew',
  age: 26,
  location: {
    city: 'Hasselager',
    temp: 2
  }
}

const {name = 'Anonymous', age, location} = person;
// const name = person.name;
// const age = person.age;

console.log(`${name} is ${age}, and lives in ${location.city}`)

const {city, temp: temperature} = person.location;
if (city && temperature){
  console.log(`It's ${temperature} degrees in ${city}`)
}

const book = {
  title: 'ubegrænset handlekraft',
  author: 'Tony Robbins',
  publisher: {
    //name: 'Schultz'
  }
};

const {name: publisherName = 'Self-publisher'} = book.publisher;

console.log(`the book is publishe by: ${publisherName}`);


//
// Array destructuring
//

// const address = ['1299 S Junper Street', 'Philadelphia', 'Pennsylvania', '19147'];
// const [street, city, state = 'default value', zip] = address;
// console.log(`You are in ${address[city]} ${address[state]}.`);

const coffeeItem = ['coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [item, smallPrice, mediumPrice, largePrice] = coffeeItem;
console.log(`A medium ${item} costs: ${mediumPrice}`);
