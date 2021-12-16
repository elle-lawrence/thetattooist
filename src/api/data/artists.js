import axios from 'axios';
import firebaseConfig from '../apiKeys';

const { databaseURL } = firebaseConfig;

const getAllArtists = () => new Promise((resolve, reject) => {
  axios
    .get(`${databaseURL}/artists.json?`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const getSingleArtist = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(`${databaseURL}/artists/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

const createArtist = (obj, user) => new Promise((resolve, reject) => {
  axios
    .post(`${databaseURL}/artists.json`, obj)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios
        .patch(`${databaseURL}/artists/${firebaseKey}.json`, { firebaseKey })
        .then(() => getAllArtists(user).then(resolve));
    })
    .catch(reject);
});

const deleteArtist = (firebaseKey, user) => new Promise((resolve, reject) => {
  axios
    .delete(`${databaseURL}/artists/${firebaseKey}.json`)
    .then(() => getAllArtists(user).then(resolve))
    .catch(reject);
});

const updateArtist = (formObj, user) => new Promise((resolve, reject) => {
  axios
    .patch(`${databaseURL}/artists/${formObj.firebaseKey}.json`, formObj)
    .then(() => getAllArtists(user).then(resolve))
    .catch(reject);
});

export {
  getAllArtists, getSingleArtist, createArtist, deleteArtist, updateArtist,
};
