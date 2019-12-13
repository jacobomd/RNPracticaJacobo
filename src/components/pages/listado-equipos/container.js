import {connect} from 'react-redux';
import {teamsActions} from '../../../redux/teams'
import View from './view';
import { Actions } from 'react-native-router-flux';

const mapStateToProps = state => {
  return {
    teamsList: state.teams.list,
    teamsIsFetching: state.teams.isFetching,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchTeamsList: () => dispatch(teamsActions.fetchTeamsList()),
    updateSelectedTeam: team => {
      dispatch(teamsActions.updateItem(team));
      Actions.DetalleEquipo({title: team.strTeam});
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
