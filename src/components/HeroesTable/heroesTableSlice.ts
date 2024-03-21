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

interface FetchTableAction {
  type: 'heroesTable/fetchTable';
  payload: Heroes[];
}

interface UpdateHeroesAction {
  type: 'heroesTable/updateHeroes';
}

type Action = FetchTableAction | UpdateHeroesAction;

const initialState: initialStateHeroesTableState = {
  data: [],
};

export default function heroesTableReducer(
  state = initialState,
  action: Action,
) {
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

export const fetchTable = () => async (dispatch: Dispatch<Action>): Promise<void> => {
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
