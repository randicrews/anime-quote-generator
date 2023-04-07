//API Key: ccbf52c53f1e40c4b5b144818230404
document.querySelector('button').addEventListener('click', getQuote)
document.querySelector('input').addEventListener('keydown', event => {
    if (event.keyCode !== 13) return console.log(event.target.value);
    getQuote();
  });
var div = document.querySelector("body");

const root = document.documentElement;
root.addEventListener('mousemove', e => {
   let x = e.clientX / innerWidth,
       y = e.clientY / innerWidth;
   x = Math.floor(Math.sqrt(x) * 230);
   
   root.style.setProperty('--h', x)
});
// function randomChar(){
//     let anime = document.querySelector('input').value
//     const url = ('https://animechan.vercel.app/api/random/')
//     fetch(url)
//     .then(res => res.json()) // parse response as JSON
//     .then(data => {
//         document.querySelector('h3').innerText = ` what would ${data.character} say?`
//         console.log(data)
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     });
// }
// randomChar()
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
        if (data.anime == undefined){
            data.anime = 'PLEASE ENTER VALID ANIME'
            data.character = ''
            data.quote =''
        }
        document.querySelector('h1').innerText = data.anime
        document.querySelector('h2').innerText = data.character
        document.querySelector('h3').innerText = `" ${data.quote} "`
    //   document.querySelector('h3').innerText = data.explanation
    //   document.querySelector('img').src = data.hdurl
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}


