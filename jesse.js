let url = 'https://api.giphy.com/v1/gifs/search';


const api_key = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';

let $submit = $('#gif-submit');
let $form = $('#gif-form');
let $remove = $('#gif-remove');
let $container = $('.gif-container');


//we're getting the keyword
//how would the api know we're searching for the key word
//when we run getGif(), the promise is not returning anything back
//

async function getGif(q) {
  let q = getKeyword();

  let result = await axios.get(url, { params: { q, api_key } });

  // console.log('isThisWorking', result);
  // console.log('lookWhatImGetting', result.data.images);
  return result;
}


/** this function returns the input value in the search form field */

function getKeyword(evt) {
  evt.preventDefault();
  let keyword = $('#gif-search').val();
  console.log("keyword :", keyword);
  return keyword;
}

/** this function listens for the submit event on the form, and triggers
 * the getKeyword function
 */


async function handleSubmit(evt) {
  // get the keyword;
  // make the axios request, "get gify url";
  // append image to DOM
}

// instead of passing getKeyword, pass handleSubmit;
$form.on('submit', getKeyword);