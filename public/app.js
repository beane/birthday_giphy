var baseUrl = 'https://api.giphy.com/v1/gifs/search'
var apiKey = 'api_key=dc6zaTOxFJmzC'
var imageUrls = []

$(document).ready(function() {
  makeGiphyRequest()
  $('button').click(function() {
    loadImage(imageUrls[getRandomNumber(imageUrls.length)])
  })
})

function makeGiphyRequest() {
  var url = baseUrl
    + '?q=happy+birthday&fmt=json&sort=relevant&limit=100&offset=' + getRandomNumber
    + '&' + apiKey;
  $.ajax(url, {
    success: function(data, status, xhr) {
      imageUrls = data['data'].map(function(el) {
        return el['images']['original']['url']
      })
      loadImage(url)
    },
    error: function(xhr, status, error) {
      console.log(':-(')
      console.log('xhr:', xhr)
      console.log('status:', status)
    }
  })
}

function getRandomNumber(n) {
  return Math.floor(Math.random() * n)
}

function loadImage(url) {
  var imageEl = document.images[0]
  var downloadingImage = new Image();
  downloadingImage.onload = function() {
    imageEl.src = this.src
  }
  downloadingImage.src = url
  console.log('url:', url)
}
