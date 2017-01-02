var url = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cat"

fetch(url)
    .then(function (response) {
        return response.text()
    })
    .then(function (text) {
        console.log(text)
    })
    .catch(error => {
        console.log(error)
    })