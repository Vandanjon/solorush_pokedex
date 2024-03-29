import PropTypes from "prop-types";

function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }) {
  return <div className="button-container"></div>;
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
