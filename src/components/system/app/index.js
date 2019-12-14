import React from 'react';
import {YellowBox, StatusBar} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';
import {ListEquipos, DetalleEquipo, TeamsAdd} from '../../pages'
import {Provider} from 'react-redux';
import store from '../../../config/redux';
import colors from '../../../assets/colors'


class App extends React.Component {

    constructor(props) {
        super(props)
        YellowBox.ignoreWarnings(['Warning: componentWillReceiveProps']);
        StatusBar.setBarStyle('light-content', false);
    };

    render () {
        return (
            <Provider store = {store}>
                <Router>
                    <Scene key="root">
                        <Scene 
                            key="ListEquipos" 
                            component={ListEquipos} 
                            title={'Listado Equipos'}
                            titleStyle={{color: colors.white}}
                            navigationBarStyle={{backgroundColor: colors.navBar}}
                            backButtonTextStyle={{color: colors.white}}
                            backButtonTintColor={colors.white}
                            backTitleEnabled={true}

                        />
                        <Scene 
                            key="DetalleEquipo" 
                            component={DetalleEquipo} 
                            title={'Detalle'}
                            titleStyle={{color: colors.white}}
                            navigationBarStyle={{backgroundColor: colors.navBar}}
                            backButtonTextStyle={{color: colors.white}}
                            backButtonTintColor={colors.white}
                            backTitleEnabled={true}
                        />
                        <Scene 
                            key="TeamsAdd" 
                            component={TeamsAdd} 
                            title={'Crear equipo'}
                            titleStyle={{color: colors.white}}
                            navigationBarStyle={{backgroundColor: colors.navBar}}
                            backButtonTextStyle={{color: colors.white}}
                            backButtonTintColor={colors.white}
                            backTitleEnabled={true}
                        />
                    </Scene>
                </Router>
            </Provider>
        );
    }
}

export default App;