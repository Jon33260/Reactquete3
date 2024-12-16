interface PokemonType {
  pokemon: {
    name: string,
  imgSrc: string,
  }
}
export default function PokemonCard({ pokemon }: PokemonType) {

    return (
        <figure>
            {
                pokemon.imgSrc && pokemon.name ?(
                    <div>
                        <img src ={pokemon.imgSrc} alt={"Photo d'un pokémon"}/> 
                        <p>{pokemon.name}</p>
                    </div> 
                ) : (
                    <p>???</p>
                )
            }
        </figure>
    )
}