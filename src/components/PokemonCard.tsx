
const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

const pokemon = pokemonList[0];
function PokemonCard() {
  return (
    <figure>
      {pokemon.imgSrc ? (
        <div>
          <img src={pokemon.imgSrc} alt={"photo de bulbi"}/>
          <p>{pokemon.name}</p>
        </div>
      ) : (
        <p>"???"</p>
      )}
    </figure>
  );
}

export default PokemonCard;