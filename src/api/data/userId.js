import firebase from 'firebase/app';

export default function userId() {
  const auth = firebase.auth();
  // const user = auth.currentUser.uid;
  const userInfoObj = {
    uid: auth.currentUser?.uid,
    isAdmin: auth.currentUser?.uid === process.env.REACT_APP_ADMIN_UID,
  };
  return userInfoObj;
}
