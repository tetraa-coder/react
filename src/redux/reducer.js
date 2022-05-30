import * as types from "./actionType" ;
const initialState = {
    pokemons: [],
    pokemon: {},
    loading: true,
};

const usersReducers = (state = initialState, action) => {
    switch(action.type) {
case types.GET_POKEMONS:
    return {
        ...state,
        pokemons: action.payload,
        loading: false
    };
    case types.DELETE_POKEMON:
        case types.ADD_POKEMON:
        return {
            ...state,
            loading: false,
        };
        case types.GET_SINGLE_POKEMON:
            return {
                ...state,
                pokemon: action.payload,
                loading: false,
            };

        default:
            return state;
    }
};

export default usersReducers ;