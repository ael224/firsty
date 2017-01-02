var url = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cat"

fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (json) {
        console.log(json)
        console.log(json.data.url)
    })
    .catch(error => {
        console.log(error)
    })