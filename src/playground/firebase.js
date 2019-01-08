// child changed
database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val())
});

//child child_added//child_removed
database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val())
});

//child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val())
});

database.ref('expenses').on('value', (snapshot) => {
    const expenses = [];

    snapshot.forEach((childSnapshot) => {
      expenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      });
    });

    console.log(expenses);
  });

database.ref('expenses')
  .once('value')
  .then((snapshot) => {
    const expenses = [];

    snapshot.forEach((childSnapshot) => {
      expenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      });
    });

    console.log(expenses);
  });

database.ref('expenses').push({
  description: 'first expense' ,
  note: 'cost alot',
  amount: 7999 ,
  createdAt: 0
})

database.ref('notes/-LVKBLkiZ6PnCl8hGT91').remove()

database.ref('notes').push({
  title: 'Course topics',
  body: 'some shit asdasdfadasd'
})

database.ref().on('value', (snapshot) => {
  console.log(`Ugur is a ${snapshot.val().job.title} at ${snapshot.val().job.company}`)
});

database.ref('location/city')
  .once('value')
  .then((snapshot) => {
    const val = snapshot.val();
    console.log(val);
  })
  .catch((e) => {
    console.log('Error fetching data', e)
  })

database.ref().set({
  job: {
    title: 'Web developer',
    company: 'my own'
  },
  stressLevel: 6,
  name: 'Ugur Tamer',
  age:34,
  location: {
    city: 'Hasselager',
    country: 'DK'
  }
}).then(() => {
  console.log('Data is saved')
}).catch((e) => {
  console.log('this failed', e)
});

database.ref().update({
  stressLevel: 9,
  'job/company': 'someone elses',
  'location/city': 'far away'
});

database.ref().remove().then(() => {
  console.log('removed')
}).catch((e) => {
  console.log('remove failed', e)
})
