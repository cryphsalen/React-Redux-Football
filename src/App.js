import React from 'react';
/* Importo el Provider y store para informar que utlizaré el redux */
import { Provider } from 'react-redux'
import store from "./store"
import Jugadores from './components/jugadores'
import EquipoSeleccionado from './components/EquipoSeleccionado'
import './styles/styles.scss'

/* Informo el store que voy a usar. Jugadores y EquipoSeleccionado son declaraciones de componentes. */
const App = () =>(
  <Provider store={store}>
    <main>
      <h1>Mantenedor de Equipo</h1>
      <Jugadores />
      <EquipoSeleccionado />
    </main>
  </Provider>
)

export default App;
