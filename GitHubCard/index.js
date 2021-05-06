const { default: axios } = require("axios");

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const cards = document.querySelector("div.cards");

function githubCard(obj) {
  const gitCard = document.createElement("div");
  const cardInfo = document.createElement("div");
  const image = document.createElement("img");
  const name = document.createElement("h1");
  const username = document.createElement("h2");
  const locationP = document.createElement("p");
  const profileP = document.createElement("p");
  const link = document.createElement("a");
  const followersP = document.createElement("p");
  const followingP = document.createElement("p");
  const bioP = document.createElement("p");
  //const {name, login, location, html_url, followers, following, bio} = res.data

  image.src = obj.avatar_url;
  name.textContent = obj.name;
  username.textContent = obj.login;
  locationP.textContent = `Location: ${obj.location}`;
  link.href = obj.html_url;
  link.textContent = obj.html_url;
  profileP.textContent = "Profile: ";
  followersP.textContent = `Followers: ${obj.followers}`;
  followingP.textContent = `Following: ${obj.following}`;
  bioP.textContent = `Bio: ${obj.bio}`;

  gitCard.classList.add("card");
  cardInfo.classList.add("card-info");
  name.classList.add("name");
  username.classList.add("username");

  gitCard.appendChild(image);
  gitCard.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(locationP);
  cardInfo.appendChild(profileP);
  profileP.appendChild(link);
  cardInfo.appendChild(followersP);
  cardInfo.appendChild(followingP);
  cardInfo.appendChild(bioP);

  return gitCard;
}

axios
  .get("https://api.github.com/users/joeEscob1023")
  .then((res) => {
    const id = res.data;

    cards.appendChild(githubCard(id));
  })
  .catch((err) => console.log("err message", err));

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell",
];

followersArray.forEach(function (follower) {
  console.log(follower);
  axios
    .get(`https://api.github.com/users/${follower}`)
    .then((res) => {
      let id = res.data;
      console.log(id);

      cards.appendChild(githubCard(id));
    })
    .catch((err) => {
      console.log(err);
    });
});

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
