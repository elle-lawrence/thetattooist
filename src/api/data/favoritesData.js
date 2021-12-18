import axios from 'axios';
import firebaseConfig from '../apiKeys';

const { databaseURL } = firebaseConfig;

const getAllFavorites = (user) => new Promise((resolve, reject) => {
  axios
    .get(`${databaseURL}/favorites.json?orderBy="uid"&equalTo="${user}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const getSingleFavorite = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(`${databaseURL}/favorites/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

const createFavorite = (obj) => new Promise((resolve, reject) => {
  axios
    .post(`${databaseURL}/favorites.json`, obj)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios
        .patch(`${databaseURL}/favorites/${firebaseKey}.json`, { firebaseKey })
        .then(() => getAllFavorites(obj.uid).then(resolve));
    })
    .catch(reject);
});

const deleteFavorite = (obj) => new Promise((resolve, reject) => {
  axios
    .delete(`${databaseURL}/favorites/${obj.firebaseKey}.json`)
    .then(() => getAllFavorites(obj.uid).then(resolve))
    .catch(reject);
});

export {
  getAllFavorites, getSingleFavorite, createFavorite, deleteFavorite,
};
