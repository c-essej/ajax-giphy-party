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

let url = 'api.giphy.com/v1/gifs/search';
const apiKey = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'

let $submit = $('#gif-submit');
let $form = $('#gif-form');
let $remove = $('#gif-remove');
let $container = $('.gif-container');


//we're getting the keyword
//how would the api know we're searching for the key word
//when we run getGif(), the promise is not returning anything back
//

async function getGif(){
  let value = getKeyword()
  let result = await axios.get(url, {params: { apiKey, value }});

  // console.log('isThisWorking', result);
  console.log('lookWhatImGetting', result.data.images);
}


/** this function returns the input value in the search form field */

function getKeyword(evt){
  // evt.preventDefault();
  let keyWord = $('#gif-search').val();
  return keyWord;
}

/** this function listens for the submit event on the form, and triggers
 * the getKeyword function
 */

$form.on('submit', getKeyword);