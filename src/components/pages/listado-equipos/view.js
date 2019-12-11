import React from 'react';
import {SafeAreaView, View, Text, FlatList, Alert} from 'react-native';
import styles from './styles';
import {Actions} from 'react-native-router-flux';
import {TeamCard} from '../../molecules';
import * as api from '../../../api';
import _ from 'lodash';

class ListEquipos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            teams: [],
        };
        this._loadEquiposList();
    };

    _loadEquiposList = async () => {

        try {
        const getListEquiposRes = await api.getListEquipos();
        const teams = _.get(getListEquiposRes, 'data.teams', []);
        this.setState({teams: teams});
        } catch (e) {
            Alert.alert(
                'Atención',
                'Tu lista de equipos no ha podido cargarse, revise su conexión.'
            )
        }
    };

    _onTeamTapped = team => {
        console.log(`EQUIPO ${team.strTeam} PULSADO`);
        const nombre = team.strTeam;
        Actions.push('DetalleEquipo');
    };

    _renderItem = ({item}) => {
        return <TeamCard team={item} onPress={this._onTeamTapped}/>
    };

    render () {
        const {teams} = this.state;
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                   data={teams}
                   renderItem={this._renderItem}
                   keyExtractor={(v, i) => `cell-${v.id}`} 
                />
            </SafeAreaView>
        );
    };
}

export default ListEquipos;