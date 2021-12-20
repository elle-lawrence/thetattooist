# the tattooist  [![Netlify Status](https://api.netlify.com/api/v1/badges/4ab7e730-7ed3-4cfd-a988-66195e79a991/deploy-status)](https://app.netlify.com/sites/drt-sortinghat/deploys)
<!-- update the netlify badge above with your own badge that you can find at netlify under settings/general#status-badges -->



[View App](#your-link)

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
- They have students in their classrooms that they would like to put into random groups and they have a love and passion of Harry Potter
- The problem this app solves for them is it allows them to get their students involved and excited about being in random groups. The students have felt that the groups have not been so random and based on favorites.

## Features <!-- List your app features using bullets! Do NOT use a paragraph. No one will read that! -->
- When a new student is added an object should be created and that object should be pushed into an array of students that then prints to the DOM.
- House Colors: The color of the student's card changes depending on which house they were sorted.
- Card Ordering: Sort the student cards by some criteria (i.e. alphabetically by name, by house)
- Voldermort's Army: Create a separate container of cards that hold the cards for students that have been expelled. These should be styled differently from Hogwarts students.

## Video Walkthrough of APP NAME <!-- A loom link is sufficient -->
https://www.loom.com/share/829b90d831ea441ba2db6bea724af210

## Relevant Links <!-- Link to all the things that are required outside of the ones that have their own section -->
- [Check out the deployed site](#your-link)
- [Wireframes](#your-link)
- [Project Board](#your-link)

## Code Snippet <!-- OPTIONAL, but doesn't hurt -->
PLACE CODE SNIPPET HERE

## Project Screenshots <!-- These can be inside of your project. Look at the repos from class and see how the images are included in the readme -->
<img width="1148" alt="Your Alt" src="your-link.png">

## Contributors
- [YOUR NAME](https://github.com/your-github-url)