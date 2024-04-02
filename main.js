const pokemonImage = document.getElementById("js--pokemon-image")

let randomNumber = Math.ceil(Math.random() * 151);

let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber)
.then(function(response){
    return response.json();
})
.then(function(realData){
    pokemonImage.src = realData.sprites.front_default;
});

console.log(randomNumber);

const fetchbutton = document.getElementById("js--fetch");

fetchbutton.onclick = function(){
    Math.random()
};

function fetchPokemon() {
    const randomNumber = Math.ceil(Math.random() * 151);

    fetch('https://pokeapi.co/api/v2/pokemon/' + randomNumber)
        .then(res => res.json())
        .then(data => {
            pokemonImage.src = data?.sprites?.front_default ?? "";
        });
}

fetchbutton.onclick = fetchPokemon;
fetchPokemon();