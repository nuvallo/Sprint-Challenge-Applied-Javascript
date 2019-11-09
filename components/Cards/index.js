// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector(".cards-container");
// "API"
const promise = axios.get(
  "https://lambda-times-backend.herokuapp.com/articles"
);

promise.then(response => {
  // Getting Data from API
  const newData = response.data;
  const articles = [
    newData.articles.javascript,
    newData.articles.bootstrap,
    newData.articles.jquery,
    newData.articles.technology
  ];

  function newCard(article) {
    // content
    article.forEach(content => {
      // Creating elements
      const card = document.createElement("div");
      const headline = document.createElement("div");
      const author = document.createElement("div");
      const imgContainer = document.createElement("div");
      const image = document.createElement("img");
      const by = document.createElement("span");

      // Classes
      card.classList.add("card");
      headline.classList.add("headline");
      author.classList.add("author");
      imgContainer.classList.add("img-container");

      // Content
      image.src = content.authorPhoto;
      headline.textContent = content.headline;
      by.textContent = `By: ${content.authorName}`;

      // append
      cardsContainer.append(card);
      card.append(headline);
      card.append(author);
      author.append(imgContainer);
      imgContainer.append(image);
      author.append(by);
    });
  }
  newCard(articles[0]);
  newCard(articles[1]);
  newCard(articles[2]);
  newCard(articles[3]);
});
