import { BuyPokemon, FetchPokemonFailure, FetchPokemonRequest, FetchPokemonSuccess, ReturnPokemon} from "./actions";
import { defaultGamesState, initialStateSearch } from "./store";

// Reducers

export const GamesReducer = (state = defaultGamesState, action) => {
    switch (action.type) {
        case BuyPokemon: {
            return {
                ...state,//Traigame el estado actu
                //Y luego actualiza con la siguiente linea
                pokemon: state.pokemon - action.payload
            }
        }
        case ReturnPokemon:
            return {
                ...state,
                pokemon: state.pokemon + action.payload
            }
        default: return state;
    }
}
//Estos para las busquedas
export const SearchReducer = (state = initialStateSearch, action) => {
    switch (action.type) {
        //Para hacer la solicitud a la api 
        case FetchPokemonRequest:
            return {
                ...state,
                loading: true
            }
            //Cuando se hace la petición correcta
        case FetchPokemonSuccess:
            return {
                loading: false,
                pokemon: action.payload,
                error: ''
            }
            //Este es para cuando la api falla
        case FetchPokemonFailure:
            return {
                loading: false,
                pokemon: [],
                error: action.payload
            }
        default: return state;
    }
}