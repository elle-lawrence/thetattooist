import firebase from 'firebase/app';

export default function userId() {
  const auth = firebase.auth();
  const user = auth.currentUser.uid;
  const userInfoObj = {
    uid: user,
    isAdmin: auth.currentUser.uid === process.env.REACT_APP_ADMIN_UID,
  };
  console.warn(userInfoObj.isAdmin);
  return userInfoObj;
}
