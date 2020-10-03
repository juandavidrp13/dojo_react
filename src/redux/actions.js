//import del archivo
import Axios from "axios"



// Que parte del codigo realizar cuado lleguen ciertas acciones
export const BuyPokemon = "BUYPOKEMON"
export const ReturnPokemon = "RETURNPOKEMON"


export const FetchPokemonRequest = "FETCHPOKEMONREQUEST"
export const FetchPokemonSuccess = "FETCHPOKEMONSUCCESS"
export const FetchPokemonFailure = "FETCHPOKEMONFAILURE"

export  const BuyPokemonsAction = (cant)=>{
    return{
        type:BuyPokemon,
        payload:cant
    }
}

export  const ReturnPokemonAction = (cant)=>{
    return{
        type:BuyPokemon,
        payload:cant
    }
}

// Async Actions
export const FetchPokemonRequestAction = () => {
    return {
        type: FetchPokemonRequest,

    }
}
export const FetchPokemonSuccessAction = (pokemon) => {
    return {
        type: FetchPokemonSuccess,
        payload: pokemon

    }
}
//Por si falla que retorne el error
export const FetchPokemonFailureAction = (error) => {
    return {
        type: FetchPokemonFailure,
        payload: error

    }
}
//Esta es la que consume la api 
export const FetchPokemonAction = (valor) => {
    return (dispatch) => {
        dispatch(FetchPokemonRequestAction());
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${valor}`)
            .then(response => {
                dispatch(FetchPokemonSuccessAction([response.data]))
            })
            .catch(error => {
                dispatch(FetchPokemonFailureAction("No se encontro el pokemon"))
            })
    }
}