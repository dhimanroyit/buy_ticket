import firebase from 'firebase/app';


export const googleLogin = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
    return  firebase
              .auth()
              .signInWithPopup(provider)
              .then(res => {
                return res;
              })
              .catch(err => console.log(err) );
}



export const createUserWithEmailPass = ({email, password}) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(res => {
              return res;
            })
            .catch(err => console.log(err));
}

export const loginUserWithEmailPass = (email, pass) => {
  return  firebase.auth()
  .signInWithEmailAndPassword(email, pass)
            .then(res => {
              return res;
            })
            .catch(err => console.log(err));
}