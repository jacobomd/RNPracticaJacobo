import React from 'react';
import {SafeAreaView, FlatList, TouchableHighlight, View, Text, RefreshControl, ImageBackground} from 'react-native';
import styles from './styles';
import {TeamCard} from '../../molecules';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';

class ListEquipos extends React.Component {

    constructor(props) {
        super(props);
        props.fetchTeamsList();
    }

    _onTeamTapped = team => {
        this.props.updateSelectedTeam(team);
    };

    _onPress = () => {
       Actions.push('TeamsAdd', {title: 'Crear equipo'});
    };

    _renderItem = ({item}) => {
        return <TeamCard team={item} onPress={this._onTeamTapped}/>
    };

    _renderSeparatorView = () => {
        return (
          <View style={{
              height: 2, 
              width: "100%",
              backgroundColor: "black",
            }}
          />
        );
      };

    render () {
        const {teamsList, teamsTotal, teamsIsFetching, fetchTeamsList} = this.props;
        return (
            <SafeAreaView style={styles.container}>
                <ImageBackground 
                        source={require('../../../assets/images/portadaLiga.jpg')}
                        style={{width: '100%', heigth: '100%'}}
                        opacity = {0.7}>
                        
                    <FlatList
                    ItemSeparatorComponent= {this._renderSeparatorView}
                        refreshControl={
                        <RefreshControl
                            refreshing={teamsIsFetching}
                            onRefresh={fetchTeamsList}
                            colors={['#FFF']}
                            tintColor={'white'}
                        />
                        }
                    data={teamsList}
                    renderItem={this._renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    //keyExtractor={(v, i) => `cell-${v.id}`} 
                    />
                    <View style={styles.container}>
                        <TouchableHighlight style={styles.addButton}
                            underlayColor='#B0C4DE'
                            onPress= {() => {  this._onPress() }}>
                            <Text style={{fontSize: 50, color: 'white'}}>+</Text>
                        </TouchableHighlight>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        );
    };
}

ListEquipos.propTypes = {
    teamsList: PropTypes.arrayOf(PropTypes.object).isRequired,
    teamsTotal: PropTypes.any,
    teamsIsFetching: PropTypes.bool,
    fetchTeamsList: PropTypes.func.isRequired,
    updateSelectedTeams: PropTypes.func,
  };
  

export default ListEquipos;