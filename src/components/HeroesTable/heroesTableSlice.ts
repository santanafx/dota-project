import { PayloadAction } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';

interface Heroes {
  id: 1;
  name: string;
  atribute: string;
  winrate: number;
  pickrate: number;
  xpm: number;
  gpm: number;
}

interface initialStateHeroesTableState {
  data: Heroes[];
}

const initialState: initialStateHeroesTableState = {
  data: [],
};

export default function heroesTableReducer(
  state: initialStateHeroesTableState = initialState,
  action: PayloadAction<any>,
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
}

export const fetchTable = () => async (dispatch: Dispatch<any>) => {
  //   dispatch(fetchTableRequest()); // Dispatch action to indicate data fetching started
  try {
    const res = await fetch('../../../heroesTableMockData.json');
    const data = await res.json();
    // dispatch(fetchTableSuccess(data)); // Dispatch action with fetched data
    dispatch({ type: 'heroesTable/fetchTable', payload: data });
  } catch (error) {
    // dispatch(fetchTableFailure(error)); // Dispatch action if fetching data fails
    console.log(error);
  }
};

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
