import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

function signUpNewUser(email, password) {
  return firebase.auth()
      .createUserWithEmailAndPassword(email, password);
}

function getAllUsers() {
  return new Promise((resolve, reject) => {
    const db = firebase.firestore();
    const users = {};

    db.collection('users').get().then(snapshot => {
      snapshot.forEach(user => {
        users[user.id] = user.data();
      });
      resolve(users);
    }).catch(reject);
  });
}

export default {
  signUpNewUser,
  getAllUsers,
};
