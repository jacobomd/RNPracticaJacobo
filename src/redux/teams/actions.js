import * as types from './types';
import * as api from '../../api';
import _ from 'lodash';
import {Alert} from 'react-native';

export const updateList = value => {
    const action = {
    type: types.UPDATE_TEAMS_LIST,
    value: value,
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
            dispatch(updateList(teams));
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