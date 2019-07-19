import { createStore } from 'redux'

const initialState = {
    jugadores: [{
        id: 1,
        nombre: "Cristiano Ronaldo",
        foto: "https://pbs.twimg.com/profile_images/668698612965183488/cSTUEASo_400x400.jpg"
    },
    {
        id: 2,
        nombre: "Alexis Sanchez",
        foto: "https://pbs.twimg.com/profile_images/702480712180617216/A0AjOHxb_400x400.jpg"
    },
    {
        id: 3,
        nombre: "Sergio Aguero",
        foto: "https://a.wattpad.com/useravatar/SoySergioAguero.256.530910.jpg"
    },
    {
        id: 4,
        nombre: "Ronaldinho",
        foto: "https://pbs.twimg.com/profile_images/378800000855408545/ec4f5b6591a23993fd5d7901ab34a2ce.jpeg"
    },
    {
        id: 5,
        nombre: "Zinedine Zidane",
        foto: "https://pbs.twimg.com/profile_images/712293057228640257/K5PkK3TL.jpg"
    }],
    titulares: [],
    suplentes: []
}
/* Al reducer se le pasan dos parámetros state y action. Se lee primero la acción y en base a éste se modifica el estado. 
Como state puede ser undefined se define un objeto al cual se pasa como parámetro inicial. */
const reducerEntrenador = (state = initialState, action) => {

    if (action.type === "AGREGAR_TITULAR") {
        return {
        ...state, // Todo lo que tiene el state. (El state que tenía antes, previo al cambio)
        titulares: state.titulares.concat(action.jugador), // Se lee el estado actual de los titulares y se le concatena el jugador que trae el action.
        jugadores: state.jugadores.filter(j => j.id !== action.jugador.id) // Validar que el jugador desaparezca del array jugadores y entre solamente en Titulares. El id que sea igual desaparece.
        }
    }

    if (action.type === "AGREGAR_SUPLENTE") {
        return {
        ...state, // Todo lo que tiene el state. (El state que tenía antes, previo al cambio)
        suplentes: state.suplentes.concat(action.jugador), // Se lee el estado actual de los suplentes y se le concatena el jugador que trae el action.
        jugadores: state.jugadores.filter(j => j.id !== action.jugador.id) // Validar que el jugador desaparezca del array jugadores y entre solamente en Suplentes. El id que sea igual desaparece.
        }
    }

    if (action.type === "QUITAR_TITULAR") {
        return {
        ...state, // Todo lo que tiene el state. (El state que tenía antes, previo al cambio)
        titulares: state.titulares.filter(j => j.id !== action.jugador.id), // Validar que el jugador desaparezca del array jugadores y entre solamente en Suplentes. El id que sea igual desaparece.
        jugadores: state.jugadores.concat(action.jugador) // Se lee el estado actual de los suplentes y se le concatena el jugador que trae el action.
        }
    }

    if (action.type === "QUITAR_SUPLENTE") {
        return {
        ...state, // Todo lo que tiene el state. (El state que tenía antes, previo al cambio)
        suplentes: state.suplentes.filter(j => j.id !== action.jugador.id), // Validar que el jugador desaparezca del array jugadores y entre solamente en Suplentes. El id que sea igual desaparece.
        jugadores: state.jugadores.concat(action.jugador) // Se lee el estado actual de los suplentes y se le concatena el jugador que trae el action.
        }
    }
    //console.log(action)
    return state
}

/* En el export debe ir una función reductora. */
export default createStore(reducerEntrenador)