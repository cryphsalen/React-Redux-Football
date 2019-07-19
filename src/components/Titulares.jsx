import React from 'react';
import {connect} from 'react-redux';

const Titulares = ({titulares, quitarTitular}) => (
    <section>
        <h2>Titulares</h2>
        <div className="cancha">
        {
            titulares.map(j => (
                <article className="titular" key={j.id}>
                    <div>
                        <img src={j.foto} alt={j.nombre} />
                        <button onClick={() => quitarTitular(j)}>X</button>
                    </div>
                    <p>{j.nombre}</p>
                </article>
            ))
        }
        </div>
    </section>
)

/* Conecto con el store */
const mapStateToProps = state => ({
    titulares: state.titulares
})

const mapDispatchToProps = dispatch => ({
    quitarTitular(jugador){
        dispatch({
            type: "QUITAR_TITULAR",
            jugador
        })
    }
})

/* connect siempre va a recibir estas dos funciones que va a convertir a propiedades */
export default connect(mapStateToProps, mapDispatchToProps)(Titulares)