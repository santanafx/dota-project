import { Dispatch } from 'redux';

type Heroes = {
  id: 1;
  name: string;
  atribute: string;
  winrate: number;
  pickrate: number;
  xpm: number;
  gpm: number;
}

type initialStateHeroesTableState = {
  data: Heroes[];
}

const initialState: initialStateHeroesTableState = {
  data: [],
};

type ActionHeroesTableState = {
  type: 'heroesTable/fetchTable' | 'heroesTable/updateHeroes';
}

const heroesTableReducer = (
  state: initialStateHeroesTableState = initialState,
  action: ActionHeroesTableState,
): initialStateHeroesTableState => {
  switch (action.type) {
    case 'heroesTable/fetchTable':
      return {
        ...state,
        data: action.payload,
      };
    case 'heroesTable/updateHeroes':
      return state;

    default:
      return state;
  }
};

// eslint-disable-next-line import/prefer-default-export
export const fetchTable = () => async (dispatch: Dispatch<any>): Promise<Heroes[]> => {
  //   dispatch(fetchTableRequest()); // Dispatch action to indicate data fetching started
  try {
    const res = await fetch('../../../heroesTableMockData.json');
    const data = await res.json();
    // dispatch(fetchTableSuccess(data)); // Dispatch action with fetched data
    dispatch({ type: 'heroesTable/fetchTable', payload: data });
  } catch (error) {
    // dispatch(fetchTableFailure(error)); // Dispatch action if fetching data fails
    if (error instanceof Error) {
      console.log(error);
    }
  }
};
/// /
// const getPokemon = async (id: number): Promise<void> => {
//     const data: Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//     const pokemon: any = await data.json()
//     const pokemonType: string = pokemon.types
//       .map((poke: any) => poke.type.name)
//       .join(", ")

//     const transformedPokemon = {
//       id: pokemon.id,
//       name: pokemon.name,
//       image: `${pokemon.sprites.front_default}`,
//       type: pokemonType,
//     }

//     showPokemon(transformedPokemon)
//   }
