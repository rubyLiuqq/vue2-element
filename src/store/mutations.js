import {
  UPDATE_LOGIN_STATUS,
  UPDATE_CURRENT_CITY,
} from './mutation-types';

export default {
  [UPDATE_CURRENT_CITY](state, data = { currentCity: '', currentStGeohash: '' }) {
    state.currentCity = data.currentCity;
    state.currentStGeohash = data.currentStGeohash;
  },
  [UPDATE_LOGIN_STATUS](state, data = { isLoading: false }) {
    state.isLoading = data.isLoading;
  },
};
