import * as types from './types';
import * as api from '../../api';
import _ from 'lodash';
import {Alert} from 'react-native';
import { teamsActions } from '.';
import { Actions } from 'react-native-router-flux';

export const updateList = (list, total) => {
    const action = {
    type: types.UPDATE_TEAMS_LIST,
    value: {list, total},
    };
    return action;
};

export const updateFetching = value => {
    const action = {
    type: types.UPDATE_TEAMS_FETCHING,
    value: value,
    };
    return action;
};

export const updateItem = value => {
    const action = {
    type: types.UPDATE_TEAMS_ITEM,
    value: value,
    };
    return action;
};

export const fetchTeamsList =  () => {
    return async (dispatch, getState) => {
        try {
            dispatch(updateFetching(true));
            const getListEquiposRes = await api.getListEquipos();
            const teams = _.get(getListEquiposRes, 'data.teams', []);
            const total = teams.length;
            dispatch(updateList(teams, total));
            } catch (e) {
                Alert.alert(
                    'Atención',
                    'Tu lista de equipos no ha podido cargarse, revise su conexión.'
                );
            } finally {
                dispatch(updateFetching(false));
            }
    };
};

export const postTeam = data => {
    return async (dispatch, getState) => {
        const team = getState().teams;
        if (!team) {
            return;
        }
        try {
            dispatch(updateFetching(true));
             const {list} = getState().teams;
             const newList = [...list, data];
             console.log('newList : ', newList);
             dispatch(updateList(newList));
             Actions.popTo('ListEquipos');

            //OPCION CON LA API 
             //  await api.postTeam(data);
            //  dispatch(initList());
       

          } catch (e) {
              console.log('error : ',e);
            Alert.alert('Error', 'Error añadiendo el personaje');
          } finally {
            dispatch(updateFetching(false));
          }
      
    };
};
