import React from 'react';
import {YellowBox} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';
import {ListEquipos, DetalleEquipo} from '../../pages'
import {Provider} from 'react-redux';
import store from '../../../config/redux';

class App extends React.Component {

    constructor(props) {
        super(props)
        YellowBox.ignoreWarnings(['Warning: componentWillReceiveProps']);
    };

    render () {
        return (
            <Provider store = {store}>
                <Router>
                    <Scene key="root">
                        <Scene key="ListEquipos" component={ListEquipos} title={'Listado Equipos'}/>
                        <Scene key="DetalleEquipo" component={DetalleEquipo} title={'Detalle'}/>
                    </Scene>
                </Router>
            </Provider>
        );
    }
}

export default App;