import React from 'react';
import {YellowBox} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';
import {ListEquipos, DetalleEquipo} from '../../pages'

class App extends React.Component {

    constructor(props) {
        super(props)
        YellowBox.ignoreWarnings(['Warning: componentWillReceiveProps']);
    };

    render () {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="ListEquipos" component={ListEquipos} title={'Listado Equipos'}/>
                    <Scene key="DetalleEquipo" component={DetalleEquipo} title={'Detalle'}/>
                </Scene>
            </Router>
        );
    }
}

export default App;