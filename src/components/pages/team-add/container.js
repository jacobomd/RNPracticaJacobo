import {connect} from 'react-redux';
import View from './view';
import { teamsActions } from '../../../redux/teams';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    postTeam: data => dispatch(teamsActions.postTeam(data)),
    
  };
  
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
