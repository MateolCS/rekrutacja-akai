/*
  1. W pliku data.js pod zmienna "pokemons" znajduje się tablica zawierająca dane wielu pokemonów, masz do niej dostęp również w tym pliku. 
  Chciałbym, abyś użył jej do wyświetlenia wszystkich pokemonów w naszym Pokedexie. 
  W tym celu dla każdego z nich możesz stworzyć nowy element drzeewa DOM i umieścić w nim informacje o Pokemonie (możesz zawrzeć tam jego nazwę, zdjęcie, a na kontener w którym się znajduje nadać specjalną klasę zależnie od typu)
*/

// tutaj złapiemy sekcję, do której będziemy dodawać pokemony

const createPokemon = (inPokemon) => {
  const pokemon = document.createElement("div");
  pokemon.classList.add("pokemon");

  const pokemonName = document.createElement("h4");
  pokemonName.innerText = inPokemon.name;

  const pokemonImage = document.createElement("img");
  pokemonImage.src = inPokemon.image;

  const pokemonTypes = document.createElement("ul");
  inPokemon.types.forEach((type) => {
    const pokemonType = document.createElement("li");
    pokemonType.innerText = type;
    pokemonTypes.appendChild(pokemonType);
  });

  pokemon.appendChild(pokemonName);
  pokemon.appendChild(pokemonImage);
  pokemon.appendChild(pokemonTypes);

  return pokemon;
};

const pokemonsContainer = document.querySelector(".pokemons");

function renderPokemons(pokemons) {
  pokemons.forEach((pokemon) => {
    pokemonsContainer.appendChild(createPokemon(pokemon));
  });
}

// następnie wykonaj uzupełnioną metodę z tablicą pokemons, aby sprawdzić czy wszystko działa
renderPokemons(pokemons);

/*
  2. Przeglądanie całej listy pokemonów może okazać się trochę uciążliwe. Fajnie byłoby skorzystać z filtrów, które już znajdują sie w pliku html. 
  Napisz ciało funkcji które pozwoli nam na:
  - filtrowanie po typie
  - filtrowanie po nazwie (wpisany fragment zawiera się w nazwie pokemona)
*/

function filterPokemons(pokemons) {
  pokemonsContainer.innerHTML = "";
  const filterInputs = document.querySelectorAll(
    "input[type=checkbox]:checked"
  );

  const filteredTypes = Array.from(filterInputs).map((type) => type.id);

  const pokemonName = document
    .querySelector("#pokemon-name")
    .value.toLowerCase();

  const filteredPokemons = pokemons.filter((pokemon) => {
    const hasCorrectType = filteredTypes.some((type) => {
      return pokemon.types.includes(type);
    });

    const hasCorrectName = pokemon.name.toLowerCase().includes(pokemonName);
    return hasCorrectName && hasCorrectType;
  });

  console.log(filteredPokemons);
  return filteredPokemons;
}

const form = document.querySelector("form");

function submitForm(event) {
  event.preventDefault();
  // następnie wykonaj uzupełnioną metodę z tablicą pokemons, aby sprawdzić czy wszystko działa
  renderPokemons(filterPokemons(pokemons));
}

form.addEventListener("submit", submitForm);

/*
  3. Pokedex powinien wyglądać trochę lepiej, niż ten tutaj. W folderze znajdziesz plik style.css, w którym możesz ulepszyć wygląd naszego pokedexa
  Liczymy na Twoją kreatywność 😉
*/
