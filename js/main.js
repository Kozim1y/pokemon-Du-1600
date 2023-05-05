const elSearchPokemonForm = document.querySelector(".search-pokemon-form");
const elSearchPokemonInput = elSearchPokemonForm.querySelector(
	".search-pokemon-input",
);
const elList = document.querySelector(".list");
const searchPokemonArray = [];

// Template
const elPokemonTemplate = document.querySelector(
	".pokemon-item-template",
).content;
const pokemonFragment = document.createDocumentFragment();

function showPokemons(pokemonArray) {
	elList.innerHTML = "";
	for (let pokemon of pokemonArray) {
		const pokemonTemplateClone = elPokemonTemplate.cloneNode(true);
		pokemonTemplateClone.querySelector(".list-item__img").src = pokemon.img;
		pokemonTemplateClone.querySelector(".list-item__name").textContent =
			pokemon.name;
		pokemonTemplateClone.querySelector(".list-item__info").textContent =
			pokemon.type.join(", ");
		pokemonFragment.appendChild(pokemonTemplateClone);
	}
	elList.appendChild(pokemonFragment);
}
showPokemons(pokemons);

elSearchPokemonForm.addEventListener("submit", (evt) => {
	evt.preventDefault();
	const inputValue = elSearchPokemonInput.value;

	for (let pokemon of pokemons) {
		if (inputValue.toLowerCase() === pokemon.name.toLowerCase()) {
			searchPokemonArray.push(pokemon);
		}
	}
	showPokemons(searchPokemonArray);
});

// elSearchPokemonForm.addEventListener("submit", (evt) => {
//   evt.preventDefault()
// })

// Saytni yangilash
window.addEventListener("keyup", (evt) => {
	if (evt.key === "Escape") {
		window.location.reload();
	}
});

// string method match()
// ============================No comment============================
// "main|header|footer" = "main, header, footer"
// let str = "main|header|footer";
// console.log(str.split("|").join(", "));
