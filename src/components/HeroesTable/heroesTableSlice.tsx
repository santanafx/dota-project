const initialStateHeroesTable = {
    data: [],
};

export default function heroesTableReducer(
    state = initialStateHeroesTable,
    action
) {
    switch (action.type) {
        case "heroesTable/fetchTable":
            return {
                ...state,
                data: action.payload,
            };
        case "heroesTable/updateHeroes":
            return state;

        default:
            return state;
    }
}

export const fetchTable = () => {
    return async (dispatch, getState) => {
        //   dispatch(fetchTableRequest()); // Dispatch action to indicate data fetching started
        try {
            const res = await fetch("../../../heroesTableMockData.json");
            const data = await res.json();
            // dispatch(fetchTableSuccess(data)); // Dispatch action with fetched data
            dispatch({ type: "heroesTable/fetchTable", payload: data });
        } catch (error) {
            // dispatch(fetchTableFailure(error)); // Dispatch action if fetching data fails
            console.log(error);
        }
    };
};
