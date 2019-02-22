import firebase from 'firebase/app';
import 'firebase/firestore';

function getAllItemsFromCollection(collection) {
  return new Promise((resolve, reject) => {
    const db = firebase.firestore();
    const items = {};

    db.collection(collection).get().then(snapshot => {
      snapshot.forEach(item => {
        items[item.id] = item.data();
      });
      resolve(items);
    }).catch(reject);
  });
}

function getAllCollections() {
  const collections = ['categories', 'forums', 'threads', 'posts'];
  const promises = collections.map(collection => {
    return getAllItemsFromCollection(collection);
  });

  return Promise.all(promises).then(data => {
    console.log(data);
  }, error => {
    console.log(error);
  })
}

export default {
  getAllItemsFromCollection,
  getAllCollections
};
