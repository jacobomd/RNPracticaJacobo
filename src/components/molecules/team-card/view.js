import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import _ from 'lodash';

class TeamCard extends React.Component {
    render() {
        const {team, onPress} = this.props;
        const strTeamBadge = _.get(team, 'strTeamBadge');
        console.log('strTeamBadge : ', strTeamBadge);
        return (
            <TouchableOpacity
             style={styles.container}
             onPress= {() => onPress(team)}>
                <Image style={styles.image} source={{uri: strTeamBadge}}/>
            </TouchableOpacity>
        );
    };
}

TeamCard.defaultProps = {
    team: null,
    onPress: null,
};

TeamCard.propTypes = {
    team: PropTypes.object.isRequired,
    onPress: PropTypes.func,
}

export default TeamCard;