//API Key: ccbf52c53f1e40c4b5b144818230404
document.querySelector('button').addEventListener('click', getQuote)

function getQuote(){
    let anime = document.querySelector('input').value
    const url = (`https://animechan.vercel.app/api/random/anime?title=${anime}
    `)
    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data)
        console.log(data.anime)
        console.log(data.character)
        console.log(data.quote)
        document.querySelector('h1').innerText = data.anime
        document.querySelector('h2').innerText = data.character
        document.querySelector('h3').innerText = data.quote
    //   document.querySelector('h3').innerText = data.explanation
    //   document.querySelector('img').src = data.hdurl
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}


