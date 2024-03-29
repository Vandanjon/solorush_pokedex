import PropTypes from "prop-types";

function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }) {
  const previousIndex = () => {
    setPokemonIndex(pokemonIndex - 1);
  };

  const nextIndex = () => setPokemonIndex(pokemonIndex + 1);

  return (
    <div className="button-container">
      {pokemonIndex > 0 && <button onClick={previousIndex}>Précédent</button>}

      {pokemonIndex < pokemonList.length - 1 && (
        <button onClick={nextIndex}>Suivant</button>
      )}
    </div>
  );
}

NavBar.propTypes = {
  pokemonIndex: PropTypes.number.isRequired,
  setPokemonIndex: PropTypes.func.isRequired,
  pokemonList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    })
  ).isRequired,
};

export default NavBar;
