interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  setPokemonIndex: (index: number) => void;
  pokemonList: Pokemon[];
}
export default function NavBar({ pokemonList, setPokemonIndex }: NavBarProps) {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  return (
    <div>
      <NavBar setPokemonIndex={setPokemonIndex} pokemonList={pokemonList} />
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    </div>
  );
}
