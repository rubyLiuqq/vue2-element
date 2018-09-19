import {
  UPDATE_LOGIN_STATUS,
  UPDATE_CURRENT_CITY,
} from './mutation-types';

export default {
  updateLoginStatus({ commit }, data = { isLogin: false }) {
    commit(UPDATE_LOGIN_STATUS, data);
  },
  updateCurrentCity({ commit }, data = { currentCity: '', currentStGeohash: '' }) {
    commit(UPDATE_CURRENT_CITY, data);
  },
};
