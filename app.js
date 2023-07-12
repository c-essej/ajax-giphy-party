"use strict";

/** Write a function that dynamically updates the gif container every time
 * we have the action form submit.
 * Write a function that deletes the meme, and removes it from the gif
 * container
 * use .html(''), can also use .empty();
 */


//on submit, take the search value, and pass that value as an argument
//inside of getGif function
//once result is returned, append the result to $container


/**
 * Declare global variables for the following: API KEY, BASE URL, gifAr
 * (where the Gifs will be populated), and searchInput(the form 'search'
 * input field);
 *
 * Provided by Rithm: https://api.giphy.com/v1/gifs/search?q=hilarious&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym
 * For the API_KEY we only extract the value from the URL after the api_key=
 *
 * GIFY documentation: https://developers.giphy.com/docs/api/endpoint/#search
 */
const GIPHY_API_KEY = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";
const GIPHY_BASE_URL = "http://api.giphy.com/v1"; // be sure to include full url, protocol, hostname, whatever is specified in API docs
const $gifArea = $("#gif-area"); // container to store gifs
const $searchInput = $("#search");

//-----------------------------------------------------
/** Generate a random index in an array */

function generateRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
//-----------------------------------------------------
/** Use ajax result to add a gif */

function addImage(imageUrls) {

  if (imageUrls.length > 0) {
    const randomIdx = generateRandomIndex(imageUrls);
    const $newCol = $("<div>", { class: "col-md-4 col-12 mb-4" });
    const $newGif = $("<img>", {
      src: imageUrls[randomIdx],
      class: "w-100"
    });

    $newCol.append($newGif);
    $gifArea.append($newCol);
  }
}
//-----------------------------------------------------

/** Use ajax result to add a gif */

function addImage(imageUrls) {

  if (imageUrls.length > 0) {
    const randomIdx = generateRandomIndex(imageUrls);
    const $newCol = $("<div>", { class: "col-md-4 col-12 mb-4" });
    const $newGif = $("<img>", {
      src: imageUrls[randomIdx],
      class: "w-100"
    });

    $newCol.append($newGif);
    $gifArea.append($newCol);
  }
}

//-----------------------------------------------------

/** Get results from API. Returns list image URL */
async function getImagesFromGiphy(evt) {
  // extract keyword from form-search input field
  const searchTerm = $searchInput.val();
  // clear out form-search input field
  $searchInput.val("");

  // fetch API results
  // API result will vary based on the keyword that is passed in the param
  // Axious translates JSON objects into actual objects;
  const response = await axios.get(
    `${GIPHY_BASE_URL}/gifs/search`,
    { params: { q: searchTerm, api_key: GIPHY_API_KEY } });

  console.debug("getImagesFromGiphy response=", response);

  // bring this up in tommorows lecture 
  return response.data.data.map(image => image.images.original.url);
}
//-----------------------------------------------------

/** Remove gif */

function removeGif() {
  $gifArea.empty();
}

$("#remove").on("click", removeGif);

//-----------------------------------------------------
/** On form submit, get imageUrls and add to list. */

async function handleSubmit(evt) {
  evt.preventDefault();
  console.log("handleSubmit");

  const imageUrls = await getImagesFromGiphy();
  addImage(imageUrls);
}
//-----------------------------------------------------

// add click event to submit button;
$("form").on("submit", handleSubmit);