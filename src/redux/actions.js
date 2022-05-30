import * as types from "./actionType" ;
import axios from "axios";
const getPokemons = (pokemons) => ({
type: types.GET_POKEMONS,
payload: pokemons ,
});
 
const pokemonDeleted = () => ({
    type: types.DELETE_POKEMON,
});

const pokemonAdded = () => ({
    type: types.ADD_POKEMON,
});

const getPokemon = (pokemon) => ({
    type: types.GET_SINGLE_POKEMON,
    payload: pokemon,
});
export const loadPokemons = () => {
    return function (dispatch){
        axios.get(`${process.env.REACT_APP_API}`).then((resp) => { 
            console.log("resp",resp);
            dispatch(getPokemons(resp.data));
        })
        .catch((error) => console.log(error));
    };
};

export const deletePokemon = (id) => {
    return function (dispatch){
        axios.delete(`${process.env.REACT_APP_API}/${id}`).then((resp) => { 
            console.log("resp",resp);
            dispatch(pokemonDeleted());
            dispatch(loadPokemons());
        })
        .catch((error) => console.log(error));
    };
};

export const addPokemon = (pokemon) => {
    return function (dispatch){
        axios.post(`${process.env.REACT_APP_API}`, pokemon).then((resp) => { 
            console.log("resp",resp);
            dispatch(pokemonAdded());
            dispatch(loadPokemons());
        })
        .catch((error) => console.log(error));
    };
};

export const getSinglePokemon = (id) => {
    return function (dispatch){
        axios.delete(`${process.env.REACT_APP_API}/${id}`).then((resp) => { 
            console.log("resp",resp);
            dispatch(getPokemon(resp.data));
            
        })
        .catch((error) => console.log(error));
    };
};
