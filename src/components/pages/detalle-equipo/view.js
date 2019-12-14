import React from 'react';
import {SafeAreaView, View, Text, Alert, Image, ImageBackground} from 'react-native';
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
        const strTeamBadge = _.get(team, 'strTeamBadge');
        const name = _.get(team, "strTeam", '');
        const strStadium = _.get(team, "strStadium", '');
        const dateFormated = _.get(team, "intFormedYear", '');
        const description = _.get(team, "strDescriptionES", '')
        return (
            <SafeAreaView style={styles.container} >
                <ImageBackground 
                    source={require('../../../assets/images/portadaLiga.jpg')}
                    style={{width: '100%', heigth: '100%', flex: 1}}
                    opacity = {0.4}>
              
                    <View style={{alignItems: 'center'}}>
                        <Image
                            style={styles.image}
                            source={{uri: strTeamBadge}}
                        />
                     </View>   
                    
                    <View style={{alignItems: 'center', marginVertical: 15,}}>
                        <Text style={styles.text}>
                            {`Nombre equipo: ${name}`}
                        </Text>
                        <Text style={styles.text}>
                            {`Año creado: ${dateFormated}`}
                        </Text>
                        <Text style={styles.text}>
                            {`Nombre estadio: ${strStadium}`}
                        </Text>
                        <Text  style={styles.longText} numberOfLines={12} >
                            {`DESCRIPCION:  ${description}`}
                        </Text>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        );
    }
};

DetalleEquipo.propTypes = {
    team: PropTypes.object.isRequired,
}

export default DetalleEquipo;
