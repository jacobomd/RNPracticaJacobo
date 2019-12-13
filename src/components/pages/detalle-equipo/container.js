import {connect} from 'react-redux';
import {teamsActions} from '../../../redux/teams'
import View from './view';
import { Actions } from 'react-native-router-flux';

const mapStateToProps = state => {
  return {
    team: state.teams.item,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);