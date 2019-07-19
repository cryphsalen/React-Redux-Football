import React from 'react';
import { connect } from 'react-redux';

const jugadores = ({jugadores, agregarTitular, agregarSuplente}) => (
    <section>
        <h2>Jugadores</h2>
        <div className="contenedor-jugadores">
            {
                jugadores.map(j => (
                    <article className="jugador" key={j.id}>
                        <img src={j.foto} alt={j.nombre}/>
                        <h3>{j.nombre}</h3>
                        <div>
                            <button onClick={() => agregarTitular(j)}>Titular</button>
                            <button onClick={() => agregarSuplente(j)}>Suplente</button>
                        </div>
                    </article>
                ))
            }
        </div>
    </section>
)

/* Conecto con el store. Valor jugadores */
const mapStateToProps = state => ({
    jugadores: state.jugadores
})

/* Aquí se colocan las funciones que van a ser convertidas en propiedades */
const mapDispatchToProps = dispatch => ({
    agregarTitular(jugador) {
        /* Este es un action. Realizar prueba de console.log en reducerEntrenador de store.js */
        dispatch({
            type: "AGREGAR_TITULAR",
            jugador
        })
    },

    agregarSuplente(jugador){
        dispatch({
            type: "AGREGAR_SUPLENTE",
            jugador
        })
    }
})
/* connect siempre va a recibir estas dos funciones que va a convertir a propiedades */
export default connect(mapStateToProps, mapDispatchToProps)(jugadores)