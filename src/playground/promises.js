const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'Ugur',
      age: 32
  });
  // reject('Something went wrong')
  },1000)
});

promise.then((data) => {
  console.log(data)

  return promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('This is my other promise');
    },1000)
  });
}).then((str) => {
  console.log('does this run', str)
}).catch((error) => {
  console.log('error', error)
})
