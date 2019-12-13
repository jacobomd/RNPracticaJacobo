import React from 'react';
import {SafeAreaView, View, Text, Alert, TouchableHighlight} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import _ from 'lodash';
import * as api from '../../../api';

class DetalleEquipo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {team: []};
        this._loadDetailTeam();
    };

    _loadDetailTeam = async () => {
        const teamId = _.get(this.props, "team.idTeam", null);
        if(!teamId) {
            return;
        }
        try {
        const getDetailTeamRes = await api.getDetailTeam(teamId);
        const team = _.get(getDetailTeamRes, "data.teams[0]", []);
        this.setState({team});
        } catch (e) {
            Alert.alert(
                "Atención",
                "Se ha producido un error al cargar el equipo, revise su conexión."
            )
        }
    };

    render () {
        const {team} = this.state;
        const name = _.get(team, "strTeam", '');
        const nameLeague = _.get(team, "strLeague", '');
        return (
            <SafeAreaView style={styles.container} >
                <Text style={{color: 'white'}}>
                    {`${name} (${nameLeague})`}
                </Text>
            </SafeAreaView>
        );
    }
};

DetalleEquipo.propTypes = {
    team: PropTypes.object.isRequired,
}

export default DetalleEquipo;
