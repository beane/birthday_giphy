var baseUrl = 'https://api.giphy.com//v1/gifs/search'
var apiKey = 'api_key=dc6zaTOxFJmzC'

$(document).ready(function() {
  makeGiphyRequest()
  $('button').click(makeGiphyRequest)
})

function makeGiphyRequest() {
	var url = baseUrl
						+ '?q=happy+birthday&fmt=json&sort=relevant&limit=100&offset=' + getRandomNumber
						+ '&' + apiKey;
  $.ajax(url, {
    success: function(data, status, xhr) {
      url = data['data'][getRandomNumber()]['images']['original']['url']
      loadImage(url)
      console.log('url:', url)
    },
    error: function(xhr, status, error) {
      console.log(':-(')
      console.log('xhr:', xhr)
      console.log('status:', status)
    }
  })
}

function getRandomNumber() {
  return Math.floor(Math.random() * 100)
}

function loadImage(url) {
  var imageEl = document.images[0]
  var downloadingImage = new Image();
  downloadingImage.onload = function() {
    imageEl.src = this.src
  }
  downloadingImage.src = url
}
