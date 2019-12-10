import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import {ListEquipos, DetalleEquipo} from '../../pages'

class App extends React.Component {

    constructor(props) {
        super(props)
    };

    render () {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="ListEquipos" component={ListEquipos} title={'Listado'}/>
                    <Scene key="DetalleEquipo" component={DetalleEquipo}/>
                </Scene>
            </Router>
        );
    }
}

export default App;