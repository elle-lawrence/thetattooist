# the tattooist  [[![Netlify Status](https://api.netlify.com/api/v1/badges/7220a1a8-e8de-4748-b706-d403e0753337/deploy-status)](https://app.netlify.com/sites/the-tattooist/deploys)]
<!-- update the netlify badge above with your own badge that you can find at netlify under settings/general#status-badges -->



[View App](https://the-tattooist.netlify.app)

## Get Started <!-- OPTIONAL, but doesn't hurt -->

const getFavoritedArtists = (user) => new Promise((resolve, reject) => {
  Promise.all([getAllArtists(), getAllFavorites(user)])
    .then(([artists, favorites]) => {
      const favsArray = artists.filter((artist) => favorites.find((favorite) => favorite.artistId === artist.firebaseKey));
      resolve(favsArray);
    }).catch((error) => reject(error));
});

## About the User <!-- This is a scaled down user persona -->
- The ideal user for this application is someone who is interested in getting tattoos or find a new artist
- Finding a new tattoo artist is still relatively hard. You cant easily just google artist as sooo many dont have their own website.
- This app makes it so much easier and allows you to search by lots of different criteria like gender and sexuality. Then you can favorite them and come back your read to get that epic sleeve you've always wanted.

## Features <!-- List your app features using bullets! Do NOT use a paragraph. No one will read that! -->
- Anyone can search by name, location, gender, etc. As an authenticated user you can also favorite artists and see them all in one place. An admin can add, edit and delete artists.
- House Colors: The color of the student's card changes depending on which house they were sorted.


## Video Walkthrough of APP NAME <!-- A loom link is sufficient -->


## Relevant Links <!-- Link to all the things that are required outside of the ones that have their own section -->
- [Check out the deployed site](https://the-tattooist.netlify.app)
- [Wireframes](https://www.figma.com/file/KfctDlzX6eC467EkF0LTTF/theTattooist?node-id=1%3A3)
- [Project Board](https://github.com/elle-lawrence/thetattooist/projects/1)


## Contributors
- [Elle Lawrence](https://github.com/elle-lawrence)