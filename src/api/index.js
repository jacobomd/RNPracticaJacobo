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