import React from 'react';
import {SafeAreaView, FlatList, TouchableHighlight, View, Text, RefreshControl} from 'react-native';
import styles from './styles';
import {TeamCard} from '../../molecules';
import _ from 'lodash';
import PropTypes from 'prop-types';

class ListEquipos extends React.Component {

    constructor(props) {
        super(props);
        props.fetchTeamsList();
    }

    _onTeamTapped = team => {
        this.props.updateSelectedTeam(team);
    };

    _renderItem = ({item}) => {
        return <TeamCard team={item} onPress={this._onTeamTapped}/>
    };

    render () {
        const {teamsList, teamsIsFetching, fetchTeamsList} = this.props;
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
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
                   numColumns={2}
                />
                <View style={styles.container}>
                    <TouchableHighlight style={styles.addButton}
                        underlayColor='#ff7043' onPress={()=>{console.log('pressed')}}>
                        <Text style={{fontSize: 50, color: 'white'}}>+</Text>
                    </TouchableHighlight>
                </View>
            </SafeAreaView>
        );
    };
}

ListEquipos.propTypes = {
    teamsList: PropTypes.arrayOf(PropTypes.object).isRequired,
    teamsIsFetching: PropTypes.bool,
    fetchTeamsList: PropTypes.func.isRequired,
    updateSelectedTeams: PropTypes.func,
  };
  

export default ListEquipos;