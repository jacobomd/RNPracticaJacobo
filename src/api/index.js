import axios from 'axios';
import {BASE_URL} from '../config/api';

const instance = axios.create({
    baseURL: BASE_URL,
    headers: {'Content-type': 'application/json'},
});

export const getListEquipos = () => {
    const url = '/lookup_all_teams.php?id=4335';
    return instance.get(url);
};

export const getDetailTeam = (teamId) => {
    const url = `/lookupteam.php?id=${teamId}`;
    return instance.get(url);
}

export const postTeam= data => {
    // TODO : No implementada en la Api esta opcion
    //const url = `/lookupteam....`;
    //return instance.post(url, data);
    return;
  };
  